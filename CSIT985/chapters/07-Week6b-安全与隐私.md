# 07-Week6b-安全与隐私

[在线逐题学习](../review-bank.html) · [审校说明](../audit-2026-11-04.md)

> 参考答案与教学解析由AI依据课程资料整理，不是官方rubric。考前练习不扩大考试可用资料。

## T049 · CIA 与 privacy

Explain confidentiality, integrity, availability and privacy in strategic network design.

解释安全目标与隐私。

### 精简参考答案

Confidentiality means that information is available only to authorized parties. Integrity means that information and resources are protected against unauthorized change or corruption. Availability means that authorized users can obtain required services when needed.

Privacy concerns the appropriate collection, use, access and disclosure of personal information. It overlaps with security, but protecting data from attackers does not by itself make every use of that data appropriate.

These goals matter because organizations depend on networks for work and communication. Loss of confidentiality may expose records, loss of integrity may make decisions unreliable, and loss of availability may stop services. The design should identify important assets and threats, select suitable controls and consider operational trade-offs. Security and privacy should shape architecture from the beginning rather than being added only as a final device.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：本课程将 privacy 视为 security 的子集，重点防止未授权访问和披露；安全还覆盖未授权修改或破坏，并以 confidentiality、integrity、availability 组织目标。

1. CIA分别保护不可乱看、不可乱改、需要时可用；privacy还涉及个人信息如何收集、使用和披露。

2. 课程把privacy放在安全讨论中，但不能推导“加密就实现全部隐私”。同一学生记录可能同时有保密、完整和授权使用限制。

**英文关键句**：Confidentiality supports privacy but does not cover every privacy issue.

保密性支持隐私，但未覆盖所有隐私问题。 but连接边界；cover这里是“涵盖”，不是给出未经核实的法律结论。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Data is encrypted but collected for an unrelated purpose. Is privacy automatically satisfied?

**变式参考**：No. Encryption supports confidentiality, but appropriate collection and use also matter. State the relevant privacy requirement and access rules.

**自查**：已检查并避开这些误区：加密主要保密，不能单独保证CIA全目标。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) · PDF 5–14 · 搜索 Three Classic Security Considerations


## T050 · Threat analysis 与风险排序

Why is threat analysis important, and what should it consider?

为什么做威胁分析，应考虑什么？

### 精简参考答案

Threat analysis identifies assets that need protection and the threats that may harm them. Assets include devices, software, services and data. Threats include unauthorized access or disclosure, denial of service, theft, corruption, malware and physical damage.

For each important asset–threat combination, assess the likelihood and the potential cost or damage. The impact depends on organizational goals. A threat with both high likelihood and serious consequences needs a plan to reduce the risk to an acceptable level.

The results guide priorities, control selection and resource allocation. For example, protecting a critical teaching service may require stronger availability controls than protecting a low-priority test service. Analysis is partly subjective, so involve different groups and record assumptions. Review it periodically because assets, services, users and threats change. A list of threats without consequences or priorities is incomplete.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：威胁分析识别需要保护的资产与可能影响它们的威胁，并评估发生可能性及损害，支持安全计划的优先顺序、控制选择和周期复查。

1. 威胁列表只有“可能坏什么”；analysis还要资产、可能性、后果和优先级，使资源分配有理由。

2. 风险判断通常有不确定性，需要人员视角和假设记录。控制可降低风险但不自动消灭所有威胁，环境变化后应复评。

**英文关键句**：Priorities should follow likelihood and impact.

优先级应依据可能性和影响。 likelihood是“发生可能性”；impact是“影响”，不要编造未经测量的概率。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Why not protect every asset equally?

**变式参考**：Assets differ in importance, threats and consequences. Limited resources should address the most serious assessed risks while maintaining required baseline protection.

**自查**：已检查并避开这些误区：风险不只看攻击概率，还要看业务损害。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) · PDF 14–21 · 搜索 Threat analysis


## T051 · 填写 Threat analysis worksheet

Complete a threat-analysis worksheet for student records, online teaching and stored research data. Explain how the results guide priorities.

