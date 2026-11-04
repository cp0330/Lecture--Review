# 02-Week2-网络基础

[在线逐题学习](../review-bank.html) · [审校说明](../audit-2026-11-04.md)

> 参考答案与教学解析由AI依据课程资料整理，不是官方rubric。考前练习不扩大考试可用资料。

## T005 · 网络要素与设备

Describe the main elements of a computer network and their roles.

说明终端、中间设备和介质的作用。

### 精简参考答案

A computer network connects end devices through communication media and intermediate devices. End devices, also called hosts, create or receive messages. Examples include computers, servers and printers.

Intermediate devices help messages reach their destinations. A switch usually forwards Ethernet frames within a local network. A router forwards IP packets between networks. An access point allows wireless devices to join a network. Other devices, such as repeaters and modems, have different connection or signal functions.

The media carry signals and may include copper cables, optical fibre or wireless links. Protocols and addresses make communication possible across these elements. A design must consider how the elements work together. For example, a fast backbone does not remove a slow wireless access link or a server bottleneck at the end of a path.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：计算机网络通过传输介质连接终端，并由中间设备支持通信；网络可按地理范围、所有权和用途分类，不同分类维度不能直接混为一谈。

1. 先区分端点、转发设备和介质：谁产生数据，谁帮它到达，什么承载信号。

2. 端到端性能由整条链决定。服务器慢属于系统限制，不能因为网络标称速率高就排除它。switch通常处理frame，router按IP转发packet。

**英文关键句**：The service depends on all parts of the path.

服务依赖路径上的所有部分。 depend on + 名词；all parts提醒你不要把“网络”只理解成交换机。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：A fast backbone serves an overloaded server. Will the backbone alone solve the problem?

**变式参考**：No. The server may remain the bottleneck. Check processing, storage and interface limits as well as the network path.

**自查**：已检查并避开这些误区：不要把 switch 与 router 的典型作用写反。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 5–19 · 搜索 Network elements


## T006 · 网络类别

Explain LAN, WAN, WLAN, CAN, MAN, SAN and VPN.

解释常见网络类别，并区分分类维度。

### 精简参考答案

A LAN connects devices within a limited local area, such as an office. A WAN connects networks across larger distances. A MAN covers a metropolitan area, while a CAN links networks across a campus. A PAN serves a person’s nearby devices.

A WLAN is a wireless local area network. Wireless describes how devices connect, so it does not mean the network covers a larger area than a LAN. A SAN is a storage area network designed for communication with storage systems. A VPN creates a logical private connection over another network, often using encryption and controlled access.

These labels use different ways of classifying networks: geographical scope, connection technology, purpose and logical access. Therefore, one network can fit several labels. A university can have campus LANs, wireless access and VPN access through a WAN.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：计算机网络通过传输介质连接终端，并由中间设备支持通信；网络可按地理范围、所有权和用途分类，不同分类维度不能直接混为一谈。

1. 每个名称先找分类维度：LAN/WAN等按范围；WLAN按接入方式；SAN按用途；VPN按逻辑访问。

2. 不同维度可以重叠；一个校园里的存储网络可以使用局域技术，不能把这些缩写排成单一大小顺序。

**英文关键句**：These terms describe different properties.

这些术语描述不同属性。 property在这里是“属性”；different后用复数properties。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Can a campus network include both a WLAN and a VPN?

**变式参考**：Yes. WLAN describes wireless local access. VPN describes a logical private connection. They describe different properties and can coexist.

**自查**：已检查并避开这些误区：CAN 在这里是 Campus Area Network；不要混用地理范围与用途。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 9–19 · 搜索 Network categories


## T134 · 传输介质与无线范围

Compare copper, optical fibre and wireless media. What should a designer check when selecting a medium and describing wireless coverage?

按容量、距离、环境和部署条件比较介质。

### 精简参考答案

Copper carries electrical signals and can be practical for local connections, subject to its distance and interference limits. Optical fibre carries light and can support high-capacity links over suitable distances. It requires appropriate interfaces, installation and maintenance.

