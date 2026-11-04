# 01-Week1-网络设计方法

[在线逐题学习](../review-bank.html) · [审校说明](../audit-2026-11-04.md)

> 参考答案与教学解析由AI依据课程资料整理，不是官方rubric。考前练习不扩大考试可用资料。

## T001 · Top-down 与 bottom-up

Compare top-down and bottom-up approaches to network design.

比较两种设计方法。

### 精简参考答案

A top-down approach starts with the organization’s goals and the needs of users and applications. The designer develops service requirements, traffic flows and architecture before selecting detailed technologies and equipment. This helps the network support the business.

A bottom-up approach begins with technologies, topologies or products. It can be convenient when a designer already knows particular equipment, but it may produce a network that fails to meet the real requirements.

For example, buying faster switches first will not solve every application problem. The actual problem may be delay on an external link or poor server performance. A top-down process investigates that need first. Existing equipment and technical limits still matter, so the process allows feedback. The key is to justify technology choices through requirements rather than personal preference.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：以组织目标为起点，先通过分析确定需求、流量和风险，再用架构组织网络功能及关系，最后把架构落实为技术、设备、供应商和位置等可实施选择；三者相互依赖，并允许反馈修订。

1. 先问“为何要建”，才能知道要保证什么服务；相同设备在不同目标下可能是不同选择。

2. bottom-up的风险来自先限定产品，再勉强解释需求。现有预算、设备和标准仍可作为top-down的输入，所以两种起点不等于完全隔离的流程。

**英文关键句**：The choice should follow the requirements.

选择应以需求为依据。 should + 动词原形表达建议；follow这里是“以……为依据”，不是物理跟随。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A campus buys faster switches, but online lessons still lag. What should be checked first?

**变式参考**：Check application needs and the complete path. The bottleneck may be a server or an external link. Faster switches help only if switching capacity is the limiting factor.

**自查**：已检查并避开这些误区：top-down 不表示完全忽略现有设备。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) · PDF 39–40 · 搜索 Network Design Methodology


## T132 · Access、distribution、core 的职责

Explain the roles of the access, distribution and core layers in a hierarchical network. How does this structure help design?

解释三层职责，并说明层次结构的设计价值。

### 精简参考答案

The access layer connects users and end devices to the network. It can provide local switching, port access controls and initial traffic classification. Its design should support the availability and service needs of attached users.

The distribution layer brings together traffic from access networks. It provides a place to organize connectivity and apply policies between access areas and the backbone. The core provides transport between major parts of the network. Important goals include reliability, availability, low delay and manageable operation.

Separating these roles can reduce complexity and make growth and fault isolation easier. For example, a university can connect teaching rooms at access, combine building traffic at distribution and carry inter-building traffic through the core. The layers describe functions; they do not require exactly three separate devices in every small network. Capacity, resilience, cost and required flows should justify the actual arrangement.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：本课程的 reference architecture 综合各组件架构及其内部、外部关系；架构模型提供拓扑、流量或功能视角，可组合使用以满足优先需求。

1. 三层首先是功能层：access接终端，distribution汇聚接入并组织策略，core承载主要区域间传输。

2. 用同一包路径依次说明，才能把名称变成因果。小网可合并设备，但角色仍需完成；高可用核心不能弥补接入单点或过载。

**英文关键句**：The layers describe functions rather than a fixed device count.

这些层描述功能，而非固定设备数量。 rather than连接对比对象；count指数量，不等于层名数量决定机器数量。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A small campus combines distribution and core on one platform. Is the model necessarily violated?

**变式参考**：No. The layers describe roles. A collapsed design may be suitable if capacity, resilience and policy requirements are still met.

**自查**：已检查并避开这些误区：用同一包路径依次说明，才能把名称变成因果。小网可合并设备，但角色仍需完成；高可用核心不能弥补接入单点或过载。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) · PDF 42–44 · 搜索 Three Layer Hierarchical Model


## T002 · PPDIOO 生命周期

Describe the six phases of PPDIOO and explain why network design is a life-cycle process.

说明六阶段及持续循环。

### 精简参考答案

PPDIOO describes six phases: Prepare, Plan, Design, Implement, Operate and Optimize. Prepare establishes business goals and requirements. Plan gathers information, analyses needs and identifies an approach. Design develops the network topology and solution using requirements and knowledge of the existing network.

Implement puts the design into practice by installing and configuring the required solution. Operate manages and monitors the deployed network. Optimize uses operational evidence to improve the design or respond to problems and new requirements.

The phases form a life cycle rather than a process that ends after installation. For example, a new teaching application may expose a capacity problem during operation. Optimization may lead back to planning or design before further changes are implemented. This connects ongoing service quality with the organization’s changing goals and preserves the need for verification after deployment.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：以组织目标为起点，先通过分析确定需求、流量和风险，再用架构组织网络功能及关系，最后把架构落实为技术、设备、供应商和位置等可实施选择；三者相互依赖，并允许反馈修订。

1. 六阶段分别回答：为何做、现状与计划、如何构造、如何上线、如何运行、如何改善。

2. Operate产生测量证据，Optimize把证据变成改进需求。若业务目标变了，可能回到Plan甚至Prepare；不是只在最后调一项设置。

**英文关键句**：Operational evidence can lead to a revised design.

运行证据可促成设计修订。 lead to + 名词表示“导致/促成”；revised是“已修订的”，不需要把句子写得很长。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：After deployment, a new application overloads a link. Which phases become relevant?

**变式参考**：Operate detects the problem. Optimize reviews the evidence and may send the project back to Plan and Design before another implementation.

**自查**：已检查并避开这些误区：PPDIOO有两个O：Operate和Optimize；不要漏Prepare或把Plan/Design混同。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) · PDF 45–46 · 搜索 PPDIOO


