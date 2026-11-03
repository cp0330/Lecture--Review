# 08-Week7-地址与路由

[在线逐题学习](../review-bank.html) · [审校说明](../audit-2026-11-04.md)

> 参考答案与教学解析由AI依据课程资料整理，不是官方rubric。考前练习不扩大考试可用资料。

## T060 · MAC、IP、IPv4 与 IPv6

Distinguish MAC and IP addresses and compare IPv4 with IPv6.

区分地址层次与两个IP版本。

### 精简参考答案

A MAC address is used for data-link communication, such as delivery of Ethernet frames on a local link. An IP address is a logical network-layer address used to identify an interface and support delivery between networks.

IPv4 addresses contain 32 bits, commonly written as four decimal octets. Each octet contains eight bits. IPv6 addresses contain 128 bits and are commonly written in hexadecimal groups. IPv6 therefore provides a much larger address space.

Addressing must be planned together with routing, location and network structure. The address plan affects aggregation, management and security rules. For example, a computer sending to a remote network normally delivers the local frame to a gateway while the IP packet identifies the final remote destination. Knowing the roles of both addresses helps explain communication across multiple links.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：IPv4 使用 32 位逻辑地址；前缀长度或掩码确定网络部分和主机部分。地址的公共性、分配时长和通信目标类型属于不同分类维度。

1. MAC用于本链路frame交付，IP用于跨网络packet交付；IPv4/IPv6是IP地址格式与空间差异。

2. 跨网发送时frame通常交给gateway的MAC，但packet仍指向远端IP。IPv6地址多不自动等于更快、更安全，设计仍需路由和控制。

**英文关键句**：A larger address space does not guarantee higher throughput.

更大地址空间不保证更高实际吞吐量。 比较级larger/higher应对应不同量；不要用同一“bigger”笼统代替。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：Does IPv6’s larger address space guarantee higher application speed?

**变式参考**：No. Speed depends on links, devices, protocols and load. IPv6 provides a larger addressing space; that property alone does not establish throughput.

**自查**：IP通常分配给接口；不要把MAC绝对说成永远不可更改。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 7–12 · 搜索 Addressing Fundamentals


## T061 · IANA、RIR 与 AS 的分工

Explain the roles of IANA, Regional Internet Registries and autonomous systems in the addressing context of this course.

解释地址和AS号体系中的角色，避免把管理层级当路由协议。

### 精简参考答案

IANA provides top-level coordination for Internet number resources, including the allocation system for IP address blocks and autonomous system numbers. Regional Internet Registries, or RIRs, manage allocation and registration within their regions. The lecture uses APNIC as the regional example relevant to Australia.

An autonomous system is a collection of routing prefixes operated under a common administrative routing policy. Its AS number identifies that routing domain. An AS can contain many networks and routers; it is not simply another name for one local subnet.

These roles explain coordination and administration, not the path taken by every packet. Routers still use forwarding information, and routing protocols exchange reachability according to their scope and policies. A designer should distinguish address allocation, administrative ownership and operational routing. The lecture’s historical comments about fees are not needed to explain this structure.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：IPv4 使用 32 位逻辑地址；前缀长度或掩码确定网络部分和主机部分。地址的公共性、分配时长和通信目标类型属于不同分类维度。

1. IANA协调顶层编号资源，RIR负责区域分配注册，AS是共同路由策略下的域；三者不是每包依次经过的设备。

2. AS可包含许多子网与路由器。资源由谁分配、路由政策由谁管理、报文怎样转发，是三个不同问题。

**英文关键句**：An AS can contain many subnets.

一个AS可以包含许多子网。 contain直接接宾语；不要把AS number当子网掩码。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Does obtaining an AS number replace internal subnet planning?

**变式参考**：No. An AS number identifies a routing domain. The organization still needs an address plan, internal routing and boundary policies.

**自查**：不背可能变化的费用或机构人员信息；AS不等于classful network或一个LAN。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 8–9 · 搜索 Addressing Fundamentals


## T062 · Classful、CIDR 与 prefix

Explain classful and classless addressing and the meaning of a prefix length.

解释classful/CIDR及前缀。

### 精简参考答案

Classful addressing used address classes with predetermined network boundaries. The familiar A, B and C classes used /8, /16 and /24 boundaries. This was inflexible and could waste address space or create blocks too small for users’ needs.

Classless Interdomain Routing, or CIDR, uses an explicit prefix length. In IPv4, /p means that p of the 32 bits form the network prefix and the remaining bits form the host portion. The boundary can fall inside an octet.

The subnet mask has ones for the prefix bits and zeros for host bits. For example, /26 corresponds to 255.255.255.192 and leaves six host bits. The address alone is not enough to determine its subnet: the prefix is essential. Do not infer a modern subnet size only from the first octet’s historical class.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：IPv4 使用 32 位逻辑地址；前缀长度或掩码确定网络部分和主机部分。地址的公共性、分配时长和通信目标类型属于不同分类维度。

1. /p明确网络前缀有p位，剩余32−p是host bits；mask必须从左连续1再连续0。

2. 现代子网不能仅凭第一字节推断历史class。相同IP配不同prefix可以属于不同大小的块，prefix是答案不可缺部分。

**英文关键句**：The address alone does not define the subnet.

仅有地址不能定义子网。 alone限制主语；define这里是“确定”，不是只给一个词典定义。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Can 192.168.1.70 be assigned a subnet without a prefix?

**变式参考**：Not uniquely. The prefix determines the network boundary. With /26 it lies in 192.168.1.64/26; another prefix can produce another block.

**自查**：classful是历史语境；CIDR不能仅看首字节推前缀。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 13–19 · 搜索 Classless Addressing


## T063 · Private/public、DHCP 与 NAT

Explain private and public addresses, DHCP and NAT.

解释地址可路由性、租期和转换机制。

### 精简参考答案

Private IPv4 addresses are intended for internal use and are not globally routed on the public Internet. The private blocks are 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16. The second block ends at 172.31.255.255.

