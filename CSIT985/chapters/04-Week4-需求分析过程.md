# 04-Week4-需求分析过程

[在线逐题学习](../review-bank.html) · [审校说明](../audit-2026-11-04.md)

> 参考答案与教学解析由AI依据课程资料整理，不是官方rubric。考前练习不扩大考试可用资料。

## T027 · 需求分析五步

Describe the requirements analysis process and its outputs.

说明需求分析步骤与产物。

### 精简参考答案

The process begins by gathering and listing requirements from users, management, the current network and initial project conditions. The designer then develops service metrics so that needs can be measured and checked.

Next, user and application behaviour is characterized. This includes user numbers, session frequency, duration, data sizes and traffic patterns. Requirements are then developed into more precise capacity, delay and RMA needs. Finally, the requirements are mapped to locations to show where services and performance are required.

The main output is a maintained requirements specification, supported by measurements and maps. The activities may be revisited when new information appears. For example, measured peak use may show that the original capacity estimate was too low. A clear process helps later architecture and design choices remain connected to evidence rather than assumptions.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：需求分析通过收集、整理、细化、度量和映射需求，把各方期望转成可追踪的 specification 和地理位置 map，并处理冲突与初始约束。

1. 五步的推理是把“想要”变成“可验证且有位置的要求”：收集、指标、行为、发展要求、映射。

2. 行为描述提供并发与负载依据；requirements map指出需求发生在哪里。specification需要随证据更新，流程不是做完一遍就冻结。

**英文关键句**：New evidence may require earlier assumptions to change.

新证据可能要求修改先前假设。 may require + 对象 + to do；may保留需要评估的空间。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：Peak measurements exceed the original estimate. Should the specification stay unchanged?

**变式参考**：No. Review the behaviour assumptions and derived requirements, record the change and update affected maps and design decisions.

**自查**：已检查并避开这些误区：流程允许反复修订，不能把收集到的原话直接当最终可测试需求。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 5–28、67–69 · 搜索 Requirement Analysis Process


## T028 · 初始条件、约束与红旗

What initial conditions and warning signs should a designer examine when gathering requirements?

收集需求时应检查哪些条件和警讯？

### 精简参考答案

Initial conditions describe the starting point of the project. They include project type, scope, initial goals, the existing network and outside political, administrative or financial forces. Constraints may include budget, existing equipment, staff and organizational rules.

The designer should also look for unclear or unrealistic requirements. Warning signs include “real-time” without a timing limit, “high performance” without evidence, inconsistent requirements and availability stated only as a percentage without a measurement period or service definition.

These statements should be clarified through discussion and measurements. For example, “99.9% availability” needs a defined observation period, acceptable outage pattern and rules about maintenance. Existing measurements or a testbed can help validate the problem. Setting realistic expectations early reduces the risk of choosing an expensive solution that does not address what users actually need.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：需求分析通过收集、整理、细化、度量和映射需求，把各方期望转成可追踪的 specification 和地理位置 map，并处理冲突与初始约束。

1. red flag不是已证实错误，而是值得追问的模糊、冲突或不现实说法。

2. 例如99.9%必须定义时间窗口、服务边界、维护口径与中断模式；“实时”必须说明什么事件的时限。过早选设备会把未澄清的问题固化成成本。

**英文关键句**：The requirement needs a clear measurement method.

该需求需要明确的测量方法。 need + 名词；method比只写number更完整，包含端点、时间和口径。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A customer asks for “very fast and 99.99% available”. What must be clarified?

**变式参考**：Define the application, load, rate or delay target, observation period, failure scope and maintenance rules. Then obtain evidence and agree on feasible metrics.

**自查**：已检查并避开这些误区：说明99.9%不是错误；仅有百分比缺少口径。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 8–21 · 搜索 Red-Flag User Requirements


## T029 · 规格、测量与跟踪

How should requirements be measured, recorded and kept up to date?

