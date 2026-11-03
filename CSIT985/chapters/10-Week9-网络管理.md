# 10-Week9-网络管理

[在线逐题学习](../review-bank.html) · [审校说明](../audit-2026-11-04.md)

> 参考答案与教学解析由AI依据课程资料整理，不是官方rubric。考前练习不扩大考试可用资料。

## T092 · 管理层级与 FCAPS

Describe the network management hierarchy and the FCAPS model.

说明管理层级与FCAPS功能。

### 精简参考答案

The course views network management as several levels. Business management handles budgets, resources and planning. Service management concerns delivered services, such as access bandwidth and application delivery. Network management covers the network as a whole. Element management handles groups of similar devices, while network-element management concerns an individual device.

FCAPS describes five management areas: fault, configuration, accounting, performance and security management. These include detecting faults, controlling settings, tracking usage, measuring service and managing protection.

The levels and functions connect high-level goals with concrete device parameters. For example, a business commitment to reliable teaching leads to a service target, network monitoring and configuration, and specific interface or device actions. Management must also transport and store the information needed to make those decisions, so its own traffic and infrastructure need planning.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：网络管理通过监测取得并解释状态，通过 instrumentation 提供采集工具和接口，再通过配置机制改变设备参数；SNMP 传递管理信息，MIB 定义可管理对象。

1. hierarchy按管理范围分五层，FCAPS按管理任务分五域，是两条观察轴。一个service-level问题可涉及performance和fault。

2. 从业务承诺逐层落到接口动作，才能看到管理为何需要基础设施与流量。不要用FCAPS替代层级清单。

**英文关键句**：The two models use different dimensions.

两套模型采用不同维度。 dimension意为“维度”；给跨层performance例子比只背定义更容易理解。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Is performance management restricted to one management level?

**变式参考**：No. Performance concerns can appear at service, network and device levels. FCAPS functions and management hierarchy describe different dimensions.

**自查**：层级是管理范围，FCAPS是管理功能，不是同一分类。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 5–16 · 搜索 Network Management Architectures


## T093 · SNMP、CMIP 与 CMOT

Compare SNMP with CMIP/CMOT and explain their emphasis in this course.

比较管理协议，并保留课程的主次。

### 精简参考答案

SNMP provides mechanisms for collecting and configuring information from managed network devices. Managers use defined objects, grouped in MIBs, and agents can send unsolicited event notifications through traps. The course identifies SNMP as the main protocol to study.

CMIP, the Common Management Information Protocol, is associated with the OSI management approach. It supports parameter collection and setting and provides a wider range of operation types, but it is more complicated. CMOT means CMIP Over TCP/IP. The lecture treats these protocols mainly as historical background.

The comparison explains a trade-off between capability and complexity. More operation types do not automatically make a management system more suitable. The required tasks, device support and operating effort still matter. Also distinguish a MIB, which defines managed objects, from the storage system that keeps the actual history of collected measurements.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：网络管理通过监测取得并解释状态，通过 instrumentation 提供采集工具和接口，再通过配置机制改变设备参数；SNMP 传递管理信息，MIB 定义可管理对象。

1. SNMP是本课重点，CMIP/CMOT作为历史比较用于理解能力与复杂度权衡，不需凭空扩展成配置考试。

2. MIB定义对象，manager收集值，历史系统保存数据，三者别混。更多操作类型不自动意味更适合本项目。

**英文关键句**：More capability can also mean more complexity.

更多能力也可能意味着更多复杂度。 more A can mean more B用于写取舍，之后应说明项目条件。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：Does a richer protocol always make management better?

**变式参考**：No. Device support, task needs and operating complexity matter. Select a protocol and tools that meet the required functions reliably.

**自查**：低优先级历史内容不标必考；CMOT不是SNMP的新版本。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 18–24 · 搜索 Network Management Mechanisms


## T094 · SNMP、agent 与 MIB

Explain the relationship between SNMP, agents, managers and MIBs.

解释管理协议、代理、管理者与对象定义。

### 精简参考答案

SNMP supports the collection and configuration of management information from network devices. A management system communicates with an agent on a managed device. The agent provides access to managed objects and may send event notifications.

A Management Information Base, or MIB, defines the managed objects and their meaning. It is not the same as a historical database of every collected measurement. For example, MIB-II includes interface counters such as received and transmitted octets and error counts.