Public addresses support globally coordinated Internet addressing. Whether an address is temporary or persistent is a separate question. DHCP can lease an address for a period, while a persistent address may be configured or maintained for a longer time.

NAT translates between address spaces. Static mappings can be one-to-one. Address-and-port translation allows multiple internal connections to share a public address by using port information. This does not make NAT the same as encryption or authentication. Address planning should consider growth, route aggregation, duplicate private ranges and the effect of translation on management and logging.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：IPv4 使用 32 位逻辑地址；前缀长度或掩码确定网络部分和主机部分。地址的公共性、分配时长和通信目标类型属于不同分类维度。

1. private/public是地址用途与全局协调，dynamic/persistent是分配持续方式，两组性质可以交叉。

2. DHCP可以在内部网租给私有地址；NAPT通过端口区分共享公网地址的连接。NAT不等于认证或加密，重叠私有网还会使互联复杂。

**英文关键句**：Scope and assignment are separate properties.

作用范围和分配方式是不同属性。 separate表示“相互独立的区分维度”；不要误写所有private都是固定地址。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：Can a private address be assigned by DHCP?

**变式参考**：Yes. Private describes address scope, while DHCP describes assignment. The address can be private and dynamically leased at the same time.

**自查**：Week7 p.20把172.32写进private范围是笔误，正确终点31。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 20–21 · 搜索 Private Addressing


## T064 · 特殊地址与交付方式

Explain loopback, link-local, unicast, multicast and broadcast addressing.

解释特殊地址及单播组播广播。

### 精简参考答案

Loopback addresses let a host communicate with itself. A familiar IPv4 example is 127.0.0.1. Link-local addresses, such as addresses from 169.254.0.0/16, support local-link communication and are not ordinary public Internet addresses.

Unicast sends to one destination. Multicast sends to members of a selected group. Broadcast sends to all relevant receivers in a broadcast domain. IPv4 multicast uses the 224.0.0.0/4 block. A subnet-directed broadcast uses all host bits set to one for that subnet. The limited broadcast address is 255.255.255.255.

These mechanisms serve different communication needs. Multicast can avoid sending a separate copy from a source to every group member, while broadcast reaches beyond a selected group within its domain. Do not assume that routers forward every broadcast. Scope and forwarding rules matter when mapping traffic across networks.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：IPv4 使用 32 位逻辑地址；前缀长度或掩码确定网络部分和主机部分。地址的公共性、分配时长和通信目标类型属于不同分类维度。

1. 先区分scope与delivery：loopback仅本机，link-local本链路；unicast一目标、multicast选定组、broadcast广播域。

2. host bits全1的定向广播随prefix改变，不是所有末尾255都一定是广播。IPv4规则不能直接套成IPv6广播规则。

**英文关键句**：The broadcast address depends on the prefix.

广播地址取决于前缀。 depend on是条件句常用连接；本题要有prefix才能判断。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Is every IPv4 address ending in .255 a broadcast address?

**变式参考**：No. A subnet-directed broadcast depends on the prefix and has all host bits set to one. Check the actual subnet boundary.

**自查**：default route写0.0.0.0/0；不是课件特殊地址表里的/8。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 22–32 · 搜索 Other IPv4 Addressing Types


## T065 · TEST-NET、loopback、link-local 与实验地址

Explain the special IPv4 address categories in the lecture table, including TEST-NET and the default route.

补齐特殊地址表，区分默认路由和主机地址块。

### 精简参考答案

Loopback addresses support communication within a host; 127.0.0.1 is a familiar example from 127.0.0.0/8. Link-local addresses from 169.254.0.0/16 support local-link communication and are not ordinary publicly routed addresses.

The lecture lists 192.0.2.0/24 as TEST-NET, reserved for documentation and examples. It should not be treated as an ordinary public allocation for a real organization. The table also lists 240.0.0.0/4 as experimental or reserved space in its historical classification.

A default route is a different kind of entry. The prefix 0.0.0.0/0 matches destinations when no more specific route is available. It is not the same as allocating hosts from a special /8 block. Recognizing these purposes helps avoid selecting unsuitable addresses and prevents the table’s default-route notation error from being copied into a routing answer.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：IPv4 使用 32 位逻辑地址；前缀长度或掩码确定网络部分和主机部分。地址的公共性、分配时长和通信目标类型属于不同分类维度。

1. 特殊地址表把多种目的放在一起，不能都当可给真实主机分配的公网块。TEST-NET用于文档，loopback本机，link-local本链路。

2. default route是匹配规则0.0.0.0/0，含义是没有更具体路由时使用；不是“给主机分配一个0/8网络”。

**英文关键句**：Documentation addresses are reserved for examples.

文档地址保留用于示例。 be reserved for表示“保留作……用途”；reserved不等于随意空闲可用。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Can 192.0.2.0/24 be used as an ordinary public campus allocation?

**变式参考**：It is documentation space, not an ordinary public allocation for deployment. Obtain suitable address resources and keep examples separate from production plans.

**自查**：文档地址不是RFC1918私网；不要把地址数字0.0.0.0、0.0.0.0/8与默认路由/0混写。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 22–23 · 搜索 Other IPv4 Addressing Types


## T066 · Subnetting 通用步骤

Explain how to subnet an IPv4 block and verify the result.

解释完整子网计算步骤。

### 精简参考答案

Start with the original network and prefix, then state the required subnet count and usable hosts. For equal-sized subnets, choose enough borrowed bits b so that 2 to the power b meets the subnet requirement. The new prefix is the original prefix plus b.

The remaining host bits h equal 32 minus the new prefix. Each ordinary subnet has 2 to the power h addresses and normally two fewer usable host addresses because network and broadcast addresses are reserved.