如何测量、记录、维护需求？

### 精简参考答案

Requirements should be gathered through surveys, follow-up interviews, group meetings and observation. Measurements on the existing network help verify reported problems and current behaviour. A testbed can show how proposed technologies interact with the organization’s applications.

A requirements specification should record each requirement clearly. Useful fields include an identifier, date, type, description, source, location, status and priority. It should distinguish gathered statements from requirements derived through analysis.

Keep the specification current and accessible to the people involved. Record additions, changes and rejected proposals rather than silently replacing the history. This creates a useful audit trail. Measurements also need context, including time, load, method and units. A quiet-period measurement alone may not represent peak conditions. Good records make requirements easier to review, test and trace into later architecture and design decisions.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：需求分析通过收集、整理、细化、度量和映射需求，把各方期望转成可追踪的 specification 和地理位置 map，并处理冲突与初始约束。

1. 原始访谈是证据来源，但不等于已验证指标；要保留谁说的、何时、在哪里以及如何测。

2. 记录变化与拒绝依据形成audit trail，支持复查与追溯。安静时测量不能替代高峰条件；testbed用于检验交互，也需说明覆盖范围。

**英文关键句**：Record the reason for each change.

记录每次变更的理由。 reason for + 名词；each后跟单数change，理由应能连到证据。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Why record a rejected requirement rather than delete it?

**变式参考**：Its history explains scope and prevents repeated confusion. The record should preserve the proposal, decision, reason and effects on related requirements.

**自查**：已检查并避开这些误区：不把瞬时测试或安静时段读数当所有时段的性能。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 16–26、34–37 · 搜索 Tracking and Managing Requirements


## T030 · Capacity、throughput、delay 与 jitter

Distinguish capacity, throughput, delay, jitter and task completion time.

区分五项性能概念。

### 精简参考答案

Capacity is the data-carrying capability of a network resource. Throughput is the rate of useful transfer actually achieved under particular conditions. A high-capacity link does not mean an application always receives that rate.

Delay is the time taken for data or a response to travel through the system. One-way delay and round-trip time describe different paths. Jitter is variation in delay. Task completion time is the time needed to finish an entire application task, such as transferring a file.

Data size divided by the allowed transfer time gives a basic average rate requirement after units are converted. Actual planning must also consider overhead, peaks, competing flows and end-system limits. Real-time applications may be sensitive to delay and jitter even when average throughput is adequate. Application duration should not be confused with packet delay.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：容量需求说明单位时间内需要传送的数据量，延迟需求说明完成通信允许的时间；估计必须结合峰值、持续速率、突发、任务时限及端到端路径。

1. capacity是资源能承载多少，throughput是特定条件下实际传成多少；两者不能只凭单位相同而等同。

2. delay描述一次传送/响应，jitter是时延变化，TCT覆盖整项任务。平均速率=数据量/时间只是初步下界，还需开销、并发与突发。

**英文关键句**：High capacity does not ensure low jitter.

高容量不确保低时延变化。 ensure意为“确保”；不要把“带宽高”写成一切性能的充分条件。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A high-capacity link has variable delay. Can a real-time application still suffer?

**变式参考**：Yes. Real-time traffic can be sensitive to delay and jitter even when average throughput is adequate. Check the full path and endpoint behaviour.

**自查**：已检查并避开这些误区：8bits=1byte；duration不等于delay；average不等于peak。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 29、32–33、53–56 · 搜索 Service Metrics


## T137 · Peak、sustained、minimum 与 burst

Distinguish peak, sustained and minimum rates, burst size and burst duration. Why is an average rate alone insufficient for planning?

区分速率与突发的五个量，并说明平均值的限制。

### 精简参考答案

Peak rate describes a high short-term sending rate under a stated measurement interval. Sustained rate describes the rate maintained over a longer stated period. A minimum-rate requirement states the least service an application needs under specified conditions. The observation period and meaning of each value must be clear.

