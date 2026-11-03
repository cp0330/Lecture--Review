# 05-Week5-Flow分析

[在线逐题学习](../review-bank.html) · [审校说明](../audit-2026-11-04.md)

> 参考答案与教学解析由AI依据课程资料整理，不是官方rubric。考前练习不扩大考试可用资料。

## T038 · Flow 的定义与建立

What is a traffic flow, and how is it developed from requirements?

定义 flow 并说明建立步骤。

### 精简参考答案

A traffic flow is a set of network traffic with common attributes, such as source, destination, information type and direction. It is an end-to-end entity that can be associated with an application, device or user.

To develop flows, identify application requirements and locations, locate data sources and sinks, apply suitable flow models and combine performance requirements into flow specifications. A source produces data, while a sink receives it. The same device may perform both roles.

An individual flow represents a single application session. A composite flow combines flows sharing a link, path or network. A critical flow has particular importance or strict requirements. A flow map connects requirements to places in the network. This helps reveal shared paths, bottlenecks and where service mechanisms must be applied.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：流量是具有共同属性的一组网络通信；把服务需求与源、目的地及位置结合，才能确定哪些路径需要相应容量、延迟和可靠性。

1. flow把需求连接到实际源、汇、方向和路径；同一设备可在不同消息中既是source又是sink。

2. individual、composite、critical分别强调粒度、聚合和重要性，不能互相替换。共享路径揭示争用，流图本身不自动给出速率或物理布线。

**英文关键句**：The same device can be both source and sink.

同一设备可以既是源又是汇。 both A and B表示同时具两种角色；要说清分别针对哪类数据。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：A server receives requests and sends replies. Is it only a source?

**变式参考**：No. It is a sink for requests and a source for responses. Label each direction and its requirements separately.

**自查**：不要把 flow 当成任意一条物理线；同一设备可同时 source/sink。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 5 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607048) · PDF 6–29 · 搜索 Flows


## T039 · 校园四类Flow：逐类图与合并图

Using Workshop Week7a Exercise 1, identify sources and sinks for all four flow types, draw each type, and combine them into one logical flow map. State assumptions where endpoints are not uniquely specified.

按原图完成四类source/sink、各类型flow map与合并图；题目没唯一指定的端点要写假设。

### 精简参考答案

I keep the original device locations: compute servers in Buildings A, B and C; five compute servers and two storage servers in Main Engineering; and the external-access server inside the campus. Off-site archive storage and external users remain outside.

Type 1 connects participating computing devices. I use possible bidirectional communication between the compute groups; the workload must confirm the actual communicating pairs. Type 2 sends data from Main Engineering compute servers to its storage servers.

For Type 3, I assume the labelled external-access server is the intended migration destination and show participating compute groups sending to it. The wording alone does not uniquely identify every source or destination.

For Type 4, I assume Main Engineering storage supplies off-site archives. Internet access is shown separately, including campus communication with the Internet and external users accessing the campus server. The combined map preserves these flow types, directions and assumptions without inventing rates or physical links.

### 逐步解法

### 已给条件与记号

A、B、C为三栋楼的compute server；M为Main Engineering的5台compute；S为该楼2台storage；X为校园内External Access Server；O为校外Off-Site Data Archival storage；U为external users。

### 参考映射（AI补充；不是老师发布的唯一答案）

|流类型|Source → Sink|方向与已知/假设|
|---|---|---|
|1 高性能计算互通|参与计算的A/B/C/M组之间|参考图假设组间可能双向；M组内是否有互通按任务再确认；题目没给全配对清单，因此虚线表示候选关系，不声明所有同时活跃|
|2 主工程楼内部迁移|M → S|compute向storage，主方向由题干明确；不把协议ACK当等量反向业务|
|3 迁移到external server|参与迁移的A/B/C/M → X|参考图把X当所指server，是显式假设；若教师另指真正校外server，应换端点；X物理位置不变|
|4a 数据归档|S → O（跨Internet）|归档源假定S；若实际指定compute直接归档，按该需求改源|
|4b Internet access|校园参与终端 ↔ Internet；U ↔ X（跨Internet）|访问的请求/响应分别保留；X是应用服务器，不凭空把它当所有校园业务的网关|