Wireless communication avoids a cable to each mobile endpoint, but its performance depends on coverage, shared demand, obstacles, interference and the radio technology. The lecture distinguishes nearby, extended local and mobile communication contexts. Infrared, radio, microwave and laser links also have different propagation and alignment requirements. These names alone do not specify an application’s delivered rate.

A designer should compare the required capacity, delay, reach, environment, mobility, installation cost and support skills. For example, fibre may suit a building backbone while wireless access supports moving users. A complete path can combine media. The choice must be verified under expected conditions rather than based only on a nominal link speed or a medium’s name.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：计算机网络通过传输介质连接终端，并由中间设备支持通信；网络可按地理范围、所有权和用途分类，不同分类维度不能直接混为一谈。

1. 介质选择要问距离、移动性、干扰、容量、安装与支持；名称不能代替实测。光纤适合某些骨干，无线适合移动接入，但都有具体设备和环境限制。

2. 课件列出的红外、射频、微波、激光有不同传播/对准条件；不要把某个示意链路写成整个技术永远单向。

**英文关键句**：The medium should fit the distance and environment.

介质应适合距离与环境。 medium单数、media复数；fit后直接接条件。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A mobile class needs local access. Should a fibre backbone alone satisfy mobility?

**变式参考**：No. Fibre may serve the backbone, while a suitable wireless access system serves moving endpoints. Check coverage, interference, shared load and support.

**自查**：已检查并避开这些误区：课件列出的红外、射频、微波、激光有不同传播/对准条件；不要把某个示意链路写成整个技术永远单向。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 9–12 · 搜索 Transmission media


## T007 · 网络组织模式

Compare centralized, client-server, distributed, peer-to-peer, cloud-based and hybrid networks.

比较六种组织模式。

### 精简参考答案

A centralized network places major control or processing at a central computer. A client-server network gives clients and servers different roles: clients request services and servers provide them. Central services can simplify management but may create important points of failure.

In a distributed network, resources and work are spread across computers. In a peer-to-peer network, peers can both request and provide resources. This can suit small sharing systems, although consistent control may be harder.

A cloud-based network uses resources hosted on remote cloud servers and depends on access to those services. A hybrid network combines models, such as central authentication with direct sharing between peers. The choice should follow application flows, management needs, reliability and cost. These models can overlap; a cloud service may also use a client-server model.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：网络组织模式描述资源、处理或服务如何分布在参与设备之间，以及设备承担的角色；它与线路连接的拓扑视角不同。

1. 组织模式看角色与资源分布，不是线画成什么形状。client-server强调请求/提供服务，centralized强调控制或处理集中，两者有关但不等同。

2. cloud说明资源托管位置与服务依赖，也可能采用client-server；hybrid应明确组合哪些角色，不能仅写“混合所以最好”。

**英文关键句**：A network can combine several models.

一个网络可以组合多种模式。 can + 动词原形；combine强调组合，随后应写具体组合什么。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A cloud application has clients and remote servers. Which model applies?

**变式参考**：It is cloud-based in hosting and client-server in application roles. The categories can overlap; the design still depends on connectivity and service resilience.

**自查**：已检查并避开这些误区：不要声称 distributed 绝对没有中心；模式可以组合。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 21–26 · 搜索 Network Architecture


## T008 · 拓扑与故障

Compare mesh, tree, bus, star and ring topologies.

比较五种拓扑及成本、故障影响。

### 精简参考答案

A star connects devices to a central device. It is easy to extend, but failure of the central device may affect many users. Failure of one edge link usually affects only its attached device.

A mesh provides multiple connections and alternative paths. It can improve resilience, but it needs more links, ports and management. A tree organizes connections in a hierarchy. It supports growth, although a failure near the root can affect a large branch. A bus uses a shared backbone, so faults or contention on that shared medium can affect many devices. A ring connects devices in a loop; failure effects depend on whether protection or an alternative path exists.

Physical topology describes actual connections. Logical topology describes communication relationships. A suitable choice balances cost, scale, traffic and failure requirements.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：网络拓扑描述节点和链路的连接结构；比较拓扑时需要结合冗余、故障影响、布线成本和扩展需求，不能仅凭图形名称判断好坏。

1. 故障影响要沿连接关系判断：star的边缘线断与中心设备坏影响不同；tree越靠近根的故障可能影响越多分支。