Burst size is the amount of data in a burst, while burst duration is how long the burst lasts. A short burst can temporarily arrive faster than a link can transmit. A buffer may absorb some of it, but waiting increases delay and insufficient space can lead to loss.

For example, a backup may average a modest rate over an hour while sending much faster for several seconds. Planning only from the hourly average can miss that competition with interactive traffic. Capacity planning should consider timing, concurrent flows, buffers, application tolerance and overhead. State whether a minimum rate is an observed value or a required service commitment.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：容量需求说明单位时间内需要传送的数据量，延迟需求说明完成通信允许的时间；估计必须结合峰值、持续速率、突发、任务时限及端到端路径。

1. peak/sustained/minimum都带时间与语义；burst size是量，duration是时间，rate是量/时间，单位不同。

2. 短时到达超过输出时先积累队列，队列有限再丢包。较低长时平均不排除突发损害时延敏感业务；minimum须说是观察值还是保证需求。

**英文关键句**：A low average can hide a short burst.

低平均值可能掩盖短时突发。 hide在性能题表示统计掩盖；short burst是完整搭配。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A 10 MB burst arrives over one second on a 40 Mb/s output. What is the basic concern?

**变式参考**：The input payload averages 80 Mb/s over that second, above output capacity. Data must wait or be dropped, ignoring overhead; long-term average alone hides this burst.

**自查**：已检查并避开这些误区：短时到达超过输出时先积累队列，队列有限再丢包。较低长时平均不排除突发损害时延敏感业务；minimum须说是观察值还是保证需求。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 29、32、55–56 · 搜索 Capacity Metrics


## T031 · 应用事务的频率与持续时间

Why is it important to consider frequency and time duration for application transactions when characterizing application behavior?

描述应用行为特征时，为什么考虑应用事务的发生频率和持续时间很重要？

### 精简参考答案

Frequency describes how often an application transaction occurs. Duration describes how long it remains active. Together, they help the designer estimate when traffic occurs and how many transactions may be active at the same time.

For example, frequent transactions that last several minutes may overlap. Shared links and servers must then support several active transactions. This can affect capacity, delay and the quality of service that users receive. A total daily traffic figure alone may hide these busy periods.

The designer should therefore consider transaction frequency and duration together with the number of users, data sizes, traffic rates and service requirements. Longer duration does not always mean a higher data rate, especially if the same amount of data is sent more slowly. Understanding these factors supports better capacity estimates, flow specifications and scheduling decisions, such as moving a flexible backup task away from a busy teaching period.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：应用行为描述数据规模、事务发生频率、持续时间及流量模式；这些因素与用户同时使用情况共同决定随时间变化的需求和并发负载。

1. frequency与duration一起决定事务何时重叠；频繁且持续长，活动事务数可能增加，进而争用共享链路与服务器。

2. 注意区分事务持续与包时延。若数据量固定，持续更长反而可能意味着平均速率更低，因此不能直接写“时间长所以流量速率高”。

**英文关键句**：Frequency and duration together affect overlap.

频率和持续时间共同影响重叠。 together连接两个原因；affect是“影响”，比无条件determine数值更稳妥。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Transactions start twice as often but last half as long. Must concurrency double?

**变式参考**：No. Overlap depends on both arrival frequency and active duration, as well as timing. Doubling frequency alone does not establish the resulting concurrency.

**自查**：已检查并避开这些误区：只写“能提高性能”；把duration等同于delay；声称持续更久就必然需要更大带宽；完全不解释并发与峰值。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 38–40 · 搜索 Application Behaviour


## T032 · RMA 指标与边界

Explain reliability, maintainability and availability and their relationship.

解释 RMA 及其关系。

### 精简参考答案

Reliability describes how often failures occur. It can be represented by mean time between failures, or MTBF. For critical services, mean time between mission-critical failures, or MTBCF, may be more useful.