### 画图步骤

1. 先临摹位置底图，保留Campus LAN边框，把X放框内、O/U放框外。
2. 单独画Type1，再画Type2。只有Type2的方向和楼内两组端点在题干非常明确。
3. 为Type3、Type4写上述假设，然后画各自图；未知流量速率、协议、具体路径保持未知。
4. 用颜色/类型标签把箭头合并。同一对端点可有不同业务流；不要因合并而删除方向或把不同服务保证平均掉。
5. 查是否保留5台compute/2台storage的区别、source/sink、外部用户访问与归档两类需求。要估容量还需每流速率、并发和调度数据，不能从图形距离推导。

交叉线没有节点圆点时，不表示交换设备或汇合；图只描述业务流，不确定实际物理拓扑。


<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：流量是具有共同属性的一组网络通信；把服务需求与源、目的地及位置结合，才能确定哪些路径需要相应容量、延迟和可靠性。

1. 先保留设备位置，再画业务箭头；logical flow map不是物理拓扑。X标有external-access但仍在校园框内，不能凭名字移到校外。

2. Type3和归档源原文不唯一，需在图旁写假设。箭头保留业务方向；ACK不等于等量反向业务。合并图保留类型，不能凭距离猜容量。

**英文关键句**：The arrows show application flows, not physical cables.

箭头表示应用流，而非物理线缆。 show A, not B用于图例范围说明；假设写I assume that…并说明依据。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：The teacher later states that Type 3 targets a new off-campus server Y. What should change?

**变式参考**：Keep X in its original campus location. Add the specified Y outside and redirect Type 3 to Y. Update the assumption and flow requirements; do not relocate X or invent link rates.

**自查**：External Access Server不因external一词而移到校园框外；Type3目的、Type4归档源有歧义，图必须标假设，不能声称唯一官方答案。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7a - Flow Analysis](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607864) · PDF 1 Ex1 · 搜索 Exercise 1


## T040 · Workshop Flow 的方向与时延

Label the directions and requirements of the four flows in Workshop Week7a Exercise 2.

按原练习区分上下行、单向/双向与one-way/RTT。

### 精简参考答案

The client-server application has bidirectional flows: 1.2 Mb/s from server to client and 15 kb/s from client to server. These directions should be labelled separately.

The UDP video application has a dominant unidirectional media flow from server to subscriber. Its requirements are 300 kb/s and 40 ms one-way delay. Any control traffic should be distinguished from the stated media flow.

The web application has 250 kb/s downstream and 100 kb/s upstream, with a stated five-second delay requirement. Do not silently reinterpret an unspecified delay as round-trip time. The point-of-sale application has 30 kb/s upstream, 50 kb/s downstream and a 100 ms round-trip requirement.

One-way delay and round-trip delay are different measures. Preserve the direction and measurement meaning in the flow map instead of replacing each application with one undirected capacity total.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：流量是具有共同属性的一组网络通信；把服务需求与源、目的地及位置结合，才能确定哪些路径需要相应容量、延迟和可靠性。

1. 按每个方向保留量值：client-server两方向速率不等；UDP视频主媒体流与控制流分开；POS给的是RTT，视频给的是单程。

2. web的five-second没有明确RTT不能擅改。画箭头时先定义端点与业务方向，再贴速率、时延和单位。

**英文关键句**：The direction and delay definition must be preserved.

必须保留方向和时延定义。 be preserved是被动表达“被保留”；不要为了简化把上下行合并掉。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：An RTT limit is 100 ms. Does it prove each direction takes at most 50 ms?

