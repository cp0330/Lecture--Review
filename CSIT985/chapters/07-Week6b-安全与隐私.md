# 07-Week6b-安全与隐私

返回：[期末题库总入口](../README.md)；[旧题号与当前题号对照](../question-map.md)。

本册按对应课件的可见页序排列。计算与补题放到其知识点附近；Workshop Flow题接在Week5 Flow主线，原资源仍明确标为Workshop Week7a。综合长答统一放最后。

来源页码按PDF文件从第1页起计，包含封面。英文答案为教学参考，不是官方评分答案。老师样题保留标记。使用条件与假设属于答案的一部分。

## T049

**CIA 与 privacy**

- 题型：简答；检索码：Q38；依据：范围扩展题。
- 知识点：Security and privacy（网络安全与网络隐私）。

**Question:** Explain confidentiality, integrity, availability and privacy in strategic network design.

**中文题意：**解释安全目标与隐私。

### 中文思路

C防泄露、I防未授权修改、A合法用户可用；privacy含个人信息恰当使用。

### 英文参考答案（131词）

Confidentiality means that information is available only to authorized parties. Integrity means that information and resources are protected against unauthorized change or corruption. Availability means that authorized users can obtain required services when needed.

Privacy concerns the appropriate collection, use, access and disclosure of personal information. It overlaps with security, but protecting data from attackers does not by itself make every use of that data appropriate.

These goals matter because organizations depend on networks for work and communication. Loss of confidentiality may expose records, loss of integrity may make decisions unreliable, and loss of availability may stop services. The design should identify important assets and threats, select suitable controls and consider operational trade-offs. Security and privacy should shape architecture from the beginning rather than being added only as a final device.

### 易错、变式与反馈

加密主要保密，不能单独保证CIA全目标。

变式：Explain why security and privacy are strategic rather than optional add-ons.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → **PDF物理页5–14**，关键词`Three Classic Security Considerations`。

## T050

**Threat analysis 与风险排序**

- 题型：简答；检索码：Q39；依据：范围扩展题。
- 知识点：Threat analysis（威胁分析）。

**Question:** Why is threat analysis important, and what should it consider?

**中文题意：**为什么做威胁分析，应考虑什么？

### 中文思路

asset→threat→likelihood+impact→优先级→措施→复查；多方减少主观性。

### 英文参考答案（134词）

Threat analysis identifies assets that need protection and the threats that may harm them. Assets include devices, software, services and data. Threats include unauthorized access or disclosure, denial of service, theft, corruption, malware and physical damage.

For each important asset–threat combination, assess the likelihood and the potential cost or damage. The impact depends on organizational goals. A threat with both high likelihood and serious consequences needs a plan to reduce the risk to an acceptable level.

The results guide priorities, control selection and resource allocation. For example, protecting a critical teaching service may require stronger availability controls than protecting a low-priority test service. Analysis is partly subjective, so involve different groups and record assumptions. Review it periodically because assets, services, users and threats change. A list of threats without consequences or priorities is incomplete.

### 易错、变式与反馈

风险不只看攻击概率，还要看业务损害。

变式：Name three threats and connect each to an asset, impact and control.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → **PDF物理页14–21**，关键词`Threat analysis`。

## T051

**填写 Threat analysis worksheet**

- 题型：简答；检索码：Q96；依据：缺口补题；依据课件的AI参考答案。
- 知识点：Threat analysis（威胁分析）。

**Question:** Complete a threat-analysis worksheet for student records, online teaching and stored research data. Explain how the results guide priorities.

**中文题意：**对三个资产给出威胁、可能性、损害和措施。

### 中文思路

worksheet不是只列攻击名。示例：学生记录—未授权访问—泄露/修改；教学—DoS—停课；研究存储—恶意软件/损坏—数据丢失。概率和损失无原始数据时标待评估，不编造百分比。

|资产|威胁|可能性|业务损害|可选控制|后续证据|
|---|---|---|---|---|---|
|学生记录|未授权访问/披露|待评估，不捏造百分比|隐私泄露、记录完整性受损|认证、最小访问、审计|用户/管理员访谈、访问记录|
|在线教学服务|DoS|待评估|课堂中断、服务不可用|适当流量控制、冗余与恢复计划|服务日志、依赖和容量测试|
|研究存储|恶意软件/数据损坏|待评估|研究数据不可用或错误|访问控制、保护、经测试恢复|备份恢复证据、系统维护记录|