Maintainability describes how long restoration takes. MTTR includes the time needed to detect, isolate, repair and test a fault before full service returns. Availability relates the time between failures to restoration time. The course uses A = MTBF / (MTBF + MTTR), or the corresponding MTBCF form.

Availability can improve by reducing failures or shortening restoration. Two systems may have the same availability but very different outage patterns. A frequent short interruption is not always equivalent to one long interruption for users. Define which failures count, the observation period and whether scheduled maintenance is included before comparing figures.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：Reliability 描述故障发生的频度，可用平均故障间隔等度量；Maintainability 关注恢复时间；Availability 表示在规定范围内服务可用的程度，并受前两者共同影响。

1. 可靠性看故障发生，维护性看恢复过程，可用性合并可服务与恢复时间。MTTR可包括检测、隔离、备件、修复、测试，不只是拧螺丝。

2. 平均可用性相同不代表用户体验相同；短暂频发中断与一次长停机可能对不同任务造成不同后果。

**英文关键句**：Shorter restoration time can improve availability.

更短恢复时间能提高可用性。 comparative + 名词表达变化方向；can说明还需考虑其他条件。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Two services have equal availability but different outage patterns. Are they equivalent?

**变式参考**：Not necessarily. Frequent short interruptions may disrupt sessions differently from one long outage. Compare failure frequency, restoration time and application needs.

**自查**：已检查并避开这些误区：MTBF、MTTR单位必须一致；课件公式通常排除计划维护。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 30–31、42–52 · 搜索 RMA Requirements


## T139 · 串联系统故障率与平均首次故障时间

Two critical components are in series: either component’s first failure stops the service. Assume independent, constant failure rates and component mean times to failure (MTTFs) of 1,000 h and 2,000 h. Estimate the system failure rate and mean time to its first failure.

在独立、恒定故障率串联模型下计算首次故障时间；区分MTTF与修复系统的MTBF。

### 精简参考答案

Under the stated independent, constant-rate series model, the system failure rate is 1/1000 + 1/2000 = 0.0015 per hour. Its mean time to first failure is approximately 666.67 hours. Add failure rates, not mean lifetimes. MTTF describes time to failure; MTBF for a repairable service needs a defined operating and restoration model. Availability cannot be inferred from these values alone.

### 逐步解法

1. 题目给定：任一组件首次故障则服务停止；组件独立且恒定故障率，不考虑冗余和修复。
2. λ₁=1/1000=0.001 h⁻¹；λ₂=1/2000=0.0005 h⁻¹。
3. 串联系统 λsys=λ₁+λ₂=0.0015 h⁻¹。
4. 本模型 MTTFsys=1/λsys≈666.67 h，比任一单组件MTTF短，符合直觉。
5. MTTF是mean time to failure（首次故障）；课程MTBF/MTBCF用于故障间隔，涉及修复/重复运行时需定义恢复模型，不能无条件混称。没有MTTR与恢复定义，不能求availability。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：Reliability 描述故障发生的频度，可用平均故障间隔等度量；Maintainability 关注恢复时间；Availability 表示在规定范围内服务可用的程度，并受前两者共同影响。

1. MTTF是平均首次故障时间，λ是每小时故障率；恒定率模型下MTTF=1/λ。任一组件坏就停的series系统，故障机会增加，平均首次故障时间应短于任一组件。

2. 独立、串联、恒定率是前提；这里看首次故障。课程MTBF/MTBCF用于重复故障间隔，需定义恢复模型，不能无条件与MTTF互换；没有恢复资料不能算availability。

**英文关键句**：Add failure rates, then take the reciprocal.

先加故障率，再取倒数。 reciprocal是“倒数”；求和对象是rates，首次故障用MTTF，修复后的故障间隔另定义MTBF。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Two independent constant-rate components each have MTTF 2000 h. Either first failure stops the service. Find system MTTF.