**变式参考**：No. The directions can be asymmetric and endpoint turnaround may contribute. A 50 ms split needs an explicit additional assumption.

**自查**：Workshops周号不同于lecture；RTT不能直接当每一方向100ms。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7a - Flow Analysis](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607864) · PDF 2 Ex2 · 搜索 Exercise 2


## T041 · 四种 Flow model

Describe peer-to-peer, client-server, hierarchical client-server and distributed-computing flow models.

解释四种流量模型。

### 精简参考答案

A peer-to-peer flow model describes communication between peers that can both provide and request resources. A client-server model describes requests and responses between clients and service-providing servers.

In a hierarchical client-server model, servers can also act as clients of higher-level servers. Flows may be aggregated through several service levels. In distributed computing, multiple computing resources cooperate on a task and exchange data or intermediate results. This can create important flows between computing nodes as well as flows to storage.

The models help predict communication relationships and service locations. They do not directly specify the physical cable layout. For example, clients using a shared campus service may need a client-server model, while a compute cluster may also need a distributed-computing model. A real network can contain several models at the same time.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：流量模型用方向性、层级和互联关系概括一组流量的稳定模式；它帮助定位流量汇聚点和关键路径，而不要求每个请求和响应都完全同向。

1. 流模型看谁与谁交换数据：peer对等、client-server请求服务、hierarchical存在服务器层级、distributed多计算资源协作。

2. 服务器也可作为上层服务的client，所以模型可组合。模型帮助定位服务与聚合点，但不直接指定哪根网线。

**英文关键句**：A server can also act as a client.

服务器也可充当客户端。 act as + 角色；这句解释角色变化，不是设备物理身份改变。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：A server requests data from a higher-level server. Is client-server still relevant?

**变式参考**：Yes. The lower server acts as a client in that exchange, forming a hierarchical client-server relationship. Roles depend on the specific flow.

**自查**：模型可以并存；不是把四种分别当四种互斥物理拓扑。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 5 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607048) · PDF 30–44 · 搜索 Flow Models


## T042 · 选择应用与 Flow 优先级

How should flows be selected for analysis and prioritized?

如何选择分析对象并给流排序？

### 精简参考答案

A designer may analyse individual applications, build profiles for similar flows or focus on the top applications driving the design. Selection can consider usage, user or device numbers and performance requirements. It is still necessary to check whether excluded applications will receive adequate service.

Flow priority should reflect organizational importance. Relevant factors include business objectives, consequences of failure, political priorities, performance and security requirements, and the number of users served. Different criteria can produce different rankings.

For example, a large student download flow may serve many people, while a smaller examination service may have stricter reliability requirements. The highest data rate is not automatically the highest priority. State the chosen criteria and explain how the ranking affects resource allocation. This makes later trade-offs transparent and connected to the organization’s goals.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：流量是具有共同属性的一组网络通信；把服务需求与源、目的地及位置结合，才能确定哪些路径需要相应容量、延迟和可靠性。

1. 先选分析对象，再排序资源优先级；筛选可以按用量和人数，但关键小流不能因速率低被遗漏。

2. priority是组织判断，需说明指标与后果。大型下载服务很多人，考试交易人少但失败代价高，二者排序需要公开依据。

**英文关键句**：The highest rate is not always the highest priority.

最高速率不总是最高优先级。 not always防止绝对化；后接业务影响例子才完成理由。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A backup has the highest rate. Must it receive highest priority?

**变式参考**：No. Priority should reflect business consequences and service needs, not only traffic volume. A smaller critical transaction may require stronger protection.

**自查**：Top N 不是忽略所有其他应用；带宽大不自动最重要。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 5 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607048) · PDF 19–22、45–49 · 搜索 Flow Prioritization


## T043 · Flowspec 与聚合规则

Explain one-part, two-part and multipart flow specifications.

解释三种 flowspec 及组合规则。

### 精简参考答案