Managers can poll for values, while traps provide unsolicited event notification. Counter values often need processing: a rate normally comes from the change in a counter over a known interval, not from the total counter alone. SNMPv3 adds security capabilities, but settings and access restrictions still need to be planned. Choose objects that support actual service and operational needs.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：网络管理通过监测取得并解释状态，通过 instrumentation 提供采集工具和接口，再通过配置机制改变设备参数；SNMP 传递管理信息，MIB 定义可管理对象。

1. manager通过SNMP访问agent暴露的对象；MIB给对象含义与结构，不是装满每一天历史值的仓库。

2. counter是累计量，求速率需两次同口径读数与时间差；trap是主动事件通知。SNMPv3安全需要合适配置，不是读到对象就默认安全。

**英文关键句**：A cumulative counter is not a rate.

累计计数器不是速率。 cumulative意为“累计的”；完整表达帮助区分量与每秒变化量。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A counter reads 5,000,000 octets. What is its current bit rate?

**变式参考**：A single cumulative reading is insufficient. Obtain another reading and the elapsed time, check reset or wrap, then compute the change in octets times eight divided by seconds.

**自查**：counter累计字节不是瞬时bps；MIB不是性能历史数据库本身。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 18–25 · 搜索 MIB


## T143 · MIB-II 的计数器选择与解释

Choose MIB-II interface counters for traffic volume, packet counts and errors. Explain how to derive a rate and why counters need careful interpretation.

按问题选对象，区分累计值、速率、octet和packet。

### 精简参考答案

MIB-II interface objects describe different aspects of a device interface. ifInOctets and ifOutOctets count received and transmitted octets. An octet is eight bits. Unicast and non-unicast packet counters describe packet numbers, while ifInErrors and ifOutErrors record relevant interface errors. These counters answer different questions.

A cumulative value is not a rate. For example, subtracting two octet readings gives the transferred amount during the interval; multiplying by eight and dividing by elapsed seconds gives bits per second. State the interface, direction, timestamps and units.

Before trusting the result, check for device reset, counter wrap and changes in what is being measured. A packet-error ratio also needs a compatible packet-count denominator and a defined interpretation. Bulk retrieval belongs to SNMPv2 protocol operations; it should not be memorized as a feature introduced only by SNMPv3. SNMPv3’s security capabilities are a separate issue. Collect the objects needed for the management goal rather than every available counter.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：网络管理通过监测取得并解释状态，通过 instrumentation 提供采集工具和接口，再通过配置机制改变设备参数；SNMP 传递管理信息，MIB 定义可管理对象。

1. 对象名称按In/Out、Octets/Packets/Errors拆读，分别判断方向与量；累计值要差分除时间才成速率。

2. 两次同对象counter需检查reset/wrap，error ratio需兼容packet分母。GETBULK在SNMPv2已有，SNMPv3重点安全，避免按课件误记版本。

**英文关键句**：Subtract the readings before dividing by elapsed time.

先减两次读数，再除经过时间。 before + 动词-ing；elapsed time是“经过时间”，不是时间戳本身。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Octets rise by 500,000 in 5 seconds. What is the payload bit rate under a valid counter interval?

**变式参考**：500,000 × 8 / 5 = 800,000 bit/s, or 800 kb/s. This assumes compatible readings with no unhandled reset or wrap and does not add unspecified wire overhead.

**自查**：两次同对象counter需检查reset/wrap，error ratio需兼容packet分母。GETBULK在SNMPv2已有，SNMPv3重点安全，避免按课件误记版本。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 19、21–24 · 搜索 MIB II


## T095 · Monitoring、instrumentation、configuration

Distinguish monitoring, instrumentation and configuration mechanisms.

区分观察、采集手段与改变设置。

### 精简参考答案

Monitoring obtains and processes information about network behaviour. It includes collection, event or trend analysis, display and archiving. Measurements may concern an element, link, network or end-to-end path.

Instrumentation provides the tools and access needed to obtain that information. Examples include SNMP access, counters, probes, packet capture, ping and traceroute. Accuracy and dependability matter, so measurements from different locations may need comparison.