这是课堂框架上的AI示例；控制是否充分、风险排序需结合实际概率和损失，不能只凭资产名称下结论。

### 英文参考答案（135词）

A threat-analysis worksheet connects each asset with a threat, its likelihood, possible damage and an appropriate response. For student records, unauthorized access could expose personal data or change results. Access control, authentication and logging can reduce that risk.

For online teaching, denial of service can interrupt classes. Appropriate traffic controls and resilience planning can reduce the impact. For research storage, malware or data corruption can destroy useful work. Protection, controlled access and tested recovery procedures can support restoration.

These are illustrative scenarios, not measured probabilities for a real university. Record likelihood as needing assessment unless evidence is available. Estimate impact in relation to the organization’s goals and involve the relevant users and staff. High-likelihood, high-impact combinations require particular attention. The worksheet should guide priorities and controls and be reviewed when assets, threats or services change.

### 易错、变式与反馈

没有数据就不要凭空写“80%攻击概率”；控制措施不能写成已保证零风险。

变式：先遮住答案复述；再换一个场景说明分类、机制或条件。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → **PDF物理页16–21**，关键词`Security and Privacy Administration`。

## T052

**Security policies 与 procedures**

- 题型：简答；检索码：Q40；依据：范围扩展题。
- 知识点：Security policies and procedures（安全政策与操作程序）。

**Question:** What should security policies and procedures contain?

**中文题意：**安全政策与流程应包含什么？

### 中文思路

规则和理由；隐私/责任/认证/报告；配置补丁备份/应急；服务组织目标。

### 英文参考答案（129词）

Security policies state rules for access and acceptable use. Procedures describe how people carry out those rules. They should explain both what to do and why it reduces risk.

The course includes privacy statements about monitoring, logging and access; accountability and auditing responsibilities; authentication rules, including passwords and remote access; and ways to report violations. Other areas include administrator skills, device connection, configuration changes, patching, malware protection, backups, offsite storage and contingency plans.

For example, an access policy may limit who can view student records. A procedure explains how access is approved, reviewed and removed. Rules should be practical and support organizational goals. Excessive control can prevent useful work without producing a proportionate security benefit. Policies also need responsible owners, user awareness and regular review as the network changes.

### 易错、变式与反馈

policy是规则，procedure是执行步骤；不能只堆设备名。

变式：Describe privacy, accountability, authentication and incident-reporting statements.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → **PDF物理页22–28**，关键词`Policies and Procedures`。

## T053

**默认允许与默认拒绝的安全哲学**

- 题型：简答；检索码：Q97；依据：缺口补题；依据课件的AI参考答案。
- 知识点：Security policies and procedures（安全政策与操作程序）。

**Question:** Compare the two security philosophies shown in the lecture: deny specifics/accept everything else and accept specifics/deny everything else.

**中文题意：**按原图比较默认放行与默认拒绝。

### 中文思路

左图deny list：明确拒绝命中项，其余通过；右图allow list：明确允许命中项，其余丢弃。开放性/控制范围/维护要求取舍；不是“四种哲学”。

### 英文参考答案（135词）

The first philosophy denies specified traffic and accepts everything else. It is an open approach: traffic matching the deny rules is dropped, while other traffic passes. This can make new communication easier, but an unlisted unwanted flow may also pass.

The second philosophy accepts specified traffic and denies everything else. It is a closed approach: traffic matching the permit rules passes, while other traffic is dropped. This limits access to known allowed communication but requires careful identification and maintenance of legitimate flows.

The choice affects both risk and useful work. For a sensitive service, explicitly defining permitted communication may support its protection goals. However, incomplete rules can block required access or management. A designer should connect the philosophy to threats, required flows and organizational needs, test the rules, and explain how changes will be handled.

### 易错、变式与反馈

这是图中的策略逻辑，不能等同某设备ACL语法已配置好；默认拒绝也需正确允许合法业务。

变式：先遮住答案复述；再换一个场景说明分类、机制或条件。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → **PDF物理页24–26**，关键词`Policies and Procedures`。

## T054

**物理安全与 packet filtering**

- 题型：简答；检索码：Q41；依据：范围扩展题。
- 知识点：Security mechanisms（网络安全与隐私保护机制）。