Find the subnet boundaries from the new prefix. For each subnet, identify its network address, broadcast address, first usable address and last usable address. Finally, check that the blocks do not overlap, stay within the original allocation and meet the requirements. State any special assumptions instead of applying the ordinary usable-host rule blindly.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：子网划分从主机部分借位形成更长前缀，把一个地址块分成多个更小的网络；计算必须同时检查子网数、每子网地址容量和地址边界。

1. 等长子网先同时检查数量与主机：借位越多子网越多，但每块主机越少。

2. 写出prefix、mask、边界、network/broadcast/usable后，最后验证不重叠、不越界且满足两类要求。VLSM另按大小分配；普通减2规则需注明范围。

**英文关键句**：Both requirements must be satisfied.

两项要求都必须满足。 both表示两者；must be satisfied是“必须被满足”，适合计算结论。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Why check host capacity after borrowing bits for subnet count?

**变式参考**：Borrowing bits reduces host bits. A prefix can meet the subnet-count requirement but leave too few usable hosts in each subnet.

**自查**：常规LAN公式不适用于所有特殊/31、/32情形；本题库计算指定普通子网。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 33–48 · 搜索 Subnetting


## T067 · 二进制与 AND

Convert 192.168.10.77 and /27 to binary, then find the network address.

把IP和掩码转二进制，用AND求network。

### 精简参考答案

The /27 mask is 255.255.255.224. Applying a bitwise AND to the address and mask gives 192.168.10.64. The subnet therefore runs from 192.168.10.64 to 192.168.10.95. Its ordinary usable range is 192.168.10.65–192.168.10.94.

### 逐步解法

1. IP：11000000.10101000.00001010.01001101。
2. /27：11111111.11111111.11111111.11100000，即255.255.255.224。
3. 最后一字节：01001101 AND 11100000 = 01000000 = 64；前三字节不变。
4. Network = 192.168.10.64/27。host bits 5，总32地址，边界为64–95。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：IPv4 使用 32 位逻辑地址；前缀长度或掩码确定网络部分和主机部分。地址的公共性、分配时长和通信目标类型属于不同分类维度。

1. AND只保留IP中mask为1的位；host bits被置0，所以结果是network。/27的最后字节11100000对应224。

2. 77所在32地址块从64开始，到95结束。ordinary usable去掉network与broadcast，得到65–94。

**英文关键句**：A bitwise AND clears the host bits.

按位AND清除host bits。 clear在这里是“置0”；不是把十进制数简单相乘。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Find the network and ordinary usable range of 192.168.10.109/27.

**变式参考**：Mask 255.255.255.224. Network 192.168.10.96, broadcast .127, usable .97–.126, 30 hosts. In the last octet, 01101101 AND 11100000 = 01100000.

**自查**：不能对十进制直接做普通乘法；每个octet要8位。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 10–12、33–37 · 搜索 Subnetting


## T068 · /24 平分两块

Split 192.35.40.0/24 into two equal-sized subnets.

按课件同一地址块分两个子网。

### 精简参考答案

Borrow one host bit to create two /25 subnets. The mask is 255.255.255.128. Each subnet contains 128 addresses and 126 ordinary usable hosts. The network addresses are 192.35.40.0 and 192.35.40.128. Their broadcasts are 192.35.40.127 and 192.35.40.255.

### 逐步解法

借1位：2^1=2；新前缀/25，mask255.255.255.128；h=7，128地址、126可用。

| Network | First | Last | Broadcast |
|---|---|---|---|
|192.35.40.0/25|192.35.40.1|192.35.40.126|192.35.40.127|
|192.35.40.128/25|192.35.40.129|192.35.40.254|192.35.40.255|

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：子网划分从主机部分借位形成更长前缀，把一个地址块分成多个更小的网络；计算必须同时检查子网数、每子网地址容量和地址边界。

1. 要平分两块需借1位，因为2¹=2；从/24变/25，剩7位host，128地址。

2. 第一块0–127，第二块128–255；127是前块广播，不能同时作为后块network。保留前缀可避免范围含糊。

**英文关键句**：Borrow one bit to create two equal subnets.

借1位创建两个等长子网。 to create表示目的；equal在此是地址块等长，不是恰好分配相同人数。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Split 192.35.41.0/24 into two equal subnets and give broadcasts.

**变式参考**：192.35.41.0/25 has broadcast 192.35.41.127. 192.35.41.128/25 has broadcast 192.35.41.255. Each supports 126 ordinary hosts.

**自查**：第二块从128开始，不是127；不得借用原/24之外地址。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 38–45 · 搜索 Subnetting


## T069 · 前缀与掩码表

Give masks and ordinary usable hosts for /25, /26, /27, /28, /29 and /30.

写常见前缀、掩码、块大小和可用主机。

### 精简参考答案

A longer prefix leaves fewer host bits. Each additional prefix bit halves the number of addresses in a block. For these ordinary subnets, usable host count is total addresses minus the network and broadcast addresses.

### 逐步解法

| Prefix | Mask | 总地址/步长（最后octet） | 普通可用主机 |
|---|---|---:|---:|
| /25 | 255.255.255.128 |128|126|
| /26 | 255.255.255.192 |64|62|
| /27 | 255.255.255.224 |32|30|
| /28 | 255.255.255.240 |16|14|
| /29 | 255.255.255.248 |8|6|
| /30 | 255.255.255.252 |4|2|

h=32-prefix；总地址=2^h；普通LAN主机=2^h−2。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：子网划分从主机部分借位形成更长前缀，把一个地址块分成多个更小的网络；计算必须同时检查子网数、每子网地址容量和地址边界。

1. 前缀每加1，host bits少1，地址总数减半；mask用连续1表示前缀。

2. /27是224而非254.0；普通可用减2只适合这里的LAN假设。先会推导，再把常见表作为检索与自检工具。

**英文关键句**：Each extra prefix bit halves the block size.

每增加1个前缀位，块大小减半。 halve是“减半”；extra prefix bit指prefix增加而非host增加。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Give the mask, total addresses and ordinary hosts for /28.

