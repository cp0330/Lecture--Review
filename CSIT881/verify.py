"""Verify CSIT881 reference solutions and coverage with Python 3 (no dependencies)."""
import collections
import difflib
import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent

INPUT_DRIVER = """
import builtins
lines = iter(__entries__)
def exercise_input(prompt=""):
    value = next(lines)
    print(prompt + value)
    return value
builtins.input = exercise_input
"""

def execute(code, case, expected=""):
    with tempfile.TemporaryDirectory() as directory:
        work = Path(directory)
        for name, content in case.get("files", {}).items():
            (work / name).write_text(content, encoding="utf-8")
        result = subprocess.run(
            [sys.executable, "-I", "-c", code], cwd=work,
            capture_output=True, text=True, timeout=4, check=False, encoding="utf-8",
        )
        if result.returncode:
            raise AssertionError(result.stderr)
        if result.stdout != expected:
            raise AssertionError("\n".join(difflib.ndiff(
                repr(expected).splitlines(), repr(result.stdout).splitlines()
            )))
        for name, content in case.get("written", {}).items():
            assert (work / name).read_text(encoding="utf-8") == content, name

def verify_program(question, answer):
    code = answer["code"]
    tests = answer["tests"]
    assert tests
    for example in question["examples"]:
        expected = example["expected"].rstrip("\n")
        assert any(case["result"].rstrip("\n") == expected or expected.startswith(
            case["result"].rstrip("\n") + "\n\nContents of ")
            for case in tests), "Visible transcript is missing from tests"
    for case in tests:
        driver = "__entries__ = " + repr(case["input"]) + "\n" + INPUT_DRIVER
        execute(driver + code + "\nassert next(lines, None) is None\n", case, case["result"])
    return len(tests)

def verify_diagram(diagram):
    if diagram["type"] == "chain":
        assert diagram["head"] and diagram["nodes"]
        return
    assert diagram["type"] == "tree"
    seen = set()
    def visit(node):
        if node is None:
            return
        assert node not in seen, f"Repeated or cyclic node {node}"
        seen.add(node)
        children = diagram["edges"].get(node, [None, None])
        assert len(children) == 2
        for child in children:
            visit(child)
    visit(diagram["root"])
    assert set(diagram["edges"]) <= seen

def verify():
    bank = json.loads((ROOT / "questions.json").read_text(encoding="utf-8"))
    topics, questions = bank["topics"], bank["questions"]
    answers = json.loads((ROOT / "answers.json").read_text(encoding="utf-8"))
    ids = [question["id"] for question in questions]
    assert len(ids) == len(set(ids))
    assert set(ids) == set(answers)
    assert {int(m[1]) for key in ids if (m := re.fullmatch(r"A(\d\d)-\d+", key))} == set(range(1, 13))
    assert {int(m[1]) for key in ids if (m := re.fullmatch(r"B(\d\d)-\d+", key))} == {3, 5, 7, 9, 11}
    assert {key for key in ids if key.startswith("AS")} == {f"AS{a}-{q}" for a in (2,3) for q in (1,2,3)}
    assert set(ids) >= {"D01", "D02", "D03", "D04"}
    assert {q["topic"] for q in questions} == set(topics)
    assert all(q["practice"] in {"source", "variant"} for q in questions)
    positions = {topic: i for i, topic in enumerate(topics)}
    question_positions = [positions[q["topic"]] for q in questions]
    assert question_positions == sorted(question_positions)
    new_variants = [q for q in questions if q["id"].startswith("V-")]
    for q in new_variants:
        assert q["practice"] == "variant"
        assert q["basedOn"] and set(q["basedOn"]) <= set(ids) and q["id"] not in q["basedOn"]
    assert collections.Counter(q["topic"] for q in new_variants) == dict.fromkeys(topics, 2)
    sections = collections.Counter(q["topic"] for q in questions)
    kinds = collections.Counter()
    runs = collections.Counter()
    failures = []
    for q in questions:
        try:
            key, kind = q["id"], q["kind"]
            kinds[kind] += 1
            a = answers[key]
            assert q["sources"] and q["prompt"] and q["submission"]
            assert all(re.search(r"\bpp\.|\bunpaginated\b|\d\d:\d\d", s) for s in q["sources"])
            assert a["hint"] and a["explanation"]
            for diagram in q.get("diagrams", []):
                verify_diagram(diagram)
            if kind == "Program":
                runs[kind] += verify_program(q, a)
            elif kind == "Function":
                assert a["tests"]
                for case in a["tests"]:
                    execute(a["code"] + "\n" + case["assertion"], case)
                    runs[kind] += 1
            elif kind == "Reorder":
                blocks = q["blocks"]
                assert len(blocks) == len(a["order"]) and set(blocks) == set(a["order"])
                assert list(blocks) != a["order"], "Initial order reveals the answer"
                code = "\n".join(blocks[key] for key in a["order"])
                execute(code + "\n" + a["traceTest"], {})
                runs[kind] += 1
            elif kind == "Trace":
                execute(a["traceTest"], {})
                runs[kind] += 1
            else:
                raise AssertionError(kind)
        except (AssertionError, TimeoutError, subprocess.TimeoutExpired, KeyError, ValueError) as error:
            failures.append(f"{q['id']}: {error}")
    if failures:
        for failure in failures:
            print(failure, file=sys.stderr)
        raise SystemExit(1)
    print(f"{len(questions)} questions: {dict(sections)}")
    print(f"{len(topics)} exam topics, {len(new_variants)} new variants. Question types: {dict(kinds)}")
    print(f"Passed {sum(runs.values())} reference runs: {dict(runs)}")

if __name__ == "__main__":
    verify()