**变式参考**：λsys = 1/2000+1/2000 = 0.001 h⁻¹. System MTTF = 1000 h. This series model describes the first failure; availability requires a restoration model and more information.

**自查**：已检查并避开这些误区：求和的是failure rates，不是平均时间；首次故障MTTF与修复系统MTBF需区分，冗余/相关故障另建模型。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 42 · 搜索 Reliability


## T033 · Availability

A service has MTBF of 990 hours and MTTR of 10 hours. Find availability and two ways to improve it.

计算可用性并提出两类改进。

### 精简参考答案

Availability is 990/(990+10) = 99%. It can be improved by increasing time between failures or reducing restoration time. The calculation requires consistent units and a clear definition of the failures and restoration periods being counted.

### 逐步解法

A=990/(990+10)=0.99=99%。两个时间均为小时。
减少故障提高MTBF；缩短检测、备件等待、修复测试降低MTTR。
若MTTR降至5，A=990/995≈99.4975%。这不是把可用性直接“提高5%”。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：Reliability 描述故障发生的频度，可用平均故障间隔等度量；Maintainability 关注恢复时间；Availability 表示在规定范围内服务可用的程度，并受前两者共同影响。

1. 分母是一个“正常运行＋恢复”的周期；990不是整个周期，故不能直接除以10。先统一时间单位，再求可用比例。

2. 改善MTBF减少发生故障，改善MTTR缩短每次恢复。只把MTTR从10变5不是把availability加5个百分点；要重算分式。

**英文关键句**：Availability is the uptime portion of the full cycle.

可用性是完整周期内正常运行的比例。 portion是“占比”；区分percent与percentage points。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：MTBF is 198 h and MTTR is 2 h. Find availability. Then reduce MTTR to 1 h.

**变式参考**：A = 198/(198+2) = 99%. With MTTR = 1 h, A = 198/199 ≈ 99.4975%. The improvement is about 0.4975 percentage points.

**自查**：已检查并避开这些误区：不能用990/10；明确是否含计划维护。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 42–52 · 搜索 RMA


## T034 · 可用性到停机预算

If measured availability is 99.9% over a 30-day period, how much downtime is allowed?

30天、99.9%的停机预算。

### 精简参考答案

For a 30-day measurement window, 99.9% availability permits 0.1% downtime. That is 0.72 hours or 43.2 minutes. The result assumes that the full period is included in the measurement and uses the stated maintenance rules.

### 逐步解法

观察窗口30×24=720小时；不可用比例1−0.999=0.001。
停机720×0.001=0.72小时=43.2分钟=43分12秒。
这个换算以该窗口所有计入时间为分母；若合同排除计划维护，应按合同另算。
同样总停机可以集中一次或分散多次，业务体验不同。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：Reliability 描述故障发生的频度，可用平均故障间隔等度量；Maintainability 关注恢复时间；Availability 表示在规定范围内服务可用的程度，并受前两者共同影响。

1. 99.9%=0.999，允许停机是剩下0.001；先求完整窗口720小时再相乘，最后换单位。

2. 预算只限制总量，不规定单次最长中断。合同若排除计划维护，需使用合同定义的分母与停机范围。

**英文关键句**：Downtime equals the observation period times the unavailable fraction.

停机时间等于观察窗口乘不可用比例。 fraction是比例；times表达相乘，计算后仍要写单位。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：How much downtime does 99.99% availability allow over 30 days?

**变式参考**：30 × 24 × 60 × (1−0.9999) = 4.32 minutes, or 259.2 seconds, using the full 30-day window.

**自查**：已检查并避开这些误区：99.9%并不自动说明单次中断最大允许时长。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 44–50 · 搜索 RMA


## T035 · One-way delay 与 RTT 的计算和条件

A forward path has 12 ms propagation, 8 ms transmission, 5 ms processing and 15 ms queuing delay. The complete return path takes 30 ms. Endpoint turnaround is 10 ms. Find forward one-way delay and RTT. Can an RTT limit of 100 ms alone guarantee at most 50 ms in each direction?

