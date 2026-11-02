# 09-Week8-网络性能

返回：[期末题库总入口](../README.md)；[旧题号与当前题号对照](../question-map.md)。

本册按对应课件的可见页序排列。计算与补题放到其知识点附近；Workshop Flow题接在Week5 Flow主线，原资源仍明确标为Workshop Week7a。综合长答统一放最后。

来源页码按PDF文件从第1页起计，包含封面。英文答案为教学参考，不是官方评分答案。老师样题保留标记。使用条件与假设属于答案的一部分。

## T085

**Performance goals 与 QoS**

- 题型：简答；检索码：Q55；依据：范围扩展题。
- 知识点：Quality of Service（服务质量机制）。

**Question:** How should performance goals guide QoS deployment?

**中文题意：**性能目标怎样决定QoS部署？

### 中文思路

必要且充分；需求/flowspec为输入；single/multitier；少而可维护。

### 英文参考答案（137词）

Performance goals should come from requirements, flow specifications and maps. They explain which users or applications need particular capacity, delay or RMA levels. The designer should ask whether a mechanism is necessary, what problem it solves and whether it is sufficient.

A single-tier design applies a common performance approach to traffic. A multi-tier design gives selected groups different treatment. QoS can prioritize or allocate resources to important traffic when it shares infrastructure with other flows.

Start with a small number of manageable mechanisms in the places where they are needed. Do not introduce a feature only because it is new or interesting. It requires continued operation and maintenance. For example, prioritizing interactive teaching traffic may help during congestion, but it cannot create unlimited bandwidth or repair an overloaded end server. Verify the complete service against the goal.

### 易错、变式与反馈

QoS分配已有资源，不凭空创造capacity。

变式：Explain necessary versus sufficient performance mechanisms; compare QoS with extra capacity.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) → **PDF物理页4–18**，关键词`Developing Goals for Performance`。

## T086

**IntServ、RSVP 与 DiffServ**

- 题型：简答；检索码：Q56；依据：范围扩展题。
- 知识点：Quality of Service（服务质量机制）。

**Question:** Compare IntServ and DiffServ, including the role of RSVP.

**中文题意：**比较逐流预留与分类服务。

### 中文思路

IntServ细粒度逐流状态、RSVP信令；DiffServ聚类逐跳、可扩展；EF/AF/BE。

### 英文参考答案（130词）

IntServ provides support for individual flows along an end-to-end path. Resource reservation can give a flow specific treatment, but routers must maintain relevant state. RSVP is a signalling protocol used to request and maintain reservations; it does not itself carry the application data.

DiffServ groups traffic into classes and applies per-hop treatment to those classes. Packet markings help devices identify the intended class. The course includes best effort, assured forwarding and expedited forwarding. Class-based handling is generally more scalable than maintaining a reservation for every flow.

The approaches trade detailed individual control against scalability and operational complexity. A marking alone does not guarantee end-to-end performance. Devices and domains along the path need appropriate policies, capacity and support. Select the approach according to flow requirements and the size of the network.

### 易错、变式与反馈

RSVP是信令；DiffServ标记本身不等于端到端保证。

变式：Explain per-flow versus per-class support and BE/AF/EF.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) → **PDF物理页22–34**，关键词`IntServ`。

## T087

**MPLS**

- 题型：简答；检索码：Q57；依据：范围扩展题。
- 知识点：Quality of Service（服务质量机制）。

**Question:** Describe MPLS and explain how it can support performance architecture.

**中文题意：**描述MPLS及与性能架构的关系。

### 中文思路

LER入口加标签；LSR按标签处理；路径工程支持QoS但非自动无限保证。

### 英文参考答案（140词）

Multiprotocol Label Switching, or MPLS, forwards packets using labels within an MPLS network. A label edge router handles traffic entering or leaving that network. Label switching routers inside the network use label information to forward traffic along selected paths.

This separation can support traffic engineering and differentiated service treatment across a provider or enterprise backbone. It can help the network carry services such as voice, video and contracted business traffic on managed paths.

MPLS should still be part of a complete performance design. Labels alone do not establish every bandwidth, delay or availability guarantee. The network needs adequate resources, appropriate service policies and monitoring. A designer should connect MPLS choices to the required flows and SLAs and consider cost, compatibility, management skill and the effects of failures. Do not treat it simply as a faster replacement for all IP functions.

### 易错、变式与反馈

不要把MPLS限定为只能运行在Ethernet，或把标签直接等同加密。

变式：Explain LER and LSR roles; relate MPLS to SLA support.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) → **PDF物理页24–26、35–37**，关键词`MultiProtocol Label Switching`。

## T088

**Resource control 与 traffic conditioning**

- 题型：简答；检索码：Q58；依据：范围扩展题。
- 知识点：Resource control（资源控制与队列调度）。

**Question:** Explain prioritization, admission control and traffic conditioning.

**中文题意：**解释资源控制和流量调节。

### 中文思路

优先级、准入；classification→metering→shaping/dropping；shaping加等待。

### 英文参考答案（133词）

Resource control determines how limited network resources are used. Prioritization ranks traffic according to importance or urgency. Admission control may refuse a new flow when accepting it would prevent existing commitments from being met.

