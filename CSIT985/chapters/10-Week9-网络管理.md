# 10-Week9-网络管理

返回：[期末题库总入口](../README.md)；[旧题号与当前题号对照](../question-map.md)。

本册按对应课件的可见页序排列。计算与补题放到其知识点附近；Workshop Flow题接在Week5 Flow主线，原资源仍明确标为Workshop Week7a。综合长答统一放最后。

来源页码按PDF文件从第1页起计，包含封面。英文答案为教学参考，不是官方评分答案。老师样题保留标记。使用条件与假设属于答案的一部分。

## T092

**管理层级与 FCAPS**

- 题型：简答；检索码：Q61；依据：范围扩展题。
- 知识点：Network management mechanisms（网络管理机制）。

**Question:** Describe the network management hierarchy and the FCAPS model.

**中文题意：**说明管理层级与FCAPS功能。

### 中文思路

业务→服务→网络→同类元素集合→单设备；FCAPS五域。

### 英文参考答案（129词）

The course views network management as several levels. Business management handles budgets, resources and planning. Service management concerns delivered services, such as access bandwidth and application delivery. Network management covers the network as a whole. Element management handles groups of similar devices, while network-element management concerns an individual device.

FCAPS describes five management areas: fault, configuration, accounting, performance and security management. These include detecting faults, controlling settings, tracking usage, measuring service and managing protection.

The levels and functions connect high-level goals with concrete device parameters. For example, a business commitment to reliable teaching leads to a service target, network monitoring and configuration, and specific interface or device actions. Management must also transport and store the information needed to make those decisions, so its own traffic and infrastructure need planning.

### 易错、变式与反馈

层级是管理范围，FCAPS是管理功能，不是同一分类。

变式：Explain the two basic management functions and four task categories.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页5–16**，关键词`Network Management Architectures`。

## T093

**SNMP、CMIP 与 CMOT**

- 题型：简答；检索码：Q93；依据：缺口补题；依据课件的AI参考答案。
- 知识点：Network management mechanisms（网络管理机制）。

**Question:** Compare SNMP with CMIP/CMOT and explain their emphasis in this course.

**中文题意：**比较管理协议，并保留课程的主次。

### 中文思路

SNMP主线：读/设参数、trap、MIB；CMIP历史OSI管理协议，更复杂/更多操作；CMOT＝CMIP Over TCP/IP。MIB定义对象，不是历史数据库。

### 英文参考答案（135词）

SNMP provides mechanisms for collecting and configuring information from managed network devices. Managers use defined objects, grouped in MIBs, and agents can send unsolicited event notifications through traps. The course identifies SNMP as the main protocol to study.

CMIP, the Common Management Information Protocol, is associated with the OSI management approach. It supports parameter collection and setting and provides a wider range of operation types, but it is more complicated. CMOT means CMIP Over TCP/IP. The lecture treats these protocols mainly as historical background.

The comparison explains a trade-off between capability and complexity. More operation types do not automatically make a management system more suitable. The required tasks, device support and operating effort still matter. Also distinguish a MIB, which defines managed objects, from the storage system that keeps the actual history of collected measurements.

### 易错、变式与反馈

低优先级历史内容不标必考；CMOT不是SNMP的新版本。

变式：先遮住答案复述；再换一个场景说明分类、机制或条件。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页18–24**，关键词`Network Management Mechanisms`。

## T094

**SNMP、agent 与 MIB**

- 题型：简答；检索码：Q62；依据：范围扩展题。
- 知识点：Network management mechanisms（网络管理机制）。

**Question:** Explain the relationship between SNMP, agents, managers and MIBs.

**中文题意：**解释管理协议、代理、管理者与对象定义。

### 中文思路

manager读/设；agent暴露对象；MIB定义；poll/trap；counter差值。

### 英文参考答案（135词）

SNMP supports the collection and configuration of management information from network devices. A management system communicates with an agent on a managed device. The agent provides access to managed objects and may send event notifications.

A Management Information Base, or MIB, defines the managed objects and their meaning. It is not the same as a historical database of every collected measurement. For example, MIB-II includes interface counters such as received and transmitted octets and error counts.

Managers can poll for values, while traps provide unsolicited event notification. Counter values often need processing: a rate normally comes from the change in a counter over a known interval, not from the total counter alone. SNMPv3 adds security capabilities, but settings and access restrictions still need to be planned. Choose objects that support actual service and operational needs.

### 易错、变式与反馈

counter累计字节不是瞬时bps；MIB不是性能历史数据库本身。

变式：Define polling and traps; explain ifInOctets and ifOutErrors.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页18–25**，关键词`MIB`。

## T095

**Monitoring、instrumentation、configuration**

