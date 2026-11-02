# 04-Week4-需求分析过程

返回：[期末题库总入口](../README.md)；[旧题号与当前题号对照](../question-map.md)。

本册按对应课件的可见页序排列。计算与补题放到其知识点附近；Workshop Flow题接在Week5 Flow主线，原资源仍明确标为Workshop Week7a。综合长答统一放最后。

来源页码按PDF文件从第1页起计，包含封面。英文答案为教学参考，不是官方评分答案。老师样题保留标记。使用条件与假设属于答案的一部分。

## T027

**需求分析五步**

- 题型：简答；检索码：Q26；依据：范围扩展题。
- 知识点：Requirements analysis process（需求分析过程）。

**Question:** Describe the requirements analysis process and its outputs.

**中文题意：**说明需求分析步骤与产物。

<!-- answer-guidance:T027:start -->
### 组织方式与答题思路

**任务类型：**过程＋输出。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 收集列出需求。
2. 建立service metrics并分析用户/应用行为。
3. 把需求发展为capacity、delay、RMA并映射位置。
4. 说明requirements specification持续更新。

**现有参考答案的组织方式：**

- 第1段：收集信息与建立指标。
- 第2段：行为刻画、发展需求和位置映射。
- 第3段：规格产物、反馈与例子。

**回Moodle核对：**

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → PDF物理页 **5–28、67–69**；课件主题：Requirement Analysis Process。

搜索词：`requirements analysis`；`metrics`；`mapping`。

查到后确认：核对五步次序与最终产物，不漏map与持续维护。

**换问法时：**若只问outputs，先回答规格、测量和地图，再解释由哪些活动产生。
<!-- answer-guidance:T027:end -->

### 中文思路

收集列出→指标→行为→发展需求→地图；spec持续更新。

### 英文参考答案（131词）

The process begins by gathering and listing requirements from users, management, the current network and initial project conditions. The designer then develops service metrics so that needs can be measured and checked.

Next, user and application behaviour is characterized. This includes user numbers, session frequency, duration, data sizes and traffic patterns. Requirements are then developed into more precise capacity, delay and RMA needs. Finally, the requirements are mapped to locations to show where services and performance are required.

The main output is a maintained requirements specification, supported by measurements and maps. The activities may be revisited when new information appears. For example, measured peak use may show that the original capacity estimate was too low. A clear process helps later architecture and design choices remain connected to evidence rather than assumptions.

### 易错、变式与反馈

流程允许反复修订，不能把收集到的原话直接当最终可测试需求。

变式：Explain a requirements map; describe inputs and outputs of each step.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → **PDF物理页5–28、67–69**，关键词`Requirement Analysis Process`。

## T028

**初始条件、约束与红旗**

- 题型：简答；检索码：Q27；依据：范围扩展题。
- 知识点：Requirements analysis process（需求分析过程）。

**Question:** What initial conditions and warning signs should a designer examine when gathering requirements?

**中文题意：**收集需求时应检查哪些条件和警讯？

<!-- answer-guidance:T028:start -->
### 组织方式与答题思路

**任务类型：**检查清单＋澄清。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 列项目类型、范围、目标、现网及外部条件。
2. 列预算、人员、设备约束。
3. 识别无量化或互相矛盾的红旗。
4. 通过讨论与测量把模糊表述改成可验证需求。

**现有参考答案的组织方式：**

- 第1段：初始条件与约束。
- 第2段：模糊、不现实或冲突的警告信号。
- 第3段：99.9%例子与澄清方法。

**回Moodle核对：**

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → PDF物理页 **8–21**；课件主题：Red-Flag User Requirements。

搜索词：`initial conditions`；`constraints`；`warning`。

查到后确认：找红旗示例，特别是real-time与availability缺少的条件。

**换问法时：**若给一句模糊需求，指出缺什么并提出具体澄清问题。
<!-- answer-guidance:T028:end -->

### 中文思路

项目类型范围目标外力；预算/现网约束；real-time、百分比、high-performance需澄清。

### 英文参考答案（129词）