**Question:** Describe physical security and packet filtering, including their limits.

**中文题意：**描述物理安全和包过滤，并说明局限。

### 中文思路

机房/设备接触控制；IP/port allow/deny；单项控制不覆盖所有威胁。

### 英文参考答案（130词）

Physical security protects equipment and facilities from unauthorized access, theft or damage. Measures can include controlled rooms, locked cabinets and appropriate environmental protection. These measures matter because physical access can bypass some logical controls or interrupt service.

Packet filtering permits or denies traffic according to defined rules, such as source or destination IP addresses, protocols and port numbers. It can restrict access to a server or separate network zones.

These mechanisms address different risks and work best together. A locked server room does not stop an attacker using an allowed network service. A packet filter does not prove that every permitted message is safe or that its sender is trustworthy. Filters require correct rules, maintenance and testing. Their placement should follow asset locations, communication requirements and the organization’s security policy.

### 易错、变式与反馈

允许端口不代表该端口所有内容都安全。

变式：Give one physical control and one logical control for a server.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → **PDF物理页29–35**，关键词`Physical Security`。

## T055

**IPsec、SNMPv3 与 encryption**

- 题型：简答；检索码：Q42；依据：范围扩展题。
- 知识点：Security mechanisms（网络安全与隐私保护机制）。

**Question:** Explain IPsec, SNMPv3 and encryption as security mechanisms.

**中文题意：**解释三种协议/机制怎样保护通信。

### 中文思路

IPsec网络层传输/隧道；SNMPv3保护管理消息；加密及密钥管理。

### 英文参考答案（128词）

IPsec provides security functions at the IP layer. Depending on the selected mechanisms, it can support authentication, integrity and encryption. Transport mode protects communication between endpoints, while tunnel mode carries an original IP packet inside a new packet and is useful for secured paths between network boundaries.

SNMPv3 adds security capabilities to network management. Its user-based security model can protect against message modification, impersonation and disclosure when appropriate security settings are used.

Encryption makes data unreadable to a party without the required key. It supports confidentiality, but it does not solve every security problem. Key distribution, access control and endpoint protection still matter. These mechanisms also consume processing and require administration. A designer should select and test them against the risks and performance needs of the intended service.

### 易错、变式与反馈

不要把SNMPv3任意配置都说成必定加密；不死背旧加密算法为现今推荐。

变式：Compare IPsec transport and tunnel modes; discuss encryption overhead.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → **PDF物理页32–37**，关键词`Protocol & Application Security`。

## T056

**两种安全与隐私机制**

- 题型：简答；检索码：Q02；依据：老师样题（Week13 PDF p.16）。
- 知识点：Security mechanisms（网络安全与隐私保护机制）。

**Question:** Describe two security and privacy mechanisms.

**中文题意：**描述两种安全与隐私机制。

### 中文思路

两种机制是加密与身份认证。加密把可读数据变成没有合适密钥就无法理解的形式，帮助保护传输或存储中信息的保密性。例如，加密通信可以降低学生私人信息在传输途中被人读取的风险，密钥也必须受到保护和管理。

身份认证检查用户或设备声称的身份。例如，大学系统可以在允许登录前验证用户凭据，帮助减少未授权访问并支持问责。但认证后还需要适当的授权规则：证明身份不代表能访问每一种资源。

两种机制处理不同需要，可以配合使用。加密不自动提供所有安全目标，身份认证也不阻止所有攻击。选择应依据安全规划中识别的资产、威胁和需求。

### 英文参考答案（149词）

Two mechanisms are encryption and authentication. Encryption changes readable data into a form that cannot be understood without the appropriate key. It helps protect confidentiality when information is transmitted or stored. For example, encrypted communication can reduce the risk of someone reading private student information while it travels across a network. The keys must also be protected and managed.

Authentication checks the identity claimed by a user or device. For example, a university system can check a user's credentials before allowing a login. This helps reduce unauthorized access and supports accountability. However, authentication must be followed by suitable authorization rules: proving an identity does not give access to every resource.

These mechanisms address different needs and can work together. Encryption alone does not automatically provide every security goal, and authentication alone does not prevent every attack. Their selection should follow the assets, threats and requirements identified during security planning.

### 易错、变式与反馈

只列名称不描述；把authentication和authorization混为一谈；把encryption说成自动满足全部CIA。