- 题型：简答；检索码：Q63；依据：范围扩展题。
- 知识点：Network management mechanisms（网络管理机制）。

**Question:** Distinguish monitoring, instrumentation and configuration mechanisms.

**中文题意：**区分观察、采集手段与改变设置。

### 中文思路

monitor取/处理/展示/归档；instrument工具接入；configuration修改。

### 英文参考答案（129词）

Monitoring obtains and processes information about network behaviour. It includes collection, event or trend analysis, display and archiving. Measurements may concern an element, link, network or end-to-end path.

Instrumentation provides the tools and access needed to obtain that information. Examples include SNMP access, counters, probes, packet capture, ping and traceroute. Accuracy and dependability matter, so measurements from different locations may need comparison.

Configuration changes operational parameters through direct access, remote access or configuration files. It can implement a response to information found by monitoring. For example, instrumentation supplies interface data, monitoring detects sustained congestion, and configuration changes an appropriate queue policy. These mechanisms form a practical management loop. Observing a problem does not itself fix it, and a successful connectivity probe does not establish every aspect of service quality.

### 易错、变式与反馈

ping成功不证明吞吐、全部应用、所有路径都正常。

变式：Classify a counter, an alarm and a settings change; explain per-link vs end-to-end measures.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页26–46**，关键词`Monitoring Mechanisms`。

## T096

**Event notification 与 trend analysis**

- 题型：简答；检索码：Q64；依据：范围扩展题。
- 知识点：Network management mechanisms（网络管理机制）。

**Question:** Compare event notification with trend analysis and explain polling trade-offs.

**中文题意：**比较事件通知和趋势分析。

### 中文思路

短期阈值快速响应；长期baseline容量规划；短poll更多开销，平均可能藏事件。

### 英文参考答案（124词）

Event notification identifies changes that need attention, such as failures, threshold crossings or important informational events. Short-lived problems may require frequent collection and prompt alarms, logs or displays.

Trend analysis studies longer-term behaviour. Continuous and consistent measurements establish a baseline and reveal changes in utilization, delay or availability. This supports planning before service becomes unacceptable.

The methods use different time scales. A daily average may hide a brief outage, while a stream of isolated alarms may not show gradual growth. Shorter polling intervals improve time resolution but create more traffic, processing and stored data. Longer intervals reduce overhead but may miss short events. A useful design combines event and trend information and records timestamps, units and context so that measurements can be interpreted correctly.

### 易错、变式与反馈

实时分析与长期平均不能互相代替；poll越频繁并非无成本。

变式：Explain baselines; choose collection intervals for outages versus capacity planning.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页30–39**，关键词`Monitoring for Trend Analysis`。

## T097

**Polling 带宽**

- 题型：计算；检索码：C17；依据：AI计算变式；题值并非真实试题。
- 知识点：Management architecture and scaling（管理架构、扩展与数据校验）。

**Question:** For 100 devices, 4 interfaces each and 8 parameters per interface, each value is 8 bytes with 60 bytes of overhead. Poll every 5 seconds. Find average traffic.

**中文题意：**复算课件管理流量例子。

### 计算步骤

测量数100×4×8=3200/cycle。
每项wire数据8+60=68bytes；每轮3200×68=217600bytes=1740800bits。
平均1740800/5=348160bit/s=348.16kb/s（十进制）。
日轮次86400/5=17280；日wire traffic=30081024000bits≈30.081Gb。
轮询同步突发可能显著高于平均；精确瞬时速率还需发送持续时间。

### 英文作答

Each polling cycle generates 1,740,800 bits. With a five-second interval, average management traffic is 348,160 bit/s, or 348.16 kb/s. The average is not the peak rate; synchronized polling can create a much larger short-term burst.

### 易错、变式与反馈

不能把1.7408Mb/cycle直接写1.7408Mb/s，除非说明1秒发完。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页35–39、59**，关键词`Management architecture and scaling`。

## T098

**存储量与counter速率**

- 题型：计算；检索码：C18；依据：AI计算变式；题值并非真实试题。
- 知识点：Management architecture and scaling（管理架构、扩展与数据校验）。

**Question:** Using C17, store only the 8-byte values. Find daily storage. Separately, a byte counter rises from 1,000,000 to 1,750,000 in 10 s; find the rate.

**中文题意：**区分线上流量、存储和累计计数器。

### 计算步骤

日storage=3200×8×17280=442368000bytes=442.368MB（不含metadata/index/复制）。
年按365天≈161.46432GB。课件“720轮/day”应为每hour；日轮次为17280。
Counter delta=750000bytes；速率750000×8/10=600000bit/s=600kb/s。
先检查counter重置/回卷，确认采样点与时间一致。

