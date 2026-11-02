# 09-列举题完整清单与术语

返回：[期末题库总入口](README.md)。以下对应“list/name/all”问法；若题目要求describe/explain，还须用Q题正文展开，不能只交清单。

| 变式提问 | 必须记全的清单 | 来源 |
|---|---|---|
| Name the six strategic-planning tips. | 持续思考与过程；保持简单可管理；领导参与；重视创新而非死套步骤；采纳前考虑实施；规划服务使命而非目的本身。 | Week3 pp.21–22；Q20 |
| Name ten pitfalls. | 只凭统计/财务预测；仓促发大包表单；口头支持却不给时间资源；长期规划配短期激励；责怪竞争者等外部人；培训后裁员损害承诺；照抄旧对手/竞品；使命不打动一线；只看月利润；拒绝放下过去。 | Week3 pp.23–26；Q20 |
| Name four change strategies and six selection factors. | Rational-Empirical理性经验；Normative-Re-educative规范再教育；Power-Coercive权力强制；Environmental-Adaptive环境适应。因素：resistance、population、stakes、time frame、expertise、dependency。 | Week3 pp.27–30；Q21 |
| List user requirements. | Timeliness、interactivity、reliability、presentation quality、adaptability、security、affordability、functionality、supportability、future growth；另记人数与位置。 | Week3 pp.63–69；Q23 |
| Name five requirements-analysis activities. | Gather/list requirements；develop service metrics；characterize behaviour；develop requirements；map requirements。 | Week4 p.5；Q26 |
| List initial conditions and project types. | 条件：type、scope、goals、outside forces。类型：new network、modification、problem analysis、outsourcing、consolidation、upgrade。范围：size、sites、distance。 | Week4 pp.8–14；Q27 |
| Name five supportability factors. | RMA；workforce/training/staffing；procedures/documents；standard/special tools；spare/repair parts。 | Week4 pp.59–60；Q31 |
| List four architectural component functions. | Addressing/routing；management；performance；security；其他依需求增加。每个含function、mechanisms、internal relationships。 | Week6a pp.14–26；Q05、Q36 |
| List all architectural models. | Topological：LAN/MAN/WAN、access/distribution/core。Flow-based：peer-to-peer、client-server、hierarchical client-server、distributed computing。Functional：service-provider、intranet/extranet、end-to-end。 | Week6a pp.39–47；Q06 |
| List FCAPS and management levels. | Fault、configuration、accounting、performance、security。层级：business、service、network、element、network-element。 | Week9 pp.7–16；Q61 |
| List management tasks. | Event monitoring；trend analysis/planning；configuration；troubleshooting。部分课件把planning另列，按题干粒度表述。 | Week9 pp.8–10；Q61–Q64 |
| List five design products. | Network blueprints；component plan；vendor/equipment/service-provider selections；traceability；success metrics。 | Week11 p.7；Q04 |
| List technology elements of an architectural design. | Nodes、links、topology、interfaces、services、protocols、traffic mapping。 | Week11 pp.57–60；Q71 |
| List three main design constraints. | Candidate technology costs；pre-existing networks；facility implications。 | Week11 p.69；Q70 |
| List five technology-selection area types. | WANs；network access points；core/backbone；specialized areas；general areas。 | Week11 pp.70–72；Q70 |
| Name common intermediate devices. | Hub/repeater转发或再生信号；bridge/switch连接并转发链路层frame；router跨网络转发IP；AP无线接入；modem调制解调；gateway连接不同系统/承担边界转换，具体功能取决语境。 | Week2 pp.7–8；末列功能拆解为AI解释；Q10 |
| List OSI layers in order. | Application、presentation、session、transport、network、data link、physical。上→下。 | Week2 p.49；Q15 |
| Give common ports. | HTTP TCP80、HTTPS TCP443、FTP控制TCP21、POP3 TCP110；port范围0–65535；well-known0–1023、registered1024–49151、dynamic/private49152–65535。 | Week2 p.67；Q17；按本课常见实现记，不推所有版本传输必相同 |
| Name private address blocks and special cases. | 10/8、172.16/12（至172.31.255.255）、192.168/16；loopback127/8；link-local169.254/16；multicast224/4；default route0.0.0.0/0。 | Week7 pp.20–32；纠错依据见勘误 |
| List four resource-control groups. | Prioritization、traffic management、scheduling、queuing。conditioning：classification、metering、shaping、dropping。 | Week8 pp.39–49；Q58–Q59 |
| Name five Vs and three SDN interface directions. | Volume体量、variety多样、velocity速度、value价值、veracity真实性；northbound、southbound、east–west。 | Week12 pp.16、27；Q74、Q77 |
| List NFV elements and ML categories. | NFVI、VNFs、MANO；supervised（regression/classification）、unsupervised、reinforcement。 | Week12 pp.38、44；Q79、Q81 |

## 额外列举与数值边界
+
- **PPDIOO与八步方法**：分别见Q83/Q84，不要只背analysis/architecture/design三阶段而漏掉实施与优化。来源Week1 pp.45–55。
- **IANA/RIR/AS**：IANA负责全球地址和AS号码分配体系中的顶层协调；RIR在区域内管理分配，课程以APNIC说明本地区。AS表示共同管理及路由策略的域，不等于一个LAN。来源Week7 pp.8–9；这里只复习课件体系，不涉及号码费用等可能变化的现实细节。
- **Delay阈值**：Week4 pp.53–54课件给HRT约100ms、interaction delay示意约10–30秒，并指出传播延迟依距离与技术；这是课堂阈值讨论，不是所有应用都可接受该延迟。答题仍以应用的明确要求为准。
- **Capacity planning经验值**：Week11 pp.67–68的BE约60%、predictable约80%用于候选容量边界估计。例如仅有60Mb/s BE需求时，按60%指导值估算候选capacity约100Mb/s；若有80Mb/s predictable，按80%也约100Mb/s。混合情况分别比较相应条件，明确方向、并发、burst和余量，不把百分比当协议定律。
- **Queue名词**：CBQ按类组织队列；FIFO按到达顺序；priority按优先；RR轮流；WFQ按权重；RED/WRED为提前丢弃等拥塞管理方法。来源Week8 pp.46–49；policing是按profile标记/丢弃等约束行为的AI术语补充，区别于通过等待实现的shaping。
+
+## 高频表达：少量i+1

| 完整表达 | 中文与使用方式 |
|---|---|
| The choice depends on the requirements. | 选择取决于需求；depends on=取决于。 |
| This can create a bottleneck. | 这会造成瓶颈；bottleneck=限制整条路径的环节。 |
| The flows may overlap. | 流可能在时间上重叠；用于frequency/duration。 |
| It improves resilience but adds complexity. | 它提高故障应对能力，但增加复杂度；resilience=受干扰后维持/恢复服务能力。 |
| Each decision should be traceable to a requirement. | 每个决定应能追溯到需求；traceable=能找到对应依据。 |
| This is a trade-off between cost and performance. | 这是成本与性能之间的取舍；trade-off=得到一方面好处时需接受另一面代价。 |
| The result assumes that the flows are simultaneous. | 结果假定这些流同时发生；simultaneous=同时。 |
| A marking alone does not guarantee end-to-end performance. | 仅有标记不能保证端到端性能；用于保留机制边界。 |