**变式参考**：Mask 255.255.255.240; h = 4; total = 2⁴ = 16 addresses; ordinary usable hosts = 16−2 = 14.

**自查**：旧guideline p.14把/27掩码写成255.255.254.0（那是/23），正确/27是255.255.255.224。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 33–48 · 搜索 Subnetting


## T070 · 至少6子网

Split 192.168.8.0/24 into at least six equal subnets, each supporting at least 25 hosts.

至少6个等长子网，每个25主机。

### 精简参考答案

Three borrowed bits produce eight equal /27 subnets. Each supports 30 ordinary hosts, so both requirements are met. Subnet addresses increase by 32 in the last octet. Six may be allocated and two kept for future use.

### 逐步解法

子网数：2^2=4不够，2^3=8够。借3位得到/27，mask255.255.255.224。
host bits=5，32地址、30可用，满足25。
最后字节network：0、32、64、96、128、160、192、224；broadcast分别31、63、95、127、159、191、223、255。
第一块可用.1–.30，第六块.161–.190；剩余两块可保留。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：子网划分从主机部分借位形成更长前缀，把一个地址块分成多个更小的网络；计算必须同时检查子网数、每子网地址容量和地址边界。

1. 至少6块：找最小b使2ᵇ≥6，得3；新/27留下5位host，30可用满足25。

2. 验证两条件缺一不可，产生8块可只分配6块。块的network按32递增，不是按25个用户递增。

**英文关键句**：The prefix must meet both subnet and host needs.

前缀必须同时满足子网与主机要求。 both A and B；结论写satisfying both，防只算子网数。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：A /24 needs at least four equal subnets of 40 hosts. Is /26 suitable?

**变式参考**：Yes. Borrow two bits to create four /26 blocks. Each has 64 addresses and 62 ordinary hosts, satisfying both requirements.

**自查**：至少6可以生成8；不能说借6位因为要6个子网。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 33–48 · 搜索 Subnetting


## T071 · 由主机数决定前缀

What is the longest ordinary subnet prefix that supports 50 usable hosts? How many such subnets fit in a /24?

50主机时选最长前缀，算/24能容纳多少块。

### 精简参考答案

Six host bits are needed because 2^6 − 2 = 62. The longest suitable prefix is /26, with mask 255.255.255.192. A /24 contains four /26 subnets. Each supports at least 50 hosts.

### 逐步解法

2^5−2=30不足；2^6−2=62足够。至少6个host bits，因此最长prefix=32−6=/26。
mask=255.255.255.192；每块64总地址，/24可装2^(26−24)=4块。
例如192.168.1.0/24中network最后octet为0、64、128、192。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：子网划分从主机部分借位形成更长前缀，把一个地址块分成多个更小的网络；计算必须同时检查子网数、每子网地址容量和地址边界。

1. 最长prefix意味着最少但够用的host bits；50用户不能用/27的30，故选/26的62。

2. /24到/26借2位，可装4块。更短prefix虽也够用户但不是题目要求的“最长”，会浪费更多地址。

**英文关键句**：Choose the smallest block that still supports the hosts.

选仍能支持主机数的最小块。 that still supports限制block；小块对应较长prefix，方向别反。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Find the longest ordinary prefix for 120 hosts and how many fit in a /24.

**变式参考**：2⁶−2=62 is insufficient; 2⁷−2=126 is sufficient. Choose /25. Two /25 blocks fit in a /24.

**自查**：“最长prefix”对应最小够用块；不是/25更节约。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 33–48 · 搜索 Subnetting


## T072 · 给定host求范围

Find all subnet details for 192.168.10.77/27. Is 192.168.10.96 in the same subnet?

求host所在子网并判断另一地址。

### 精简参考答案

192.168.10.77/27 belongs to 192.168.10.64/27. Its broadcast is 192.168.10.95 and its usable range is .65–.94. Address .96 begins the next subnet, so it is not in the same subnet and is not an ordinary host address there.

### 逐步解法

步长32；77在64–95内。
Network192.168.10.64；mask255.255.255.224；broadcast192.168.10.95；first.65；last.94；可用30。
96是下一块192.168.10.96/27的network，因此既不同子网，也不是该下一块普通可用host。
比较应看IP AND mask，不仅比较前三段。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：子网划分从主机部分借位形成更长前缀，把一个地址块分成多个更小的网络；计算必须同时检查子网数、每子网地址容量和地址边界。

1. 本题不需要借位，prefix已给。用mask或块步长确定77在64–95，得到完整五项。

2. 96已是下一块network；“前三段相同”不足以证明同网，因为边界落在第四字节内。

**英文关键句**：Compare network addresses under the same mask.

在相同掩码下比较网络地址。 under说明条件；不要只对照看起来相似的地址文字。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Are 192.168.10.94/27 and 192.168.10.97/27 in the same subnet?

**变式参考**：No. .94 belongs to 192.168.10.64/27; .97 belongs to 192.168.10.96/27. Compare the masked network addresses.

**自查**：同前三octet不保证同子网；network不能分给普通主机。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 33–48 · 搜索 Subnetting


## T073 · 跨octet /20

Find the network, broadcast and usable range for 172.20.37.140/20.

计算第三octet发生边界的子网。

### 精简参考答案

The /20 mask is 255.255.240.0. The third-octet block size is 16. Therefore, 172.20.37.140 lies in 172.20.32.0/20. The broadcast is 172.20.47.255 and the ordinary usable range is 172.20.32.1–172.20.47.254, containing 4094 hosts.

### 逐步解法

/20 mask255.255.240.0；第三octet步长256−240=16。37落在32–47。
Network172.20.32.0；broadcast172.20.47.255；first172.20.32.1；last172.20.47.254。
h=12，总4096，可用4094。172.20在172.16/12私有块内。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：子网划分从主机部分借位形成更长前缀，把一个地址块分成多个更小的网络；计算必须同时检查子网数、每子网地址容量和地址边界。