对三个资产给出威胁、可能性、损害和措施。

### 精简参考答案

A threat-analysis worksheet connects each asset with a threat, its likelihood, possible damage and an appropriate response. For student records, unauthorized access could expose personal data or change results. Access control, authentication and logging can reduce that risk.

For online teaching, denial of service can interrupt classes. Appropriate traffic controls and resilience planning can reduce the impact. For research storage, malware or data corruption can destroy useful work. Protection, controlled access and tested recovery procedures can support restoration.

These are illustrative scenarios, not measured probabilities for a real university. Record likelihood as needing assessment unless evidence is available. Estimate impact in relation to the organization’s goals and involve the relevant users and staff. High-likelihood, high-impact combinations require particular attention. The worksheet should guide priorities and controls and be reviewed when assets, threats or services change.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：威胁分析识别需要保护的资产与可能影响它们的威胁，并评估发生可能性及损害，支持安全计划的优先顺序、控制选择和周期复查。

1. worksheet的一行是一个asset–threat组合，不是一个资产只允许一个威胁。记录likelihood、damage及response，才能对比。

2. 本题校园例子不是实际风险数据；未知可能性写待评估，并说明要问谁、查什么记录，而不是随意填精确百分比。

**英文关键句**：Record uncertainty instead of inventing a probability.

记录不确定性，避免编造概率。 instead of + 动词-ing表达替代动作；uncertainty不可数。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：No incident data is available. Should the worksheet invent probabilities?

**变式参考**：No. Record uncertainty and identify needed evidence. Use a justified qualitative assessment if appropriate, and review it with relevant staff.

**自查**：已检查并避开这些误区：没有数据就不要凭空写“80%攻击概率”；控制措施不能写成已保证零风险。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) · PDF 16–21 · 搜索 Security and Privacy Administration


## T052 · Security policies 与 procedures

What should security policies and procedures contain?

安全政策与流程应包含什么？

### 精简参考答案

Security policies state rules for access and acceptable use. Procedures describe how people carry out those rules. They should explain both what to do and why it reduces risk.

The course includes privacy statements about monitoring, logging and access; accountability and auditing responsibilities; authentication rules, including passwords and remote access; and ways to report violations. Other areas include administrator skills, device connection, configuration changes, patching, malware protection, backups, offsite storage and contingency plans.

For example, an access policy may limit who can view student records. A procedure explains how access is approved, reviewed and removed. Rules should be practical and support organizational goals. Excessive control can prevent useful work without producing a proportionate security benefit. Policies also need responsible owners, user awareness and regular review as the network changes.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：Policy 规定访问和使用的规则及责任，procedure 说明落实规则的步骤；两者共同降低风险暴露，并支持认证、问责、事件处理及持续维护。

1. policy规定谁能做什么，procedure解释如何申请、审批、执行和复核；一个原则必须能落实到责任与操作。

2. 安全要求包括人员、配置、补丁、备份及应急，而非只装防火墙。规则过严也可能阻断业务，需要风险与可用性相协调。

**英文关键句**：A procedure explains how the rule is carried out.

流程说明规则如何执行。 carry out是完整表达“执行”；is carried out说明规则被执行。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A policy restricts record access, but no removal process exists. What is missing?

**变式参考**：A procedure should define how access is approved, reviewed and removed, with responsible owners and records. The policy alone does not carry out the control.

**自查**：已检查并避开这些误区：policy是规则，procedure是执行步骤；不能只堆设备名。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) · PDF 22–28 · 搜索 Policies and Procedures


## T053 · 默认允许与默认拒绝的安全哲学

Compare the two security philosophies shown in the lecture: deny specifics/accept everything else and accept specifics/deny everything else.

按原图比较默认放行与默认拒绝。

### 精简参考答案

The first philosophy denies specified traffic and accepts everything else. It is an open approach: traffic matching the deny rules is dropped, while other traffic passes. This can make new communication easier, but an unlisted unwanted flow may also pass.