Initial conditions describe the starting point of the project. They include project type, scope, initial goals, the existing network and outside political, administrative or financial forces. Constraints may include budget, existing equipment, staff and organizational rules.

The designer should also look for unclear or unrealistic requirements. Warning signs include “real-time” without a timing limit, “high performance” without evidence, inconsistent requirements and availability stated only as a percentage without a measurement period or service definition.

These statements should be clarified through discussion and measurements. For example, “99.9% availability” needs a defined observation period, acceptable outage pattern and rules about maintenance. Existing measurements or a testbed can help validate the problem. Setting realistic expectations early reduces the risk of choosing an expensive solution that does not address what users actually need.

### 易错、变式与反馈

说明99.9%不是错误；仅有百分比缺少口径。

变式：Compare a greenfield project with an upgrade; clarify a red-flag requirement.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → **PDF物理页8–21**，关键词`Red-Flag User Requirements`。

## T029

**规格、测量与跟踪**

- 题型：简答；检索码：Q28；依据：范围扩展题。
- 知识点：Requirements analysis process（需求分析过程）。

**Question:** How should requirements be measured, recorded and kept up to date?

**中文题意：**如何测量、记录、维护需求？

<!-- answer-guidance:T029:start -->
### 组织方式与答题思路

**任务类型：**方法＋记录维护。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 用调查、访谈、观察和测量收集证据。
2. 记录规格字段及来源。
3. 区分gathered与derived要求。
4. 维护变更历史并记录测量时间、负载、方法和单位。

**现有参考答案的组织方式：**

- 第1段：采集与验证方法。
- 第2段：requirements specification的字段。
- 第3段：持续维护、审计轨迹与测量上下文。

**回Moodle核对：**

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → PDF物理页 **16–26、34–37**；课件主题：Tracking and Managing Requirements。

搜索词：`specification`；`measurement`；`status`；`priority`。

查到后确认：核对字段清单及测量时需保留的条件。

**换问法时：**若问如何保持有效，重点写变更记录、可访问性与峰值代表性。
<!-- answer-guidance:T029:end -->

### 中文思路

survey/访谈/测试；ID来源日期类型位置状态优先；变更可追踪。

### 英文参考答案（130词）

Requirements should be gathered through surveys, follow-up interviews, group meetings and observation. Measurements on the existing network help verify reported problems and current behaviour. A testbed can show how proposed technologies interact with the organization’s applications.

A requirements specification should record each requirement clearly. Useful fields include an identifier, date, type, description, source, location, status and priority. It should distinguish gathered statements from requirements derived through analysis.

Keep the specification current and accessible to the people involved. Record additions, changes and rejected proposals rather than silently replacing the history. This creates a useful audit trail. Measurements also need context, including time, load, method and units. A quiet-period measurement alone may not represent peak conditions. Good records make requirements easier to review, test and trace into later architecture and design decisions.

### 易错、变式与反馈

不把瞬时测试或安静时段读数当所有时段的性能。

变式：Explain gathered versus derived requirements and why change history matters.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → **PDF物理页16–26、34–37**，关键词`Tracking and Managing Requirements`。

## T030

**Capacity、throughput、delay 与 jitter**

- 题型：简答；检索码：Q30；依据：范围扩展题。
- 知识点：Capacity and delay（容量与延迟指标）。

**Question:** Distinguish capacity, throughput, delay, jitter and task completion time.

**中文题意：**区分五项性能概念。

<!-- answer-guidance:T030:start -->
### 组织方式与答题思路

**任务类型：**指标区分。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 区分capacity潜力与throughput实得。
2. 区分delay、jitter与整任务完成时间。
3. 用数据量/时间说明平均速率。
4. 补峰值、开销、竞争与端系统条件。

**现有参考答案的组织方式：**

- 第1段：capacity与throughput。
- 第2段：delay、jitter和task completion time。
- 第3段：平均速率、规划条件及duration边界。

**回Moodle核对：**

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → PDF物理页 **29、32–33、53–56**；课件主题：Service Metrics。

