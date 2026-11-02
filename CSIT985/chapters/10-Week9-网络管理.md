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

<!-- answer-guidance:T092:start -->
### 组织方式与答题思路

**任务类型：**两套分类＋联系。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按business→service→network→element→network-element列层级。
2. 解释FCAPS五功能。
3. 说明层级与功能是不同观察维度。
4. 用服务目标落到设备动作的例子连接。

**现有参考答案的组织方式：**

- 第1段：管理层级及各层范围。
- 第2段：FCAPS五域。
- 第3段：从业务到设备的例子与管理基础设施。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **5–16**；课件主题：Network Management Architectures。

搜索词：`FCAPS`；`business management`；`element`。

查到后确认：核对五层名称和FCAPS五域，避免互相替代。

**换问法时：**题干同时问hierarchy和FCAPS时，两套清单都要完整。
<!-- answer-guidance:T092:end -->

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

<!-- answer-guidance:T093:start -->
### 组织方式与答题思路

**任务类型：**比较＋课程语境。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 说明SNMP的manager/agent/MIB及poll/trap。
2. 说明CMIP的OSI背景和功能复杂度。
3. 解释CMOT全称。
4. 比较能力与复杂度，并标明本课重点和历史背景。

**现有参考答案的组织方式：**

- 第1段：SNMP功能及课程重点。
- 第2段：CMIP/CMOT背景与复杂度。
- 第3段：能力/复杂度取舍及MIB边界。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **18–24**；课件主题：Network Management Mechanisms。

搜索词：`SNMP`；`CMIP`；`CMOT`。

查到后确认：核对本课protocol emphasis，不将历史背景扩成配置考点。

**换问法时：**若只问compare，按任务、复杂度、设备支持与运维对照。
<!-- answer-guidance:T093:end -->

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

<!-- answer-guidance:T094:start -->
### 组织方式与答题思路

**任务类型：**对象关系＋数据解释。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. manager通过SNMP与device agent通信。
2. MIB定义对象及含义。
3. 说明poll与trap及counter怎样得到rate。
4. 补SNMPv3和按任务选对象的条件。

**现有参考答案的组织方式：**

- 第1段：SNMP、manager和agent关系。
- 第2段：MIB对象定义及counter例子。
- 第3段：poll/trap、差分rate和安全条件。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **18–25**；课件主题：MIB。

搜索词：`SNMP`；`agent`；`manager`；`MIB`；`counter`。

查到后确认：核对MIB不是历史数据库，counter是累计量而非当前速率。

**换问法时：**若题给两个counter，先检查时间、重置/回卷，再用差值求速率。
<!-- answer-guidance:T094:end -->

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

<!-- answer-guidance:T095:start -->
### 组织方式与答题思路

**任务类型：**区分＋闭环。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. monitoring说明采集处理显示归档。
2. instrumentation说明工具与访问能力。
3. configuration说明修改参数。
4. 用检测拥塞→改queue policy说明配合与测量边界。

**现有参考答案的组织方式：**

- 第1段：monitoring的任务与范围。
- 第2段：instrumentation工具与准确性。
- 第3段：configuration及三者闭环例子。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **26–46**；课件主题：Monitoring Mechanisms。

搜索词：`monitoring`；`instrumentation`；`configuration`。

查到后确认：核对三类机制各做什么，找同一事件的完整处理链。

**换问法时：**若问why distinguish，说明看到问题、获得数据和改变系统不是同一个动作。
<!-- answer-guidance:T095:end -->

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

<!-- answer-guidance:T096:start -->
### 组织方式与答题思路

**任务类型：**比较＋轮询取舍。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按时间尺度和目的比较event与trend。
2. event用来及时发现变化，trend建立baseline和看增长。
3. 比较短/长poll interval的分辨率与开销。
4. 说明组合使用和时间单位上下文。

**现有参考答案的组织方式：**

- 第1段：event notification的对象与及时性。
- 第2段：trend analysis的长期作用。
- 第3段：时间尺度、polling成本与组合。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **30–39**；课件主题：Monitoring for Trend Analysis。

搜索词：`event`；`trend`；`polling`；`baseline`。

查到后确认：核对事件和趋势的测量周期及poll间隔影响。

**换问法时：**若题给短暂故障，说明长间隔可能漏掉；不给未测量的精确漏检概率。
<!-- answer-guidance:T096:end -->

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

<!-- answer-guidance:T097:start -->
### 组织方式与答题思路

**任务类型：**轮询带宽。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 设备×接口×参数求每轮测量数。
2. value+wire overhead求每项bytes。
3. 乘8并除poll interval得平均bit/s。
4. 若问日量再乘日轮次。
5. 区分平均与同步突发。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **35–39、59**；课件主题：Management architecture and scaling。

搜索词：`polling`；`overhead`；`management traffic`。

查到后确认：核对每参数消息是否有给定overhead及interval单位。

**换问法时：**不能用平均值声称瞬时峰值；若消息打包方式变了要重算overhead。
<!-- answer-guidance:T097:end -->

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

<!-- answer-guidance:T098:start -->
### 组织方式与答题思路

**任务类型：**存储＋counter速率。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 存储只用实际保留的value bytes。
2. 乘每轮数量和86400/interval。
3. 另题以counter差×8/时间求bit rate。
4. 核对metadata、复制和counter重置/回卷。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **35–39、62–65**；课件主题：Management architecture and scaling。

搜索词：`storage`；`counter`；`polling interval`。

查到后确认：核对wire与stored bytes区别、hour/day轮次和累计counter含义。