1. /20的边界在第三octet，mask240使步长16，37落在32–47。

2. 后面的第四octet仍全部属于host，network置0，broadcast置255。地址块跨多个/24，不要只在最后字节找范围。

**英文关键句**：The boundary falls inside the third octet.

边界落在第三个字节内。 fall inside表示“位于……内部”；octet是8位，保留专业词。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Find the network and broadcast of 172.20.55.1/20.

**变式参考**：Third-octet blocks advance by 16. 55 lies in 48–63. Network 172.20.48.0/20; broadcast 172.20.63.255; ordinary range .48.1–.63.254.

**自查**：broadcast不是172.20.32.255；host位跨两个octet。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 17–19、33–48 · 搜索 Subnetting


## T074 · /16 分4块与原答案勘误

Split 172.16.0.0/16 into four equal subnets. Give usable hosts for /17 and /18.

分4块，并校正workshop主机数。

### 精简参考答案

Borrow two bits to produce four /18 subnets. Their third-octet network values are 0, 64, 128 and 192. Each has 16382 ordinary usable hosts. A /17 has 32766 usable hosts. Total addresses must be distinguished from usable host addresses.

### 逐步解法

借2位，新/18，mask255.255.192.0，h14，每块16384地址、16382可用。

| Network | First | Last | Broadcast |
|---|---|---|---|
|172.16.0.0/18|172.16.0.1|172.16.63.254|172.16.63.255|
|172.16.64.0/18|172.16.64.1|172.16.127.254|172.16.127.255|
|172.16.128.0/18|172.16.128.1|172.16.191.254|172.16.191.255|
|172.16.192.0/18|172.16.192.1|172.16.255.254|172.16.255.255|

/17为2^15−2=32766可用，原solutions p.5误写32764；/18为16382，不是16384。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：子网划分从主机部分借位形成更长前缀，把一个地址块分成多个更小的网络；计算必须同时检查子网数、每子网地址容量和地址边界。

1. 四块需借2位，从/16到/18；第三字节mask192、步长64，故从0、64、128、192开始。

2. 总地址16384和可用16382不可混；/17可用32766。把原答案笔误明确纠正，而非把错值当需背常量。

**英文关键句**：Subtract two only after finding the total address count.

先求总地址数，再减2。 only after强调顺序；本题减2有普通子网前提。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Split 172.18.0.0/16 into two equal ordinary subnets.

**变式参考**：Use /17, mask 255.255.128.0. Networks 172.18.0.0 and 172.18.128.0; broadcasts 172.18.127.255 and 172.18.255.255. Each has 32766 ordinary usable hosts.

**自查**：原solutions p.5：/17误写32764，/18误写16384；正确分别32766、16382。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 33–48 · 搜索 Subnetting


## T075 · /23 至少10子网

Subnet 200.100.10.0/23 into at least ten equal subnets with at least 25 hosts each.

把/23分成至少10块并保留每块25主机。

### 精简参考答案

Borrow four bits from the /23 to create sixteen /27 subnets. Each supports 30 ordinary hosts. The original block spans two /24 ranges, so subnet numbering continues into 200.100.11.0. The tenth subnet is 200.100.11.32/27.

### 逐步解法

原块为200.100.10.0–200.100.11.255，共512地址。2^3=8不够，借4位得/27，共16块。
每块32地址、30可用；mask255.255.255.224。
network依次：200.100.10.{0,32,64,96,128,160,192,224}，再200.100.11.{0,32,64,96,128,160,192,224}。
第10块（按1起数）200.100.11.32/27，可用.33–.62，broadcast.63。
本题200.100.10.0/23为AI自拟地址变式，不是Workshop原题地址。原Workshop Ex5使用172.16.0.0/23并误称public；两者需分开。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：子网划分从主机部分借位形成更长前缀，把一个地址块分成多个更小的网络；计算必须同时检查子网数、每子网地址容量和地址边界。

1. 原/23有512地址，至少10块需借4位生成16个/27；每块30用户满足25。

2. 跨过.10.224后下一块是.11.0；题目第10块按1起数是.11.32。先确认题值为AI变式，别误称Workshop原地址。

**英文关键句**：Count subnets from the stated starting point.

从题目说明的起点计数子网。 stated starting point包括编号从1还是0；地址步长不是编号本身。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Split 198.51.100.0/23 into at least ten equal blocks of 25 hosts. Give the tenth network.

**变式参考**：Use /27: 16 subnets, 30 ordinary hosts each. The tenth network in ascending order is 198.51.101.32/27. This documentation-based block is for practice.

**自查**：别把原/23误当/24；第0索引与第1计数要说明。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 33–48 · 搜索 Subnetting


## T076 · /8 改为 /16

How many /16 subnets can be created from 10.0.0.0/8, and what is the range of 10.7.0.0/16?

计算/8到/16与指定子网范围。

### 精简参考答案

Eight borrowed bits create 256 /16 subnets. Each has 65534 ordinary usable hosts. For 10.7.0.0/16, the usable range is 10.7.0.1–10.7.255.254 and the broadcast address is 10.7.255.255.

### 逐步解法

借16−8=8位，所以256个/16，network为10.0.0.0、10.1.0.0……10.255.0.0。
/16剩16host bits，总65536、可用65534。
10.7.0.0/16的first10.7.0.1，last10.7.255.254，broadcast10.7.255.255。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：子网划分从主机部分借位形成更长前缀，把一个地址块分成多个更小的网络；计算必须同时检查子网数、每子网地址容量和地址边界。

1. 子网数由新旧prefix差算2^(16−8)，不是2^16；后者是每块地址数。

2. 10.7.0.0/16中后16位是host，网络从.0.0到.255.255。子网数量、每块大小、可用数量是三种不同量。

**英文关键句**：Borrowed bits count subnets; remaining bits count addresses.

借用位决定子网数；剩余位决定地址数。 分号连接平行两句；count在此帮助你分清两个指数。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：How many /20 subnets fit in a /16, and how many ordinary hosts per /20?

