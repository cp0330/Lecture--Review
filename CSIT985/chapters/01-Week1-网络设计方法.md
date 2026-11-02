# 01-Week1-网络设计方法

返回：[期末题库总入口](../README.md)；[旧题号与当前题号对照](../question-map.md)。

本册按对应课件的可见页序排列。计算与补题放到其知识点附近；Workshop Flow题接在Week5 Flow主线，原资源仍明确标为Workshop Week7a。综合长答统一放最后。

来源页码按PDF文件从第1页起计，包含封面。英文答案为教学参考，不是官方评分答案。老师样题保留标记。使用条件与假设属于答案的一部分。

## T001

**Top-down 与 bottom-up**

- 题型：简答；检索码：Q09；依据：范围扩展题。
- 知识点：Network analysis, architecture and design（网络分析、网络架构与网络设计）。

**Question:** Compare top-down and bottom-up approaches to network design.

**中文题意：**比较两种设计方法。

### 中文思路

先业务目标还是先技术；需求匹配、既有约束与反馈。

### 英文参考答案（128词）

A top-down approach starts with the organization’s goals and the needs of users and applications. The designer develops service requirements, traffic flows and architecture before selecting detailed technologies and equipment. This helps the network support the business.

A bottom-up approach begins with technologies, topologies or products. It can be convenient when a designer already knows particular equipment, but it may produce a network that fails to meet the real requirements.

For example, buying faster switches first will not solve every application problem. The actual problem may be delay on an external link or poor server performance. A top-down process investigates that need first. Existing equipment and technical limits still matter, so the process allows feedback. The key is to justify technology choices through requirements rather than personal preference.

### 易错、变式与反馈

top-down 不表示完全忽略现有设备。

变式：Why is a business-driven design preferable?

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) → **PDF物理页39–40**，关键词`Network Design Methodology`。

## T002

**PPDIOO 生命周期**

- 题型：简答；检索码：Q83；依据：范围扩展题。
- 知识点：Network analysis, architecture and design（网络分析、网络架构与网络设计）。

**Question:** Describe the six phases of PPDIOO and explain why network design is a life-cycle process.

**中文题意：**说明六阶段及持续循环。

### 中文思路

Prepare→Plan→Design→Implement→Operate→Optimize；优化反馈，不是装完结束。

### 英文参考答案（134词）

PPDIOO describes six phases: Prepare, Plan, Design, Implement, Operate and Optimize. Prepare establishes business goals and requirements. Plan gathers information, analyses needs and identifies an approach. Design develops the network topology and solution using requirements and knowledge of the existing network.

Implement puts the design into practice by installing and configuring the required solution. Operate manages and monitors the deployed network. Optimize uses operational evidence to improve the design or respond to problems and new requirements.

The phases form a life cycle rather than a process that ends after installation. For example, a new teaching application may expose a capacity problem during operation. Optimization may lead back to planning or design before further changes are implemented. This connects ongoing service quality with the organization’s changing goals and preserves the need for verification after deployment.

### 易错、变式与反馈

PPDIOO有两个O：Operate和Optimize；不要漏Prepare或把Plan/Design混同。

变式：List the six phases; distinguish implementation, operation and optimization.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) → **PDF物理页45–46**，关键词`PPDIOO`。

## T003

**Eight-step design methodology**

- 题型：简答；检索码：Q84；依据：范围扩展题。
- 知识点：Network analysis, architecture and design（网络分析、网络架构与网络设计）。

**Question:** Describe the eight-step network design methodology and its documentation.

**中文题意：**说明八步方法与文档用途。

### 中文思路

需求→现网→拓扑方案→实施计划→原型→完整文档→实施→验证监测修改。

### 英文参考答案（134词）

The eight steps are: identify customer requirements, describe the existing network, design the topology and solution, plan implementation, construct a prototype, fully document the design, implement it, and verify, monitor and modify it as needed.

Requirements include organizational and technical goals and constraints. The existing-network description records sites, devices, cabling, addressing, protocols and other relevant information. The solution should meet those needs, while the implementation plan explains procedures and timing. A prototype provides evidence before full deployment.

Documentation preserves decisions and supports future operation and improvement. The course suggests sections such as introduction, requirements, existing infrastructure, design, proof of concept, implementation plan and appendices. After implementation, measurements check the goals and guide changes. The method therefore connects planning and evidence with practical delivery rather than treating the final installation as sufficient proof of success.

### 易错、变式与反馈

原型是验证方案的一环；不把课件文字中的prototype与全面安装混成一步。

变式：List eight steps; explain the value of an audit, prototype and documentation.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) → **PDF物理页47–55**，关键词`Eight-step Design Methodology`。

## T004

**分析、架构、设计的联系**

- 题型：简答；检索码：Q08；依据：范围扩展题。
- 知识点：Network analysis, architecture and design（网络分析、网络架构与网络设计）。

**Question:** Explain how network analysis, architecture and design are connected.

**中文题意：**解释三阶段怎样相互连接。

### 中文思路

需求证据 → 功能与关系 → 可实施选择；允许反馈，不是买完设备再找需求。

### 英文参考答案（127词）

Network analysis identifies what users, applications and devices need. It studies the current network, traffic, service levels and constraints. Its results give reasons for later decisions.

Network architecture uses these results to organize major functions, such as routing, performance, security and management. It describes their mechanisms and relationships. Network design then turns the architecture into practical choices of equipment, suppliers, services and physical locations.

For example, analysis may identify a need for reliable online teaching. Architecture may introduce redundant paths and traffic priorities. Design chooses suitable devices, links and their placement. The three activities depend on each other. If a design option is too expensive or cannot meet a requirement, earlier decisions must be reviewed. Keeping these links makes the final design easier to explain and defend.

### 易错、变式与反馈

不要把 architecture 等同于设备型号清单。

变式：Define each stage; why are they interdependent; explain defensibility.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) → **PDF物理页57–64**，关键词`Information flows`。