搜索词：`capacity`；`throughput`；`jitter`；`completion`。

查到后确认：核对各指标单位、测量范围和duration与delay区别。

**换问法时：**若题目换成实时业务，重点解释delay/jitter为何不能由带宽数字替代。
<!-- answer-guidance:T030:end -->

### 中文思路

capacity潜力、throughput实得、delay单次传送、jitter变化、TCT整任务。

### 英文参考答案（133词）

Capacity is the data-carrying capability of a network resource. Throughput is the rate of useful transfer actually achieved under particular conditions. A high-capacity link does not mean an application always receives that rate.

Delay is the time taken for data or a response to travel through the system. One-way delay and round-trip time describe different paths. Jitter is variation in delay. Task completion time is the time needed to finish an entire application task, such as transferring a file.

Data size divided by the allowed transfer time gives a basic average rate requirement after units are converted. Actual planning must also consider overhead, peaks, competing flows and end-system limits. Real-time applications may be sensitive to delay and jitter even when average throughput is adequate. Application duration should not be confused with packet delay.

### 易错、变式与反馈

8bits=1byte；duration不等于delay；average不等于peak。

变式：Compare peak, sustained and minimum data rate; calculate a rate requirement.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → **PDF物理页29、32–33、53–56**，关键词`Service Metrics`。

## T031

**应用事务的频率与持续时间**

- 题型：简答；检索码：Q01；依据：老师样题（Week13 PDF p.16）。
- 知识点：Application behavior（应用行为特征）。

**Question:** Why is it important to consider frequency and time duration for application transactions when characterizing application behavior?

**中文题意：**描述应用行为特征时，为什么考虑应用事务的发生频率和持续时间很重要？

<!-- answer-guidance:T031:start -->
### 组织方式与答题思路

**任务类型：**原因解释。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 先回答两者帮助估计流量发生时间与并发。
2. 解释frequency和duration。
3. 写事务重叠→共享负载→容量和延迟影响。
4. 给高峰备份例子，保留duration不等于速率的条件。

**现有参考答案的组织方式：**

- 第1段：两个定义与并发估计目的。
- 第2段：事务重叠的例子及容量、延迟影响。
- 第3段：结合其他变量、速率边界与调度用途。

**回Moodle核对：**

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → PDF物理页 **38–40**；课件主题：Application Behaviour。

搜索词：`frequency`；`duration`；`application behaviour`。

查到后确认：核对事务发生频率、持续时间和会话重叠；寻找用户数与数据大小条件。

**换问法时：**若只问why，把因果链前置；若给相同数据量，不声称持续越久速率越高。
<!-- answer-guidance:T031:end -->

### 中文思路

频率描述应用事务多久发生一次，持续时间描述它保持活跃多久。两者帮助设计者估计流量何时发生，以及多少事务可能同时活跃。

例如，频繁发生、每次持续几分钟的事务可能重叠。共享链路和服务器于是必须支持多个活跃事务，影响容量、延迟和用户得到的服务质量。只看每天总流量可能掩盖繁忙时段。

因此，要把频率、持续时间与用户数、数据大小、流量速率和服务要求一起考虑。同样数据发送得更慢时，持续更久不一定意味着更高数据速率。理解这些因素有助于容量估计、flowspec和调度，例如把时间灵活的备份移出教学高峰。

### 英文参考答案（147词）

Frequency describes how often an application transaction occurs. Duration describes how long it remains active. Together, they help the designer estimate when traffic occurs and how many transactions may be active at the same time.

For example, frequent transactions that last several minutes may overlap. Shared links and servers must then support several active transactions. This can affect capacity, delay and the quality of service that users receive. A total daily traffic figure alone may hide these busy periods.

The designer should therefore consider transaction frequency and duration together with the number of users, data sizes, traffic rates and service requirements. Longer duration does not always mean a higher data rate, especially if the same amount of data is sent more slowly. Understanding these factors supports better capacity estimates, flow specifications and scheduling decisions, such as moving a flexible backup task away from a busy teaching period.

