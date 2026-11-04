# 09-Week8-网络性能

[在线逐题学习](../review-bank.html) · [审校说明](../audit-2026-11-04.md)

> 参考答案与教学解析由AI依据课程资料整理，不是官方rubric。考前练习不扩大考试可用资料。

## T085 · Performance goals 与 QoS

How should performance goals guide QoS deployment?

性能目标怎样决定QoS部署？

### 精简参考答案

Performance goals should come from requirements, flow specifications and maps. They explain which users or applications need particular capacity, delay or RMA levels. The designer should ask whether a mechanism is necessary, what problem it solves and whether it is sufficient.

A single-tier design applies a common performance approach to traffic. A multi-tier design gives selected groups different treatment. QoS can prioritize or allocate resources to important traffic when it shares infrastructure with other flows.

Start with a small number of manageable mechanisms in the places where they are needed. Do not introduce a feature only because it is new or interesting. It requires continued operation and maintenance. For example, prioritizing interactive teaching traffic may help during congestion, but it cannot create unlimited bandwidth or repair an overloaded end server. Verify the complete service against the goal.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：QoS 根据流量类别或单条流的服务需求配置不同处理方式；它分配已有资源，必须结合实际容量和端到端需求，不能凭优先级创造额外链路容量。

1. 性能目标来自需求与flow，不来自设备菜单有哪些新功能。先问机制是否必要、足够，再考虑长期维护。

2. single-tier与multi-tier描述服务区分；QoS可分配有限资源，不能创造无限容量，也不修复服务器瓶颈。需要真实混合负载下验证。

**英文关键句**：A mechanism should solve an identified problem.

机制应解决已识别的问题。 identified表示“已识别的”；要先有问题证据，后有机制选择。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：If there is no contention, does adding priority always improve the service?

**变式参考**：Not necessarily. Establish the actual problem and test whether the mechanism helps. It may add complexity without addressing a limiting resource.

**自查**：已检查并避开这些误区：QoS分配已有资源，不凭空创造capacity。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) · PDF 4–18 · 搜索 Developing Goals for Performance


## T086 · IntServ、RSVP 与 DiffServ

Compare IntServ and DiffServ, including the role of RSVP.

比较逐流预留与分类服务。

### 精简参考答案

IntServ provides support for individual flows along an end-to-end path. Resource reservation can give a flow specific treatment, but routers must maintain relevant state. RSVP is a signalling protocol used to request and maintain reservations; it does not itself carry the application data.

DiffServ groups traffic into classes and applies per-hop treatment to those classes. Packet markings help devices identify the intended class. The course includes best effort, assured forwarding and expedited forwarding. Class-based handling is generally more scalable than maintaining a reservation for every flow.

The approaches trade detailed individual control against scalability and operational complexity. A marking alone does not guarantee end-to-end performance. Devices and domains along the path need appropriate policies, capacity and support. Select the approach according to flow requirements and the size of the network.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：QoS 根据流量类别或单条流的服务需求配置不同处理方式；它分配已有资源，必须结合实际容量和端到端需求，不能凭优先级创造额外链路容量。

1. IntServ逐流资源状态较细；RSVP负责预留信令，不传应用数据；DiffServ按类逐跳处理更易扩展。

2. 标记不等于预留，逐跳不等于跨域端到端保证。根据流数量、资源、策略与运行能力比较，避免只写哪个“更快”。

**英文关键句**：RSVP signals reservations rather than carrying application data.

RSVP发送预留信令，而非承载应用数据。 rather than + 动词-ing作职责区分；reservation是“资源预留”。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：Does an RSVP message carry the video payload?

**变式参考**：No. RSVP signals resource reservations. The application data is carried separately, and the required path resources still need support.

**自查**：已检查并避开这些误区：RSVP是信令；DiffServ标记本身不等于端到端保证。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) · PDF 22–34 · 搜索 IntServ


## T087 · MPLS

Describe MPLS and explain how it can support performance architecture.

描述MPLS及与性能架构的关系。

### 精简参考答案

Multiprotocol Label Switching, or MPLS, forwards packets using labels within an MPLS network. A label edge router handles traffic entering or leaving that network. Label switching routers inside the network use label information to forward traffic along selected paths.

This separation can support traffic engineering and differentiated service treatment across a provider or enterprise backbone. It can help the network carry services such as voice, video and contracted business traffic on managed paths.

