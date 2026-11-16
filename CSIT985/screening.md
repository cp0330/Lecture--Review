# 144题筛检与深入解析

学习安排：第一轮主学 77 题；同组巩固 60 题；Essay迁移 7 题。全部题目保留并按原可见顺序排列。

第一轮主学包含全部38个已识别主题的代表题。老师7道简答样题与1道Essay样题已标注；IPv4计算按已保存的Week7/13提示优先练。其余主学选择是零基础学习建议，不是预测考题。

同组巩固题在第一轮仍需读懂其独有概念、条件与结果；第二轮用来检查是否会迁移。它们不是可以永久略过的范围。Essay以T124练完整写作，其余7题练子问覆盖、段落组织与跨主题迁移，并选择薄弱题完整练写。

本轮逐题检查题干与答案的任务对应、资料入口、主题映射、重复程度和解释可读性；复用此前课件与原图审校证据，定向复查高风险内容与数值。新增144份逐题因果/边界讲解及组织步骤。本轮未重新逐页人工审读850页，也未阅读全部参考书章节；因此不声称穷尽未来试卷所有细节或问法。

## 本轮修正

|题目|修正|
|---|---|
|T023|明确已评审拒绝，避免把暂不支持机械归为rejected|
|T097|明确逐值开销模型；实际批量采集另行建模|
|T098|移除失效的C17旧编号，并使题干独立可用|
|T072|补齐all subnet details所需mask与地址/主机数|
|T108|精简答案补答x/y含义、相邻差与距首名差|

## 查缺与保留范围

已发现的新增缺口是答题要素与题干条件，而非确认的新lecture主题：T072信息不全，T108遗漏差值解释，T098旧编号失效，T023拒绝条件不明确，T097开销假设不明确。现有38主题均有题目映射；这一结果不能证明所有课件细节均穷尽。

不能合并掉的差别：PPDIOO与八步方法、组织模式与flow model、internal与external、INTD/HRT/单程/RTT、MTTF与修复模型、路由过滤与包过滤、标记与实际QoS、MIB与历史数据库、iBGP与IGP、SDN与NFV。

## 合并学习组

同组是共用理解过程，不是删除题目或认为答案可互换。
1. 从需求走到设计；生命周期名单各自保留：T001、T002、T003、T004、T133
2. 网络组成、范围与介质使用不同分类轴：T005、T006、T134
3. 封装与socket；135练整条过程：T010、T011、T135
4. 转发路径、router内部、算法与服务范围：T013、T014、T015、T016
5. 战略规划；四种变革策略不能省略：T017、T018、T019、T020
6. 需求分类、来源、步骤与验证：T021、T022、T023、T025、T026、T027、T028、T029、T136
7. 性能指标、并发、单位与时延范围：T030、T031、T035、T036、T137、T138
8. RMA；首次故障模型与可用性模型分开：T032、T033、T034、T139
9. flow定义、方向、模型与优先级：T038、T039、T040、T041、T042
10. flowspec规则与计算：T043、T044
11. 组件关系与架构模型：T045、T046、T047、T048、T132
12. 安全目标、威胁、政策与默认行为：T049、T050、T051、T052、T053
13. 安全机制；以56练两项完整解释：T054、T055、T056、T057、T058、T059
14. 地址基础；特殊用途保留独有范围：T060、T061、T062、T063、T064、T065
15. 子网计算；相同方法合练，跨octet、VLSM与不可行性保留：T066、T067、T068、T069、T070、T071、T072、T073、T074、T075、T076、T077、T078
16. 路由选择、边界与跨组件影响：T079、T080、T081、T082、T083、T084、T140
17. QoS；MPLS、DiffServ、调度保留独有机制：T085、T086、T087、T088、T089、T090、T091、T141、T142
18. 管理对象、采样与解释；CMIP保留历史比较：T092、T093、T094、T095、T096、T143
19. 管理流量、存储、部署和恢复：T097、T098、T099、T100、T101、T102、T103、T104
20. 设计评价、产物与验收；课件加权表需独立练：T037、T105、T106、T107、T108、T109、T110、T111、T112
21. SDN原理、接口、包处理与条件：T113、T114、T115、T116、T144
22. 现代网络应用；三题概念不同，按同一需求比较：T117、T118、T119
23. NFV三要素与SDN组合：T120、T121
24. 学习类型、工作流及评价：T122、T123