2. mesh的备用路径需可用且被正确控制才有帮助；ring有无保护决定断点后果。不要把形状名称当无条件可靠性保证。

**英文关键句**：The effect depends on where the failure occurs.

影响取决于故障发生在哪里。 where从句表示位置；depends on后可以接这个完整从句。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A star network loses one host link. Is the whole network necessarily down?

**变式参考**：No. Usually only that host loses its connection. A central-device failure can affect many hosts, so the failure location matters.

**自查**：已检查并避开这些误区：不能说任何 ring 断一条链路都必然全网停机。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 28–34 · 搜索 Network Topology


## T009 · Protocol 的规则

What is a network protocol, and why must communicating devices follow common rules?

什么是协议，为什么必须遵循共同规则？

### 精简参考答案

A network protocol defines rules for exchanging messages between communicating entities. It specifies message formats, the meaning of fields, the order of exchanges and the actions taken when a message or event occurs.

Common rules are needed for encoding, message size, encapsulation, timing and delivery. For example, devices must know how to recognize a message, when to respond and what to do if a response does not arrive. Timing rules may include flow control, response timeouts and access to a shared medium.

Protocols can be implemented in software, hardware or both. Different protocols perform different tasks, such as application communication, routing and security. They must work together along a communication path. Without agreed rules, two devices might be physically connected but still be unable to understand or correctly process each other’s messages.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：协议规定通信消息的格式、顺序和相应动作；分层把通信功能分开，上层使用下层服务，封装使各层的信息能够随数据传递。

1. 协议必须同时规定格式和含义；收到同样比特但解释不同，仍无法协作。还需规定何时发送、何时超时、收到消息后做什么。

2. 可以用请求/响应说明：不仅知道请求长什么样，还要知道何时回、等待多久以及出错后的动作。

**英文关键句**：A physical connection alone is not enough.

仅有物理连接不够。 alone放在名词后突出“仅有”；后面应补具体缺少的规则。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Two devices use the same cable but interpret fields differently. Can they communicate correctly?

**变式参考**：Physical connection alone is insufficient. They need common message formats, meanings and exchange rules to process messages correctly.

**自查**：已检查并避开这些误区：protocol 不只是设备之间的一根线或一种语言名称。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 36–46 · 搜索 Network Protocol


## T010 · OSI、TCP/IP 与封装

Describe the OSI and TCP/IP models and explain encapsulation.

描述分层模型与封装过程。

### 精简参考答案

The OSI model has seven layers: application, presentation, session, transport, network, data link and physical. Each layer has a particular communication role and uses services from the layer below.

The TCP/IP model in this course has four layers: application, transport, Internet and network access. Its application layer covers several upper OSI functions. Its network access layer covers data-link and physical communication.

During encapsulation, application data passes down the stack. Transport and Internet protocols add information needed for process delivery and routing. The link layer places the packet in a frame, and the physical layer sends signals. At the receiver, corresponding layers interpret and remove the relevant information. Layering separates responsibilities and helps troubleshooting. It does not mean that each model layer always corresponds to one separate physical device.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：协议规定通信消息的格式、顺序和相应动作；分层把通信功能分开，上层使用下层服务，封装使各层的信息能够随数据传递。

1. 发送端从上到下封装，接收端按对应层解释并移除控制信息；分层是职责划分，不是每层一台设备。

2. 本课程TCP/IP采用四层；其他教材的五层教学模型可帮助理解，但答本题时要说明使用的是哪一个模型，避免数量前后矛盾。

**英文关键句**：Each layer uses services from the layer below.

每层使用下一层提供的服务。 the layer below是“下面那一层”；from说明服务来源。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：Why can one computer implement several layers?

**变式参考**：Layers separate communication functions, not physical boxes. A host can implement application, transport, Internet and network-access functions together.

**自查**：已检查并避开这些误区：区分 packet、frame 和 signal；TCP/IP 本课用四层。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 47–57、85–89 · 搜索 Network Protocol Models


## T011 · 应用协议、端口与 socket

Explain the roles of application protocols, ports and sockets.

解释应用层协议与进程定位。

### 精简参考答案