使用互不重复的已给延迟项求单程和往返；检查“除二”假设。

### 精简参考答案

The forward one-way delay is 40 ms. Including the stated return path and endpoint turnaround, RTT is 80 ms. An RTT limit of 100 ms alone does not guarantee a 50 ms bound in each direction. The paths may be asymmetric and endpoint processing may also contribute.

### 逐步解法

题中四项已规定为前向路径各项总量，不再按router数重复相乘。
前向one-way=12+8+5+15=40ms。
本题测量定义的RTT=前向40+终端turnaround10+回向30=80ms。
单独知道RTT≤100ms不能推出每向≤50ms。例如前向70、回向20、turnaround10仍RTT100。
仅在题中额外假定两向相等、端点处理可忽略，或明确分配预算时，才可用对称近似；它是额外假设，不是RTT定义。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：容量需求说明单位时间内需要传送的数据量，延迟需求说明完成通信允许的时间；估计必须结合峰值、持续速率、突发、任务时限及端到端路径。

1. 题中给的是前向整路四项总量，所以相加一次；不要凭有几个router再重复乘。RTT还需回向和题定turnaround。

2. 知道总和上限不能推出每项各占一半。只有额外给对称路径且忽略端点处理，RTT/2才是合理近似。

**英文关键句**：RTT includes the stated forward, return and turnaround times.

RTT包含题定前向、回向与端点周转时间。 include列出测量口径；题目未包含的处理不能擅加或擅减。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Forward delay is 25 ms, return delay is 45 ms and turnaround is 5 ms. Find RTT. Can forward delay be inferred as RTT/2?

**变式参考**：RTT = 25+45+5 = 75 ms. Forward delay is the given 25 ms, not 37.5 ms. The paths and turnaround are not symmetric.

**自查**：已检查并避开这些误区：duration是事务持续时间；不是这里的数据包路径delay。RTT与单程的测量端点须定义清楚。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 33、53–54 · 搜索 Delay Metrics


## T138 · INTD、HRT 与传播时延的边界

Explain INTD, HRT and distance-related propagation delay in the lecture. How should the lecture’s example thresholds be used?

理解课件中的任务与感知时限，避免把示例当统一网络时延标准。

### 精简参考答案

The lecture uses interactivity, human response and distance to discuss delay requirements. Interaction delay, INTD, concerns how long an interactive task can take before it becomes unsuitable for its purpose. The lecture gives a rough 10–30 second context. Human response time, HRT, concerns the point at which a user notices delay, with about 100 ms used as a guide.

These values refer to different task and perception contexts. They are not universal limits for every application, and the inconsistent inequality on the slide should not be memorized as a general rule. Propagation delay is different again: a signal needs time to travel through a medium, so distance creates a physical contribution to delay.

A designer should specify the application event, endpoints and permitted completion or response time. Real-time media may need much tighter limits than a longer interactive task. State whether a requirement is one-way, round-trip or whole-task time before choosing mechanisms or comparing measurements.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：容量需求说明单位时间内需要传送的数据量，延迟需求说明完成通信允许的时间；估计必须结合峰值、持续速率、突发、任务时限及端到端路径。

1. 任务完成能容忍几十秒与人能觉察100ms是不同问题；传播时延则是距离/传播速度的物理贡献。

2. Week4 p53列INTD约10–30秒、HRT约100ms，却有反向不等式；不要背矛盾关系。实际要求需定义事件、端点、单程/往返/整任务。

**英文关键句**：Different delay metrics describe different events.

不同延迟指标描述不同事件。 metric是“度量指标”；不要在同一句中互换TCT与packet delay。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A file task allows 20 seconds. Does this mean every interactive packet may wait 20 seconds?

**变式参考**：No. Whole-task tolerance and packet or response delay are different metrics. Define the event and application before assigning a limit.