The second philosophy accepts specified traffic and denies everything else. It is a closed approach: traffic matching the permit rules passes, while other traffic is dropped. This limits access to known allowed communication but requires careful identification and maintenance of legitimate flows.

The choice affects both risk and useful work. For a sensitive service, explicitly defining permitted communication may support its protection goals. However, incomplete rules can block required access or management. A designer should connect the philosophy to threats, required flows and organizational needs, test the rules, and explain how changes will be handled.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：Policy 规定访问和使用的规则及责任，procedure 说明落实规则的步骤；两者共同降低风险暴露，并支持认证、问责、事件处理及持续维护。

1. 两种哲学的核心差在未列出的流：默认允许可能放过未知不良流，默认拒绝可能挡住未识别的合法流。

2. 不是看到deny就更安全，要看规则完整性、必要业务与变更维护。敏感服务可采用明确允许，但要测试管理和恢复流量。

**英文关键句**：Unlisted traffic is denied under this policy.

该策略下未列明流量被拒绝。 under this policy明确适用范围；被动is denied比“all bad traffic stops”准确。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A new legitimate service is blocked under default deny. What should happen?

**变式参考**：Validate the required flow and authorize a specific rule change. Test the service and related management access without opening unnecessary communication.

**自查**：已检查并避开这些误区：这是图中的策略逻辑，不能等同某设备ACL语法已配置好；默认拒绝也需正确允许合法业务。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) · PDF 24–26 · 搜索 Policies and Procedures


## T054 · 物理安全与 packet filtering

Describe physical security and packet filtering, including their limits.

描述物理安全和包过滤，并说明局限。

### 精简参考答案

Physical security protects equipment and facilities from unauthorized access, theft or damage. Measures can include controlled rooms, locked cabinets and appropriate environmental protection. These measures matter because physical access can bypass some logical controls or interrupt service.

Packet filtering permits or denies traffic according to defined rules, such as source or destination IP addresses, protocols and port numbers. It can restrict access to a server or separate network zones.

These mechanisms address different risks and work best together. A locked server room does not stop an attacker using an allowed network service. A packet filter does not prove that every permitted message is safe or that its sender is trustworthy. Filters require correct rules, maintenance and testing. Their placement should follow asset locations, communication requirements and the organization’s security policy.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：安全机制是落实安全目标的硬件、软件或操作安排；应将机制与威胁和资产相匹配，并考虑性能、管理及地址路由的相互影响。

1. physical security保护设施设备；packet filtering根据包属性执行边界规则，两者针对不同攻击入口。

2. 允许某端口不表示内容安全，也不证明发送者身份。规则、位置、维护与测量都影响效果，因此必须解释限制，不能只列措施。

**英文关键句**：An allowed packet is not necessarily safe.

被允许的包不一定安全。 not necessarily是边界表达；不要把基本过滤描述成完整内容检测。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A permitted web request contains malicious content. Must a basic packet filter stop it?

**变式参考**：No. Matching allowed addresses and ports does not prove content is safe. Additional controls may be needed for the assessed threat.

**自查**：已检查并避开这些误区：允许端口不代表该端口所有内容都安全。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) · PDF 29–35 · 搜索 Physical Security


## T055 · IPsec、SNMPv3 与 encryption

Explain IPsec, SNMPv3 and encryption as security mechanisms.

解释三种协议/机制怎样保护通信。

### 精简参考答案

IPsec provides security functions at the IP layer. Depending on the selected mechanisms, it can support authentication, integrity and encryption. Transport mode protects communication between endpoints, while tunnel mode carries an original IP packet inside a new packet and is useful for secured paths between network boundaries.

SNMPv3 adds security capabilities to network management. Its user-based security model can protect against message modification, impersonation and disclosure when appropriate security settings are used.

Encryption makes data unreadable to a party without the required key. It supports confidentiality, but it does not solve every security problem. Key distribution, access control and endpoint protection still matter. These mechanisms also consume processing and require administration. A designer should select and test them against the risks and performance needs of the intended service.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：安全机制是落实安全目标的硬件、软件或操作安排；应将机制与威胁和资产相匹配，并考虑性能、管理及地址路由的相互影响。