**变式参考**：2^(20−16)=16 subnets. Each leaves 12 host bits, giving 4096 addresses and 4094 ordinary usable hosts.

**自查**：子网数量用新旧prefix差；host数量用32−新prefix。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 33–48 · 搜索 Subnetting


## T077 · VLSM 变式

Allocate subnets for 100, 50, 20 and 10 hosts from 192.168.50.0/24 using VLSM.

按不同大小分配子网。材料有VLSM概念，本综合分配为AI扩展。

### 精简参考答案

Allocate the largest requirement first. Use /25, /26, /27 and /28 blocks beginning at .0, .128, .192 and .224. Each meets its host requirement and none overlap. The final .240/28 block remains available.

### 逐步解法

按主机需求从大到小：100→/25（126可用）；50→/26（62）；20→/27（30）；10→/28（14）。

|需求|Network|可用范围|Broadcast|
|---|---|---|---|
|100|192.168.50.0/25|.1–.126|.127|
|50|192.168.50.128/26|.129–.190|.191|
|20|192.168.50.192/27|.193–.222|.223|
|10|192.168.50.224/28|.225–.238|.239|

余192.168.50.240/28可保留。每块要满足自己的prefix对齐，不重叠。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：子网划分从主机部分借位形成更长前缀，把一个地址块分成多个更小的网络；计算必须同时检查子网数、每子网地址容量和地址边界。

1. 先按需求从大到小，逐块选满足2ʰ−2的最小块，再在合法边界顺序分配。

2. 对齐和不重叠比把用户数直接相加更重要：100要128地址，50要64，不能恰好占100、50地址。留余量要标成完整可用块。

**英文关键句**：Allocate larger blocks first and check alignment.

先分大块，再检查对齐。 alignment是“边界对齐”；larger blocks按所需块大小而非编号。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Allocate 60, 30 and 12 hosts from 192.168.60.0/24 using VLSM.

**变式参考**：One valid plan is .0/26 for 60 (usable .1–.62, broadcast .63), .64/27 for 30 (.65–.94, .95), and .96/28 for 12 (.97–.110, .111). Blocks are aligned and do not overlap.

**自查**：作为范围拓展训练，不声称老师明确点名VLSM综合分配必考。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 33–48 · 搜索 Subnetting


## T078 · 不可行需求判断

Can a /24 support eight equal ordinary subnets with at least 40 usable hosts each?

判断需求是否可同时满足。

### 精简参考答案

No. Eight equal subnets from a /24 require /27, which supports only 30 ordinary hosts per subnet. Supporting 40 hosts requires at least /26. Eight /26 blocks need 512 addresses, equivalent to a suitably aligned /23 allocation.

### 逐步解法

8子网需借3位，所以/27，每块30可用，不够40。
40主机至少6host bits，即每块/26或更大；/24只容4个/26。
8×64=512地址，最小连续总块/23（且需边界对齐）。
结论：给定/24做不到；扩大地址分配或修改需求。

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：子网划分从主机部分借位形成更长前缀，把一个地址块分成多个更小的网络；计算必须同时检查子网数、每子网地址容量和地址边界。

1. 不可行题要展示冲突：8块要求/27或更长，40host要求/26或更短，在/24里无法同时满足。

2. 最少8×64=512地址，对应对齐/23。结论可以是不可能，不要为了给出分配表而悄悄越界或减少用户。

**英文关键句**：The given block is insufficient under both constraints.

在两项约束共同成立时，给定地址块不足。 insufficient是“不足”；under both constraints说明不是所有任务都不够。

**可复用句式**：Using ____, the result is ____ [unit]. This assumes ____.

根据……，结果为……单位；这里假设……。 结果句必须包含单位与模型条件；英语简单不影响数学严谨。

**变式练习**：Can a /24 support four equal subnets of 60 ordinary hosts?

**变式参考**：Yes. Four /26 blocks each provide 62 ordinary hosts. The same /24 cannot support eight such blocks.

**自查**：不能只检查子网数不检查host数。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 33–48 · 搜索 Subnetting


## T079 · Routing boundaries 与 AS

Explain autonomous systems, IGPs, EGPs and routing boundaries.

解释自治系统与路由边界。

### 精简参考答案

An autonomous system, or AS, is a group of IP prefixes under a common administrative routing policy. An interior gateway protocol, or IGP, distributes routing information inside an AS. RIP and OSPF are examples. BGP is used for routing policy and reachability between autonomous systems, although it also has an internal form.

Routing boundaries divide a network physically or logically according to requirements. Physical examples include interfaces, isolation LANs and DMZs. Logical examples include functional areas, workgroups and administrative domains.

The course describes boundaries between autonomous systems as hard boundaries and internal divisions as soft boundaries. Functional areas can group similar work, while workgroups may share location or applications. Boundaries help organize hierarchy, management and security. Their placement should follow requirements and flows rather than being chosen only because a convenient device is available.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：Routing 使用网络可达性信息支持数据包跨网转发；网络设计利用路由域和边界组织流量，并通过默认路由、过滤、聚合及策略控制可达性与路径。

1. AS边界按管理路由策略，IGP/EGP按信息交换范围；内部也可运行iBGP，所以不能说“AS里只有IGP”。

2. hard/soft是本课程描述边界的视角。边界可逻辑也可物理，需说明对应管理、安全与流需求，不把一台设备机械等同一个AS。

**英文关键句**：Administrative policy defines the routing domain.

管理策略界定路由域。 define在此是“界定”；domain是“域/管理范围”，不是域名解析中的完整同义词。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：Do two buildings necessarily form two autonomous systems?

**变式参考**：No. AS membership follows administrative routing policy, not distance alone. One AS can cover several sites, with internal logical boundaries.

**自查**：BGP的iBGP形式在AS内部用；不能绝对说BGP只在外部。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 49–58 · 搜索 Routing Mechanism


