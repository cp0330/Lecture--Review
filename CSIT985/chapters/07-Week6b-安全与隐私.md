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

<!-- answer-guidance:T049:start -->
### 组织方式与答题思路

**任务类型：**定义＋重要性。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 逐项定义CIA。
2. 说明privacy关注个人信息的适当处理。
3. 分别写失效后果。
4. 连接资产、威胁、控制和架构早期取舍。

**现有参考答案的组织方式：**

- 第1段：confidentiality、integrity、availability。
- 第2段：privacy及与security的关系。
- 第3段：失效后果与需求驱动保护。

**回Moodle核对：**

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → PDF物理页 **5–14**；课件主题：Three Classic Security Considerations。

搜索词：`confidentiality`；`integrity`；`availability`；`privacy`。

查到后确认：核对CIA三目标和privacy，不把保密性当全部安全。

**换问法时：**若问importance，把组织后果提前，定义缩短为支持句。
<!-- answer-guidance:T049:end -->

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

<!-- answer-guidance:T050:start -->
### 组织方式与答题思路

**任务类型：**原因＋考虑因素。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 先回答威胁分析指导优先级和控制选择。
2. 识别具体asset与threat。
3. 评估likelihood和impact并联系组织目标。
4. 说明参与、假设和定期复查。

**现有参考答案的组织方式：**

- 第1段：分析对象、资产与威胁类别。
- 第2段：可能性、损害及风险处理。
- 第3段：优先级用途、例子与复查条件。

**回Moodle核对：**

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → PDF物理页 **14–21**；课件主题：Threat analysis。

搜索词：`threat analysis`；`likelihood`；`impact`；`assets`。

查到后确认：核对分析表的资产、威胁、概率/损害和应对字段。

**换问法时：**若问why，说明没有分析会怎样误配资源；若问consider，列齐因素。
<!-- answer-guidance:T050:end -->

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

<!-- answer-guidance:T051:start -->
### 组织方式与答题思路

**任务类型：**案例表格＋解释。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按学生记录、在线教学、研究存储逐项列资产。
2. 每项配threat→consequence→control。
3. likelihood没有证据时标待评估。
4. 最后按发生可能性与后果解释优先级。

**现有参考答案的组织方式：**

- 第1段：worksheet结构与学生记录案例。
- 第2段：教学与研究存储案例。
- 第3段：示例性质、评估证据与优先级。

**回Moodle核对：**

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → PDF物理页 **16–21**；课件主题：Security and Privacy Administration。

搜索词：`threat analysis`；`worksheet`；`likelihood`。

查到后确认：看原worksheet列名并核对本题三个资产。

**换问法时：**若要求complete worksheet，正式答案宜按列逐项写清，不虚构测量概率。
<!-- answer-guidance:T051:end -->

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

<!-- answer-guidance:T052:start -->
### 组织方式与答题思路

**任务类型：**政策内容＋实施。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 区分policy定规则与procedure定落实方法。
2. 按访问、隐私、问责、认证、报告等组织清单。
3. 补运维、备份和应急责任。
4. 给记录访问例子，并说明可行性和复查。

**现有参考答案的组织方式：**

- 第1段：policy与procedure的分工。
- 第2段：课程列出的政策与运维事项。
- 第3段：批准访问例子、成本比例与定期维护。

**回Moodle核对：**

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → PDF物理页 **22–28**；课件主题：Policies and Procedures。

搜索词：`security policy`；`procedures`；`accountability`。

查到后确认：核对隐私、认证、审计、报告、运维和应急内容。

**换问法时：**若给单一policy，写谁可做什么、怎么执行、由谁复核，不只列安全产品。
<!-- answer-guidance:T052:end -->

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

<!-- answer-guidance:T053:start -->
### 组织方式与答题思路

**任务类型：**对称比较。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 先按规则匹配与默认动作对比两种哲学。
2. 说明开放式便利与未列流量风险。
3. 说明封闭式限制与漏配合法流风险。
4. 用所需业务和威胁解释选型及测试。

**现有参考答案的组织方式：**

- 第1段：deny specifics/accept others。
- 第2段：accept specifics/deny others。
- 第3段：风险与可用工作平衡、选型与维护。

**回Moodle核对：**

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → PDF物理页 **24–26**；课件主题：Policies and Procedures。

搜索词：`deny`；`accept`；`security philosophy`。

查到后确认：核对两句话中的specifics与everything else，避免默认动作反写。

**换问法时：**若给新流量，先判断是否命中明确规则，再应用默认动作。
<!-- answer-guidance:T053:end -->

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

<!-- answer-guidance:T054:start -->
### 组织方式与答题思路

**任务类型：**两种机制＋限制。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 物理安全写保护设备与设施的方法。
2. packet filtering写按哪些字段permit/deny。
3. 说明两者针对不同风险。
4. 各写不能解决的问题和部署条件。

**现有参考答案的组织方式：**

- 第1段：物理安全、措施与意义。
- 第2段：packet filtering规则与用途。
- 第3段：互补关系、各自限制及放置依据。