**自查**：已检查并避开这些误区：Week4 p53列INTD约10–30秒、HRT约100ms，却有反向不等式；不要背矛盾关系。实际要求需定义事件、端点、单程/往返/整任务。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 53–54 · 搜索 Delay


## T036 · 数据速率、并发与单位

A 60 MB file must transfer in 20 seconds. Estimate the payload rate and the total for five simultaneous transfers.

数据量/时间与并发计算，MB采用十进制。

### 精简参考答案

Each transfer needs an average payload rate of 24 Mb/s. Five simultaneous transfers need 120 Mb/s of aggregate payload capacity on the shared direction, before protocol overhead and planning margin. This assumes decimal MB and overlapping transfers.

### 逐步解法

本题规定1MB=10^6 bytes，1Mb/s=10^6 bits/s。
60×10^6×8/20=24×10^6bits/s=24Mb/s。
5个确实同时、均要同样进度且共享同方向瓶颈：5×24=120Mb/s payload。
另需协议overhead与合理余量；不能把100Mb/s链路当够。
若题中写MiB或规定1024制，要按该口径换算；不默默替换单位。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：容量需求说明单位时间内需要传送的数据量，延迟需求说明完成通信允许的时间；估计必须结合峰值、持续速率、突发、任务时限及端到端路径。

1. MB是字节，Mb是比特，先×8再除秒。题目明确十进制，不能临时换1024。

2. 聚合乘5需要同方向、同瓶颈并发假设；payload下界不含协议开销与规划余量。平均值也未保证单个时段不突发。

**英文关键句**：The estimate excludes overhead and planning margin.

估计未包括开销与规划余量。 exclude表示“不含”；用明确范围说明为什么链路标称值不能直接照用。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：A 30 MB file must transfer in 10 s. Three transfers overlap on one direction. Estimate payload demand.

**变式参考**：Each needs 30×8/10 = 24 Mb/s. Three need 72 Mb/s on the shared direction, before overhead and planning margin, assuming decimal MB.

**自查**：已检查并避开这些误区：不要把60MB/20s=3MB/s误写成3Mb/s。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 32–33、55–56 · 搜索 Capacity and delay


## T037 · 补充性能需求

Explain operational suitability, supportability and confidence.

解释三项补充性能需求。

### 精简参考答案

Operational suitability asks whether the customer can operate the planned network. It depends on both the design and the skills of the people who will use and run it.

Supportability asks what is needed to maintain effective operation after delivery. The course identifies RMA, workforce and training, procedures and documentation, tools, and spare or repair parts. A system that performs well on installation day may still be hard to support later.

Confidence, in this course, concerns the network’s ability to deliver data at the required rate without unacceptable error or loss. The acceptable level depends on the application. These requirements extend the design beyond nominal link speed. For example, a complex device may offer high performance but require training, maintenance procedures and spare parts that the organization cannot currently provide.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：容量需求说明单位时间内需要传送的数据量，延迟需求说明完成通信允许的时间；估计必须结合峰值、持续速率、突发、任务时限及端到端路径。

1. operational suitability是客户是否能运行，supportability是长期需要怎样支持，confidence在本课程特指要求速率下的可接受错误/丢失表现。

2. 支持性五项：RMA、人员培训、流程文档、工具、备件。不要把confidence仅解释成主观信心或统计置信区间。

**英文关键句**：The customer must be able to operate the solution.

客户必须有能力运行该方案。 be able to + 动词表达能力；能够买到设备不等于能够长期运行。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：A device meets the speed target but staff cannot maintain it. Is selection complete?

**变式参考**：No. Operational suitability and supportability remain unmet. Assess training, procedures, tools, spare parts and restoration needs before accepting the option.

**自查**：已检查并避开这些误区：confidence 在此不是统计置信区间，也不是用户自信。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) · PDF 57–66 · 搜索 Supplemental Performance Requirements