**换问法时：**若新counter小于旧值，先查重置/回卷，不直接给负流量。
<!-- answer-guidance:T098:end -->

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

<!-- answer-guidance:T099:start -->
### 组织方式与答题思路

**任务类型：**按维度比较＋选型。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 先按路径是否与用户共享比较。
2. 再按业务网故障时的访问能力比较。
3. 再写成本、复杂度与安全条件。
4. 说明带外仍有供电等限制，可按需求混合。

**现有参考答案的组织方式：**

- 第1段：in-band路径、低独立成本与共享故障。
- 第2段：out-of-band替代路径、恢复能力和代价。
- 第3段：供电边界、混合方案与选择依据。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **51–54**；课件主题：In-band and Out-of-band Management。

搜索词：`in-band`；`out-of-band`；`management`。

查到后确认：核对management traffic路径、故障依赖和成本。

**换问法时：**若给故障，先判断故障是否也影响替代路径与设备供电，再谈带外可用性。
<!-- answer-guidance:T099:end -->

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

<!-- answer-guidance:T100:start -->
### 组织方式与答题思路

**任务类型：**多方案比较＋选型。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按信息/控制放置比较集中、分布、层级。
2. 逐项写管理便利、汇聚故障、扩展和协调代价。
3. 给多校园组织方式。
4. 说明冗余与通信可达性条件。

**现有参考答案的组织方式：**

- 第1段：centralized特征与风险。
- 第2段：distributed和hierarchical特征与协调。
- 第3段：选型因素、校园例子及恢复边界。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **55–60、67–74**；课件主题：Centralized, Distributed and Hierarchical Management。

搜索词：`centralized`；`distributed`；`hierarchical management`。

查到后确认：看管理系统在哪里收集、存储和行动，而不只看网络拓扑。

**换问法时：**若给恢复要求，说明管理系统和管理路径怎样继续可达。
<!-- answer-guidance:T100:end -->

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

<!-- answer-guidance:T101:start -->
### 组织方式与答题思路

**任务类型：**估算方法＋控制。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 用device×interfaces×parameters得到每轮测量数。
2. 乘每项wire bytes并除interval求速率。
3. 存储按保留内容和retention另算。
4. 用减少无用采集、分布和聚合控制负载并保留时效。

**现有参考答案的组织方式：**

- 第1段：带宽估算输入与公式思路。
- 第2段：storage、metadata、retention与突发。
- 第3段：课件经验值及降低开销的办法。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **35–39、59–60**；课件主题：Scaling of Network Management Traffic。

搜索词：`management traffic`；`polling`；`storage`。

查到后确认：核对2–5%与10%为课件规划guidelines，不是协议硬限制。

**换问法时：**若数字变化，先区分wire overhead是否计入存储，再重新计算。
<!-- answer-guidance:T101:end -->

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

<!-- answer-guidance:T102:start -->
### 组织方式与答题思路

**任务类型：**位置＋原因。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. LAN先按每subnet一监测点的课件建议。
2. WAN在WAN–LAN接口增加适当监测。
3. 说明一个点可兼具多个观察角色。
4. 用定位delay/loss解释位置价值及实际条件。

**现有参考答案的组织方式：**

- 第1段：LAN起点建议及负载估算。
- 第2段：WAN接口建议与监测点复用。
- 第3段：位置用途、例子、非硬规则与端到端验证。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **59–60**；课件主题：Scaling of Network Management Traffic。

搜索词：`monitoring`；`LAN`；`WAN interface`。

查到后确认：看monitor placement图和LAN/WAN说明，区分角色与物理设备数。

**换问法时：**若改拓扑，按可见流量与故障域放点，不机械按标签复制设备。
<!-- answer-guidance:T102:end -->

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

<!-- answer-guidance:T103:start -->
### 组织方式与答题思路

**任务类型：**三任务解释。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. checks/balances用独立或交叉测量验证数据。
2. data handling按本地、长期、归档和metadata规划。
3. MIB selection按任务、SLA和vendor支持选择。
4. 补OSS northbound要求及不盲采集。

**现有参考答案的组织方式：**

- 第1段：交叉核对及可发现的数据问题。
- 第2段：管理数据保存与metadata。
- 第3段：MIB按需选择、OSS集成与采集成本。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **61–70**；课件主题：Checks and Balances。

搜索词：`checks and balances`；`metadata`；`MIB`；`OSS`。

查到后确认：核对数据错误类别与MIB选择依据，区分对象定义和保存历史。

**换问法时：**若给异常counter，先查重置/回卷/厂商语义，不先断言业务流量突变。
<!-- answer-guidance:T103:end -->

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

<!-- answer-guidance:T104:start -->
### 组织方式与答题思路

**任务类型：**依赖＋跨组件影响。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 先列管理依赖的路径、容量、存储与device support。
2. 再连addressing/routing、performance、security。
3. 写管理消耗资源与需要受控访问的双向关系。
4. 用恢复路径说明flow估计与优先级。

**现有参考答案的组织方式：**

- 第1段：管理基础依赖与OSS要求。
- 第2段：管理和其他组件的关系。
- 第3段：恢复访问例子、开销与flow优先级。

**回Moodle核对：**

- [Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) → PDF物理页 **67–74**；课件主题：External Relationships。

搜索词：`management dependencies`；`external`；`security`。

查到后确认：核对管理数据的流量路径及与其他组件的相互影响。

**换问法时：**若问internal/external，明确关系双方归属，避免按机房位置判断。
<!-- answer-guidance:T104:end -->

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