MPLS should still be part of a complete performance design. Labels alone do not establish every bandwidth, delay or availability guarantee. The network needs adequate resources, appropriate service policies and monitoring. A designer should connect MPLS choices to the required flows and SLAs and consider cost, compatibility, management skill and the effects of failures. Do not treat it simply as a faster replacement for all IP functions.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：QoS 根据流量类别或单条流的服务需求配置不同处理方式；它分配已有资源，必须结合实际容量和端到端需求，不能凭优先级创造额外链路容量。

1. MPLS核心动作是按标签转发；LER处理边界，LSR处理内部标签交换。traffic engineering需资源与政策配合。

2. 标签不自动带来延迟或可用性承诺，不能仅说“更快的IP”或“只能跑在Ethernet”。把机制连到具体业务与监测才有设计意义。

**英文关键句**：Labels alone do not establish a service guarantee.

仅有标签不能建立服务保证。 establish是“建立/确立”；alone指出必要机制与充分保证的区别。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Does adding labels guarantee a bandwidth SLA?

**变式参考**：No. The path needs adequate resources, suitable policies and monitoring. Labels support forwarding and engineering but do not create capacity.

**自查**：已检查并避开这些误区：不要把MPLS限定为只能运行在Ethernet，或把标签直接等同加密。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) · PDF 24–26、35–37 · 搜索 MultiProtocol Label Switching


## T141 · DiffServ 的标记、域与服务类

Explain how DiffServ uses packet classification, DSCP markings and per-hop behaviour. Distinguish best effort, assured forwarding and expedited forwarding.

连起分类、标记、域边界和逐跳行为，不把标记误当端到端保证。

### 精简参考答案

DiffServ groups traffic into classes rather than maintaining a separate reservation for every application flow. Classification identifies the relevant traffic. A differentiated services codepoint, or DSCP, in the IP header indicates the intended forwarding treatment. Devices apply configured per-hop behaviour to the class.

A DiffServ domain contains nodes following a common service policy. Boundary nodes can classify, mark and condition traffic as it enters or leaves. Policies between domains must be coordinated if a service crosses them.

Best effort provides ordinary service without a specific performance commitment. Assured forwarding provides differentiated forwarding and drop treatment under configured conditions. Expedited forwarding is designed to support low delay and low loss when traffic is properly controlled and sufficient resources exist.

A marking alone does not create capacity or guarantee an entire path. For example, marking teaching traffic requires matching queue policies and admission or traffic controls. The architecture reference is RFC 2475; the slide’s RFC 2745 label is a citation error.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：QoS 根据流量类别或单条流的服务需求配置不同处理方式；它分配已有资源，必须结合实际容量和端到端需求，不能凭优先级创造额外链路容量。

1. 分类先辨认流，DSCP标记期望类，节点按policy落实per-hop behaviour；域边界负责承接、改标或调节。

2. BE/AF/EF不能被理解成贴标签就承诺整路。AF涉及转发/丢弃差别，EF低延迟低丢失也需控制流量与足够资源，跨域还需协商一致。

**英文关键句**：A marking indicates treatment but does not create resources.

标记指示处理方式，但不创造资源。 indicate意为“指示”；but补充分界，避免把标记当物理能力。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A packet is marked EF, but a downstream domain ignores it. Is end-to-end low delay proved?

**变式参考**：No. Marking alone is insufficient. All relevant domains need suitable treatment, resources and compatible service agreements.

**自查**：已检查并避开这些误区：BE/AF/EF不能被理解成贴标签就承诺整路。AF涉及转发/丢弃差别，EF低延迟低丢失也需控制流量与足够资源，跨域还需协商一致。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) · PDF 29–37 · 搜索 Differentiated Services


## T088 · Resource control 与 traffic conditioning

Explain prioritization, admission control and traffic conditioning.

解释资源控制和流量调节。

### 精简参考答案

Resource control determines how limited network resources are used. Prioritization ranks traffic according to importance or urgency. Admission control may refuse a new flow when accepting it would prevent existing commitments from being met.

Traffic conditioning includes classification, metering, shaping and dropping. Classification identifies the traffic class. Metering measures rates or bursts and compares them with a profile, such as an SLA. Shaping delays packets to make a flow fit an allowed profile. Dropping discards selected packets.

These mechanisms have different effects. Shaping can smooth traffic but adds waiting time and needs buffers. Dropping may protect other traffic but harms the discarded flow. The designer should choose behaviour according to application tolerance and policy. For example, delaying a flexible backup may be acceptable, while the same delay could make an interactive application unusable.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：资源控制通过接入、分类、计量、整形、丢弃及发送顺序控制竞争资源的流量；排队负责等待保存，调度决定先服务谁。