Application protocols define how applications exchange meaningful messages. HTTP supports web requests and responses, DNS translates names into network information, and SMTP supports sending email. FTP supports file transfer, while POP and IMAP support email access.

An IP address identifies a network interface for packet delivery. A transport port helps identify the application endpoint on a host. For example, HTTP commonly uses TCP port 80 and HTTPS commonly uses TCP port 443. A socket is an application’s communication endpoint.

Multiplexing collects data from different sockets for transmission. Demultiplexing delivers received data to the correct socket using transport information. This allows several applications to share the network at the same time. A web browser is an application; HTTP is a protocol that the browser and server use. They are related but are not the same thing.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：协议规定通信消息的格式、顺序和相应动作；分层把通信功能分开，上层使用下层服务，封装使各层的信息能够随数据传递。

1. IP把包送到主机接口，transport信息帮助交给对应应用端点，socket是应用使用通信服务的接口/端点。

2. 浏览器不是HTTP，正如一个程序不等于它使用的消息规则。DNS标准全称为Domain Name System；不要沿用课件偶见的Service写法。

**英文关键句**：A port helps identify an application endpoint.

端口帮助识别应用端点。 help + 动词原形；endpoint是“端点”，不是整个应用程序的所有状态。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Two applications share one host IP address. How is received data delivered correctly?

**变式参考**：Transport information supports demultiplexing to the appropriate socket. The IP address alone does not identify every application endpoint.

**自查**：已检查并避开这些误区：DNS 不等于 DHCP；应用与应用层协议不同。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 58–60、66–67 · 搜索 Application Layer


## T135 · PDU、process 与 socket 的完整路径

Trace a message from an application process through encapsulation to the medium. Name the PDUs and explain the role of a socket.

把进程、socket、各层PDU及封装连成一条完整链。

### 精简参考答案

An application process is a running program. It uses a socket, an application communication endpoint, to exchange messages through the network stack. An application protocol defines message types, syntax, meaning and exchange rules. The application itself is broader than that protocol.

In the course model, the upper OSI layers handle data. At the transport layer, TCP carries segments and UDP carries datagrams. The network layer carries packets, the data-link layer carries frames, and the physical layer sends bits through signals or symbols. During encapsulation, layers add the control information needed for their roles; the link layer may add a trailer as well as a header.

At the destination, the stack processes the received information and delivers application data through the appropriate socket. For example, a web browser uses HTTP messages, transport delivery and IP packet delivery together. A socket is not a physical cable, and one application message need not equal one network packet.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：协议规定通信消息的格式、顺序和相应动作；分层把通信功能分开，上层使用下层服务，封装使各层的信息能够随数据传递。

1. 从程序到信号分两条线记：process通过socket使用服务；数据经过各层变成segment/datagram、packet、frame和bits。

2. 封装增加本层控制信息，解封装解释并移除。一个message可分成多个segment/packet，所以不要强行一对一；frame也可有trailer。

**英文关键句**：A socket gives a process access to network services.

socket让进程使用网络服务。 give A access to B是完整表达“让A有使用B的入口”。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：Must one application message equal one Ethernet frame?

**变式参考**：No. Transport segmentation and link constraints can produce several packets or frames. PDU names identify layer roles, not a fixed one-to-one message mapping.

**自查**：已检查并避开这些误区：封装增加本层控制信息，解封装解释并移除。一个message可分成多个segment/packet，所以不要强行一对一；frame也可有trailer。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 52–60 · 搜索 Protocol Data Units


## T012 · TCP 与 UDP

Compare TCP and UDP and explain when each may be useful.

比较传输层两种协议。

### 精简参考答案

TCP provides connection-oriented communication and a reliable, ordered byte stream. It uses sequence numbers, acknowledgements and retransmission to handle missing data. It also includes flow control and congestion control.

UDP sends datagrams without setting up a TCP-style connection. It does not itself guarantee delivery, ordering or retransmission. This makes its service simpler, but an application may need to provide its own protection against loss or congestion.