### 易错、变式与反馈

只写“能提高性能”；把duration等同于delay；声称持续更久就必然需要更大带宽；完全不解释并发与峰值。

变式：如果两个应用每天总流量相同，为什么仍可能需要不同的网络安排？

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → **PDF物理页38–40**，关键词`Application Behaviour`。

## T032

**RMA 指标与边界**

- 题型：简答；检索码：Q29；依据：范围扩展题。
- 知识点：RMA（可靠性、可维护性与可用性）。

**Question:** Explain reliability, maintainability and availability and their relationship.

**中文题意：**解释 RMA 及其关系。

<!-- answer-guidance:T032:start -->
### 组织方式与答题思路

**任务类型：**定义＋关系。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 分别定义reliability、maintainability、availability。
2. 对应MTBF/MTBCF与MTTR。
3. 解释可用性如何联系故障间隔和恢复时间。
4. 补观察窗口、计入规则与停机分布。

**现有参考答案的组织方式：**

- 第1段：reliability及MTBF/MTBCF。
- 第2段：maintainability、MTTR与availability公式。
- 第3段：改善方向、不同停机模式和测量边界。

**回Moodle核对：**

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → PDF物理页 **30–31、42–52**；课件主题：RMA Requirements。

搜索词：`RMA`；`MTBF`；`MTTR`；`availability`。

查到后确认：核对公式分母、MTTR包含的阶段与测量口径。

**换问法时：**若要求比较服务，不只比较一个百分比，还解释停机模式和任务关键性。
<!-- answer-guidance:T032:end -->

### 中文思路

R故障频率、M修复时间、A服务可用比例；统一故障/维修口径。

### 英文参考答案（129词）

Reliability describes how often failures occur. It can be represented by mean time between failures, or MTBF. For critical services, mean time between mission-critical failures, or MTBCF, may be more useful.

Maintainability describes how long restoration takes. MTTR includes the time needed to detect, isolate, repair and test a fault before full service returns. Availability relates the time between failures to restoration time. The course uses A = MTBF / (MTBF + MTTR), or the corresponding MTBCF form.

Availability can improve by reducing failures or shortening restoration. Two systems may have the same availability but very different outage patterns. A frequent short interruption is not always equivalent to one long interruption for users. Define which failures count, the observation period and whether scheduled maintenance is included before comparing figures.

### 易错、变式与反馈

MTBF、MTTR单位必须一致；课件公式通常排除计划维护。

变式：Calculate availability; explain why an availability percentage is insufficient.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → **PDF物理页30–31、42–52**，关键词`RMA Requirements`。

## T033

**Availability**

- 题型：计算；检索码：C13；依据：AI计算变式；题值并非真实试题。
- 知识点：RMA（可靠性、可维护性与可用性）。

**Question:** A service has MTBF of 990 hours and MTTR of 10 hours. Find availability and two ways to improve it.

**中文题意：**计算可用性并提出两类改进。

<!-- answer-guidance:T033:start -->
### 组织方式与答题思路

**任务类型：**计算＋解释。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 统一MTBF与MTTR单位。
2. 写A=MTBF/(MTBF+MTTR)并代入。
3. 转为百分比。
4. 分别解释减少故障和缩短恢复，再检查改进值。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → PDF物理页 **42–52**；课件主题：RMA。

搜索词：`MTBF`；`MTTR`；`availability`。

查到后确认：核对分母包含uptime和downtime，百分数与小数转换。

**换问法时：**换数字重新代入；减少5小时MTTR不等于可用性直接提高5%。
<!-- answer-guidance:T033:end -->

### 计算步骤

A=990/(990+10)=0.99=99%。两个时间均为小时。
减少故障提高MTBF；缩短检测、备件等待、修复测试降低MTTR。
若MTTR降至5，A=990/995≈99.4975%。这不是把可用性直接“提高5%”。

### 英文作答

Availability is 990/(990+10) = 99%. It can be improved by increasing time between failures or reducing restoration time. The calculation requires consistent units and a clear definition of the failures and restoration periods being counted.