Configuration changes operational parameters through direct access, remote access or configuration files. It can implement a response to information found by monitoring. For example, instrumentation supplies interface data, monitoring detects sustained congestion, and configuration changes an appropriate queue policy. These mechanisms form a practical management loop. Observing a problem does not itself fix it, and a successful connectivity probe does not establish every aspect of service quality.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：网络管理通过监测取得并解释状态，通过 instrumentation 提供采集工具和接口，再通过配置机制改变设备参数；SNMP 传递管理信息，MIB 定义可管理对象。

1. instrumentation提供可观察手段，monitoring处理观察结果，configuration改变系统。三者形成从证据到行动的闭环。

2. ping可说明某种连通与往返响应，不能证明应用容量和每个链路指标；traceroute显示路径线索也不直接测出所有链路容量。

**英文关键句**：A connectivity test does not verify every service property.

连通性测试不能验证所有服务属性。 verify是“核实是否符合”；every property提醒测量必须对应目标。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A successful ping is observed. Does it verify the full SLA?

**变式参考**：No. It provides limited reachability and timing evidence. The SLA may also require throughput, loss, availability and application-level tests.

**自查**：ping成功不证明吞吐、全部应用、所有路径都正常。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 26–46 · 搜索 Monitoring Mechanisms


## T096 · Event notification 与 trend analysis

Compare event notification with trend analysis and explain polling trade-offs.

比较事件通知和趋势分析。

### 精简参考答案

Event notification identifies changes that need attention, such as failures, threshold crossings or important informational events. Short-lived problems may require frequent collection and prompt alarms, logs or displays.

Trend analysis studies longer-term behaviour. Continuous and consistent measurements establish a baseline and reveal changes in utilization, delay or availability. This supports planning before service becomes unacceptable.

The methods use different time scales. A daily average may hide a brief outage, while a stream of isolated alarms may not show gradual growth. Shorter polling intervals improve time resolution but create more traffic, processing and stored data. Longer intervals reduce overhead but may miss short events. A useful design combines event and trend information and records timestamps, units and context so that measurements can be interpreted correctly.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：网络管理通过监测取得并解释状态，通过 instrumentation 提供采集工具和接口，再通过配置机制改变设备参数；SNMP 传递管理信息，MIB 定义可管理对象。

1. event及时发现变化，trend持续观察长期方向，两者时间尺度不同。短采样更细但有流量、处理和存储成本。

2. 5秒故障可能发生在两个60秒poll之间；不能没数据就给漏检精确概率。baseline需一致口径，平均值可隐藏尖峰。

**英文关键句**：A shorter interval improves time resolution but increases overhead.

更短间隔改善时间分辨率但增加开销。 comparative + but组织取舍；otherwise unchanged可说明其他条件不变。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：What happens if the polling interval is halved?

**变式参考**：Average polling traffic and value storage roughly double under otherwise unchanged assumptions. Time resolution improves, but short events can still be missed.

**自查**：实时分析与长期平均不能互相代替；poll越频繁并非无成本。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 30–39 · 搜索 Monitoring for Trend Analysis


## T097 · Polling 带宽

For 100 devices, 4 interfaces each and 8 parameters per interface, each value is 8 bytes with 60 bytes of overhead. Poll every 5 seconds. Find average traffic.

复算课件管理流量例子。

### 精简参考答案

Each polling cycle generates 1,740,800 bits. With a five-second interval, average management traffic is 348,160 bit/s, or 348.16 kb/s. The average is not the peak rate; synchronized polling can create a much larger short-term burst.

### 逐步解法

测量数100×4×8=3200/cycle。
每项wire数据8+60=68bytes；每轮3200×68=217600bytes=1740800bits。
平均1740800/5=348160bit/s=348.16kb/s（十进制）。
日轮次86400/5=17280；日wire traffic=30081024000bits≈30.081Gb。
轮询同步突发可能显著高于平均；精确瞬时速率还需发送持续时间。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：管理系统的分布方式决定管理流量的汇聚与依赖；扩展规划需要估算采集负载和存储，并通过重复测量、元数据及归档策略维护数据可信度。

1. 每轮测量数3200，每项线上68bytes，先算bytes再×8；除5秒得平均bit/s。

2. poll同步时平均不代表峰值，峰值还要发送时间。一天86400秒，5秒一轮是17280轮；不要沿用课件720/day笔误。

**英文关键句**：Divide the bits per cycle by the interval in seconds.