TCP is useful when complete and ordered delivery matters, such as transferring a file. UDP can suit applications that prefer timely delivery or use their own communication mechanisms. However, UDP is not automatically fast enough for every real-time application, and TCP does not guarantee low delay. The designer must consider application tolerance for loss, delay, overhead and the behaviour of the complete path.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：协议规定通信消息的格式、顺序和相应动作；分层把通信功能分开，上层使用下层服务，封装使各层的信息能够随数据传递。

1. TCP的可靠、有序由编号、确认与重传等机制实现，代价可能是等待和额外控制。UDP没有这些内建保证，但应用可以另建机制。

2. 因此“及时”与“完整”要看任务取舍；不要写所有视频必用UDP，现代应用可能有不同传输实现。

**英文关键句**：Reliable delivery does not guarantee low delay.

可靠交付不保证低时延。 does not + 动词原形；用一句边界避免把一个优点扩展成所有保证。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A file must arrive complete and in order. What is a reasonable starting choice?

**变式参考**：TCP is a reasonable choice because it provides a reliable, ordered byte stream. Check the actual application and path; reliability does not imply a fixed delay bound.

**自查**：已检查并避开这些误区：不要写 UDP 保证实时、TCP保证固定延迟。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 61–68 · 搜索 Transport Layer


## T013 · Forwarding、routing 与各层地址

Distinguish forwarding from routing and explain link-layer and network-layer delivery.

区分转发与路由，以及链路层和网络层。

### 精简参考答案

Routing learns network reachability and selects paths. Routing information is used to build forwarding information. Forwarding is the local action of moving an arriving packet to the correct outgoing interface or next hop.

At the network layer, IP addresses identify source and destination interfaces across networks. At the data-link layer, a frame carries data across a particular local link. Ethernet uses MAC addresses for this local delivery. The physical layer carries the bits as signals.

When a router forwards a packet onto another link, it usually creates a new link-layer frame for that next link. The final IP destination normally remains the same unless a mechanism such as NAT changes it. This distinction helps explain why routers need both network-layer forwarding information and suitable link-layer information for their next-hop communication.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：协议规定通信消息的格式、顺序和相应动作；分层把通信功能分开，上层使用下层服务，封装使各层的信息能够随数据传递。

1. routing决定或学习可达路径，forwarding是设备收到包后按已有信息执行下一跳。

2. 跨路由器时frame通常逐跳重建，MAC针对下一条链路；最终IP目的通常不变。网关是本地下一跳，不因此成为应用的最终目的。

**英文关键句**：The frame changes at each routed link.

经过路由的各链路上，帧会改变。 at each强调逐处；不能把这句扩大成“每个交换机都改IP”。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A host sends to a remote server. Is the gateway the final IP destination?

**变式参考**：Normally no. The local frame is sent to the gateway, while the IP packet keeps the remote server as its destination, unless a translation mechanism changes it.

**自查**：已检查并避开这些误区：不要把 forwarding 的逐包动作与 routing 的路径计算互换。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 69–89 · 搜索 Network Layer


## T014 · Router 四部件

Describe the four main components of a router and their roles.

解释路由器内部四个主要组成。

### 精简参考答案

A router has input ports, output ports, a switching fabric and a routing processor. Input ports receive traffic and perform the relevant physical- and link-layer functions. They also participate in forwarding operations.

The switching fabric connects input ports to the appropriate output ports inside the router. Output ports store packets when needed and transmit them onto outgoing links using the required link and physical functions. Queuing can occur when arriving traffic exceeds the available transmission service.

The routing processor performs control-plane work. In a traditional router, it runs routing protocols, maintains routing information and helps compute forwarding tables. In an SDN design, the device can receive forwarding information through communication with a controller. These roles explain the distinction between deciding forwarding behaviour and carrying out local packet forwarding. Processing, fabric and interface limits can each affect performance.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：协议规定通信消息的格式、顺序和相应动作；分层把通信功能分开，上层使用下层服务，封装使各层的信息能够随数据传递。

1. 按一次包的旅程理解四部件：input接收，fabric内部转移，output排队发送，processor维护控制信息。

2. 排队可能发生在不同位置；端口速率、交换结构或处理能力都可限制性能。控制与转发的职责区别是后续SDN的基础。

**英文关键句**：Packets wait when arrivals exceed service capacity.