### 易错、变式与反馈

不能用990/10；明确是否含计划维护。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → **PDF物理页42–52**，关键词`RMA`。

## T034

**可用性到停机预算**

- 题型：计算；检索码：C14；依据：AI计算变式；题值并非真实试题。
- 知识点：RMA（可靠性、可维护性与可用性）。

**Question:** If measured availability is 99.9% over a 30-day period, how much downtime is allowed?

**中文题意：**30天、99.9%的停机预算。

<!-- answer-guidance:T034:start -->
### 组织方式与答题思路

**任务类型：**停机预算计算。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 先求观察窗口总时间。
2. 把availability转成不可用比例。
3. 总时间乘不可用比例。
4. 换算分钟/秒，写计入维护的假设。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → PDF物理页 **44–50**；课件主题：RMA。

搜索词：`availability`；`downtime`；`measurement period`。

查到后确认：核对观察窗口、分母和是否排除计划维护。

**换问法时：**窗口或合同计入规则变化后必须重算；相同停机总量不代表相同体验。
<!-- answer-guidance:T034:end -->

### 计算步骤

观察窗口30×24=720小时；不可用比例1−0.999=0.001。
停机720×0.001=0.72小时=43.2分钟=43分12秒。
这个换算以该窗口所有计入时间为分母；若合同排除计划维护，应按合同另算。
同样总停机可以集中一次或分散多次，业务体验不同。

### 英文作答

For a 30-day measurement window, 99.9% availability permits 0.1% downtime. That is 0.72 hours or 43.2 minutes. The result assumes that the full period is included in the measurement and uses the stated maintenance rules.

### 易错、变式与反馈

99.9%并不自动说明单次中断最大允许时长。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → **PDF物理页44–50**，关键词`RMA`。

## T035

**One-way delay 与 RTT 的计算和条件**

- 题型：计算；检索码：C23；依据：缺口数值补题；AI自拟值或原表复算，见题内说明。
- 知识点：Capacity and delay（容量与延迟指标）。

**Question:** A forward path has 12 ms propagation, 8 ms transmission, 5 ms processing and 15 ms queuing delay. The complete return path takes 30 ms. Endpoint turnaround is 10 ms. Find forward one-way delay and RTT. Can an RTT limit of 100 ms alone guarantee at most 50 ms in each direction?

**中文题意：**使用互不重复的已给延迟项求单程和往返；检查“除二”假设。

<!-- answer-guidance:T035:start -->
### 组织方式与答题思路

**任务类型：**时延计算＋反例。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 前向四项求和。
2. 按本题测量定义加turnaround与return得到RTT。
3. 检查单位。
4. 用不对称路径反例判断RTT能否限制每向时延。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → PDF物理页 **33、53–54**；课件主题：Delay Metrics。

搜索词：`one-way`；`round-trip`；`delay`。

查到后确认：核对传输、传播、处理、排队与端点周转是否已包含。

**换问法时：**只有题目明确对称并说明端点处理口径时才能使用RTT/2近似。
<!-- answer-guidance:T035:end -->

### 计算步骤

题中四项已规定为前向路径各项总量，不再按router数重复相乘。
前向one-way=12+8+5+15=40ms。
本题测量定义的RTT=前向40+终端turnaround10+回向30=80ms。
单独知道RTT≤100ms不能推出每向≤50ms。例如前向70、回向20、turnaround10仍RTT100。
仅在题中额外假定两向相等、端点处理可忽略，或明确分配预算时，才可用对称近似；它是额外假设，不是RTT定义。

### 英文作答

The forward one-way delay is 40 ms. Including the stated return path and endpoint turnaround, RTT is 80 ms. An RTT limit of 100 ms alone does not guarantee a 50 ms bound in each direction. The paths may be asymmetric and endpoint processing may also contribute.

### 易错、变式与反馈

duration是事务持续时间；不是这里的数据包路径delay。RTT与单程的测量端点须定义清楚。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → **PDF物理页33、53–54**，关键词`Delay Metrics`。

