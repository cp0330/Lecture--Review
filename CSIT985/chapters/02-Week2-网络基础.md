# 02-Week2-网络基础

返回：[期末题库总入口](../README.md)；[旧题号与当前题号对照](../question-map.md)。

本册按对应课件的可见页序排列。计算与补题放到其知识点附近；Workshop Flow题接在Week5 Flow主线，原资源仍明确标为Workshop Week7a。综合长答统一放最后。

来源页码按PDF文件从第1页起计，包含封面。英文答案为教学参考，不是官方评分答案。老师样题保留标记。使用条件与假设属于答案的一部分。

## T005

**网络要素与设备**

- 题型：简答；检索码：Q10；依据：范围扩展题。
- 知识点：Network elements and categories（网络要素与网络类别）。

**Question:** Describe the main elements of a computer network and their roles.

**中文题意：**说明终端、中间设备和介质的作用。

<!-- answer-guidance:T005:start -->
### 组织方式与答题思路

**任务类型：**列举＋功能。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 先列end devices、intermediate devices、media。
2. 分别写产生/接收、转发/连接、传信号的作用。
3. 给switch、router、AP等对应例子。
4. 说明端到端服务仍可能受某一环节限制。

**现有参考答案的组织方式：**

- 第1段：端设备定义与例子。
- 第2段：中间设备及各自作用。
- 第3段：介质、协议地址与瓶颈例子。

**回Moodle核对：**

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → PDF物理页 **5–19**；课件主题：Network elements。

搜索词：`end devices`；`intermediate`；`media`。

查到后确认：核对三类要素和switch/router/AP各自处理的对象。

**换问法时：**若问某设备，只展开其功能与相邻概念，不罗列整章设备。
<!-- answer-guidance:T005:end -->

### 中文思路

host 起止；switch 局域网转发；router 跨网络；AP无线接入；介质传信号。

### 英文参考答案（129词）

A computer network connects end devices through communication media and intermediate devices. End devices, also called hosts, create or receive messages. Examples include computers, servers and printers.

Intermediate devices help messages reach their destinations. A switch usually forwards Ethernet frames within a local network. A router forwards IP packets between networks. An access point allows wireless devices to join a network. Other devices, such as repeaters and modems, have different connection or signal functions.

The media carry signals and may include copper cables, optical fibre or wireless links. Protocols and addresses make communication possible across these elements. A design must consider how the elements work together. For example, a fast backbone does not remove a slow wireless access link or a server bottleneck at the end of a path.

### 易错、变式与反馈

不要把 switch 与 router 的典型作用写反。

变式：Identify hosts, links, switches, routers and access points in a diagram.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → **PDF物理页5–19**，关键词`Network elements`。

## T006

**网络类别**

- 题型：简答；检索码：Q11；依据：范围扩展题。
- 知识点：Network elements and categories（网络要素与网络类别）。

**Question:** Explain LAN, WAN, WLAN, CAN, MAN, SAN and VPN.

**中文题意：**解释常见网络类别，并区分分类维度。

<!-- answer-guidance:T006:start -->
### 组织方式与答题思路

**任务类型：**分类解释。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按范围解释LAN、CAN、MAN、WAN。
2. 解释WLAN的无线接入属性。
3. 解释SAN的存储目的和VPN的逻辑私有连接。
4. 指出分类维度不同，同一网络可同时属于多类。

**现有参考答案的组织方式：**

- 第1段：地理范围类别，附PAN背景。
- 第2段：WLAN、SAN与VPN。
- 第3段：分类维度及校园组合例子。

**回Moodle核对：**

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → PDF物理页 **9–19**；课件主题：Network categories。

搜索词：`LAN`；`WAN`；`WLAN`；`SAN`；`VPN`。

查到后确认：核对缩写全称及按范围、技术、用途、逻辑访问分类的区别。

**换问法时：**按实际题干列齐要求的类别；题未要求PAN时可不展开。
<!-- answer-guidance:T006:end -->

### 中文思路

地理范围、无线技术、存储用途、逻辑私网是不同维度。

### 英文参考答案（134词）

A LAN connects devices within a limited local area, such as an office. A WAN connects networks across larger distances. A MAN covers a metropolitan area, while a CAN links networks across a campus. A PAN serves a person’s nearby devices.

A WLAN is a wireless local area network. Wireless describes how devices connect, so it does not mean the network covers a larger area than a LAN. A SAN is a storage area network designed for communication with storage systems. A VPN creates a logical private connection over another network, often using encryption and controlled access.