## T080 · Default、filter、aggregation 与 policy

Describe mechanisms for manipulating routing flows.

描述默认路由、过滤、聚合与策略。

### 精简参考答案

A default route provides a next hop when no more specific route matches a destination. It is useful for a simple network with one main exit. Route aggregation summarizes suitable prefixes, reducing routing information and supporting hierarchy.

Route filtering controls which routes are accepted, advertised or used. Packet filtering and access control lists control traffic according to packet properties. The lecture discusses these together, but filtering route information and filtering data packets are different operations.

Routing policies guide decisions using organizational requirements, such as preferred providers or administrative boundaries, rather than only a simple distance metric. These mechanisms can affect reachability and service paths. A designer must check that an aggregation or filter does not hide required destinations or create incorrect paths. Choices should be linked to the flow map and documented policy.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：Routing 使用网络可达性信息支持数据包跨网转发；网络设计利用路由域和边界组织流量，并通过默认路由、过滤、聚合及策略控制可达性与路径。

1. default处理无更具体匹配的出口；aggregation合并可总结的前缀；route filtering管路由信息；packet ACL管数据包。

2. 汇总和过滤会改变可达性，需检查隐藏的目的与错误路径。policy把组织偏好带入决策，不等于每次选最少跳。

**英文关键句**：Route filtering controls routing information.

路由过滤控制路由信息。 controls直接接对象；说明对象可避免把所有filter统称成一回事。

**可复用句式**：First, ____. This provides ____ for the next stage. Finally, verify ____.

先……，这为下阶段提供……；最后验证……。 This必须指向前一阶段产出；不要只用first/next堆清单。

**变式练习**：Is filtering a route advertisement the same as blocking packets to a server?

**变式参考**：No. Route filtering controls routing information. Packet filtering controls data traffic. Their effects can interact but the operations are different.

**自查**：route filtering与packet ACL不能机械画等号。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 59–61 · 搜索 Manipulating Flows


## T081 · Static 与 dynamic routing

Compare static and dynamic routing and their architectural trade-offs.

比较静态/动态路由。

### 精简参考答案

Static routes are configured explicitly. They avoid the control traffic and processing needed to exchange dynamic routing updates. They can be useful for a small, stable or stub network with a simple exit.

Dynamic routing protocols exchange reachability information and adapt routes when topology changes. This supports larger or more interconnected networks, but it uses bandwidth, processor time and memory. The designer must also consider convergence, stability and staff skills.

A static route does not automatically change simply because a better path appears. Maintaining many static routes can become difficult and error-prone. Conversely, adding a complex dynamic protocol to a simple network can create unnecessary work. Select the simplest approach that meets the actual resilience, growth and policy requirements. Re-evaluate it as hierarchy and interconnectivity increase.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：Routing 使用网络可达性信息支持数据包跨网转发；网络设计利用路由域和边界组织流量，并通过默认路由、过滤、聚合及策略控制可达性与路径。

1. static省去动态交换，但变更需维护；dynamic可适应拓扑，代价是控制流量、计算、状态及收敛。

2. stub单出口与多路径大网需求不同。选择应满足恢复与扩展，而不是“静态永远简单”或“动态永远最好”；大量静态配置也可能很复杂。

**英文关键句**：Use the simplest approach that meets the requirements.

使用能满足需求的最简单方法。 that meets修饰approach；最简单受“满足需求”这个条件限制。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：A small stable branch has one exit. Must it run a complex dynamic protocol?

**变式参考**：Not necessarily. A static default may be sufficient if it meets failure and management requirements. Reassess when paths or scale change.

**自查**：simple不意味着一律先上RIP；课件后页已提示旧建议过时。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 62–68、77–79 · 搜索 Routing Strategies


## T082 · RIP、OSPF 与 BGP 选择

Compare RIP, OSPF and BGP and explain how routing protocols should be evaluated.

比较三种协议与评价标准。

### 精简参考答案

RIP is a distance-vector IGP that uses hop count. Its maximum usable hop count is 15, and it can be slow to converge. Its simplicity suits limited networks but restricts scalability.

OSPF is a link-state IGP. It supports areas and is better suited to larger hierarchical networks, although operation is more complex. BGP is a path-vector protocol that supports policy-based routing between autonomous systems. It is important for inter-domain connectivity.

Protocol evaluation should consider convergence time, bandwidth overhead, processor and memory use, stability, scalability, hierarchy and interconnectivity. The choice should also fit service requirements and management skills. A network requiring fast recovery and many alternative paths places different demands on routing from a small stub network. No protocol is best for every role; internal routing and inter-domain routing solve different problems.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：路由协议的选择要同时考虑收敛、开销、稳定性、层级和互联程度，并与网络需求匹配；协议机制与部署条件共同影响适用性。

1. RIP/OSPF解决域内问题，BGP强调AS间政策；先明确角色再比较。

2. 协议优劣看收敛、开销、稳定性、层次、扩展与技能，不是只比一个指标。RIP上限15跳是结构约束；OSPF分区提供层次但增加运维知识要求。

**英文关键句**：No protocol is best for every role.

没有协议在每个角色都最好。 for every role限定比较范围；随后给IGP与inter-domain区别作为依据。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：Would OSPF automatically replace BGP between independent providers?

**变式参考**：No. OSPF is an IGP; BGP supports inter-domain reachability and policy. Choose protocols according to their architectural roles.

**自查**：不要把BGP简单说成“最快路由”；OSPF不是distance vector。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 62–79 · 搜索 Evaluating Routing Protocols


## T083 · RIPv1、RIPv2 与旧建议

Compare RIPv1 and RIPv2. Why must routing recommendations be read in context?

比较RIP版本，解释旧经验规则的边界。

### 精简参考答案

RIPv1 uses classful routing information and does not support variable-length subnet masking. RIPv2 carries subnet mask information and supports classless addressing and VLSM. This makes it more flexible for subnet design.

