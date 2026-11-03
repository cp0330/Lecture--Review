# 06-Week6a-网络架构

[在线逐题学习](../review-bank.html) · [审校说明](../audit-2026-11-04.md)

> 参考答案与教学解析由AI依据课程资料整理，不是官方rubric。考前练习不扩大考试可用资料。

## T045 · 组件架构内部的相互作用

Explain internal interactions of a component architecture.

解释组件架构的内部相互作用。

### 精简参考答案

A component architecture contains functions, mechanisms and internal relationships. Internal interactions describe how mechanisms within the same component affect one another. They include trade-offs, dependencies and constraints.

A trade-off requires a choice between competing benefits. Within network management, centralized management can be simpler to implement and administer, while distributed management can reduce some concentration and failure risks but add complexity.

A dependency means that one mechanism needs another to achieve its purpose. Within the performance component, an SLA commitment depends on suitable QoS mechanisms being available to enforce the required service. Policies, SLAs and device capabilities must fit together.

A constraint is a restriction that limits other choices. For example, the limits of a routing protocol such as RIP restrict the network structures it can support effectively.

The answer should identify the component and explain the relationship. Effects between separate components, such as security processing affecting performance, are external relationships.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：组件架构围绕某项主要网络功能组织机制及内部关系；内部 interaction 可表现为 trade-off、dependency 或 constraint，必须说明相关机制及作用方向。

1. 先确认两端是否属于同一个component；internal由所属功能判断，不由是否在同一房间判断。

2. trade-off是收益冲突，dependency是实现前提，constraint是限制可选方案。每个例子都要写双方及作用机制，不能只列三个词。

**英文关键句**：Identify both mechanisms before classifying the relationship.

先识别两个机制，再分类其关系。 before + 动词-ing；both要求你明确写出关系两端。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Is encryption slowing QoS an internal security interaction?

**变式参考**：It is normally an external relationship between security and performance. Key management supporting encryption is an internal security dependency.

**自查**：只列四个component名称；只写“互相影响”而无关系与例子；把external写成internal。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) · PDF 14–20 · 搜索 Component Architectures


## T046 · 内部关系与外部关系

Distinguish internal and external relationships in network architecture.

区分组件内部与组件之间的关系。

### 精简参考答案

Internal relationships exist between mechanisms within one component architecture. They include trade-offs, dependencies and constraints. For example, within performance architecture, a policy may depend on QoS mechanisms to enforce a service level agreement.

External relationships exist between different component architectures. For example, security inspection can affect performance, management traffic depends on addressing and routing, and management access can create security exposure.

The classification depends on the functions being compared, not simply whether the devices are in the same building. A reference architecture combines the component architectures and their relationships. It must balance them according to requirements and flow priorities. Optimizing each component alone may give a poor overall result. For instance, extensive inspection may improve one security goal while making a critical application miss its delay requirement.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：组件架构围绕某项主要网络功能组织机制及内部关系；内部 interaction 可表现为 trade-off、dependency 或 constraint，必须说明相关机制及作用方向。

1. internal看同一组件内的机制关系，external看不同组件彼此影响。同一作用可有正负两面，例如监测验证QoS但也消耗容量。

2. 答案需要“谁影响谁、怎样、什么条件”三项。只说它们有关无法支持设计取舍。

**英文关键句**：Security can constrain management access.

安全措施可能限制管理访问。 constrain意为“限制”；can表达可能影响，随后给具体限制条件。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：Security rules block monitoring. Which relationship is involved?

**变式参考**：This is an external security-management relationship. Revise controlled access so that monitoring works without allowing unnecessary access.

**自查**：internal/external 不等于机构内网/公网。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) · PDF 14–36 · 搜索 Component Architectures


## T047 · Reference architecture 的形成

How are component architectures and architectural models combined into a reference architecture?

如何把组件架构和模型合成参考架构？

### 精简参考答案

A reference architecture describes the complete network architecture. It combines the selected component architectures, their mechanisms and the internal and external relationships that affect the whole system.

The course suggests starting with a topological model, such as LAN/MAN/WAN or access/distribution/core. Flow-based models then describe important communication relationships. Functional models add perspectives such as service delivery, intranet/extranet separation or complete end-to-end paths.

These models are complementary views. For example, a campus can use an access/distribution/core structure, support client-server flows and provide controlled extranet access for partners. The designer then checks how routing, management, performance and security work together within that structure. Requirements and flow priorities determine the balance. A reference architecture is therefore more than a topology drawing or a collection of separate product choices.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：本课程的 reference architecture 综合各组件架构及其内部、外部关系；架构模型提供拓扑、流量或功能视角，可组合使用以满足优先需求。

1. reference architecture从需求和流量出发，选模型与组件，再协调内部和外部关系；不是把四个组件图贴一起。

2. 检查trade-off、dependency、constraint，并回到优先级决定接受什么代价。结果必须整体可用且能解释选择依据。

**英文关键句**：The components must work together as a system.

各组件必须作为整体协同工作。 as a system强调整体；work together之后应给实际依赖或验证。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：Each component works alone, but security blocks routing updates. Is the architecture complete?

**变式参考**：No. The external interaction prevents the combined system from meeting its goal. Coordinate allowed flows and test the integrated architecture.

**自查**：回答所有模型时请用Q06的完整清单；不要漏functional三类。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) · PDF 29–47 · 搜索 Reference Architectures


## T048 · 课堂讨论的全部架构模型

Briefly describe all architectural model as discussed in the lectures.

简要描述课堂讨论过的所有架构模型。

### 精简参考答案

The lectures discuss three groups of architectural models. Topological models include LAN/MAN/WAN, which organizes the network by geographical scale, and access/distribution/core, which organizes it by functional layers.

Flow-based models describe communication patterns. Peer-to-peer places communicating entities at a similar level. Client-server focuses on communication between clients and servers. Hierarchical client-server adds server tiers and communication between them. Distributed computing describes cooperating computing resources and their data exchanges.

Functional models organize the architecture around services or access requirements. The service-provider model focuses on provider functions such as service delivery, privacy and security. The intranet/extranet model separates access according to internal and permitted external use. The end-to-end model considers all components along a complete traffic path.

These views can be combined. A designer can start with a topological model and add flow-based and functional views to form a reference architecture that meets the requirements. They are complementary views rather than a single universal solution.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：本课程的 reference architecture 综合各组件架构及其内部、外部关系；架构模型提供拓扑、流量或功能视角，可组合使用以满足优先需求。

1. 完整答案分三组再展开子类：topological两类、flow-based四类、functional三类。分组可减少漏项。

2. 地理/层次、通信关系、服务访问是互补视角；可按同一个校园案例组合。不要把架构模型写成设备品牌或只写三层网络。

**英文关键句**：The models describe complementary views.

这些模型描述互补视角。 complementary意为“互补的”；不是compulsory，不表示每个项目必须全用。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：Can a campus use access/distribution/core and client-server together?

**变式参考**：Yes. The first organizes functional layers; the second describes flows. A reference architecture can combine both with suitable functional views.

**自查**：只写三类名称；漏functional三项；将模型误答为OSI、TCP/IP、SDN；只列清单不描述。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) · PDF 39–47 · 搜索 Architectural Models