These labels use different ways of classifying networks: geographical scope, connection technology, purpose and logical access. Therefore, one network can fit several labels. A university can have campus LANs, wireless access and VPN access through a WAN.

### 易错、变式与反馈

CAN 在这里是 Campus Area Network；不要混用地理范围与用途。

变式：Choose a network category for a campus, storage system or remote worker.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → **PDF物理页9–19**，关键词`Network categories`。

## T007

**网络组织模式**

- 题型：简答；检索码：Q12；依据：范围扩展题。
- 知识点：Network organization models（网络组织模式）。

**Question:** Compare centralized, client-server, distributed, peer-to-peer, cloud-based and hybrid networks.

**中文题意：**比较六种组织模式。

<!-- answer-guidance:T007:start -->
### 组织方式与答题思路

**任务类型：**多项比较。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 完整识别六种组织模式。
2. 按控制/处理位置和资源角色比较。
3. 补管理、依赖、故障与成本的取舍。
4. 说明模式可以组合，用需求选型。

**现有参考答案的组织方式：**

- 第1段：集中式、client-server及集中服务取舍。
- 第2段：distributed、peer-to-peer及协调问题。
- 第3段：cloud、hybrid、选型条件与重叠关系。

**回Moodle核对：**

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → PDF物理页 **21–26**；课件主题：Network Architecture。

搜索词：`centralized`；`client-server`；`distributed`；`hybrid`。

查到后确认：核对六类名称，并找每类控制和服务放在哪里。

**换问法时：**若给具体场景，用同一组维度比较候选，不只背六个定义。
<!-- answer-guidance:T007:end -->

### 中文思路

角色、资源位置、管理及故障依赖。

### 英文参考答案（129词）

A centralized network places major control or processing at a central computer. A client-server network gives clients and servers different roles: clients request services and servers provide them. Central services can simplify management but may create important points of failure.

In a distributed network, resources and work are spread across computers. In a peer-to-peer network, peers can both request and provide resources. This can suit small sharing systems, although consistent control may be harder.

A cloud-based network uses resources hosted on remote cloud servers and depends on access to those services. A hybrid network combines models, such as central authentication with direct sharing between peers. The choice should follow application flows, management needs, reliability and cost. These models can overlap; a cloud service may also use a client-server model.

### 易错、变式与反馈

不要声称 distributed 绝对没有中心；模式可以组合。

变式：Compare client-server and peer-to-peer; discuss cloud dependence.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → **PDF物理页21–26**，关键词`Network Architecture`。

## T008

**拓扑与故障**

- 题型：简答；检索码：Q13；依据：范围扩展题。
- 知识点：Network topology（网络拓扑）。

**Question:** Compare mesh, tree, bus, star and ring topologies.

**中文题意：**比较五种拓扑及成本、故障影响。

<!-- answer-guidance:T008:start -->
### 组织方式与答题思路

**任务类型：**多项比较。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 先说明五种连接结构。
2. 逐类解释链路/中心设备故障影响。
3. 比较冗余、成本与扩展性。
4. 补physical与logical的区别和保护条件。

**现有参考答案的组织方式：**

- 第1段：star的结构与故障。
- 第2段：mesh、tree、bus、ring及取舍。
- 第3段：物理/逻辑拓扑与选型依据。

**回Moodle核对：**

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → PDF物理页 **28–34**；课件主题：Network Topology。

搜索词：`mesh`；`tree`；`bus`；`star`；`ring`。

查到后确认：看拓扑图确认连接关系及故障传播范围。

**换问法时：**若题目给故障，沿实际连接判断受影响范围，不直接套拓扑名称。
<!-- answer-guidance:T008:end -->

### 中文思路

连接结构 → 备用路径与故障范围；物理/逻辑区分。

### 英文参考答案（131词）

A star connects devices to a central device. It is easy to extend, but failure of the central device may affect many users. Failure of one edge link usually affects only its attached device.

A mesh provides multiple connections and alternative paths. It can improve resilience, but it needs more links, ports and management. A tree organizes connections in a hierarchy. It supports growth, although a failure near the root can affect a large branch. A bus uses a shared backbone, so faults or contention on that shared medium can affect many devices. A ring connects devices in a loop; failure effects depend on whether protection or an alternative path exists.

Physical topology describes actual connections. Logical topology describes communication relationships. A suitable choice balances cost, scale, traffic and failure requirements.

### 易错、变式与反馈

不能说任何 ring 断一条链路都必然全网停机。