### 英文作答

Raw daily value storage is 442.368 MB, before metadata or database overhead. Counter-based rate uses the difference between samples: (1,750,000−1,000,000)×8/10 = 600 kb/s. Validate the counter and interval before trusting the result.

### 易错、变式与反馈

不要把wire的60byte overhead计入“只存8byte值”的问题。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页35–39、62–65**，关键词`Management architecture and scaling`。

## T099

**带内与带外网络管理**

- 题型：简答；检索码：Q03；依据：老师样题（Week13 PDF p.16）。
- 知识点：In-band and out-of-band management（带内与带外网络管理）。

**Question:** What are differences between in-band and out-of-band approaches in network management?

**中文题意：**网络管理中的带内与带外方法有什么区别？

### 中文思路

带内管理通过与用户及其应用相同的网络路径发送管理流量，通常避免另建管理网络的费用。但它竞争共享资源，也可能受到同样的拥塞或故障影响。管理员可能在最需要排查时失去访问。

带外管理为管理流量提供替代路径，通常使用单独管理网络。在许多用户网络故障中，它仍能支持监测和恢复，同时增加设备、成本和运行复杂度。两种方法都需要适当的访问保护。

带外访问并非在所有故障中都有保证，例如设备完全断电时。混合方案可以用带内进行日常管理，用替代路径支持恢复。应根据可用性需要、风险和预算选择，不能假定某一种永远最好。

### 英文参考答案（151词）

In-band management sends management traffic through the same network paths used by users and their applications. It normally avoids the cost of a separate management network. However, management traffic competes for shared resources and may be affected by the same congestion or failures as user traffic. Administrators may lose access when they most need to investigate a problem.

Out-of-band management provides an alternative path for management traffic, often through a separate management network. It can support monitoring and recovery during many failures of the user network. It also adds equipment, cost and operational complexity. Both approaches still require appropriate access protection.

Out-of-band access is not guaranteed during every failure, for example if a device loses all power. A hybrid design can use in-band access for routine management and an alternative path for recovery. The choice should follow availability needs, risk and budget, rather than assuming that one approach is always best.

### 易错、变式与反馈

比较维度不对齐；把带外说成永不失效；把in-band/out-of-band等同于centralized/distributed。

变式：为什么带外路径在业务链路故障时有帮助，却不能保证设备断电后仍能管理？

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页51–54**，关键词`In-band and Out-of-band Management`。

## T100

**Centralized、distributed、hierarchical management**

- 题型：简答；检索码：Q67；依据：范围扩展题。
- 知识点：Management architecture and scaling（管理架构、扩展与数据校验）。

**Question:** Compare centralized, distributed and hierarchical network management.

**中文题意：**比较三种管理架构。

### 中文思路

集中简易但聚合/故障风险；分布本地处理复杂协调；层级分工汇总。

### 英文参考答案（132词）

Centralized management collects control and information at a main management system. It can simplify administration and provide a common view, but it can concentrate traffic and create a significant failure point unless protected.

Distributed management places systems across different domains or locations. Local processing can improve scalability and reduce dependence on a single site, but coordination and consistent policy become harder. Hierarchical management separates responsibilities across levels, allowing local collection and higher-level summaries or control.

Choose the architecture according to network size, geography, reliability, staffing and cost. For example, a multi-campus network may benefit from local collection with a central service view. Distribution does not automatically remove every failure risk, and centralization does not forbid redundancy. State where information is collected, stored and acted on, and how those management systems remain reachable.

### 易错、变式与反馈

centralized≠必然一台物理主机；logical集中可有冗余。

变式：Choose a management model for a multi-site network and justify the trade-off.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页55–60、67–74**，关键词`Centralized, Distributed and Hierarchical Management`。

## T101

**Management traffic scaling**

- 题型：简答；检索码：Q65；依据：范围扩展题。
- 知识点：Management architecture and scaling（管理架构、扩展与数据校验）。

**Question:** How should management traffic and storage be estimated and controlled?

**中文题意：**如何估计与控制管理开销？

### 中文思路

D×I×P×(value+overhead)×8/T；存储未必含wire overhead；峰值另算。

### 英文参考答案（133词）

Estimate the number of devices, interfaces per device, parameters per interface and polling frequency. Multiply the number of measurements by the bytes generated per measurement, including relevant protocol overhead, to estimate traffic per polling cycle. Divide by the interval to obtain an average rate.

Storage is a separate calculation. It depends on which values and metadata are kept, their size and the retention period. Network protocol overhead is not automatically stored with every value. Polling bursts may also create higher short-term load than the average suggests.