## T036

**数据速率、并发与单位**

- 题型：计算；检索码：C15；依据：AI计算变式；题值并非真实试题。
- 知识点：Capacity and delay（容量与延迟指标）。

**Question:** A 60 MB file must transfer in 20 seconds. Estimate the payload rate and the total for five simultaneous transfers.

**中文题意：**数据量/时间与并发计算，MB采用十进制。

<!-- answer-guidance:T036:start -->
### 组织方式与答题思路

**任务类型：**速率＋并发。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 说明MB/Mb及十进制口径。
2. 数据量×8÷时间求payload rate。
3. 确认同向、同瓶颈、同时后乘并发数。
4. 补协议开销、余量与端系统约束。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → PDF物理页 **32–33、55–56**；课件主题：Capacity and delay。

搜索词：`data size`；`duration`；`capacity`。

查到后确认：核对bytes/bits和并发条件，不把payload当链路总需求。

**换问法时：**若用MiB或分批完成，按新单位与时间关系重算。
<!-- answer-guidance:T036:end -->

### 计算步骤

本题规定1MB=10^6 bytes，1Mb/s=10^6 bits/s。
60×10^6×8/20=24×10^6bits/s=24Mb/s。
5个确实同时、均要同样进度且共享同方向瓶颈：5×24=120Mb/s payload。
另需协议overhead与合理余量；不能把100Mb/s链路当够。
若题中写MiB或规定1024制，要按该口径换算；不默默替换单位。

### 英文作答

Each transfer needs an average payload rate of 24 Mb/s. Five simultaneous transfers need 120 Mb/s of aggregate payload capacity on the shared direction, before protocol overhead and planning margin. This assumes decimal MB and overlapping transfers.

### 易错、变式与反馈

不要把60MB/20s=3MB/s误写成3Mb/s。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → **PDF物理页32–33、55–56**，关键词`Capacity and delay`。

## T037

**补充性能需求**

- 题型：简答；检索码：Q31；依据：范围扩展题。
- 知识点：Capacity and delay（容量与延迟指标）。

**Question:** Explain operational suitability, supportability and confidence.

**中文题意：**解释三项补充性能需求。

<!-- answer-guidance:T037:start -->
### 组织方式与答题思路

**任务类型：**列举＋适用边界。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. operational suitability判断客户能否运行。
2. supportability说明持续维护所需资源。
3. confidence按本课说明按所需速率且无不可接受错丢的交付能力。
4. 给人员培训和备件例子。

**现有参考答案的组织方式：**

- 第1段：operational suitability的定义。
- 第2段：supportability清单与持续运行。
- 第3段：本课confidence含义和应用条件。

**回Moodle核对：**

- [Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → PDF物理页 **57–66**；课件主题：Supplemental Performance Requirements。

搜索词：`operational suitability`；`supportability`；`confidence`。

查到后确认：核对supportability完整清单与本课confidence的特定含义。

**换问法时：**若给产品选择案例，说明技术能力与人员支持条件如何共同约束选择。
<!-- answer-guidance:T037:end -->

### 中文思路

能运行；能持续维护支持；按需要速率无错无丢可信交付（本课语境）。

### 英文参考答案（130词）

Operational suitability asks whether the customer can operate the planned network. It depends on both the design and the skills of the people who will use and run it.

Supportability asks what is needed to maintain effective operation after delivery. The course identifies RMA, workforce and training, procedures and documentation, tools, and spare or repair parts. A system that performs well on installation day may still be hard to support later.

Confidence, in this course, concerns the network’s ability to deliver data at the required rate without unacceptable error or loss. The acceptable level depends on the application. These requirements extend the design beyond nominal link speed. For example, a complex device may offer high performance but require training, maintenance procedures and spare parts that the organization cannot currently provide.

### 易错、变式与反馈

confidence 在此不是统计置信区间，也不是用户自信。

变式：List the five supportability factors and give a design example.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) → **PDF物理页57–66**，关键词`Supplemental Performance Requirements`。