到达需求超过服务能力时，包会等待。 when引出条件；exceed意为“超过”，比写too much更精确。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：Why can an output queue grow even when routing is correct?

**变式参考**：Packets may arrive faster than the output link can transmit. Correct path selection does not remove capacity limits or queuing delay.

**自查**：已检查并避开这些误区：switching fabric是路由器内部连接结构，不是独立外置交换机的必然名称。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 71–76 · 搜索 Network Layer - Router


## T015 · Routing algorithm 三组分类

Compare centralized/decentralized, static/dynamic and load-sensitive/load-insensitive routing algorithms.

解释三种独立分类维度。

### 精简参考答案

The course classifies routing algorithms along three separate dimensions. A centralized algorithm uses complete network information to calculate paths. Link-state routing uses this global-information approach, even though calculations can be performed at individual routers. A decentralized algorithm develops routes through interactions between nodes; distance-vector routing is an example.

A static approach changes routes slowly or through manual intervention. A dynamic approach can respond to changes in topology or other routing information.

A load-sensitive algorithm changes link costs to reflect current congestion. A load-insensitive algorithm does not explicitly use current congestion as its link-cost input. These categories should not be treated as identical. For example, a dynamic protocol can react to a failed link without being load-sensitive. Explain which property is being compared before claiming that one algorithm is more responsive or suitable for a particular network.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：协议规定通信消息的格式、顺序和相应动作；分层把通信功能分开，上层使用下层服务，封装使各层的信息能够随数据传递。

1. 三组分类分别问：用多少网络信息、何时更新、成本是否反映负载。它们不是同一分类的三个别名。

2. link-state可以在每台路由器本地计算但使用全局拓扑，因此课程称其centralized-information方法；不要误解成一定只有一台中央机器计算。

**英文关键句**：Dynamic does not necessarily mean load-sensitive.

动态不一定表示负载敏感。 not necessarily表示“不一定”，保留可能性而不做过强断言。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A protocol changes routes after a link failure but ignores current congestion. Is it load-sensitive?

**变式参考**：Not necessarily. It is dynamic in adapting to topology changes, but can remain load-insensitive if congestion does not affect its link costs.

**自查**：已检查并避开这些误区：centralized knowledge不表示一定只有一台中心机器；dynamic不等于load-sensitive。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 77–83 · 搜索 Routing algorithm


## T016 · Link、physical 与 service model

Describe link-layer and physical-layer services and distinguish them from an end-to-end network service model.

区分逐链路、物理传输与端到端服务承诺。

### 精简参考答案

The data-link layer transfers frames between adjacent nodes on a link. Its functions can include framing, access to the medium, error detection and correction, and, for some link protocols, reliable local delivery. A device uses a network interface to connect to a link.

The physical layer transmits bits through a medium, such as copper, optical fibre or wireless communication. Its operation depends on that medium and the associated signalling rules.

An end-to-end network service model describes the delivery characteristics offered between sender and receiver. Possible characteristics include delivery, bounded delay, ordering, minimum bandwidth or security. Best effort does not promise all these properties. A reliable local link is therefore different from guaranteed end-to-end delivery. Every relevant part of the path, and possibly the endpoints, must support the application’s actual service needs.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：协议规定通信消息的格式、顺序和相应动作；分层把通信功能分开，上层使用下层服务，封装使各层的信息能够随数据传递。

1. local link服务只覆盖相邻节点，end-to-end服务覆盖整个发送接收路径；两者测量边界不同。

2. 一个链路层协议即使能恢复本链路错误，也不能保证其他链路、路由器或终端满足应用需要。必须指出保证覆盖范围。

**英文关键句**：A local guarantee is not an end-to-end guarantee.

局部保证不等于端到端保证。 用A is not B做范围区分，再用because解释原因，避免只下结论。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：Does a reliable wireless link guarantee reliable application delivery?

**变式参考**：No. Other links and endpoints may still fail. End-to-end delivery depends on the whole path and the relevant transport or application mechanisms.

**自查**：已检查并避开这些误区：不是所有link protocol都提供可靠交付；某一跳可靠不代表端到端保证。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 2 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4591842) · PDF 86–89 · 搜索 Network service model