变式：Compare star and mesh; identify a single point of failure.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → **PDF物理页28–34**，关键词`Network Topology`。

## T009

**Protocol 的规则**

- 题型：简答；检索码：Q14；依据：范围扩展题。
- 知识点：Network protocols and layers（网络协议与分层模型）。

**Question:** What is a network protocol, and why must communicating devices follow common rules?

**中文题意：**什么是协议，为什么必须遵循共同规则？

<!-- answer-guidance:T009:start -->
### 组织方式与答题思路

**任务类型：**定义＋原因。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 定义protocol是通信规则。
2. 说明格式、含义、顺序和事件动作。
3. 解释双方一致才能识别、响应与处理消息。
4. 用超时或共享介质说明规则的作用。

**现有参考答案的组织方式：**

- 第1段：protocol的正式定义。
- 第2段：共同规则、时间规则与例子。
- 第3段：实现方式、分工与没有规则的后果。

**回Moodle核对：**

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → PDF物理页 **36–46**；课件主题：Network Protocol。

搜索词：`protocol`；`timing`；`encapsulation`。

查到后确认：核对协议规定哪些规则，尤其timing和message format。

**换问法时：**若只问why，先写无法正确理解或处理消息的后果，再用规则支持。
<!-- answer-guidance:T009:end -->

### 中文思路

格式、含义、顺序、时序、发送接收动作。

### 英文参考答案（132词）

A network protocol defines rules for exchanging messages between communicating entities. It specifies message formats, the meaning of fields, the order of exchanges and the actions taken when a message or event occurs.

Common rules are needed for encoding, message size, encapsulation, timing and delivery. For example, devices must know how to recognize a message, when to respond and what to do if a response does not arrive. Timing rules may include flow control, response timeouts and access to a shared medium.

Protocols can be implemented in software, hardware or both. Different protocols perform different tasks, such as application communication, routing and security. They must work together along a communication path. Without agreed rules, two devices might be physically connected but still be unable to understand or correctly process each other’s messages.

### 易错、变式与反馈

protocol 不只是设备之间的一根线或一种语言名称。

变式：Explain encoding, encapsulation, timing and delivery rules.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → **PDF物理页36–46**，关键词`Network Protocol`。

## T010

**OSI、TCP/IP 与封装**

- 题型：简答；检索码：Q15；依据：范围扩展题。
- 知识点：Network protocols and layers（网络协议与分层模型）。

**Question:** Describe the OSI and TCP/IP models and explain encapsulation.

**中文题意：**描述分层模型与封装过程。

<!-- answer-guidance:T010:start -->
### 组织方式与答题思路

**任务类型：**列举＋过程。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按顺序列OSI七层与本课TCP/IP四层。
2. 说明上层和network access的对应。
3. 沿发送方向说明封装。
4. 沿接收方向说明解封装及分层用途。

**现有参考答案的组织方式：**

- 第1段：OSI七层和服务关系。
- 第2段：TCP/IP四层及与OSI的对应。
- 第3段：封装、接收端处理及分层边界。

**回Moodle核对：**

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → PDF物理页 **47–57、85–89**；课件主题：Network Protocol Models。

搜索词：`OSI`；`TCP/IP`；`encapsulation`。

查到后确认：核对本课四层模型，不混用其他教材的五层模型。

**换问法时：**若重点是encapsulation，缩短层名清单，突出各层增加和移除什么信息。
<!-- answer-guidance:T010:end -->

### 中文思路

OSI 七层；TCP/IP 四层；发端加头、收端逐层解释移除。

### 英文参考答案（128词）

The OSI model has seven layers: application, presentation, session, transport, network, data link and physical. Each layer has a particular communication role and uses services from the layer below.

The TCP/IP model in this course has four layers: application, transport, Internet and network access. Its application layer covers several upper OSI functions. Its network access layer covers data-link and physical communication.

During encapsulation, application data passes down the stack. Transport and Internet protocols add information needed for process delivery and routing. The link layer places the packet in a frame, and the physical layer sends signals. At the receiver, corresponding layers interpret and remove the relevant information. Layering separates responsibilities and helps troubleshooting. It does not mean that each model layer always corresponds to one separate physical device.

### 易错、变式与反馈

区分 packet、frame 和 signal；TCP/IP 本课用四层。

变式：Name seven OSI layers; map them to TCP/IP; explain a web request.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → **PDF物理页47–57、85–89**，关键词`Network Protocol Models`。

## T011

**应用协议、端口与 socket**