## 全部题目筛检表

|顺序|题号与题目|安排|依据/关联|Moodle定位|
|---|---|---|---|---|
|1|[T001 Top-down 与 bottom-up](review-bank.html#T001)|第一轮主学|从需求走到设计；生命周期名单各自保留|[Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) PDF 39–40|
|2|[T132 Access、distribution、core 的职责](review-bank.html#T132)|同组巩固|组件关系与架构模型|[Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) PDF 42–44|
|3|[T002 PPDIOO 生命周期](review-bank.html#T002)|同组巩固|从需求走到设计；生命周期名单各自保留|[Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) PDF 45–46|
|4|[T003 Eight-step design methodology](review-bank.html#T003)|同组巩固|从需求走到设计；生命周期名单各自保留|[Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) PDF 47–55|
|5|[T004 分析、架构、设计的联系](review-bank.html#T004)|第一轮主学|从需求走到设计；生命周期名单各自保留|[Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) PDF 57–64|
|6|[T133 System view 与可辩护的设计](review-bank.html#T133)|同组巩固|从需求走到设计；生命周期名单各自保留|[Week 1 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4587655) PDF 61–64|
|7|[T005 网络要素与设备](review-bank.html#T005)|第一轮主学|网络组成、范围与介质使用不同分类轴|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 5–19|
|8|[T006 网络类别](review-bank.html#T006)|同组巩固|网络组成、范围与介质使用不同分类轴|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 9–19|
|9|[T134 传输介质与无线范围](review-bank.html#T134)|同组巩固|网络组成、范围与介质使用不同分类轴|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 9–12|
|10|[T007 网络组织模式](review-bank.html#T007)|第一轮主学|独立基础主题，按本题任务学习|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 21–26|
|11|[T008 拓扑与故障](review-bank.html#T008)|第一轮主学|独立基础主题，按本题任务学习|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 28–34|
|12|[T009 Protocol 的规则](review-bank.html#T009)|第一轮主学|独立基础主题，按本题任务学习|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 36–46|
|13|[T010 OSI、TCP/IP 与封装](review-bank.html#T010)|第一轮主学|封装与socket；135练整条过程|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 47–57、85–89|
|14|[T011 应用协议、端口与 socket](review-bank.html#T011)|第一轮主学|封装与socket；135练整条过程|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 58–60、66–67|
|15|[T135 PDU、process 与 socket 的完整路径](review-bank.html#T135)|同组巩固|封装与socket；135练整条过程|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 52–60|
|16|[T012 TCP 与 UDP](review-bank.html#T012)|第一轮主学|独立基础主题，按本题任务学习|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 61–68|
|17|[T013 Forwarding、routing 与各层地址](review-bank.html#T013)|第一轮主学|转发路径、router内部、算法与服务范围|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 69–89|
|18|[T014 Router 四部件](review-bank.html#T014)|同组巩固|转发路径、router内部、算法与服务范围|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 71–76|
|19|[T015 Routing algorithm 三组分类](review-bank.html#T015)|同组巩固|转发路径、router内部、算法与服务范围|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 77–83|
|20|[T016 Link、physical 与 service model](review-bank.html#T016)|同组巩固|转发路径、router内部、算法与服务范围|[Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) PDF 86–89|
|21|[T017 Strategic planning 与 Crouch](review-bank.html#T017)|第一轮主学|战略规划；四种变革策略不能省略|[Week 3 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4597211) PDF 5–20|
|22|[T018 规划建议与陷阱](review-bank.html#T018)|同组巩固|战略规划；四种变革策略不能省略|[Week 3 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4597211) PDF 21–26|
|23|[T019 四种变革策略](review-bank.html#T019)|第一轮主学|战略规划；四种变革策略不能省略|[Week 3 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4597211) PDF 27–30|
|24|[T020 规划团队与利益相关者](review-bank.html#T020)|同组巩固|战略规划；四种变革策略不能省略|[Week 3 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4597211) PDF 31–40|
|25|[T021 Core、feature、future、rejected、informational](review-bank.html#T021)|第一轮主学|需求分类、来源、步骤与验证|[Week 3 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4597211) PDF 48–49|
|26|[T022 MUST、SHOULD、MAY 与禁止性要求](review-bank.html#T022)|第一轮主学|需求分类、来源、步骤与验证|[Week 3 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4597211) PDF 50|
|27|[T023 分类、Type、Status 与 Priority 的案例](review-bank.html#T023)|同组巩固|需求分类、来源、步骤与验证|[Week 3 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4597211) PDF 48–52|
|28|[T024 三种服务等级](review-bank.html#T024)|第一轮主学|独立基础主题，按本题任务学习|[Week 3 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4597211) PDF 44–60|
|29|[T136 Service hierarchy 与端到端瓶颈](review-bank.html#T136)|同组巩固|需求分类、来源、步骤与验证|[Week 3 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4597211) PDF 57–61|
|30|[T025 四类需求](review-bank.html#T025)|第一轮主学|需求分类、来源、步骤与验证|[Week 3 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4597211) PDF 43–55、62–78|
|31|[T026 应用分类与需求](review-bank.html#T026)|同组巩固|需求分类、来源、步骤与验证|[Week 3 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4597211) PDF 63–78|
|32|[T027 需求分析五步](review-bank.html#T027)|第一轮主学|需求分类、来源、步骤与验证|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 5–28、67–69|
|33|[T028 初始条件、约束与红旗](review-bank.html#T028)|同组巩固|需求分类、来源、步骤与验证|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 8–21|
|34|[T029 规格、测量与跟踪](review-bank.html#T029)|同组巩固|需求分类、来源、步骤与验证|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 16–26、34–37|
|35|[T030 Capacity、throughput、delay 与 jitter](review-bank.html#T030)|第一轮主学|性能指标、并发、单位与时延范围|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 29、32–33、53–56|
|36|[T137 Peak、sustained、minimum 与 burst](review-bank.html#T137)|同组巩固|性能指标、并发、单位与时延范围|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 29、32、55–56|
|37|[T031 应用事务的频率与持续时间](review-bank.html#T031)|第一轮主学|老师样题；性能指标、并发、单位与时延范围|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 38–40|
|38|[T032 RMA 指标与边界](review-bank.html#T032)|第一轮主学|RMA；首次故障模型与可用性模型分开|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 30–31、42–52|
|39|[T139 串联系统故障率与平均首次故障时间](review-bank.html#T139)|同组巩固|RMA；首次故障模型与可用性模型分开|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 42|
|40|[T033 Availability](review-bank.html#T033)|第一轮主学|RMA；首次故障模型与可用性模型分开|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 42–52|
|41|[T034 可用性到停机预算](review-bank.html#T034)|同组巩固|RMA；首次故障模型与可用性模型分开|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 44–50|
|42|[T035 One-way delay 与 RTT 的计算和条件](review-bank.html#T035)|第一轮主学|性能指标、并发、单位与时延范围|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 33、53–54|
|43|[T138 INTD、HRT 与传播时延的边界](review-bank.html#T138)|同组巩固|性能指标、并发、单位与时延范围|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 53–54|
|44|[T036 数据速率、并发与单位](review-bank.html#T036)|第一轮主学|性能指标、并发、单位与时延范围|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 32–33、55–56|
|45|[T037 补充性能需求](review-bank.html#T037)|同组巩固|设计评价、产物与验收；课件加权表需独立练|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 57–66|
|46|[T038 Flow 的定义与建立](review-bank.html#T038)|第一轮主学|flow定义、方向、模型与优先级|[Week 5 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607048) PDF 6–29|
|47|[T039 校园四类Flow：逐类图与合并图](review-bank.html#T039)|第一轮主学|flow定义、方向、模型与优先级|[Week 7a - Flow Analysis](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607864) PDF 1 Ex1|
|48|[T040 Workshop Flow 的方向与时延](review-bank.html#T040)|同组巩固|flow定义、方向、模型与优先级|[Week 7a - Flow Analysis](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607864) PDF 2 Ex2|
|49|[T041 四种 Flow model](review-bank.html#T041)|第一轮主学|flow定义、方向、模型与优先级|[Week 5 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607048) PDF 30–44|
|50|[T042 选择应用与 Flow 优先级](review-bank.html#T042)|同组巩固|flow定义、方向、模型与优先级|[Week 5 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607048) PDF 19–22、45–49|
|51|[T043 Flowspec 与聚合规则](review-bank.html#T043)|第一轮主学|flowspec规则与计算|[Week 5 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607048) PDF 50–56|
|52|[T044 Flowspec 数值组合](review-bank.html#T044)|第一轮主学|flowspec规则与计算|[Week 5 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4607048) PDF 51–56|
|53|[T045 组件架构内部的相互作用](review-bank.html#T045)|第一轮主学|老师样题；组件关系与架构模型|[Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) PDF 14–20|
|54|[T046 内部关系与外部关系](review-bank.html#T046)|第一轮主学|组件关系与架构模型|[Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) PDF 14–36|
|55|[T047 Reference architecture 的形成](review-bank.html#T047)|同组巩固|组件关系与架构模型|[Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) PDF 29–47|
|56|[T048 课堂讨论的全部架构模型](review-bank.html#T048)|第一轮主学|老师样题；组件关系与架构模型|[Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) PDF 39–47|
|57|[T049 CIA 与 privacy](review-bank.html#T049)|第一轮主学|安全目标、威胁、政策与默认行为|[Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) PDF 5–14|
|58|[T050 Threat analysis 与风险排序](review-bank.html#T050)|第一轮主学|安全目标、威胁、政策与默认行为|[Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) PDF 14–21|
|59|[T051 填写 Threat analysis worksheet](review-bank.html#T051)|同组巩固|安全目标、威胁、政策与默认行为|[Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) PDF 16–21|
|60|[T052 Security policies 与 procedures](review-bank.html#T052)|第一轮主学|安全目标、威胁、政策与默认行为|[Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) PDF 22–28|
|61|[T053 默认允许与默认拒绝的安全哲学](review-bank.html#T053)|同组巩固|安全目标、威胁、政策与默认行为|[Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) PDF 24–26|
|62|[T054 物理安全与 packet filtering](review-bank.html#T054)|同组巩固|安全机制；以56练两项完整解释|[Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) PDF 29–35|
|63|[T055 IPsec、SNMPv3 与 encryption](review-bank.html#T055)|同组巩固|安全机制；以56练两项完整解释|[Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) PDF 32–37|
|64|[T056 两种安全与隐私机制](review-bank.html#T056)|第一轮主学|老师样题；安全机制；以56练两项完整解释|[Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) PDF 29–50|
|65|[T057 NAT、firewall、DMZ 与分区](review-bank.html#T057)|第一轮主学|安全机制；以56练两项完整解释|[Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) PDF 38–50|
|66|[T058 嵌套安全区与较扁平安全区](review-bank.html#T058)|同组巩固|安全机制；以56练两项完整解释|[Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) PDF 43–50|
|67|[T059 安全架构的 trade-offs](review-bank.html#T059)|同组巩固|安全机制；以56练两项完整解释|[Week 6 - Lecture Slides (b)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615523) PDF 42–50|
|68|[T060 MAC、IP、IPv4 与 IPv6](review-bank.html#T060)|第一轮主学|地址基础；特殊用途保留独有范围|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 7–12|
|69|[T061 IANA、RIR 与 AS 的分工](review-bank.html#T061)|同组巩固|地址基础；特殊用途保留独有范围|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 8–9|
|70|[T062 Classful、CIDR 与 prefix](review-bank.html#T062)|第一轮主学|地址基础；特殊用途保留独有范围|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 13–19|
|71|[T063 Private/public、DHCP 与 NAT](review-bank.html#T063)|第一轮主学|地址基础；特殊用途保留独有范围|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 20–21|
|72|[T064 特殊地址与交付方式](review-bank.html#T064)|同组巩固|地址基础；特殊用途保留独有范围|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 22–32|
|73|[T065 TEST-NET、loopback、link-local 与实验地址](review-bank.html#T065)|同组巩固|地址基础；特殊用途保留独有范围|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 22–23|
|74|[T066 Subnetting 通用步骤](review-bank.html#T066)|第一轮主学|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 33–48|
|75|[T067 二进制与 AND](review-bank.html#T067)|第一轮主学|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 10–12、33–37|
|76|[T068 /24 平分两块](review-bank.html#T068)|同组巩固|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 38–45|
|77|[T069 前缀与掩码表](review-bank.html#T069)|同组巩固|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 33–48|
|78|[T070 至少6子网](review-bank.html#T070)|第一轮主学|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 33–48|
|79|[T071 由主机数决定前缀](review-bank.html#T071)|同组巩固|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 33–48|
|80|[T072 给定host求范围](review-bank.html#T072)|第一轮主学|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 33–48|
|81|[T073 跨octet /20](review-bank.html#T073)|第一轮主学|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 17–19、33–48|
|82|[T074 /16 分4块与原答案勘误](review-bank.html#T074)|同组巩固|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 33–48|
|83|[T075 /23 至少10子网](review-bank.html#T075)|同组巩固|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 33–48|
|84|[T076 /8 改为 /16](review-bank.html#T076)|同组巩固|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 33–48|
|85|[T077 VLSM 变式](review-bank.html#T077)|第一轮主学|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 33–48|
|86|[T078 不可行需求判断](review-bank.html#T078)|第一轮主学|子网计算；相同方法合练，跨octet、VLSM与不可行性保留|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 33–48|
|87|[T079 Routing boundaries 与 AS](review-bank.html#T079)|第一轮主学|路由选择、边界与跨组件影响|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 49–58|
|88|[T080 Default、filter、aggregation 与 policy](review-bank.html#T080)|同组巩固|路由选择、边界与跨组件影响|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 59–61|
|89|[T081 Static 与 dynamic routing](review-bank.html#T081)|第一轮主学|路由选择、边界与跨组件影响|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 62–68、77–79|
|90|[T082 RIP、OSPF 与 BGP 选择](review-bank.html#T082)|第一轮主学|路由选择、边界与跨组件影响|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 62–79|
|91|[T083 RIPv1、RIPv2 与旧建议](review-bank.html#T083)|同组巩固|路由选择、边界与跨组件影响|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 69–76|
|92|[T084 iBGP 与 eBGP](review-bank.html#T084)|同组巩固|路由选择、边界与跨组件影响|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 72–73|
|93|[T140 地址路由架构的内外关系](review-bank.html#T140)|同组巩固|路由选择、边界与跨组件影响|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 77–79|
|94|[T085 Performance goals 与 QoS](review-bank.html#T085)|第一轮主学|QoS；MPLS、DiffServ、调度保留独有机制|[Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) PDF 4–18|
|95|[T086 IntServ、RSVP 与 DiffServ](review-bank.html#T086)|第一轮主学|QoS；MPLS、DiffServ、调度保留独有机制|[Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) PDF 22–34|
|96|[T087 MPLS](review-bank.html#T087)|同组巩固|QoS；MPLS、DiffServ、调度保留独有机制|[Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) PDF 24–26、35–37|
|97|[T141 DiffServ 的标记、域与服务类](review-bank.html#T141)|同组巩固|QoS；MPLS、DiffServ、调度保留独有机制|[Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) PDF 29–37|
|98|[T088 Resource control 与 traffic conditioning](review-bank.html#T088)|第一轮主学|QoS；MPLS、DiffServ、调度保留独有机制|[Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) PDF 39–45|
|99|[T089 Metering、shaping 与逐包等待](review-bank.html#T089)|第一轮主学|QoS；MPLS、DiffServ、调度保留独有机制|[Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) PDF 41–44|
|100|[T090 Queue 与 scheduling](review-bank.html#T090)|第一轮主学|QoS；MPLS、DiffServ、调度保留独有机制|[Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) PDF 45–49|
|101|[T091 SLA、policy 与 QoS 的闭环](review-bank.html#T091)|第一轮主学|QoS；MPLS、DiffServ、调度保留独有机制|[Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) PDF 50–62|
|102|[T142 性能机制放置与组件之间的取舍](review-bank.html#T142)|同组巩固|QoS；MPLS、DiffServ、调度保留独有机制|[Week 8 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625920) PDF 58–62|
|103|[T092 管理层级与 FCAPS](review-bank.html#T092)|第一轮主学|管理对象、采样与解释；CMIP保留历史比较|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 5–16|
|104|[T093 SNMP、CMIP 与 CMOT](review-bank.html#T093)|同组巩固|管理对象、采样与解释；CMIP保留历史比较|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 18–24|
|105|[T094 SNMP、agent 与 MIB](review-bank.html#T094)|第一轮主学|管理对象、采样与解释；CMIP保留历史比较|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 18–25|
|106|[T143 MIB-II 的计数器选择与解释](review-bank.html#T143)|同组巩固|管理对象、采样与解释；CMIP保留历史比较|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 19、21–24|
|107|[T095 Monitoring、instrumentation、configuration](review-bank.html#T095)|第一轮主学|管理对象、采样与解释；CMIP保留历史比较|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 26–46|
|108|[T096 Event notification 与 trend analysis](review-bank.html#T096)|同组巩固|管理对象、采样与解释；CMIP保留历史比较|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 30–39|
|109|[T097 Polling 带宽](review-bank.html#T097)|第一轮主学|管理流量、存储、部署和恢复|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 35–39、59|
|110|[T098 存储量与counter速率](review-bank.html#T098)|第一轮主学|管理流量、存储、部署和恢复|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 35–39、62–65|
|111|[T099 带内与带外网络管理](review-bank.html#T099)|第一轮主学|老师样题；管理流量、存储、部署和恢复|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 51–54|
|112|[T100 Centralized、distributed、hierarchical management](review-bank.html#T100)|第一轮主学|管理流量、存储、部署和恢复|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 55–60、67–74|
|113|[T101 Management traffic scaling](review-bank.html#T101)|同组巩固|管理流量、存储、部署和恢复|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 35–39、59–60|
|114|[T102 LAN/WAN 管理监测点的放置](review-bank.html#T102)|同组巩固|管理流量、存储、部署和恢复|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 59–60|
|115|[T103 Checks、数据与 MIB 选择](review-bank.html#T103)|同组巩固|管理流量、存储、部署和恢复|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 61–70|
|116|[T104 管理与其他组件的关系](review-bank.html#T104)|同组巩固|管理流量、存储、部署和恢复|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 67–74|
|117|[T105 设计过程的五类产物](review-bank.html#T105)|第一轮主学|老师样题；设计评价、产物与验收；课件加权表需独立练|[Week 11 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625922) PDF 7–10、74–88|
|118|[T106 供应商、设备和服务评价](review-bank.html#T106)|第一轮主学|设计评价、产物与验收；课件加权表需独立练|[Week 11 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625922) PDF 11–21|
|119|[T107 五项加权评分与必备条件](review-bank.html#T107)|第一轮主学|设计评价、产物与验收；课件加权表需独立练|[Week 11 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625922) PDF 17–19|
|120|[T108 原课件九项评价表与候选排序](review-bank.html#T108)|同组巩固|设计评价、产物与验收；课件加权表需独立练|[Week 11 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625922) PDF 20–21|
|121|[T109 Primary/secondary criteria 与约束](review-bank.html#T109)|同组巩固|设计评价、产物与验收；课件加权表需独立练|[Week 11 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625922) PDF 22–38、61–72|
|122|[T110 Architectural design 的要素](review-bank.html#T110)|同组巩固|设计评价、产物与验收；课件加权表需独立练|[Week 11 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625922) PDF 39–60|
|123|[T111 60%与80%容量规划指导值](review-bank.html#T111)|同组巩固|设计评价、产物与验收；课件加权表需独立练|[Week 11 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625922) PDF 66–68|
|124|[T112 布局、traceability 与成功指标](review-bank.html#T112)|第一轮主学|设计评价、产物与验收；课件加权表需独立练|[Week 11 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625922) PDF 73–88|
|125|[T113 SDN的优点](review-bank.html#T113)|第一轮主学|老师样题；SDN原理、接口、包处理与条件|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 8–22|
|126|[T114 SDN 三平面](review-bank.html#T114)|第一轮主学|SDN原理、接口、包处理与条件|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 8–20|
|127|[T115 SDN interfaces 与 OpenFlow](review-bank.html#T115)|第一轮主学|SDN原理、接口、包处理与条件|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 12–20|
|128|[T144 OpenFlow flow table 与逐包操作](review-bank.html#T144)|同组巩固|SDN原理、接口、包处理与条件|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 20（印刷页21）|
|129|[T116 SDN 的限制与部署条件](review-bank.html#T116)|同组巩固|SDN原理、接口、包处理与条件|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 5–22|
|130|[T117 SD-WAN](review-bank.html#T117)|第一轮主学|现代网络应用；三题概念不同，按同一需求比较|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 23–25|
|131|[T118 SDN 与 Big Data 的双向关系](review-bank.html#T118)|第一轮主学|现代网络应用；三题概念不同，按同一需求比较|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 26–30|
|132|[T119 Network automation](review-bank.html#T119)|第一轮主学|现代网络应用；三题概念不同，按同一需求比较|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 31–34|
|133|[T120 NFV 与三要素](review-bank.html#T120)|第一轮主学|NFV三要素与SDN组合|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 35–38|
|134|[T121 SDN 与 NFV 的区别和组合](review-bank.html#T121)|第一轮主学|NFV三要素与SDN组合|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 36–39|
|135|[T122 AI、ML、DL 与学习类型](review-bank.html#T122)|第一轮主学|学习类型、工作流及评价|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 40–44|
|136|[T123 ML workflow、应用与挑战](review-bank.html#T123)|第一轮主学|学习类型、工作流及评价|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 43–50|
|137|[T124 安全、隐私与 Threat analysis](review-bank.html#T124)|第一轮主学|老师样题；跨主题论证，按子问组织各段|[Week 13 - Lecture Slides (Summary)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625924) PDF 17|
|138|[T125 从战略目标到可交付网络设计](review-bank.html#T125)|Essay迁移|跨主题论证，按子问组织各段|[Week 3 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4597211) PDF 5–20|
|139|[T126 Flow、QoS 与性能保障](review-bank.html#T126)|Essay迁移|跨主题论证，按子问组织各段|[Week 4 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4599639) PDF 29、32–33、53–56|
|140|[T127 Addressing 与 Routing 的架构选择](review-bank.html#T127)|Essay迁移|跨主题论证，按子问组织各段|[Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) PDF 7–12|
|141|[T128 可扩展且可恢复的 Network management](review-bank.html#T128)|Essay迁移|跨主题论证，按子问组织各段|[Week 9 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625921) PDF 5–16|
|142|[T129 Reference architecture 与模型组合](review-bank.html#T129)|Essay迁移|跨主题论证，按子问组织各段|[Week 6 - Lecture Slides (a)](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4615522) PDF 39–47|
|143|[T130 SDN、SD-WAN、NFV、Automation 与 ML](review-bank.html#T130)|Essay迁移|跨主题论证，按子问组织各段|[Week 12 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625923) PDF 8–20|
|144|[T131 设计评价、产物、可追溯性与验收](review-bank.html#T131)|Essay迁移|跨主题论证，按子问组织各段|[Week 11 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625922) PDF 11–21|