## T003 · Eight-step design methodology

Describe the eight-step network design methodology and its documentation.

说明八步方法与文档用途。

### 精简参考答案

The eight steps are: identify customer requirements, describe the existing network, design the topology and solution, plan implementation, construct a prototype, fully document the design, implement it, and verify, monitor and modify it as needed.

Requirements include organizational and technical goals and constraints. The existing-network description records sites, devices, cabling, addressing, protocols and other relevant information. The solution should meet those needs, while the implementation plan explains procedures and timing. A prototype provides evidence before full deployment.

Documentation preserves decisions and supports future operation and improvement. The course suggests sections such as introduction, requirements, existing infrastructure, design, proof of concept, implementation plan and appendices. After implementation, measurements check the goals and guide changes. The method therefore connects planning and evidence with practical delivery rather than treating the final installation as sufficient proof of success.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：以组织目标为起点，先通过分析确定需求、流量和风险，再用架构组织网络功能及关系，最后把架构落实为技术、设备、供应商和位置等可实施选择；三者相互依赖，并允许反馈修订。

1. 八步把方案的“提出”和“证实可行”分开：prototype是在全面部署前检验风险，不是最终大规模安装。

2. 文档既记录最终方案，也记录需求、现网、验证和实施安排；第八步继续监测修改，使交付后仍能追踪成败。

**英文关键句**：A prototype provides evidence before full deployment.

原型在全面部署前提供证据。 before + 名词或动词-ing；provide evidence比只写“it is useful”更明确。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：Why build a prototype before full implementation?

**变式参考**：A prototype tests important assumptions and interactions on a smaller scale. It can reveal problems before they affect the full network, but does not prove every production condition.

**自查**：已检查并避开这些误区：原型是验证方案的一环；不把课件文字中的prototype与全面安装混成一步。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) · PDF 47–55 · 搜索 Eight-step Design Methodology


## T004 · 分析、架构、设计的联系

Explain how network analysis, architecture and design are connected.

解释三阶段怎样相互连接。

### 精简参考答案

Network analysis identifies what users, applications and devices need. It studies the current network, traffic, service levels and constraints. Its results give reasons for later decisions.

Network architecture uses these results to organize major functions, such as routing, performance, security and management. It describes their mechanisms and relationships. Network design then turns the architecture into practical choices of equipment, suppliers, services and physical locations.

For example, analysis may identify a need for reliable online teaching. Architecture may introduce redundant paths and traffic priorities. Design chooses suitable devices, links and their placement. The three activities depend on each other. If a design option is too expensive or cannot meet a requirement, earlier decisions must be reviewed. Keeping these links makes the final design easier to explain and defend.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：以组织目标为起点，先通过分析确定需求、流量和风险，再用架构组织网络功能及关系，最后把架构落实为技术、设备、供应商和位置等可实施选择；三者相互依赖，并允许反馈修订。

1. 把同一目标逐步具体化：教学不中断是业务需要；分析写出可用性与流量；架构决定冗余和控制；设计落实设备和位置。

2. 反馈的原因是后阶段发现的新约束会使前阶段假设不成立。答案应讲信息怎样传递，不能只给三个孤立定义。

**英文关键句**：Each stage provides input for the next.

每阶段为下一阶段提供输入。 provide A for B表示“为B提供A”；each后用单数stage和provides。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A selected device cannot support the planned security function. What follows?

**变式参考**：Review the device choice and its architectural dependency. If no feasible option meets the requirement, revisit constraints and requirements with evidence rather than silently dropping the goal.

**自查**：已检查并避开这些误区：不要把 architecture 等同于设备型号清单。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) · PDF 57–64 · 搜索 Information flows


## T133 · System view 与可辩护的设计

Why should network analysis use a system view and maintain an audit trail? Explain technical, budgetary, schedule and resource defensibility.

解释整体系统视角、决策记录和四种设计理由。

### 精简参考答案

A system view considers the network together with its users, applications and devices. The delivered service depends on their combined behaviour. Improving one link may have little value if an application or end device remains the limiting part.

Network analysis should therefore record requirements, measurements, assumptions and the reasons for decisions. This audit trail makes the design easier to review and revise. Technical defensibility explains how a choice meets service needs. Budgetary defensibility explains whether its costs fit the available funds. Schedule defensibility addresses whether the work can be completed in the required time. Resource defensibility considers people, skills, equipment and other resources.

For example, a faster platform may meet a capacity target but require training that cannot be completed before deployment. A defensible choice acknowledges this constraint and compares alternatives. Defensibility means providing reasons and evidence, rather than claiming that any chosen product is always best.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：以组织目标为起点，先通过分析确定需求、流量和风险，再用架构组织网络功能及关系，最后把架构落实为技术、设备、供应商和位置等可实施选择；三者相互依赖，并允许反馈修订。

1. system view把用户、应用、设备与网络一起看；局部指标好不等于整体任务达成。

2. defensibility分四种理由：技术能达标、钱够、时间赶得上、人员设备资源足。audit trail保存依据与假设，方便说明为什么舍弃一个看似更强的选项。

**英文关键句**：A technically strong option may still be infeasible.

技术很强的选项仍可能不可实施。 infeasible意为“不可实施/不可行”；may still保留需根据约束判断的条件。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A device is technically ideal but staff cannot learn it before launch. Which concerns arise?

**变式参考**：Schedule and resource defensibility are at risk, even if technical performance is suitable. Compare feasible training, timing and alternative platforms.

**自查**：已检查并避开这些误区：defensibility分四种理由：技术能达标、钱够、时间赶得上、人员设备资源足。audit trail保存依据与假设，方便说明为什么舍弃一个看似更强的选项。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) · PDF 61–64 · 搜索 Defensibility