- 题型：简答；检索码：Q17；依据：范围扩展题。
- 知识点：Network protocols and layers（网络协议与分层模型）。

**Question:** Explain the roles of application protocols, ports and sockets.

**中文题意：**解释应用层协议与进程定位。

<!-- answer-guidance:T011:start -->
### 组织方式与答题思路

**任务类型：**关系解释。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 说明应用协议规定消息交互。
2. 区分IP地址、port和socket的定位作用。
3. 解释multiplexing与demultiplexing。
4. 用浏览器和HTTP说明应用不是协议。

**现有参考答案的组织方式：**

- 第1段：应用协议与常见例子。
- 第2段：IP、port、socket的作用。
- 第3段：复用/分用和应用与协议的区别。

**回Moodle核对：**

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → PDF物理页 **58–60、66–67**；课件主题：Application Layer。

搜索词：`port`；`socket`；`multiplexing`；`HTTP`。

查到后确认：核对进程端点定位方式和应用协议示例。

**换问法时：**若只问ports/sockets，围绕同一主机多应用的数据交付展开。
<!-- answer-guidance:T011:end -->

### 中文思路

应用协议规定业务消息；IP到host；port到应用端点；socket 接口。

### 英文参考答案（135词）

Application protocols define how applications exchange meaningful messages. HTTP supports web requests and responses, DNS translates names into network information, and SMTP supports sending email. FTP supports file transfer, while POP and IMAP support email access.

An IP address identifies a network interface for packet delivery. A transport port helps identify the application endpoint on a host. For example, HTTP commonly uses TCP port 80 and HTTPS commonly uses TCP port 443. A socket is an application’s communication endpoint.

Multiplexing collects data from different sockets for transmission. Demultiplexing delivers received data to the correct socket using transport information. This allows several applications to share the network at the same time. A web browser is an application; HTTP is a protocol that the browser and server use. They are related but are not the same thing.

### 易错、变式与反馈

DNS 不等于 DHCP；应用与应用层协议不同。

变式：Distinguish a browser from HTTP; explain multiplexing and demultiplexing.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → **PDF物理页58–60、66–67**，关键词`Application Layer`。

## T012

**TCP 与 UDP**

- 题型：简答；检索码：Q16；依据：范围扩展题。
- 知识点：Network protocols and layers（网络协议与分层模型）。

**Question:** Compare TCP and UDP and explain when each may be useful.

**中文题意：**比较传输层两种协议。

<!-- answer-guidance:T012:start -->
### 组织方式与答题思路

**任务类型：**比较＋场景。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按连接、可靠性、顺序、控制机制对照TCP与UDP。
2. 说明机制产生的开销和服务差别。
3. 各给合适应用。
4. 补UDP不自动低延迟、应用可自行实现机制。

**现有参考答案的组织方式：**

- 第1段：TCP服务与可靠传输机制。
- 第2段：UDP服务边界及应用责任。
- 第3段：应用选择与延迟、丢失和开销条件。

**回Moodle核对：**

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → PDF物理页 **61–68**；课件主题：Transport Layer。

搜索词：`TCP`；`UDP`；`retransmission`；`congestion`。

查到后确认：核对两者内建保证及flow/congestion control的区别。

**换问法时：**若要求推荐协议，先说明应用更看重完整有序还是及时性，再解释取舍。
<!-- answer-guidance:T012:end -->

### 中文思路

TCP可靠有序、连接、流控拥塞控；UDP无这些内建保证，应用取舍。

### 英文参考答案（129词）

TCP provides connection-oriented communication and a reliable, ordered byte stream. It uses sequence numbers, acknowledgements and retransmission to handle missing data. It also includes flow control and congestion control.

UDP sends datagrams without setting up a TCP-style connection. It does not itself guarantee delivery, ordering or retransmission. This makes its service simpler, but an application may need to provide its own protection against loss or congestion.

TCP is useful when complete and ordered delivery matters, such as transferring a file. UDP can suit applications that prefer timely delivery or use their own communication mechanisms. However, UDP is not automatically fast enough for every real-time application, and TCP does not guarantee low delay. The designer must consider application tolerance for loss, delay, overhead and the behaviour of the complete path.

### 易错、变式与反馈

不要写 UDP 保证实时、TCP保证固定延迟。

变式：Explain reliable vs unreliable service and connection-oriented vs connectionless.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → **PDF物理页61–68**，关键词`Transport Layer`。

## T013

**Forwarding、routing 与各层地址**

- 题型：简答；检索码：Q18；依据：范围扩展题。
- 知识点：Network protocols and layers（网络协议与分层模型）。