1. IPsec属于IP层保护；具体认证、完整性、加密取决于选用协议与配置，不能说所有模式都相同。

2. SNMPv3可提供管理安全，但安全级别配置仍重要。encryption保护可读性，身份、授权、密钥与终端还需另外设计。

**英文关键句**：Protection depends on the selected settings.

保护取决于所选设置。 selected作为形容词“选定的”；不要把版本号当启用所有保护的证据。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Is every SNMPv3 exchange automatically encrypted?

**变式参考**：No. Protection depends on the security level and configuration. Authentication, privacy settings and access restrictions must be selected appropriately.

**自查**：已检查并避开这些误区：不要把SNMPv3任意配置都说成必定加密；不死背旧加密算法为现今推荐。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) · PDF 32–37 · 搜索 Protocol & Application Security


## T056 · 两种安全与隐私机制

Describe two security and privacy mechanisms.

描述两种安全与隐私机制。

### 精简参考答案

Two mechanisms are encryption and authentication. Encryption changes readable data into a form that cannot be understood without the appropriate key. It helps protect confidentiality when information is transmitted or stored. For example, encrypted communication can reduce the risk of someone reading private student information while it travels across a network. The keys must also be protected and managed.

Authentication checks the identity claimed by a user or device. For example, a university system can check a user's credentials before allowing a login. This helps reduce unauthorized access and supports accountability. However, authentication must be followed by suitable authorization rules: proving an identity does not give access to every resource.

These mechanisms address different needs and can work together. Encryption alone does not automatically provide every security goal, and authentication alone does not prevent every attack. Their selection should follow the assets, threats and requirements identified during security planning.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：安全机制是落实安全目标的硬件、软件或操作安排；应将机制与威胁和资产相匹配，并考虑性能、管理及地址路由的相互影响。

1. 严格回答two：每种机制都写“作用→保护目标→例子→限制”。encryption控制谁能读，authentication核验身份。

2. authentication不等于authorization：知道是谁之后，还需决定能访问什么。两者组合可互补，但不能承诺消除所有攻击。

**英文关键句**：Authentication must be followed by suitable authorization.

认证后还需适当授权。 be followed by表示后续需要；authorization是“授权”，与authentication成对记忆。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A user passes login. May the user access every record?

**变式参考**：No. Authentication verifies the claimed identity. Authorization must still limit the resources and actions allowed to that identity.

**自查**：已检查并避开这些误区：只列名称不描述；把authentication和authorization混为一谈；把encryption说成自动满足全部CIA。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) · PDF 29–50 · 搜索 Security and Privacy Mechanisms


## T057 · NAT、firewall、DMZ 与分区

Explain how NAT, firewalls and DMZs contribute to network perimeter design.

说明边界安全与分区。

### 精简参考答案

NAT translates addresses between address spaces. It can hide internal addressing from external networks, but address translation alone is not a complete security policy. Authentication, filtering and other protections may still be needed.

A firewall controls communication across a boundary according to rules. A DMZ is a separate zone often used for externally reachable services. It allows access to those services while restricting movement into more sensitive internal networks. Isolation LANs and additional zones can separate groups with different risks or needs.

For example, a public web server can be placed in a DMZ while internal records remain behind another controlled boundary. The design must specify allowed paths and management access. More zones can improve separation but increase cost and operational complexity. Their placement should follow threat analysis and required flows.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：安全机制是落实安全目标的硬件、软件或操作安排；应将机制与威胁和资产相匹配，并考虑性能、管理及地址路由的相互影响。

1. NAT转换地址，firewall执行通信规则，DMZ安排暴露服务与内部资产之间的区域关系；三者功能不同。

2. 把公开web放DMZ不是允许它访问整个内网。必须标明方向、允许服务和管理路径，且考虑额外分区的运行成本。

**英文关键句**：A DMZ separates public services from sensitive internal resources.

DMZ将公开服务与敏感内部资源分开。 separate A from B；separation仍需具体边界规则支持。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A public server is in a DMZ. Should all traffic from it to internal records be allowed?

