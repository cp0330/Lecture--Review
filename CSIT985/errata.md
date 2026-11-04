> 当前勘误已按原PDF重核。当前题序见[旧题号与当前题号对照](question-map.md)。

# 10-核对与勘误

返回：[期末题库总入口](README.md)。

## 不把课件笔误背进答案

| 原位置 | 问题 | 本题库采用的答案／边界 |
|---|---|---|
| Week7 p.20 | private 172.16/12终点写成172.32.255.255 | 正确终点172.31.255.255；Q47、C07。已查[RFC1918 §3](https://www.rfc-editor.org/rfc/rfc1918.html#section-3)。 |
| Workshop solutions p.5 | /17算式结果误写32764；/18误写16384 | 普通LAN正确分别32766、16382；C08。 |
| 旧guideline S225 p.14 | /27掩码误写255.255.254.0（实际为/23） | 正确224；C02。原图见Workshop原页与勘误。 |
| Workshop Ex5 | 172.16.0.0/23误称public | 原题属于RFC1918私有块；C09的200.100地址是自拟变式，不能说成原题地址。 |
| Week7 p.22 | route of last resort表写0.0.0.0/8 | 默认路由为0.0.0.0/0，不把旧表与default prefix混为一谈；Q48、Q51。 |
| Week7 p.21、Week6b p.38 | dynamic NAT概括成one-to-many，容易与NAPT混淆 | 基本地址转换与地址+端口复用分别解释；Q47。[RFC2663 §4.1](https://www.rfc-editor.org/rfc/rfc2663.html#section-4.1)区分Basic NAT与NAPT。 |
| Week7 p.59 | route filtering与packet ACL混写 | 过滤路由信息与过滤数据包需分清；Q51保留二者作用。 |
| Week7 pp.74–76 | 先static再RIP、最多两协议等旧建议 | p.76已明确前两页部分建议陈旧；按需求解释简化原则，不死背硬上限，Q54。 |
| Week6b p.37 | encryption降低15–85%等旧范围 | 不作为所有实现统一损失比例；解释处理开销并实际测量，Q44。 |
| Week8 pp.27–28 | RSVP与transport-data功能容易混淆 | 是资源预留信令，不传应用数据，也不是routing protocol；Q56。[RFC2205 §1](https://www.rfc-editor.org/rfc/rfc2205.html#section-1)。 |
| Week8 p.24 | MPLS简单限定为Ethernet-based | 题库不把MPLS定义成只能依赖Ethernet，重点标签与LER/LSR；Q57。 |
| Week9 p.37 | storage公式中720轮标成per day | 每小时720轮，每天17280轮；C17–C18复算，日value storage442.368MB。 |
| Week11 pp.67–68 | 60%/80%规则 | 经验规划guidelines，下一页说明需按bursty情况调整；Q70。 |
| 常规2^h−2 | 特殊子网也机械减2 | 本题库地址表都指定普通子网；/31点到点两地址可作host的例外见[RFC3021 §2.1](https://www.rfc-editor.org/rfc/rfc3021.html#section-2.1)。例外只作边界说明，不声称额外必考。 |

外部RFC仅用于考前事实核对，未扩展正式考试可查资料范围。课程内理论、例题与教学补充已区分；参考答案无官方rubric，不保证具体分数。

## 检查方法

1. 对照原PDF逐页提取与Week13范围表，38主题都有Q题覆盖；被图像承载的关键关系沿用既有原图证据并补看Week12结构/学习分类图。
2. Q01–Q07与Week13 p.16、E01与p.17对应；不是把老师例子说成真实整卷。
3. 全部Q题计英文词数，长答计正文词数，不把中文计入。
4. 子网前缀、边界、范围和VLSM用独立地址计算核验；RMA、速率、polling和存储分别复算。
5. 检查题号唯一、每题有答案、有来源、每个主题有映射；保留用户既有掌握证据，不按资料生成自动记为掌握。










## 2026-11-04新增核对



| 原位置 | 问题 | 本版处理与核对依据 |
|---|---|---|
| Week8 PDF p33 | DiffServ标作RFC2745 | 正确架构为[RFC2475](https://www.rfc-editor.org/rfc/rfc2475)；[RFC2745](https://www.rfc-editor.org/rfc/rfc2745)是RSVP诊断消息。T141明确区分。 |
| Week9 PDF p19 | 批量读取被归为v3新增能力 | GETBULK属于SNMPv2操作体系，见[RFC3416 §4.2.3](https://www.rfc-editor.org/rfc/rfc3416.html#section-4.2.3)。T143与T094区分操作和v3安全。 |
| Week4 PDF p53 | INTD约10–30秒、HRT约100ms旁列INTD<HRT | 与所列数值不一致。T138解释交互任务容忍与感知阈值是不同上下文，不能当统一应用时延标准或背矛盾不等式。 |
| Week2 PDF p59 | DNS写为Domain Name Service | 标准全称Domain Name System；T011解析纠正。见[RFC1034](https://www.rfc-editor.org/rfc/rfc1034)。 |
| Week12 PDF p42（印刷43） | DL图写无需人干预 | 过度概括；DL仍需任务设计、数据准备与评估。T122解析保留AI⊃ML⊃DL；依据[作者论文摘要](https://yoshuabengio.org/en/publication/deep-learning)关于多层表征学习的定义，这里将“完全无人参与”判作过度概括，而非DL定义。 |
| Reading metadata与课件References | McCabe第3版年份2007/课件2010不一致 | 按作者、书名和版次识别；[出版社第三版元数据](https://www.sciencedirect.com/book/9780123704801/network-analysis-architecture-and-design)标2007，不捏造未核实书版。 |

原有private地址终点、默认路由、NAT/NAPT、/17与/18主机数、/27mask、management storage轮次、shaping间隔、MPLS/RSVP等边界均保留，见[完整勘误](errata.md)。本轮没有发现原23道计算数值需要更改；新增公式仅在独立、恒定故障率、无冗余的串联模型下使用，另以[NIST series model](https://www.itl.nist.gov/div898/handbook/apr/section1/apr182.htm)核对。