每轮比特数除以以秒计的间隔。 per cycle与per second必须区分；divide A by B明确谁除谁。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：With the same devices and per-value sizes, poll every 10 seconds. Find average wire traffic.

**变式参考**：3200×68×8/10 = 174080 bit/s = 174.08 kb/s. Doubling the interval halves the average rate under unchanged assumptions.

**自查**：不能把1.7408Mb/cycle直接写1.7408Mb/s，除非说明1秒发完。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 35–39、59 · 搜索 Management architecture and scaling


## T098 · 存储量与counter速率

Using C17, store only the 8-byte values. Find daily storage. Separately, a byte counter rises from 1,000,000 to 1,750,000 in 10 s; find the rate.

区分线上流量、存储和累计计数器。

### 精简参考答案

Raw daily value storage is 442.368 MB, before metadata or database overhead. Counter-based rate uses the difference between samples: (1,750,000−1,000,000)×8/10 = 600 kb/s. Validate the counter and interval before trusting the result.

### 逐步解法

日storage=3200×8×17280=442368000bytes=442.368MB（不含metadata/index/复制）。
年按365天≈161.46432GB。课件“720轮/day”应为每hour；日轮次为17280。
Counter delta=750000bytes；速率750000×8/10=600000bit/s=600kb/s。
先检查counter重置/回卷，确认采样点与时间一致。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：管理系统的分布方式决定管理流量的汇聚与依赖；扩展规划需要估算采集负载和存储，并通过重复测量、元数据及归档策略维护数据可信度。

1. wire traffic含协议开销，storage本题只保留8byte值，所以每轮25600byte；乘17280轮得到每日442.368MB。

2. counter速率单独用delta×8/秒；如果重置/回卷未处理，简单相减会错。365天年值是明确假设而非每年必定天数。

**英文关键句**：Store only the bytes that are actually retained.

只计算实际保留的字节。 actually retained明确storage范围；不要把network overhead自动复制进来。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Poll every 10 s and store only the same values. Also, an octet counter rises by 250000 over 4 s. Find both results.

**变式参考**：Daily storage = 3200×8×8640 = 221184000 bytes = 221.184 MB. Rate = 250000×8/4 = 500000 bit/s = 500 kb/s, after counter validity checks.

**自查**：不要把wire的60byte overhead计入“只存8byte值”的问题。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 35–39、62–65 · 搜索 Management architecture and scaling


## T099 · 带内与带外网络管理

What are differences between in-band and out-of-band approaches in network management?

网络管理中的带内与带外方法有什么区别？

### 精简参考答案

In-band management sends management traffic through the same network paths used by users and their applications. It normally avoids the cost of a separate management network. However, management traffic competes for shared resources and may be affected by the same congestion or failures as user traffic. Administrators may lose access when they most need to investigate a problem.

Out-of-band management provides an alternative path for management traffic, often through a separate management network. It can support monitoring and recovery during many failures of the user network. It also adds equipment, cost and operational complexity. Both approaches still require appropriate access protection.

Out-of-band access is not guaranteed during every failure, for example if a device loses all power. A hybrid design can use in-band access for routine management and an alternative path for recovery. The choice should follow availability needs, risk and budget, rather than assuming that one approach is always best.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：带内管理与用户业务共享网络路径；带外管理提供替代管理路径，减少对业务路径的依赖，但会增加费用和复杂度，也不能保证在所有故障中可用。

1. in-band共享用户路径，成本较低但共享拥塞与故障；out-of-band提供替代访问但有独立成本和管理安全要求。

2. 带外能否救援要看替代链路和设备仍否供电，不等于任何事故都能登录。比较必须同时写路径、恢复、成本与条件。

**英文关键句**：The alternative path must survive the relevant failure.

替代路径必须能承受所讨论故障。 relevant failure限定故障范围，不能写survive all failures。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：The production link fails but the device and separate management path work. What can help?

**变式参考**：Out-of-band access may support diagnosis and recovery. It must be reachable, protected and independent of the failed production path.

**自查**：比较维度不对齐；把带外说成永不失效；把in-band/out-of-band等同于centralized/distributed。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 51–54 · 搜索 In-band and Out-of-band Management


## T100 · Centralized、distributed、hierarchical management

Compare centralized, distributed and hierarchical network management.

比较三种管理架构。

### 精简参考答案

Centralized management collects control and information at a main management system. It can simplify administration and provide a common view, but it can concentrate traffic and create a significant failure point unless protected.