A flow specification lists flows and their performance requirements. A one-part flowspec contains best-effort traffic and combines its capacity requirements. A two-part flowspec includes predictable traffic and may also include best effort.

For predictable traffic, capacity requirements are combined, while the most demanding relevant delay and RMA requirements must be preserved. In the course’s aggregation method, this means the minimum permitted delay and maximum required reliability or availability value. It does not mean adding availability percentages.

A multipart flowspec also includes guaranteed flows. Each guaranteed flow keeps its own requirements rather than losing them inside a single average. This is important because an acceptable aggregate may hide failure to meet one flow’s commitment. Aggregation must also respect shared paths, direction and timing. Opposite-direction or non-overlapping traffic should not be combined without stating the assumptions.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：Flowspec 汇总流量及其性能要求；不同服务等级采用不同合成方式，best-effort 主要合并容量，predictable 保留相关严格性能条件，guaranteed 的单流保证需要逐条保留。

1. 聚合是制定共同目标，不是测得系统真实性能：BE加容量；predictable加容量并保留最严格时延/RMA；guaranteed保留各自tuple。

2. 相反方向、不同时间或不同瓶颈需先分开。把availability目标取最大，不等于串联系统实际可用性取最大。

**英文关键句**：The aggregate must preserve the stricter limit.

聚合必须保留更严格限制。 stricter是strict比较级；数值更小的时延上限通常更严格。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Two predictable flows need 30 ms and 10 ms delay limits. Which aggregate limit is safer?

**变式参考**：Use the stricter 10 ms target in the course aggregation method, while summing relevant capacities. This defines a target; actual delivery still needs verification.

**自查**：不相加delay上限或availability百分比；guaranteed不被平均。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 5 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607048) · PDF 50–56 · 搜索 Flowspec Algorithm


## T044 · Flowspec 数值组合

Combine best-effort flows of 2 and 3 Mb/s, predictable flows of 4 and 6 Mb/s with delays 40 and 20 ms and availability targets 99.9% and 99.99%, plus a guaranteed flow of 5 Mb/s, 10 ms and 99.999%.

按课件规则给multipart flowspec。

### 精简参考答案

The multipart specification contains 5 Mb/s best effort, a predictable aggregate of 10 Mb/s with a 20 ms delay limit and 99.99% availability target, and the guaranteed flow kept separately at 5 Mb/s, 10 ms and 99.999%.

### 逐步解法

BE capacity=2+3=5Mb/s。
Predictable capacity=4+6=10Mb/s；delay上限min(40,20)=20ms；availability目标max(99.9%,99.99%)=99.99%。
Guaranteed保留独立tuple：(5Mb/s,10ms,99.999%)。
若全在同方向、同链路同时发，初步payload需求5+10+5=20Mb/s。这个总和不抹掉独立保证，也不证明端到端availability已实现。
这里availability用作课件RMA聚合指标示例；各参数单位/测量口径须一致。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：Flowspec 汇总流量及其性能要求；不同服务等级采用不同合成方式，best-effort 主要合并容量，predictable 保留相关严格性能条件，guaranteed 的单流保证需要逐条保留。

1. 本题先分服务类，再聚合；predictable delay取最小上限、availability取最高目标，因二者都是更严格要求。

2. guaranteed各自保留tuple，不能被平均淹没；把所有容量加20只在题定同向同链路并发时成立。目标不是实际可靠性概率。

**英文关键句**：Use the stricter target for the predictable aggregate.

对可预测聚合使用更严格目标。 stricter不总等于更大数：delay更小而availability更大。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Combine predictable flows of 3 and 7 Mb/s with delay limits 30 and 15 ms and availability targets 99.8% and 99.95%.

**变式参考**：The target aggregate is 10 Mb/s, 15 ms and 99.95% availability under the course rule. This is a requirement, not proof that the system achieves it.

**自查**：目标聚合不是串联系统实际可用性的概率计算。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 5 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607048) · PDF 51–56 · 搜索 Flow specification