变式：为什么成功登录后，系统仍需要检查用户能访问哪些资料？

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → **PDF物理页29–50**，关键词`Security and Privacy Mechanisms`。

## T057

**NAT、firewall、DMZ 与分区**

- 题型：简答；检索码：Q43；依据：范围扩展题。
- 知识点：Security mechanisms（网络安全与隐私保护机制）。

**Question:** Explain how NAT, firewalls and DMZs contribute to network perimeter design.

**中文题意：**说明边界安全与分区。

### 中文思路

NAT地址转换；firewall访问规则；DMZ隔离外部服务；不是单层万能保护。

### 英文参考答案（131词）

NAT translates addresses between address spaces. It can hide internal addressing from external networks, but address translation alone is not a complete security policy. Authentication, filtering and other protections may still be needed.

A firewall controls communication across a boundary according to rules. A DMZ is a separate zone often used for externally reachable services. It allows access to those services while restricting movement into more sensitive internal networks. Isolation LANs and additional zones can separate groups with different risks or needs.

For example, a public web server can be placed in a DMZ while internal records remain behind another controlled boundary. The design must specify allowed paths and management access. More zones can improve separation but increase cost and operational complexity. Their placement should follow threat analysis and required flows.

### 易错、变式与反馈

NAT不是encryption；DMZ不等于完全可信或无须保护。

变式：Compare perimeter security with internal segmentation; discuss NAT limits.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → **PDF物理页38–50**，关键词`Network Perimeter Security`。

## T058

**嵌套安全区与较扁平安全区**

- 题型：简答；检索码：Q98；依据：缺口补题；依据课件的AI参考答案。
- 知识点：Security mechanisms（网络安全与隐私保护机制）。

**Question:** Compare nested security zones with a less hierarchical security-zone design. How should their placement be justified?

**中文题意：**比较嵌套/较扁平安全区及布置理由。

### 中文思路

嵌套：穿越逐层边界；较扁平：按多组功能/敏感性分区，不必每组套在下一组内。由资产、威胁、flow决定；与access/distribution/core是不同视角。

### 英文参考答案（145词）

Nested security zones place protected areas inside larger controlled areas. Traffic reaching a more restricted zone may cross several security boundaries. This can provide layered separation, but it can also create additional processing and management work.

A less hierarchical design places security zones across the network according to particular groups, functions or assets. The zones do not all have to be inside a single chain of increasingly restricted areas. Neither arrangement is automatically best for every network.

Placement should follow threat analysis and required communication. Identify the assets, allowed flows, management paths and effects on performance. For example, externally accessible services can be separated from sensitive internal records without assuming that every internal service needs identical controls. Document the trade-offs and test useful access as well as restrictions. The topology and security-zone views should support each other rather than being treated as the same model.

### 易错、变式与反馈

扁平分区不等于没有security；多层也不能保证每个跨区flow都满足delay目标。

变式：先遮住答案复述；再换一个场景说明分类、机制或条件。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → **PDF物理页43–50**，关键词`Evaluation of Security Mechanisms`。

## T059

**安全架构的 trade-offs**

- 题型：简答；检索码：Q44；依据：范围扩展题。
- 知识点：Security mechanisms（网络安全与隐私保护机制）。

**Question:** Discuss internal and external relationships of security architecture.

**中文题意：**讨论安全机制相互影响及与其他组件的关系。

### 中文思路

内部机制依赖/约束；security↔performance、management、addressing。

### 英文参考答案（131词）

Within security architecture, mechanisms can depend on or constrain one another. Encryption requires key management, while address-based rules depend on accurate addressing information. Combining mechanisms therefore needs more than selecting each one separately.

Security also interacts with other component architectures. Inspection and encryption can add processing work and delay. Security rules can block management traffic, even though monitoring and configuration are needed to verify protection. Dynamic addressing and NAT can make address-based access rules and logs harder to interpret.

A designer should compare these effects with the priorities identified during analysis. Selective protection and well-placed zones can protect important assets while controlling unnecessary overhead. Measure the resulting service rather than assuming every security mechanism has the same cost. Document the remaining risks and review the balance when applications or threats change.

### 易错、变式与反馈

课件15–85%是旧例子，不当普遍性能损失公式。

变式：Explain why maximum inspection everywhere may not be the best overall design.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → **PDF物理页42–50**，关键词`External Relationship`。