Distributed management places systems across different domains or locations. Local processing can improve scalability and reduce dependence on a single site, but coordination and consistent policy become harder. Hierarchical management separates responsibilities across levels, allowing local collection and higher-level summaries or control.

Choose the architecture according to network size, geography, reliability, staffing and cost. For example, a multi-campus network may benefit from local collection with a central service view. Distribution does not automatically remove every failure risk, and centralization does not forbid redundancy. State where information is collected, stored and acted on, and how those management systems remain reachable.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：管理系统的分布方式决定管理流量的汇聚与依赖；扩展规划需要估算采集负载和存储，并通过重复测量、元数据及归档策略维护数据可信度。

1. 集中便于统一视图但汇聚负载与故障；分布本地处理更易扩展但需协调；层级让本地采集与上层汇总分工。

2. 集中可以冗余，分布也会失败，因此不要仅凭名称推断韧性。标出数据在哪里收、存、分析和控制，方案才具体。

**英文关键句**：A centralized view can still use redundancy.

集中视图仍可采用冗余。 still强调概念兼容；redundancy是“冗余/备用能力”，不是多装就必然独立。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：Must centralized management use only one unprotected server?

**变式参考**：No. A centralized logical view can use redundant systems. Evaluate availability and communication paths separately from the organizational model.

**自查**：centralized≠必然一台物理主机；logical集中可有冗余。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 55–60、67–74 · 搜索 Centralized, Distributed and Hierarchical Management


## T101 · Management traffic scaling

How should management traffic and storage be estimated and controlled?

如何估计与控制管理开销？

### 精简参考答案

Estimate the number of devices, interfaces per device, parameters per interface and polling frequency. Multiply the number of measurements by the bytes generated per measurement, including relevant protocol overhead, to estimate traffic per polling cycle. Divide by the interval to obtain an average rate.

Storage is a separate calculation. It depends on which values and metadata are kept, their size and the retention period. Network protocol overhead is not automatically stored with every value. Polling bursts may also create higher short-term load than the average suggests.

The lecture gives LAN planning guidelines of roughly 2–5% management load and suggests review when it exceeds 10%. These are course heuristics, not universal limits. Reduce unnecessary parameters or polling frequency, distribute collection and use suitable aggregation. Critical management information still needs sufficient resources and timely delivery.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：管理系统的分布方式决定管理流量的汇聚与依赖；扩展规划需要估算采集负载和存储，并通过重复测量、元数据及归档策略维护数据可信度。

1. 每轮设备×接口×参数，再乘每项线上字节，除间隔得平均流量；存储只算实际保留内容与时间。

2. wire overhead不自动写入历史库；同步poll会有峰值。2–5%与10%是课件经验指导，不是协议硬阈值。

**英文关键句**：Traffic size and stored size may differ.

线上流量大小与存储大小可能不同。 may differ表示“可能不同”；单位都为bytes也不能混用内容范围。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：If each value is stored without protocol headers, should wire overhead enter storage?

**变式参考**：No, unless those headers are actually retained. Traffic and storage use different per-measurement sizes and must be calculated separately.

**自查**：2–5%、10%是课件经验参考；不是协议硬上限。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 35–39、59–60 · 搜索 Scaling of Network Management Traffic


## T102 · LAN/WAN 管理监测点的放置

Where does the lecture suggest placing monitoring devices in LANs and WANs, and why?

解释课件LAN/WAN采集点建议。

### 精简参考答案

For a LAN, the lecture suggests starting with one monitoring device per subnet. Estimate device numbers, interfaces, measured parameters and polling frequency to check the resulting management traffic.

For a WAN, it suggests monitoring at each WAN–LAN interface in addition to relevant local monitoring. If a monitor already sits on a LAN subnet at that interface, it may collect information for both roles. Separate physical monitors are not automatically required for every label.

This placement helps observe conditions at each location and verify service across the wider network. For example, local measurements can be compared with WAN-boundary measurements to investigate where delay or loss occurs. These are starting guidelines rather than fixed universal rules. The final placement depends on traffic visibility, failure domains, security, cost and measurement needs. End-to-end service still requires suitable measurements across the complete relevant path.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：管理系统的分布方式决定管理流量的汇聚与依赖；扩展规划需要估算采集负载和存储，并通过重复测量、元数据及归档策略维护数据可信度。