1. classification分流类，metering比较profile，shaping缓冲延后，dropping丢弃；admission先判断能否接纳新流。

2. 形状调整对backup可接受，对实时业务可能违背时限。回答时要解释每一步改变了什么，不能把meter测量写成自动限制。

**英文关键句**：Measurement and enforcement are different functions.

测量和执行限制是不同功能。 enforcement是“落实/执行规则”；用具体shaping动作说明它。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A meter detects excess traffic. Has the rate necessarily been reduced?

**变式参考**：No. Metering measures conformance. A configured action such as shaping or dropping must change how traffic is handled.

**自查**：已检查并避开这些误区：metering只测量，不自动等于限速；shaping与dropping不同。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) · PDF 39–45 · 搜索 Resource Control


## T089 · Metering、shaping 与逐包等待

A meter observes 200 packets/s at 1500 bytes/packet. A traffic profile allows 1.5 Mb/s. A shaper is explicitly configured to release 100 packets/s. Calculate the rates and discuss whether adding a fixed 10 ms delay to every packet necessarily produces the same output rate.

复算流量速率，并区分整体输出调度与每包固定延迟。

### 精简参考答案

The input payload rate is 2.4 Mb/s and exceeds the 1.5 Mb/s profile. The explicitly configured output rate is 1.2 Mb/s. Delaying every packet by a fixed 10 ms does not necessarily halve throughput; the output rate depends on how release times are scheduled. Shaping controls that schedule and can add queuing delay.

### 逐步解法

输入200×1500×8=2,400,000bit/s=2.4Mb/s，超过1.5Mb/s。
明确配置后的输出100×1500×8=1.2Mb/s，低于1.5Mb/s。
保持1500byte等长包，理想最大平均输出包率1,500,000/(1500×8)=125packet/s；未计额外overhead。
不能仅凭“每个包额外等待10ms”推导成100packet/s：并行/流水处理时，整体平移10ms并不改变包间间隔。只有额外明确每10ms至多释放一个包等服务节奏，才有该输出频率。课件p.44的例子说明shaping降速，数值解释需保留调度假设。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：资源控制通过接入、分类、计量、整形、丢弃及发送顺序控制竞争资源的流量；排队负责等待保存，调度决定先服务谁。

1. meter把到达率2.4Mb/s与profile比，shaper按明确100pps输出1.2Mb/s，两个动作不同。

2. 每包统一加10ms仅整体平移时间，不一定改变间隔；只有明定每10ms至多释放1包才对应100pps。长期输入大于输出时，还需讨论队列/丢包而非无限存。

**英文关键句**：A fixed delay does not define the output spacing.

固定等待不规定输出间隔。 spacing是“间隔”；define区别于increase，用来指出缺少的调度条件。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：A shaper releases 80 packets/s of 1000 bytes each. What is the payload rate? Does adding a fixed 5 ms delay alone imply 200 packets/s?

**变式参考**：Rate = 80×1000×8 = 640000 bit/s = 0.64 Mb/s. A fixed delay alone does not define release spacing, so 200 packets/s cannot be inferred.

**自查**：已检查并避开这些误区：10ms＝0.01s，但1/0.01得到packet/s需要“一次服务一个包”等明确条件。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) · PDF 41–44 · 搜索 Resource Control


## T090 · Queue 与 scheduling

Compare FIFO, priority, round robin and weighted fair queuing.

比较排队与调度方法。

### 精简参考答案

Queuing stores packets while they wait for processing or transmission. Scheduling decides which waiting packet or queue is served next. These are related functions, but they are not identical.

FIFO serves packets in arrival order and is simple. Strict priority serves higher-priority traffic first, which can reduce delay for that class but may leave lower-priority traffic waiting under sustained load. Round robin cycles through queues and serves each in turn. Weighted fair queuing assigns different shares according to configured weights.

Queue management, including RED or WRED, can discard packets before a buffer becomes completely full to help control congestion. The choice should reflect service priorities and fairness. A larger buffer may absorb a burst but can also increase delay. Test behaviour under mixed traffic rather than assuming one queue policy meets every requirement.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：资源控制通过接入、分类、计量、整形、丢弃及发送顺序控制竞争资源的流量；排队负责等待保存，调度决定先服务谁。

1. queue保存待服务包，scheduler决定先服务谁；FIFO按到达、priority先高类、RR轮流、WFQ按权重分配。

2. RED/WRED属于队列管理，不是同一组调度名称。大buffer可吸收burst但也延长等待，strict priority要防低类长期饥饿。

