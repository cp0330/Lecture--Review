# 06-Week6a-网络架构

返回：[期末题库总入口](../README.md)；[旧题号与当前题号对照](../question-map.md)。

本册按对应课件的可见页序排列。计算与补题放到其知识点附近；Workshop Flow题接在Week5 Flow主线，原资源仍明确标为Workshop Week7a。综合长答统一放最后。

来源页码按PDF文件从第1页起计，包含封面。英文答案为教学参考，不是官方评分答案。老师样题保留标记。使用条件与假设属于答案的一部分。

## T045

**组件架构内部的相互作用**

- 题型：简答；检索码：Q05；依据：老师样题（Week13 PDF p.16）。
- 知识点：Component architectures（组件架构与内部关系）。

**Question:** Explain internal interactions of a component architecture.

**中文题意：**解释组件架构的内部相互作用。

### 中文思路

组件架构包含功能、机制和内部关系。内部相互作用描述同一组件内的机制怎样彼此影响，包括取舍、依赖和限制。

取舍要求在相互竞争的收益间选择。例如，管理组件内集中式管理可能较易实施与管理，而分布式可以降低某些汇聚和故障风险，但增加复杂度。

依赖表示一个机制需要另一个机制才能达到目的。例如，性能组件内的SLA承诺依赖适当的QoS机制去落实服务要求；政策、SLA和设备能力必须相互适配。

限制是约束其他选择的条件。例如RIP等路由协议的能力限制了它能有效支持的网络结构。

答案应指出是哪一个组件并解释关系。不同组件之间的影响，如安全处理影响性能，属于外部关系。

### 英文参考答案（150词）

A component architecture contains functions, mechanisms and internal relationships. Internal interactions describe how mechanisms within the same component affect one another. They include trade-offs, dependencies and constraints.

A trade-off requires a choice between competing benefits. Within network management, centralized management can be simpler to implement and administer, while distributed management can reduce some concentration and failure risks but add complexity.

A dependency means that one mechanism needs another to achieve its purpose. Within the performance component, an SLA commitment depends on suitable QoS mechanisms being available to enforce the required service. Policies, SLAs and device capabilities must fit together.

A constraint is a restriction that limits other choices. For example, the limits of a routing protocol such as RIP restrict the network structures it can support effectively.

The answer should identify the component and explain the relationship. Effects between separate components, such as security processing affecting performance, are external relationships.

### 易错、变式与反馈

只列四个component名称；只写“互相影响”而无关系与例子；把external写成internal。

变式：QoS执行SLA与加密增加延迟，哪一个更直接是本题的内部关系例子？为什么？

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) → **PDF物理页14–20**，关键词`Component Architectures`。

## T046

**内部关系与外部关系**

- 题型：简答；检索码：Q36；依据：范围扩展题。
- 知识点：Component architectures（组件架构与内部关系）。

**Question:** Distinguish internal and external relationships in network architecture.

**中文题意：**区分组件内部与组件之间的关系。

### 中文思路

同一功能内部 vs 不同功能之间；trade-off/dependency/constraint。

### 英文参考答案（127词）

Internal relationships exist between mechanisms within one component architecture. They include trade-offs, dependencies and constraints. For example, within performance architecture, a policy may depend on QoS mechanisms to enforce a service level agreement.

External relationships exist between different component architectures. For example, security inspection can affect performance, management traffic depends on addressing and routing, and management access can create security exposure.

The classification depends on the functions being compared, not simply whether the devices are in the same building. A reference architecture combines the component architectures and their relationships. It must balance them according to requirements and flow priorities. Optimizing each component alone may give a poor overall result. For instance, extensive inspection may improve one security goal while making a critical application miss its delay requirement.

### 易错、变式与反馈

internal/external 不等于机构内网/公网。

变式：Classify a QoS–SLA relationship and a security–performance relationship.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) → **PDF物理页14–36**，关键词`Component Architectures`。

## T047

**Reference architecture 的形成**

- 题型：简答；检索码：Q37；依据：范围扩展题。
- 知识点：Reference architectures and models（参考架构与架构模型）。

**Question:** How are component architectures and architectural models combined into a reference architecture?

**中文题意：**如何把组件架构和模型合成参考架构？

### 中文思路

完整功能/内部外部关系；topological打底，再叠加flow/functional。

### 英文参考答案（124词）

A reference architecture describes the complete network architecture. It combines the selected component architectures, their mechanisms and the internal and external relationships that affect the whole system.

The course suggests starting with a topological model, such as LAN/MAN/WAN or access/distribution/core. Flow-based models then describe important communication relationships. Functional models add perspectives such as service delivery, intranet/extranet separation or complete end-to-end paths.

These models are complementary views. For example, a campus can use an access/distribution/core structure, support client-server flows and provide controlled extranet access for partners. The designer then checks how routing, management, performance and security work together within that structure. Requirements and flow priorities determine the balance. A reference architecture is therefore more than a topology drawing or a collection of separate product choices.

### 易错、变式与反馈

回答所有模型时请用Q06的完整清单；不要漏functional三类。

变式：Explain the recipe for using architectural models; give a combined example.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) → **PDF物理页29–47**，关键词`Reference Architectures`。

## T048

**课堂讨论的全部架构模型**

- 题型：简答；检索码：Q06；依据：老师样题（Week13 PDF p.16）。
- 知识点：Reference architectures and models（参考架构与架构模型）。

**Question:** Briefly describe all architectural model as discussed in the lectures.

**中文题意：**简要描述课堂讨论过的所有架构模型。

### 中文思路

课堂讨论三组架构模型。拓扑类包含LAN/MAN/WAN，即按地理尺度组织网络，以及access/distribution/core，即按功能层次组织网络。

流量类描述通信模式。对等模式使通信实体处于相近层级；客户端—服务器模式关注双方通信；分层客户端—服务器加入服务器层级及层间通信；分布式计算描述协作计算资源及其数据交换。

功能类围绕服务或访问要求组织架构。服务提供方模型关注服务交付、隐私和安全等提供方功能；内网/外网模型根据内部使用和被许可的外部使用划分访问；端到端模型考虑完整流量路径上的所有组件。

这些视角可以组合。设计者可从拓扑模型开始，添加流量与功能视角，形成满足需求的参考架构。这些是互补视角，不是单一通用解法。

### 英文参考答案（152词）

The lectures discuss three groups of architectural models. Topological models include LAN/MAN/WAN, which organizes the network by geographical scale, and access/distribution/core, which organizes it by functional layers.

Flow-based models describe communication patterns. Peer-to-peer places communicating entities at a similar level. Client-server focuses on communication between clients and servers. Hierarchical client-server adds server tiers and communication between them. Distributed computing describes cooperating computing resources and their data exchanges.

Functional models organize the architecture around services or access requirements. The service-provider model focuses on provider functions such as service delivery, privacy and security. The intranet/extranet model separates access according to internal and permitted external use. The end-to-end model considers all components along a complete traffic path.

These views can be combined. A designer can start with a topological model and add flow-based and functional views to form a reference architecture that meets the requirements. They are complementary views rather than a single universal solution.

### 易错、变式与反馈

只写三类名称；漏functional三项；将模型误答为OSI、TCP/IP、SDN；只列清单不描述。

变式：“按建筑之间的地理尺度”和“按一条业务的完整路径”分别属于哪种模型？

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) → **PDF物理页39–47**，关键词`Architectural Models`。