**Question:** Distinguish forwarding from routing and explain link-layer and network-layer delivery.

**中文题意：**区分转发与路由，以及链路层和网络层。

<!-- answer-guidance:T013:start -->
### 组织方式与答题思路

**任务类型：**区分＋路径解释。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. routing学习可达性并选路径。
2. forwarding按已有信息进行本地转发。
3. 区分IP跨网络与MAC逐链路交付。
4. 沿下一跳说明frame重建与IP目的地址通常保持。

**现有参考答案的组织方式：**

- 第1段：routing与forwarding的分工。
- 第2段：IP、MAC和物理层的交付范围。
- 第3段：路由器逐跳换frame及NAT例外。

**回Moodle核对：**

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → PDF物理页 **69–89**；课件主题：Network Layer。

搜索词：`forwarding`；`routing`；`MAC`；`frame`。

查到后确认：看逐跳图确认地址和封装在哪一层变化。

**换问法时：**若给报文路径，逐跳说下一跳及frame地址，不把最终IP目的写成网关。
<!-- answer-guidance:T013:end -->

### 中文思路

routing算路径/学习可达；forwarding查表送下一跳；MAC逐链路、IP跨网络。

### 英文参考答案（130词）

Routing learns network reachability and selects paths. Routing information is used to build forwarding information. Forwarding is the local action of moving an arriving packet to the correct outgoing interface or next hop.

At the network layer, IP addresses identify source and destination interfaces across networks. At the data-link layer, a frame carries data across a particular local link. Ethernet uses MAC addresses for this local delivery. The physical layer carries the bits as signals.

When a router forwards a packet onto another link, it usually creates a new link-layer frame for that next link. The final IP destination normally remains the same unless a mechanism such as NAT changes it. This distinction helps explain why routers need both network-layer forwarding information and suitable link-layer information for their next-hop communication.

### 易错、变式与反馈

不要把 forwarding 的逐包动作与 routing 的路径计算互换。

变式：Explain control plane and data plane; trace a packet through a router.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → **PDF物理页69–89**，关键词`Network Layer`。

## T014

**Router 四部件**

- 题型：简答；检索码：Q85；依据：范围扩展题。
- 知识点：Network protocols and layers（网络协议与分层模型）。

**Question:** Describe the four main components of a router and their roles.

**中文题意：**解释路由器内部四个主要组成。

<!-- answer-guidance:T014:start -->
### 组织方式与答题思路

**任务类型：**列举＋功能。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 列input ports、switching fabric、output ports、routing processor。
2. 沿包的接收、内部交换、排队、发送说明前三项。
3. 解释routing processor的control-plane工作。
4. 区分决策与执行，补性能限制。

**现有参考答案的组织方式：**

- 第1段：四部件总览与input ports。
- 第2段：switching fabric、output ports和排队。
- 第3段：routing processor、SDN对照及资源限制。

**回Moodle核对：**

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → PDF物理页 **71–76**；课件主题：Network Layer - Router。

搜索词：`input ports`；`switching fabric`；`routing processor`。

查到后确认：看路由器结构图核对四部件及control/data plane关系。

**换问法时：**若问性能瓶颈，把限制具体落到端口、交换结构、排队或处理资源。
<!-- answer-guidance:T014:end -->

### 中文思路

input ports接收；fabric内部搬运；output ports缓冲/发出；processor控制。

### 英文参考答案（137词）

A router has input ports, output ports, a switching fabric and a routing processor. Input ports receive traffic and perform the relevant physical- and link-layer functions. They also participate in forwarding operations.

The switching fabric connects input ports to the appropriate output ports inside the router. Output ports store packets when needed and transmit them onto outgoing links using the required link and physical functions. Queuing can occur when arriving traffic exceeds the available transmission service.

The routing processor performs control-plane work. In a traditional router, it runs routing protocols, maintains routing information and helps compute forwarding tables. In an SDN design, the device can receive forwarding information through communication with a controller. These roles explain the distinction between deciding forwarding behaviour and carrying out local packet forwarding. Processing, fabric and interface limits can each affect performance.

### 易错、变式与反馈

switching fabric是路由器内部连接结构，不是独立外置交换机的必然名称。

变式：Relate router components to control/data planes and possible bottlenecks.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → **PDF物理页71–76**，关键词`Network Layer - Router`。

## T015

**Routing algorithm 三组分类**

- 题型：简答；检索码：Q86；依据：范围扩展题。
- 知识点：Network protocols and layers（网络协议与分层模型）。