**变式参考**：No. Permit only justified flows under policy. DMZ placement reduces exposure only when boundaries and management access are correctly controlled.

**自查**：已检查并避开这些误区：NAT不是encryption；DMZ不等于完全可信或无须保护。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) · PDF 38–50 · 搜索 Network Perimeter Security


## T058 · 嵌套安全区与较扁平安全区

Compare nested security zones with a less hierarchical security-zone design. How should their placement be justified?

比较嵌套/较扁平安全区及布置理由。

### 精简参考答案

Nested security zones place protected areas inside larger controlled areas. Traffic reaching a more restricted zone may cross several security boundaries. This can provide layered separation, but it can also create additional processing and management work.

A less hierarchical design places security zones across the network according to particular groups, functions or assets. The zones do not all have to be inside a single chain of increasingly restricted areas. Neither arrangement is automatically best for every network.

Placement should follow threat analysis and required communication. Identify the assets, allowed flows, management paths and effects on performance. For example, externally accessible services can be separated from sensitive internal records without assuming that every internal service needs identical controls. Document the trade-offs and test useful access as well as restrictions. The topology and security-zone views should support each other rather than being treated as the same model.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：安全机制是落实安全目标的硬件、软件或操作安排；应将机制与威胁和资产相匹配，并考虑性能、管理及地址路由的相互影响。

1. nested让进入更深区域的流跨多重边界，可能增加保护也增加处理与管理；较扁平区域按资产/功能横向布置。

2. 区域是访问与风险边界，不一定对应物理楼层。哪种更好由威胁、流、管理可达性和性能要求决定。

**英文关键句**：More layers can add both protection and complexity.

更多层既可能增加保护，也可能增加复杂度。 both A and B用于同时列收益和代价，随后说明何时值得采用。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：Must every internal service sit inside the deepest zone?

**变式参考**：No. Zone placement should follow asset risk and required communication. Unnecessary nesting may add cost and delay without a proportionate benefit.

**自查**：已检查并避开这些误区：扁平分区不等于没有security；多层也不能保证每个跨区flow都满足delay目标。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) · PDF 43–50 · 搜索 Evaluation of Security Mechanisms


## T059 · 安全架构的 trade-offs

Discuss internal and external relationships of security architecture.

讨论安全机制相互影响及与其他组件的关系。

### 精简参考答案

Within security architecture, mechanisms can depend on or constrain one another. Encryption requires key management, while address-based rules depend on accurate addressing information. Combining mechanisms therefore needs more than selecting each one separately.

Security also interacts with other component architectures. Inspection and encryption can add processing work and delay. Security rules can block management traffic, even though monitoring and configuration are needed to verify protection. Dynamic addressing and NAT can make address-based access rules and logs harder to interpret.

A designer should compare these effects with the priorities identified during analysis. Selective protection and well-placed zones can protect important assets while controlling unnecessary overhead. Measure the resulting service rather than assuming every security mechanism has the same cost. Document the remaining risks and review the balance when applications or threats change.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：安全机制是落实安全目标的硬件、软件或操作安排；应将机制与威胁和资产相匹配，并考虑性能、管理及地址路由的相互影响。

1. 区分内部依赖（加密需密钥管理）与外部影响（安全处理增加时延，规则限制管理）；关系要具体到机制。

2. 设备加速、选择性部署可改变性能代价，因此课件旧百分比不能当所有实现的常数。用真实负载和故障条件验证整体效果。

**英文关键句**：More bandwidth may not remove a processing bottleneck.

更多带宽可能无法消除处理瓶颈。 may not表示可能不；processing bottleneck是“处理瓶颈”，对应实际受限资源。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Encryption increases processing delay. Will buying more link bandwidth always fix it?

**变式参考**：No. The bottleneck may be encryption processing. Measure the limiting resource and consider suitable implementation, placement or capacity changes.

**自查**：已检查并避开这些误区：课件15–85%是旧例子，不当普遍性能损失公式。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) · PDF 42–50 · 搜索 External Relationship