**英文关键句**：A larger buffer can increase waiting time.

更大缓冲区可能增加等待时间。 increase直接接量；can指出可能结果，避免把buffer大小当性能单向按钮。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：Can a larger buffer always reduce interactive delay?

**变式参考**：No. It may reduce immediate drops but allow longer waiting. Evaluate buffer size and scheduling together under the application’s delay limit.

**自查**：已检查并避开这些误区：queue management、scheduling是相关但不同层面的机制。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) · PDF 45–49 · 搜索 Scheduling Policies


## T091 · SLA、policy 与 QoS 的闭环

Explain how SLAs, policies and QoS work together.

解释承诺、规则、执行和验证的联系。

### 精简参考答案

A service level agreement, or SLA, records expected service and the provider’s responsibilities. Performance elements may include data rate, burst tolerance, upstream and downstream service, delay and RMA. A useful SLA also needs clear conditions and measurement methods.

Policies connect the organization’s management goals with rules about resources, access and service priorities. QoS mechanisms enforce relevant treatment at network devices. Monitoring then checks whether the delivered service matches the commitment and provides feedback for adjustment.

For example, a teaching service may have an agreed delay target and capacity level. A policy gives it suitable priority, devices implement that policy, and measurements verify the result. An SLA document alone does not reserve resources. Equally, enabling QoS without a clear goal does not show that users are receiving the service they need.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：SLA 记录服务水平和责任，policy 表达资源使用规则，QoS 等设备机制落实规则；测量与反馈帮助检查承诺是否兑现。

1. 闭环记“承诺—规则—设备动作—证据”：SLA说明交付什么与如何测，policy把目标变规则，QoS落实，monitoring核对。

2. SLA纸面不自动预留资源，开QoS也不证明达标；同一个教学例子贯穿四步才能解释它们如何协作。

**英文关键句**：Monitoring checks delivery against the commitment.

监测把交付结果与承诺比较。 check A against B表示“对照B检查A”；against不是对抗。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：An SLA is signed, but no devices are configured. Is service assured?

**变式参考**：No. The commitment requires resources, configuration and verification. Monitoring should compare delivered service with the stated measurement conditions.

**自查**：已检查并避开这些误区：承诺不能超出机制和资源；上/下行需分别定义。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) · PDF 50–62 · 搜索 Service Level Agreements


## T142 · 性能机制放置与组件之间的取舍

How should performance mechanisms be placed, and how do performance architecture, management and security interact?

说明逐流/聚合机制位置，管理验证与安全处理成本。

### 精简参考答案

Performance mechanisms should follow requirements, flow maps, goals and the operating environment. Detailed treatment of individual flows may be useful near access points, while aggregate treatment can reduce complexity where many flows meet. These are placement guidelines rather than mandatory locations for every network.

Internal choices must balance service detail, scalability and operating effort. A mechanism should be necessary for the goal and sufficient under the expected conditions. The complete path still needs appropriate resources.

Management configures mechanisms, observes performance and verifies service commitments. Its own measurements consume traffic and processing resources. Security inspection and encryption can also consume capacity and add delay. Increasing link bandwidth alone may not remove a processing bottleneck.

For example, an interactive teaching flow can receive controlled priority while backups are shaped, with monitoring at relevant boundaries. The designer should then test delay, loss, useful access and recovery under realistic load. Documenting these relationships makes trade-offs visible and connects performance claims to evidence.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：SLA 记录服务水平和责任，policy 表达资源使用规则，QoS 等设备机制落实规则；测量与反馈帮助检查承诺是否兑现。

1. 逐流细粒度处理适合靠近接入，聚合处理适合多流交汇，是可扩展性思路而非固定设备位置命令。

2. management配置并验证QoS，也占资源；security处理影响delay/capacity。测试需包括混合负载、允许访问与恢复，不能只测一条空闲链路。

**英文关键句**：Placement should follow flow requirements and operating conditions.

位置选择应依据流需求和运行条件。 follow在这里是“以……为依据”；operating conditions包含负载与故障条件。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A link is upgraded but encryption remains overloaded. Why may delay persist?

**变式参考**：The bottleneck is processing rather than link transmission. Coordinate security implementation and performance requirements, then verify the full service under load.

**自查**：已检查并避开这些误区：management配置并验证QoS，也占资源；security处理影响delay/capacity。测试需包括混合负载、允许访问与恢复，不能只测一条空闲链路。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) · PDF 58–62 · 搜索 Architectural Considerations