**回Moodle核对：**

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → PDF物理页 **29–35**；课件主题：Physical Security。

搜索词：`physical security`；`packet filtering`；`ports`。

查到后确认：核对物理措施与过滤字段，不把允许包当成可信内容。

**换问法时：**若要求比较，按保护对象、依据、效果与限制对照两者。
<!-- answer-guidance:T054:end -->

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

<!-- answer-guidance:T055:start -->
### 组织方式与答题思路

**任务类型：**机制解释＋条件。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. IPsec写IP层保护及transport/tunnel。
2. SNMPv3写管理消息的保护。
3. encryption写保密性与密钥。
4. 说明控制选择需要兼顾端点、开销与管理。

**现有参考答案的组织方式：**

- 第1段：IPsec功能与两模式。
- 第2段：SNMPv3的保护能力及配置条件。
- 第3段：加密作用、密钥与总体取舍。

**回Moodle核对：**

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → PDF物理页 **32–37**；课件主题：Protocol & Application Security。

搜索词：`IPsec`；`transport`；`tunnel`；`SNMPv3`。

查到后确认：核对安全功能和配置条件，区分保护层次与管理协议。

**换问法时：**若问某机制，不说它自动提供全部安全目标，明确启用的功能。
<!-- answer-guidance:T055:end -->

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

<!-- answer-guidance:T056:start -->
### 组织方式与答题思路

**任务类型：**指定数量＋机制。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 先明确选择encryption与authentication两种。
2. 加密：怎样保护confidentiality＋例子＋密钥条件。
3. 认证：怎样检查身份＋例子＋authorization边界。
4. 说明两者互补并由威胁分析决定。

**现有参考答案的组织方式：**

- 第1段：加密定义、目标、案例和密钥。
- 第2段：认证定义、案例与授权边界。
- 第3段：两者互补、限制与需求依据。

**回Moodle核对：**

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → PDF物理页 **29–50**；课件主题：Security and Privacy Mechanisms。

搜索词：`encryption`；`authentication`；`authorization`。

查到后确认：核对各机制保护的目标及authentication/authorization区别。

**换问法时：**题干说two时把这两种解释充分，不临时堆更多名称稀释答案。
<!-- answer-guidance:T056:end -->

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

<!-- answer-guidance:T057:start -->
### 组织方式与答题思路

**任务类型：**机制组合＋布局。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 区分NAT转换地址、firewall控制访问、DMZ隔离服务。
2. 说明各自解决的问题。
3. 用公网web与内部记录的允许路径举例。
4. 补管理访问、分区成本和威胁依据。

**现有参考答案的组织方式：**

- 第1段：NAT作用与安全边界。
- 第2段：firewall、DMZ与隔离区。
- 第3段：服务放置例子与复杂度取舍。

**回Moodle核对：**

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → PDF物理页 **38–50**；课件主题：Network Perimeter Security。

搜索词：`NAT`；`firewall`；`DMZ`；`perimeter`。

查到后确认：看周界/DMZ图的区域与允许路径，不把NAT当完整安全政策。

**换问法时：**若给服务器布局，先按对外访问和资产敏感性分区，再解释允许哪些flow。
<!-- answer-guidance:T057:end -->

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

<!-- answer-guidance:T058:start -->
### 组织方式与答题思路

**任务类型：**比较＋论证。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 比较nested与较扁平分区的边界结构。
2. 说明层层隔离带来的处理与管理代价。
3. 按资产、允许流量和恢复管理路径论证放置。
4. 说明分区视图与物理拓扑的关系。

**现有参考答案的组织方式：**

- 第1段：nested结构及代价。
- 第2段：较扁平分区与非万能选型。
- 第3段：威胁/flow依据、例子和验证。

**回Moodle核对：**

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → PDF物理页 **43–50**；课件主题：Evaluation of Security Mechanisms。

搜索词：`nested`；`security zones`；`placement`。

查到后确认：看分区图确认哪些区域嵌套，哪些独立连接。

**换问法时：**若要求justify，不只描述图形，要把每个边界连到具体风险与业务。
<!-- answer-guidance:T058:end -->

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

<!-- answer-guidance:T059:start -->
### 组织方式与答题思路

**任务类型：**内部外部关系＋取舍。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 先写安全机制内部依赖与限制。
2. 再写与performance、management、addressing的外部影响。
3. 把收益、代价连到业务优先级。
4. 说明测量、剩余风险和复查。

**现有参考答案的组织方式：**

- 第1段：内部机制依赖与约束。
- 第2段：与性能、管理、地址的关系。
- 第3段：优先级、放置、测量与剩余风险。

**回Moodle核对：**

- [Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) → PDF物理页 **42–50**；课件主题：External Relationship。

搜索词：`security architecture`；`dependencies`；`trade-offs`。

查到后确认：核对关系两端的组件归属及影响机制。

**换问法时：**若问trade-off，必须同时写保护收益与性能/运维成本。
<!-- answer-guidance:T059:end -->

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