Traffic conditioning includes classification, metering, shaping and dropping. Classification identifies the traffic class. Metering measures rates or bursts and compares them with a profile, such as an SLA. Shaping delays packets to make a flow fit an allowed profile. Dropping discards selected packets.

These mechanisms have different effects. Shaping can smooth traffic but adds waiting time and needs buffers. Dropping may protect other traffic but harms the discarded flow. The designer should choose behaviour according to application tolerance and policy. For example, delaying a flexible backup may be acceptable, while the same delay could make an interactive application unusable.

### 易错、变式与反馈

metering只测量，不自动等于限速；shaping与dropping不同。

变式：Calculate a traffic rate; distinguish shaping from policing or dropping.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) → **PDF物理页39–45**，关键词`Resource Control`。

## T089

**Metering、shaping 与逐包等待**

- 题型：计算；检索码：C22；依据：缺口数值补题；AI自拟值或原表复算，见题内说明。
- 知识点：Resource control（资源控制与队列调度）。

**Question:** A meter observes 200 packets/s at 1500 bytes/packet. A traffic profile allows 1.5 Mb/s. A shaper is explicitly configured to release 100 packets/s. Calculate the rates and discuss whether adding a fixed 10 ms delay to every packet necessarily produces the same output rate.

**中文题意：**复算流量速率，并区分整体输出调度与每包固定延迟。

### 计算步骤

输入200×1500×8=2,400,000bit/s=2.4Mb/s，超过1.5Mb/s。
明确配置后的输出100×1500×8=1.2Mb/s，低于1.5Mb/s。
保持1500byte等长包，理想最大平均输出包率1,500,000/(1500×8)=125packet/s；未计额外overhead。
不能仅凭“每个包额外等待10ms”推导成100packet/s：并行/流水处理时，整体平移10ms并不改变包间间隔。只有额外明确每10ms至多释放一个包等服务节奏，才有该输出频率。课件p.44的例子说明shaping降速，数值解释需保留调度假设。

### 英文作答

The input payload rate is 2.4 Mb/s and exceeds the 1.5 Mb/s profile. The explicitly configured output rate is 1.2 Mb/s. Delaying every packet by a fixed 10 ms does not necessarily halve throughput; the output rate depends on how release times are scheduled. Shaping controls that schedule and can add queuing delay.

### 易错、变式与反馈

10ms＝0.01s，但1/0.01得到packet/s需要“一次服务一个包”等明确条件。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) → **PDF物理页41–44**，关键词`Resource Control`。

## T090

**Queue 与 scheduling**

- 题型：简答；检索码：Q59；依据：范围扩展题。
- 知识点：Resource control（资源控制与队列调度）。

**Question:** Compare FIFO, priority, round robin and weighted fair queuing.

**中文题意：**比较排队与调度方法。

### 中文思路

queue存，schedule选；FIFO到达先后；priority饿死风险；RR轮流；WFQ权重。

### 英文参考答案（133词）

Queuing stores packets while they wait for processing or transmission. Scheduling decides which waiting packet or queue is served next. These are related functions, but they are not identical.

FIFO serves packets in arrival order and is simple. Strict priority serves higher-priority traffic first, which can reduce delay for that class but may leave lower-priority traffic waiting under sustained load. Round robin cycles through queues and serves each in turn. Weighted fair queuing assigns different shares according to configured weights.

Queue management, including RED or WRED, can discard packets before a buffer becomes completely full to help control congestion. The choice should reflect service priorities and fairness. A larger buffer may absorb a burst but can also increase delay. Test behaviour under mixed traffic rather than assuming one queue policy meets every requirement.

### 易错、变式与反馈

queue management、scheduling是相关但不同层面的机制。

变式：Why can strict priority cause starvation? How do weights affect service?

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) → **PDF物理页45–49**，关键词`Scheduling Policies`。

## T091

**SLA、policy 与 QoS 的闭环**

- 题型：简答；检索码：Q60；依据：范围扩展题。
- 知识点：SLA and performance policies（服务级别协议与性能政策）。

**Question:** Explain how SLAs, policies and QoS work together.

**中文题意：**解释承诺、规则、执行和验证的联系。

### 中文思路

SLA约定；policy翻译组织目标；QoS执行；measurement验证反馈。

### 英文参考答案（130词）

A service level agreement, or SLA, records expected service and the provider’s responsibilities. Performance elements may include data rate, burst tolerance, upstream and downstream service, delay and RMA. A useful SLA also needs clear conditions and measurement methods.

Policies connect the organization’s management goals with rules about resources, access and service priorities. QoS mechanisms enforce relevant treatment at network devices. Monitoring then checks whether the delivered service matches the commitment and provides feedback for adjustment.

For example, a teaching service may have an agreed delay target and capacity level. A policy gives it suitable priority, devices implement that policy, and measurements verify the result. An SLA document alone does not reserve resources. Equally, enabling QoS without a clear goal does not show that users are receiving the service they need.

### 易错、变式与反馈

承诺不能超出机制和资源；上/下行需分别定义。

变式：Give an example of an internal dependency between QoS, SLA and policy.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) → **PDF物理页50–62**，关键词`Service Level Agreements`。

