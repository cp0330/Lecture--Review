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