However, RIPv2 still has RIP’s hop-count limitation and is not automatically suitable for a large or highly interconnected network. Version improvements do not remove every limitation of the basic approach.

The lecture also presents older advice about starting with simple routes and limiting the number of protocols. A later slide says that some of these recommendations are dated and should not be memorized as universal rules. The lasting design principle is to manage complexity while meeting requirements. Evaluate scale, convergence, overhead, vendor compatibility and operational skill for the actual network instead of applying a historical recipe without checking its conditions.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：路由协议的选择要同时考虑收敛、开销、稳定性、层级和互联程度，并与网络需求匹配；协议机制与部署条件共同影响适用性。

1. RIPv2增加mask信息，支持classless/VLSM，但仍保留RIP自身跳数和扩展限制。

2. 课程后页提醒旧建议过时，考试可解释其“控制复杂度”原则，但不能把先RIP或协议最多两种写成现代统一规则。

**英文关键句**：An improvement does not remove every limitation.

一项改进不代表消除所有限制。 every limitation表示所有限制；用“改变什么/仍保留什么”组织比较。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：Does RIPv2’s VLSM support remove RIP’s scalability limits?

**变式参考**：No. It improves addressing flexibility but does not remove hop-count and other operational limits. Evaluate actual size and recovery needs.

**自查**：不能把课件“2 max”当所有网络必须满足的技术定律。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 69–76 · 搜索 RIPv2


## T084 · iBGP 与 eBGP

Compare iBGP and eBGP using the autonomous systems in the lecture diagram.

按图说明AS100内部及AS之间的BGP。

### 精简参考答案

External BGP, or eBGP, exchanges BGP reachability information between peers in different autonomous systems. Internal BGP, or iBGP, exchanges BGP information between peers within the same autonomous system.

In the lecture diagram, connections from AS100 to AS200, AS300 and AS400 are eBGP relationships. BGP relationships between routers inside AS100 are iBGP. This allows information about external destinations and related routing policy to be shared within the organization’s routing domain.

iBGP should not be confused with an interior gateway protocol such as OSPF. An IGP supports internal network reachability, while iBGP distributes BGP information inside the AS. They can work together. The distinction is based on the AS membership of the peers, not the physical distance between them. Two nearby border routers can use eBGP, while geographically separated routers in the same AS can use iBGP.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：路由协议的选择要同时考虑收敛、开销、稳定性、层级和互联程度，并与网络需求匹配；协议机制与部署条件共同影响适用性。

1. 判断i/eBGP看peers是否同AS；物理距离不是决定因素。iBGP分发BGP信息，不代替所有内部可达性机制。

2. 同一AS内常需IGP提供内部reachability，再由iBGP传递外部路由信息。图中应先标AS边界再命名连接。

**英文关键句**：The distinction depends on AS membership.

区别取决于AS归属。 membership是“所属关系”；depend on后接决定条件，不接距离猜测。

**可复用句式**：X provides ____, whereas Y provides ____. The choice depends on ____.

X提供……，而Y提供……；选择取决于……。 whereas用同一维度做对比；空白要填机制或条件，不填无依据的best。

**变式练习**：Two adjacent routers belong to different ASs. Which BGP relationship applies?

**变式参考**：eBGP, because the peers are in different autonomous systems. Physical closeness does not make the session iBGP.

**自查**：iBGP不等于OSPF；inside同一大楼不代表same AS；BGP不是只按最短hop选择。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 72–73 · 搜索 Evaluating Routing Protocols


## T140 · 地址路由架构的内外关系

Explain internal and external relationships of the addressing and routing architecture, using management, performance and security examples.

把路由机制自身取舍与跨组件关系区分，并写出因果。

### 精简参考答案

Internal relationships concern choices within addressing and routing. Static and dynamic routing trade operational effort against adaptation and control overhead. Protocol choice also depends on hierarchy, interconnectivity, scale and the address plan. These choices should support the required reachability and recovery behaviour.

External relationships connect routing with other component architectures. Management needs reachable devices and clear domains, while route changes can alter monitoring paths. Performance mechanisms may influence path selection and traffic treatment, so routing and QoS decisions need coordination.

Security rules may use addresses to control access. Dynamic addressing can complicate rule maintenance and log interpretation, while intrusive protection can affect path performance. NAT changes addressing visibility but does not replace a complete security policy. For example, changing a campus subnet plan may require updates to routes, management targets and access rules together. A defensible architecture records these dependencies and tests the combined service instead of evaluating each mechanism in isolation.

<details><summary>详细解析：理解 → 英文 → 变式</summary>

**先懂概念**：路由协议的选择要同时考虑收敛、开销、稳定性、层级和互联程度，并与网络需求匹配；协议机制与部署条件共同影响适用性。

1. 内部是routing/addressing机制之间的取舍；外部连management、performance、security。先把关系两端写出再说影响。

2. 例如改地址会改变路由汇总、管理目标与ACL；dynamic address方便分配但使按地址记录身份更难。NAT可改变可见性却不代替安全政策。

**英文关键句**：One address change can affect several architectures.

一次地址变更可影响多个架构组件。 affect是动词“影响”；several后接复数，随后列具体受影响对象。

**可复用句式**：X supports ____ because ____. However, it does not guarantee ____.

X支持……，因为……；但不保证……。 because后解释机制；however后保留边界，不能两句空泛。

**变式练习**：A subnet is renumbered. Which linked items need review?

**变式参考**：Review routes and summaries, management targets, access rules and logs. The address change can affect several component architectures at once.

**自查**：例如改地址会改变路由汇总、管理目标与ACL；dynamic address方便分配但使按地址记录身份更难。NAT可改变可见性却不代替安全政策。；是否覆盖题干每个子任务，并用机制支持结论？；是否分清资料事实、语言句式和按场景自行组织的推理？；能否换一个数字或场景仍解释正确，而非只复述原句？

</details>

### Moodle定位

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) · PDF 77–79 · 搜索 Architectural Considerations