The lecture gives LAN planning guidelines of roughly 2–5% management load and suggests review when it exceeds 10%. These are course heuristics, not universal limits. Reduce unnecessary parameters or polling frequency, distribute collection and use suitable aggregation. Critical management information still needs sufficient resources and timely delivery.

### 易错、变式与反馈

2–5%、10%是课件经验参考；不是协议硬上限。

变式：Calculate polling bandwidth or daily storage; distinguish average load from a burst.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页35–39、59–60**，关键词`Scaling of Network Management Traffic`。

## T102

**LAN/WAN 管理监测点的放置**

- 题型：简答；检索码：Q95；依据：缺口补题；依据课件的AI参考答案。
- 知识点：Management architecture and scaling（管理架构、扩展与数据校验）。

**Question:** Where does the lecture suggest placing monitoring devices in LANs and WANs, and why?

**中文题意：**解释课件LAN/WAN采集点建议。

### 中文思路

LAN起点每subnet一个monitor；WAN再看每WAN–LAN接口；同一monitor可兼任。目的是本地与跨站点测量/SLA验证，仍评估负载和成本。

### 英文参考答案（139词）

For a LAN, the lecture suggests starting with one monitoring device per subnet. Estimate device numbers, interfaces, measured parameters and polling frequency to check the resulting management traffic.

For a WAN, it suggests monitoring at each WAN–LAN interface in addition to relevant local monitoring. If a monitor already sits on a LAN subnet at that interface, it may collect information for both roles. Separate physical monitors are not automatically required for every label.

This placement helps observe conditions at each location and verify service across the wider network. For example, local measurements can be compared with WAN-boundary measurements to investigate where delay or loss occurs. These are starting guidelines rather than fixed universal rules. The final placement depends on traffic visibility, failure domains, security, cost and measurement needs. End-to-end service still requires suitable measurements across the complete relevant path.

### 易错、变式与反馈

per-subnet与per-interface是规划起点；别机械重复部署同一位置，也别把一条链路测量当全路径保证。

变式：先遮住答案复述；再换一个场景说明分类、机制或条件。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页59–60**，关键词`Scaling of Network Management Traffic`。

## T103

**Checks、数据与 MIB 选择**

- 题型：简答；检索码：Q66；依据：范围扩展题。
- 知识点：Management architecture and scaling（管理架构、扩展与数据校验）。

**Question:** Explain checks and balances, management-data handling and MIB selection.

**中文题意：**解释测量验证、存储和对象选择。

### 中文思路

重复测量查错/回卷/厂商差；短期本地长期归档；metadata；按目标选MIB/OSS。

### 英文参考答案（131词）

Checks and balances validate management information by comparing measurements or using independent collection points. They help detect recording errors, counter rollover, stuck values, changed variables and differences between vendors.

Management data needs a storage plan. Keep suitable information locally for event analysis and short-term trends, copy selected values for longer analysis and archive data when appropriate. Metadata should describe data types, timestamps and relationships so that later users understand what the values mean.

Choose MIBs according to the required tasks. Basic network health may need standard objects, while supported services, SLAs or vendor features may need additional objects. If management integrates with an operations support system, its northbound interface and data requirements must also be considered. Collecting everything without a purpose increases cost and can make useful information harder to find.

### 易错、变式与反馈

计数器回卷可能造成错误负数速率；不要直接当真实流量下降。

变式：Why are metadata and independent measurements necessary? Explain OSS integration.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页61–70**，关键词`Checks and Balances`。

## T104

**管理与其他组件的关系**

- 题型：简答；检索码：Q68；依据：范围扩展题。
- 知识点：Management architecture and scaling（管理架构、扩展与数据校验）。

**Question:** Explain the dependencies and external relationships of network management.

**中文题意：**解释管理组件依赖及与其他组件互动。

### 中文思路

依赖通信/存储/OSS；routing可达、performance双向影响、security控制路径。

### 英文参考答案（137词）

Management depends on reliable communication paths, sufficient capacity, storage and suitable device support. Integration with an operations support system adds interface and information requirements. These are important dependencies within the management solution.

Management also interacts with other architectures. Addressing and routing determine device reachability and management domains. Performance management needs measurements, but collecting them consumes resources and can affect user traffic. Security policies may restrict access even though management requires controlled visibility and configuration access.

The design must support important management flows without creating unnecessary exposure or overhead. For example, a separate management path can provide a fallback when the production path fails, but it must also be secured and maintained. Include management traffic in flow estimates and explain which information receives priority. A network is not fully manageable simply because its user traffic can be forwarded.

### 易错、变式与反馈

S3/Q03讲带内带外；本题重跨组件因果。

变式：Explain why management can both improve and reduce user performance.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → **PDF物理页67–74**，关键词`External Relationships`。