1. 监测位置决定能看见什么；LAN每subnet一点、WAN–LAN接口一点是起点建议，不是标签越多设备越多。

2. 一个位置可兼任角色；要结合故障域、可见流、成本和安全。端到端服务还需跨相关路径的对照测量。

**英文关键句**：One monitor may serve more than one role.

一个监测点可承担多个角色。 more than one后用单数role；需要具体说明可见性条件。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A monitor already covers the WAN–LAN interface and its LAN. Must a duplicate be installed?

**变式参考**：Not automatically. One collection point may serve both roles if it has the required visibility, capacity and failure coverage.

**自查**：per-subnet与per-interface是规划起点；别机械重复部署同一位置，也别把一条链路测量当全路径保证。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 59–60 · 搜索 Scaling of Network Management Traffic


## T103 · Checks、数据与 MIB 选择

Explain checks and balances, management-data handling and MIB selection.

解释测量验证、存储和对象选择。

### 精简参考答案

Checks and balances validate management information by comparing measurements or using independent collection points. They help detect recording errors, counter rollover, stuck values, changed variables and differences between vendors.

Management data needs a storage plan. Keep suitable information locally for event analysis and short-term trends, copy selected values for longer analysis and archive data when appropriate. Metadata should describe data types, timestamps and relationships so that later users understand what the values mean.

Choose MIBs according to the required tasks. Basic network health may need standard objects, while supported services, SLAs or vendor features may need additional objects. If management integrates with an operations support system, its northbound interface and data requirements must also be considered. Collecting everything without a purpose increases cost and can make useful information harder to find.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：管理系统的分布方式决定管理流量的汇聚与依赖；扩展规划需要估算采集负载和存储，并通过重复测量、元数据及归档策略维护数据可信度。

1. checks and balances验证“读数可信否”，metadata解释“这是什么、何时测、怎么算”，MIB selection回答“需要测什么”。

2. counter跳变先查重置/回卷/语义再判业务异常；盲采一切会加成本且掩盖重点。OSS集成还需北向数据与接口要求。

**英文关键句**：Validate the data before interpreting the result.

解释结果前先验证数据。 before + 动词-ing；validate是“检查是否可信/有效”，不等于修改成想要的值。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A counter suddenly falls. Must traffic have become negative?

**变式参考**：No. A reset or wrap may explain the change. Validate the counter semantics and timestamps before calculating a rate or declaring a traffic event.

**自查**：计数器回卷可能造成错误负数速率；不要直接当真实流量下降。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 61–70 · 搜索 Checks and Balances


## T104 · 管理与其他组件的关系

Explain the dependencies and external relationships of network management.

解释管理组件依赖及与其他组件互动。

### 精简参考答案

Management depends on reliable communication paths, sufficient capacity, storage and suitable device support. Integration with an operations support system adds interface and information requirements. These are important dependencies within the management solution.

Management also interacts with other architectures. Addressing and routing determine device reachability and management domains. Performance management needs measurements, but collecting them consumes resources and can affect user traffic. Security policies may restrict access even though management requires controlled visibility and configuration access.

The design must support important management flows without creating unnecessary exposure or overhead. For example, a separate management path can provide a fallback when the production path fails, but it must also be secured and maintained. Include management traffic in flow estimates and explain which information receives priority. A network is not fully manageable simply because its user traffic can be forwarded.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：管理系统的分布方式决定管理流量的汇聚与依赖；扩展规划需要估算采集负载和存储，并通过重复测量、元数据及归档策略维护数据可信度。

1. 管理本身是需要可靠路径、容量、存储和受控权限的服务，不能假设业务能转发就必然可管理。

2. 路由决定可达，QoS保障管理时效但采集占资源，安全限制访问但管理又需可视与配置。写双向影响才能形成可操作取舍。

**英文关键句**：Management needs controlled visibility and access.

管理需要受控的可视能力和访问。 controlled修饰访问方式；不是无条件开放管理权限。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A firewall blocks all management traffic. Is strong isolation enough?

**变式参考**：No. Required monitoring and recovery access must remain available through authorized paths. Balance protection with the management dependencies of the service.

**自查**：S3/Q03讲带内带外；本题重跨组件因果。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) · PDF 67–74 · 搜索 External Relationships