**Question:** Compare centralized/decentralized, static/dynamic and load-sensitive/load-insensitive routing algorithms.

**中文题意：**解释三种独立分类维度。

<!-- answer-guidance:T015:start -->
### 组织方式与答题思路

**任务类型：**按维度比较。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 明确这是三条独立分类轴。
2. 比较centralized与decentralized的信息来源。
3. 比较static与dynamic的变化方式。
4. 比较load-sensitive与load-insensitive的成本输入，并说明类别可交叉。

**现有参考答案的组织方式：**

- 第1段：全局/分布信息及link-state、distance-vector。
- 第2段：静态与动态变化。
- 第3段：负载敏感性与分类不能混同。

**回Moodle核对：**

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → PDF物理页 **77–83**；课件主题：Routing algorithm。

搜索词：`centralized`；`decentralized`；`load-sensitive`。

查到后确认：核对每组分类所比较的属性，而非把所有左项当成一类。

**换问法时：**若给算法例子，对三条轴分别判断并写理由。
<!-- answer-guidance:T015:end -->

### 中文思路

全局知识/邻居迭代；变化方式；cost是否反映当前拥塞；别把LS同物理单中心。

### 英文参考答案（136词）

The course classifies routing algorithms along three separate dimensions. A centralized algorithm uses complete network information to calculate paths. Link-state routing uses this global-information approach, even though calculations can be performed at individual routers. A decentralized algorithm develops routes through interactions between nodes; distance-vector routing is an example.

A static approach changes routes slowly or through manual intervention. A dynamic approach can respond to changes in topology or other routing information.

A load-sensitive algorithm changes link costs to reflect current congestion. A load-insensitive algorithm does not explicitly use current congestion as its link-cost input. These categories should not be treated as identical. For example, a dynamic protocol can react to a failed link without being load-sensitive. Explain which property is being compared before claiming that one algorithm is more responsive or suitable for a particular network.

### 易错、变式与反馈

centralized knowledge不表示一定只有一台中心机器；dynamic不等于load-sensitive。

变式：Classify RIP/OSPF by knowledge and cost sensitivity; explain independent dimensions.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → **PDF物理页77–83**，关键词`Routing algorithm`。

## T016

**Link、physical 与 service model**

- 题型：简答；检索码：Q87；依据：范围扩展题。
- 知识点：Network protocols and layers（网络协议与分层模型）。

**Question:** Describe link-layer and physical-layer services and distinguish them from an end-to-end network service model.

**中文题意：**区分逐链路、物理传输与端到端服务承诺。

<!-- answer-guidance:T016:start -->
### 组织方式与答题思路

**任务类型：**功能＋范围区分。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 说明data-link逐链路frame服务。
2. 说明physical传送bits和信号。
3. 说明end-to-end service model承诺哪些交付特征。
4. 强调单链路可靠不等于全路径保证。

**现有参考答案的组织方式：**

- 第1段：data-link功能与接口。
- 第2段：physical层介质和信号。
- 第3段：端到端服务与逐链路保证的区别。

**回Moodle核对：**

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → PDF物理页 **86–89**；课件主题：Network service model。

搜索词：`link layer`；`physical`；`service model`。

查到后确认：核对每层服务范围和best-effort不承诺的内容。

**换问法时：**若问可靠性，明确是local link还是end-to-end，并写端点和其他链路条件。
<!-- answer-guidance:T016:end -->

### 中文思路

frame相邻节点；bits介质信号；可靠性视协议；endtoend不由一个hop保证。

### 英文参考答案（131词）

The data-link layer transfers frames between adjacent nodes on a link. Its functions can include framing, access to the medium, error detection and correction, and, for some link protocols, reliable local delivery. A device uses a network interface to connect to a link.

The physical layer transmits bits through a medium, such as copper, optical fibre or wireless communication. Its operation depends on that medium and the associated signalling rules.

An end-to-end network service model describes the delivery characteristics offered between sender and receiver. Possible characteristics include delivery, bounded delay, ordering, minimum bandwidth or security. Best effort does not promise all these properties. A reliable local link is therefore different from guaranteed end-to-end delivery. Every relevant part of the path, and possibly the endpoints, must support the application’s actual service needs.

### 易错、变式与反馈

不是所有link protocol都提供可靠交付；某一跳可靠不代表端到端保证。

变式：Explain frames versus bits and why a reliable link is not a complete service guarantee.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) → **PDF物理页86–89**，关键词`Network service model`。

