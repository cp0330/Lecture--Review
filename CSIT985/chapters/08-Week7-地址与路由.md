# 08-Week7-地址与路由

返回：[期末题库总入口](../README.md)；[旧题号与当前题号对照](../question-map.md)。

本册按对应课件的可见页序排列。计算与补题放到其知识点附近；Workshop Flow题接在Week5 Flow主线，原资源仍明确标为Workshop Week7a。综合长答统一放最后。

来源页码按PDF文件从第1页起计，包含封面。英文答案为教学参考，不是官方评分答案。老师样题保留标记。使用条件与假设属于答案的一部分。

## T060

**MAC、IP、IPv4 与 IPv6**

- 题型：简答；检索码：Q45；依据：范围扩展题。
- 知识点：IPv4 addressing（IPv4 编址）。

**Question:** Distinguish MAC and IP addresses and compare IPv4 with IPv6.

**中文题意：**区分地址层次与两个IP版本。

<!-- answer-guidance:T060:start -->
### 组织方式与答题思路

**任务类型：**双重比较。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按层次与交付范围区分MAC与IP。
2. 按位数和写法比较IPv4与IPv6。
3. 用远程目的地与本地gateway解释逐跳交付。
4. 补地址规划对聚合、管理和安全的影响。

**现有参考答案的组织方式：**

- 第1段：MAC与IP的用途。
- 第2段：IPv4/IPv6长度与表示。
- 第3段：规划意义和网关逐链路例子。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **7–12**；课件主题：Addressing Fundamentals。

搜索词：`MAC`；`IPv4`；`IPv6`；`gateway`。

查到后确认：看地址层次和路径图，核对32/128位。

**换问法时：**若给通信路径，分清frame送网关与packet最终IP目的。
<!-- answer-guidance:T060:end -->

### 中文思路

MAC链路层；IP逻辑网络层；IPv4 32位、IPv6 128位。

### 英文参考答案（130词）

A MAC address is used for data-link communication, such as delivery of Ethernet frames on a local link. An IP address is a logical network-layer address used to identify an interface and support delivery between networks.

IPv4 addresses contain 32 bits, commonly written as four decimal octets. Each octet contains eight bits. IPv6 addresses contain 128 bits and are commonly written in hexadecimal groups. IPv6 therefore provides a much larger address space.

Addressing must be planned together with routing, location and network structure. The address plan affects aggregation, management and security rules. For example, a computer sending to a remote network normally delivers the local frame to a gateway while the IP packet identifies the final remote destination. Knowing the roles of both addresses helps explain communication across multiple links.

### 易错、变式与反馈

IP通常分配给接口；不要把MAC绝对说成永远不可更改。

变式：Explain why a host needs a gateway for a remote destination.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页7–12**，关键词`Addressing Fundamentals`。

## T061

**IANA、RIR 与 AS 的分工**

- 题型：简答；检索码：Q99；依据：缺口补题；依据课件的AI参考答案。
- 知识点：IPv4 addressing（IPv4 编址）。

**Question:** Explain the roles of IANA, Regional Internet Registries and autonomous systems in the addressing context of this course.

**中文题意：**解释地址和AS号体系中的角色，避免把管理层级当路由协议。

<!-- answer-guidance:T061:start -->
### 组织方式与答题思路

**任务类型：**分工解释。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. IANA写顶层号码资源协调。
2. RIR写区域分配登记。
3. AS写共同路由策略域与AS number。
4. 区分资源分配、行政归属和运行路由。

**现有参考答案的组织方式：**

- 第1段：IANA与RIR及APNIC例子。
- 第2段：AS及其不是单一subnet。
- 第3段：协调分配与逐包路由的区别。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **8–9**；课件主题：Addressing Fundamentals。

搜索词：`IANA`；`RIR`；`APNIC`；`autonomous system`。

查到后确认：核对三个实体的职责和AS定义。

**换问法时：**若问packet路径，不用地址分配机构替代实际routing/forwarding解释。
<!-- answer-guidance:T061:end -->

### 中文思路

IANA顶层协调分配；RIR区域管理（课件以APNIC说明）；AS共同管理/路由策略域，AS number识别。地址分配层级不等于包的转发路径。

### 英文参考答案（137词）

IANA provides top-level coordination for Internet number resources, including the allocation system for IP address blocks and autonomous system numbers. Regional Internet Registries, or RIRs, manage allocation and registration within their regions. The lecture uses APNIC as the regional example relevant to Australia.

An autonomous system is a collection of routing prefixes operated under a common administrative routing policy. Its AS number identifies that routing domain. An AS can contain many networks and routers; it is not simply another name for one local subnet.

These roles explain coordination and administration, not the path taken by every packet. Routers still use forwarding information, and routing protocols exchange reachability according to their scope and policies. A designer should distinguish address allocation, administrative ownership and operational routing. The lecture’s historical comments about fees are not needed to explain this structure.

### 易错、变式与反馈

不背可能变化的费用或机构人员信息；AS不等于classful network或一个LAN。

变式：先遮住答案复述；再换一个场景说明分类、机制或条件。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页8–9**，关键词`Addressing Fundamentals`。

## T062

**Classful、CIDR 与 prefix**

- 题型：简答；检索码：Q46；依据：范围扩展题。
- 知识点：IPv4 addressing（IPv4 编址）。

**Question:** Explain classful and classless addressing and the meaning of a prefix length.

**中文题意：**解释classful/CIDR及前缀。

<!-- answer-guidance:T062:start -->
### 组织方式与答题思路

**任务类型：**历史对比＋位结构。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. classful说明固定A/B/C边界的限制。
2. CIDR说明显式/p。
3. 用prefix bits与host bits解释mask。
4. 用/26核对并强调不能只看首octet。

**现有参考答案的组织方式：**

- 第1段：classful固定边界与问题。
- 第2段：CIDR及prefix含义。
- 第3段：mask构造、/26例子与现代判断规则。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **13–19**；课件主题：Classless Addressing。

搜索词：`classful`；`classless`；`CIDR`；`prefix`。

查到后确认：核对/p、mask连续1与host位，区分历史类别和实际子网。

**换问法时：**若给地址而未给前缀，指出无法唯一确定现代子网。
<!-- answer-guidance:T062:end -->

### 中文思路

旧A/B/C固定边界；CIDR显式/p；hostbits=32-p；mask连续1。

### 英文参考答案（130词）

Classful addressing used address classes with predetermined network boundaries. The familiar A, B and C classes used /8, /16 and /24 boundaries. This was inflexible and could waste address space or create blocks too small for users’ needs.

Classless Interdomain Routing, or CIDR, uses an explicit prefix length. In IPv4, /p means that p of the 32 bits form the network prefix and the remaining bits form the host portion. The boundary can fall inside an octet.

The subnet mask has ones for the prefix bits and zeros for host bits. For example, /26 corresponds to 255.255.255.192 and leaves six host bits. The address alone is not enough to determine its subnet: the prefix is essential. Do not infer a modern subnet size only from the first octet’s historical class.

### 易错、变式与反馈

classful是历史语境；CIDR不能仅看首字节推前缀。

变式：Convert prefix to mask; explain why CIDR improves flexibility.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页13–19**，关键词`Classless Addressing`。

## T063

**Private/public、DHCP 与 NAT**

- 题型：简答；检索码：Q47；依据：范围扩展题。
- 知识点：IPv4 addressing（IPv4 编址）。

**Question:** Explain private and public addresses, DHCP and NAT.

**中文题意：**解释地址可路由性、租期和转换机制。

<!-- answer-guidance:T063:start -->
### 组织方式与答题思路

**任务类型：**多概念区分。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. private/public按公网路由与分配范围区分。
2. 列三个private blocks。
3. DHCP说明租用机制，不等同私有地址。
4. NAT说明转换和PAT，并补管理、安全限制。

**现有参考答案的组织方式：**

- 第1段：private地址及三块范围。
- 第2段：public与临时/持久分配的独立维度。
- 第3段：NAT/PAT、非加密与规划条件。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **20–21**；课件主题：Private Addressing。

搜索词：`private`；`DHCP`；`NAT`；`172.16`。

查到后确认：核对172.16/12结束于172.31，不是全部172网段。

**换问法时：**若给地址分类，按范围判public/private，再单独讨论动态/静态。
<!-- answer-guidance:T063:end -->

### 中文思路

private三块；temporary/persistent另维度；NAT非私网地址本身。

### 英文参考答案（125词）

Private IPv4 addresses are intended for internal use and are not globally routed on the public Internet. The private blocks are 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16. The second block ends at 172.31.255.255.

Public addresses support globally coordinated Internet addressing. Whether an address is temporary or persistent is a separate question. DHCP can lease an address for a period, while a persistent address may be configured or maintained for a longer time.

NAT translates between address spaces. Static mappings can be one-to-one. Address-and-port translation allows multiple internal connections to share a public address by using port information. This does not make NAT the same as encryption or authentication. Address planning should consider growth, route aggregation, duplicate private ranges and the effect of translation on management and logging.

### 易错、变式与反馈

Week7 p.20把172.32写进private范围是笔误，正确终点31。

变式：Is 172.32.1.1 private? Distinguish address scope from address lifetime.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页20–21**，关键词`Private Addressing`。

## T064

**特殊地址与交付方式**

- 题型：简答；检索码：Q48；依据：范围扩展题。
- 知识点：IPv4 addressing（IPv4 编址）。

**Question:** Explain loopback, link-local, unicast, multicast and broadcast addressing.

**中文题意：**解释特殊地址及单播组播广播。

<!-- answer-guidance:T064:start -->
### 组织方式与答题思路

**任务类型：**类别＋范围。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. loopback说明本机通信。
2. link-local说明本地链路范围。
3. 按接收对象区分unicast/multicast/broadcast。
4. 列对应IPv4范围并说明路由转发边界。

**现有参考答案的组织方式：**

- 第1段：loopback与link-local。
- 第2段：三种交付方式及地址例子。
- 第3段：机制用途、scope与路由规则。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **22–32**；课件主题：Other IPv4 Addressing Types。

搜索词：`loopback`；`link-local`；`multicast`；`broadcast`。

查到后确认：核对特殊地址范围与broadcast的作用域。

**换问法时：**若问谁收到数据，要结合group membership和broadcast domain，不说所有Internet设备。
<!-- answer-guidance:T064:end -->

### 中文思路

127本机、169.254本链路；1对1、1对组、1对广播域。

### 英文参考答案（127词）

Loopback addresses let a host communicate with itself. A familiar IPv4 example is 127.0.0.1. Link-local addresses, such as addresses from 169.254.0.0/16, support local-link communication and are not ordinary public Internet addresses.

Unicast sends to one destination. Multicast sends to members of a selected group. Broadcast sends to all relevant receivers in a broadcast domain. IPv4 multicast uses the 224.0.0.0/4 block. A subnet-directed broadcast uses all host bits set to one for that subnet. The limited broadcast address is 255.255.255.255.

These mechanisms serve different communication needs. Multicast can avoid sending a separate copy from a source to every group member, while broadcast reaches beyond a selected group within its domain. Do not assume that routers forward every broadcast. Scope and forwarding rules matter when mapping traffic across networks.

### 易错、变式与反馈

default route写0.0.0.0/0；不是课件特殊地址表里的/8。

变式：Identify address types and distinguish directed from limited broadcast.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页22–32**，关键词`Other IPv4 Addressing Types`。

## T065

**TEST-NET、loopback、link-local 与实验地址**

- 题型：简答；检索码：Q94；依据：缺口补题；依据课件的AI参考答案。
- 知识点：IPv4 addressing（IPv4 编址）。

**Question:** Explain the special IPv4 address categories in the lecture table, including TEST-NET and the default route.

**中文题意：**补齐特殊地址表，区分默认路由和主机地址块。

<!-- answer-guidance:T065:start -->
### 组织方式与答题思路

**任务类型：**表格解释＋纠错。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 区分loopback、link-local、TEST-NET与实验保留空间。
2. 说明用途而不是仅背前缀。
3. 单独解释0.0.0.0/0默认路由。
4. 指出默认路由匹配规则不是分配主机块。

**现有参考答案的组织方式：**

- 第1段：loopback和link-local用途。
- 第2段：文档地址与历史实验/保留分类。
- 第3段：default route及原表误写的辨析。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **22–23**；课件主题：Other IPv4 Addressing Types。

搜索词：`TEST-NET`；`192.0.2`；`default`；`0.0.0.0`。

查到后确认：看原特殊地址表并对照题库勘误，不照搬表中的默认路由错误。

**换问法时：**若给地址选址，不能把文档/保留块当真实普通public分配。
<!-- answer-guidance:T065:end -->

### 中文思路

127/8回环；169.254/16本链路；192.0.2/24文档示例；240/4在课件中为实验/保留类；default route是0.0.0.0/0，修正表中/8。

### 英文参考答案（123词）

Loopback addresses support communication within a host; 127.0.0.1 is a familiar example from 127.0.0.0/8. Link-local addresses from 169.254.0.0/16 support local-link communication and are not ordinary publicly routed addresses.

The lecture lists 192.0.2.0/24 as TEST-NET, reserved for documentation and examples. It should not be treated as an ordinary public allocation for a real organization. The table also lists 240.0.0.0/4 as experimental or reserved space in its historical classification.

A default route is a different kind of entry. The prefix 0.0.0.0/0 matches destinations when no more specific route is available. It is not the same as allocating hosts from a special /8 block. Recognizing these purposes helps avoid selecting unsuitable addresses and prevents the table’s default-route notation error from being copied into a routing answer.

### 易错、变式与反馈

文档地址不是RFC1918私网；不要把地址数字0.0.0.0、0.0.0.0/8与默认路由/0混写。

变式：先遮住答案复述；再换一个场景说明分类、机制或条件。

文档地址核对：[RFC5737](https://www.rfc-editor.org/rfc/rfc5737.html)，§3–4。课堂重点列出TEST-NET-1；其他文档块只作背景，不新增为老师点名考点。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页22–23**，关键词`Other IPv4 Addressing Types`。

## T066

**Subnetting 通用步骤**

- 题型：简答；检索码：Q49；依据：范围扩展题。
- 知识点：IPv4 subnetting（IPv4 子网划分）。

**Question:** Explain how to subnet an IPv4 block and verify the result.

**中文题意：**解释完整子网计算步骤。

<!-- answer-guidance:T066:start -->
### 组织方式与答题思路

**任务类型：**步骤＋验证。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 先确定原block、子网数和主机需求。
2. 按需求借位得到新prefix与mask。
3. 计算数量、host bits与普通可用主机。
4. 列边界和地址范围，检查不重叠且不越界。

**现有参考答案的组织方式：**

- 第1段：输入需求、borrow bits与新prefix。
- 第2段：host bits及地址/普通可用数。
- 第3段：范围列举、验证和特殊假设。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **33–48**；课件主题：Subnetting。

搜索词：`subnetting`；`subnet mask`；`host bits`。

查到后确认：核对等长子网借位与范围例题，/31等特殊情形不能盲减2。

**换问法时：**若改为VLSM，改用按需求从大到小分配，不沿用统一借位方法。
<!-- answer-guidance:T066:end -->

### 中文思路

先确认原block/需求→borrow→newmask→数量/主机→边界→验证。

### 英文参考答案（132词）

Start with the original network and prefix, then state the required subnet count and usable hosts. For equal-sized subnets, choose enough borrowed bits b so that 2 to the power b meets the subnet requirement. The new prefix is the original prefix plus b.

The remaining host bits h equal 32 minus the new prefix. Each ordinary subnet has 2 to the power h addresses and normally two fewer usable host addresses because network and broadcast addresses are reserved.

Find the subnet boundaries from the new prefix. For each subnet, identify its network address, broadcast address, first usable address and last usable address. Finally, check that the blocks do not overlap, stay within the original allocation and meet the requirements. State any special assumptions instead of applying the ordinary usable-host rule blindly.

### 易错、变式与反馈

常规LAN公式不适用于所有特殊/31、/32情形；本题库计算指定普通子网。

变式：Design subnets for a count or host requirement; find a host’s containing subnet.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页33–48**，关键词`Subnetting`。

## T067

**二进制与 AND**

- 题型：计算；检索码：C01；依据：AI计算变式；题值并非真实试题。
- 知识点：IPv4 addressing（IPv4 编址）。

**Question:** Convert 192.168.10.77 and /27 to binary, then find the network address.

**中文题意：**把IP和掩码转二进制，用AND求network。

<!-- answer-guidance:T067:start -->
### 组织方式与答题思路

**任务类型：**二进制与按位AND。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按octet写IP二进制。
2. 把/27写连续27个1的mask。
3. 逐位AND得到network。
4. 换回十进制并检查32地址边界。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **10–12、33–37**；课件主题：Subnetting。

搜索词：`binary`；`AND`；`subnet mask`。

查到后确认：核对AND规则、mask位数和最后octet步长。

**换问法时：**前缀变化时重新定位分界octet，不能只改最后一段数字。
<!-- answer-guidance:T067:end -->

### 计算步骤

1. IP：11000000.10101000.00001010.01001101。
2. /27：11111111.11111111.11111111.11100000，即255.255.255.224。
3. 最后一字节：01001101 AND 11100000 = 01000000 = 64；前三字节不变。
4. Network = 192.168.10.64/27。host bits 5，总32地址，边界为64–95。

### 英文作答

The /27 mask is 255.255.255.224. Applying a bitwise AND to the address and mask gives 192.168.10.64. The subnet therefore runs from 192.168.10.64 to 192.168.10.95. Its ordinary usable range is 192.168.10.65–192.168.10.94.

### 易错、变式与反馈

不能对十进制直接做普通乘法；每个octet要8位。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页10–12、33–37**，关键词`Subnetting`。

## T068

**/24 平分两块**

- 题型：计算；检索码：C03；依据：AI计算变式；题值并非真实试题。
- 知识点：IPv4 subnetting（IPv4 子网划分）。

**Question:** Split 192.35.40.0/24 into two equal-sized subnets.

**中文题意：**按课件同一地址块分两个子网。

<!-- answer-guidance:T068:start -->
### 组织方式与答题思路

**任务类型：**等长子网。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 由两块确定借1位。
2. 得到/25、mask、host bits和普通可用数。
3. 按步长列两个network。
4. 填first/last/broadcast并检查刚好覆盖原/24。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **38–45**；课件主题：Subnetting。

搜索词：`subnetting`；`/25`；`192.35.40`。

查到后确认：核对原/24分两块例图和地址表各列含义。

**换问法时：**分块数改变先算borrow bits，地址起点变化时还要检查原块对齐。
<!-- answer-guidance:T068:end -->

### 计算步骤

借1位：2^1=2；新前缀/25，mask255.255.255.128；h=7，128地址、126可用。

| Network | First | Last | Broadcast |
|---|---|---|---|
|192.35.40.0/25|192.35.40.1|192.35.40.126|192.35.40.127|
|192.35.40.128/25|192.35.40.129|192.35.40.254|192.35.40.255|

### 英文作答

Borrow one host bit to create two /25 subnets. The mask is 255.255.255.128. Each subnet contains 128 addresses and 126 ordinary usable hosts. The network addresses are 192.35.40.0 and 192.35.40.128. Their broadcasts are 192.35.40.127 and 192.35.40.255.

### 易错、变式与反馈

第二块从128开始，不是127；不得借用原/24之外地址。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页38–45**，关键词`Subnetting`。

## T069

**前缀与掩码表**

- 题型：计算；检索码：C02；依据：AI计算变式；题值并非真实试题。
- 知识点：IPv4 subnetting（IPv4 子网划分）。

**Question:** Give masks and ordinary usable hosts for /25, /26, /27, /28, /29 and /30.

**中文题意：**写常见前缀、掩码、块大小和可用主机。

<!-- answer-guidance:T069:start -->
### 组织方式与答题思路

**任务类型：**前缀表推导。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 逐项求h=32-prefix。
2. 求总地址2^h与普通可用2^h−2。
3. 写连续1构成的mask。
4. 核对/25到/30步长依次减半。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **33–48**；课件主题：Subnetting。

搜索词：`prefix`；`subnet mask`；`host bits`。

查到后确认：核对前缀与掩码表，不只记可用主机数字。

**换问法时：**限定为普通子网；不要把减2规则无条件套到/31或/32。
<!-- answer-guidance:T069:end -->

### 计算步骤

| Prefix | Mask | 总地址/步长（最后octet） | 普通可用主机 |
|---|---|---:|---:|
| /25 | 255.255.255.128 |128|126|
| /26 | 255.255.255.192 |64|62|
| /27 | 255.255.255.224 |32|30|
| /28 | 255.255.255.240 |16|14|
| /29 | 255.255.255.248 |8|6|
| /30 | 255.255.255.252 |4|2|

h=32-prefix；总地址=2^h；普通LAN主机=2^h−2。

### 英文作答

A longer prefix leaves fewer host bits. Each additional prefix bit halves the number of addresses in a block. For these ordinary subnets, usable host count is total addresses minus the network and broadcast addresses.

### 易错、变式与反馈

旧guideline p.14把/27掩码写成255.255.254.0（那是/23），正确/27是255.255.255.224。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页33–48**，关键词`Subnetting`。

## T070

**至少6子网**

- 题型：计算；检索码：C04；依据：AI计算变式；题值并非真实试题。
- 知识点：IPv4 subnetting（IPv4 子网划分）。

**Question:** Split 192.168.8.0/24 into at least six equal subnets, each supporting at least 25 hosts.

**中文题意：**至少6个等长子网，每个25主机。

<!-- answer-guidance:T070:start -->
### 组织方式与答题思路

**任务类型：**双约束子网。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 子网需求确定最少borrow bits。
2. 得到/27并核对30可用满足25。
3. 按32步长列network和broadcast。
4. 检查至少6块且全部位于原/24。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **33–48**；课件主题：Subnetting。

搜索词：`subnets`；`hosts`；`/27`。

查到后确认：同时核对子网数量和每块主机容量。

**换问法时：**若两条件冲突，必须报告不可行或调整分配，不能只满足其中一项。
<!-- answer-guidance:T070:end -->

### 计算步骤

子网数：2^2=4不够，2^3=8够。借3位得到/27，mask255.255.255.224。
host bits=5，32地址、30可用，满足25。
最后字节network：0、32、64、96、128、160、192、224；broadcast分别31、63、95、127、159、191、223、255。
第一块可用.1–.30，第六块.161–.190；剩余两块可保留。

### 英文作答

Three borrowed bits produce eight equal /27 subnets. Each supports 30 ordinary hosts, so both requirements are met. Subnet addresses increase by 32 in the last octet. Six may be allocated and two kept for future use.

### 易错、变式与反馈

至少6可以生成8；不能说借6位因为要6个子网。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页33–48**，关键词`Subnetting`。

## T071

**由主机数决定前缀**

- 题型：计算；检索码：C05；依据：AI计算变式；题值并非真实试题。
- 知识点：IPv4 subnetting（IPv4 子网划分）。

**Question:** What is the longest ordinary subnet prefix that supports 50 usable hosts? How many such subnets fit in a /24?

**中文题意：**50主机时选最长前缀，算/24能容纳多少块。

<!-- answer-guidance:T071:start -->
### 组织方式与答题思路

**任务类型：**主机需求反推。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 由2^h−2≥50找最小h。
2. prefix=32−h得到最长可用前缀。
3. 写mask和每块总地址。
4. 用新旧prefix差计算/24容纳块数。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **33–48**；课件主题：Subnetting。

搜索词：`usable hosts`；`prefix`；`/26`。

查到后确认：核对longest prefix表示最小足够块，而不是最大地址空间。

**换问法时：**主机需求改动后先找h；别按十进制向下凑主机数。
<!-- answer-guidance:T071:end -->

### 计算步骤

2^5−2=30不足；2^6−2=62足够。至少6个host bits，因此最长prefix=32−6=/26。
mask=255.255.255.192；每块64总地址，/24可装2^(26−24)=4块。
例如192.168.1.0/24中network最后octet为0、64、128、192。

### 英文作答

Six host bits are needed because 2^6 − 2 = 62. The longest suitable prefix is /26, with mask 255.255.255.192. A /24 contains four /26 subnets. Each supports at least 50 hosts.

### 易错、变式与反馈

“最长prefix”对应最小够用块；不是/25更节约。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页33–48**，关键词`Subnetting`。

## T072

**给定host求范围**

- 题型：计算；检索码：C06；依据：AI计算变式；题值并非真实试题。
- 知识点：IPv4 subnetting（IPv4 子网划分）。

**Question:** Find all subnet details for 192.168.10.77/27. Is 192.168.10.96 in the same subnet?

**中文题意：**求host所在子网并判断另一地址。

<!-- answer-guidance:T072:start -->
### 组织方式与答题思路

**任务类型：**主机所属块。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 由/27确定mask和32步长。
2. 定位77所在64–95区间。
3. 列network、broadcast、first、last与可用数。
4. 用同mask判断.96属于下一块。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **33–48**；课件主题：Subnetting。

搜索词：`AND`；`network address`；`broadcast`。

查到后确认：核对一个地址怎样落在子网范围，并区别network与host。

**换问法时：**若改IP或prefix，重新按AND/步长定位，不只比较前三个octet。
<!-- answer-guidance:T072:end -->

### 计算步骤

步长32；77在64–95内。
Network192.168.10.64；mask255.255.255.224；broadcast192.168.10.95；first.65；last.94；可用30。
96是下一块192.168.10.96/27的network，因此既不同子网，也不是该下一块普通可用host。
比较应看IP AND mask，不仅比较前三段。

### 英文作答

192.168.10.77/27 belongs to 192.168.10.64/27. Its broadcast is 192.168.10.95 and its usable range is .65–.94. Address .96 begins the next subnet, so it is not in the same subnet and is not an ordinary host address there.

### 易错、变式与反馈

同前三octet不保证同子网；network不能分给普通主机。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页33–48**，关键词`Subnetting`。

## T073

**跨octet /20**

- 题型：计算；检索码：C07；依据：AI计算变式；题值并非真实试题。
- 知识点：IPv4 subnetting（IPv4 子网划分）。

**Question:** Find the network, broadcast and usable range for 172.20.37.140/20.

**中文题意：**计算第三octet发生边界的子网。

<!-- answer-guidance:T073:start -->
### 组织方式与答题思路

**任务类型：**跨octet范围。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 把/20换成255.255.240.0。
2. 第三octet用16步长定位37在32–47。
3. host位全0/全1得到network/broadcast。
4. 求first、last、总量与可用量。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **17–19、33–48**；课件主题：Subnetting。

搜索词：`subnetting`；`/20`；`octet`。

查到后确认：看跨octet边界，确认低位octet全范围变化。

**换问法时：**prefix跨过新的octet时重定位步长段，不沿用最后octet算法。
<!-- answer-guidance:T073:end -->

### 计算步骤

/20 mask255.255.240.0；第三octet步长256−240=16。37落在32–47。
Network172.20.32.0；broadcast172.20.47.255；first172.20.32.1；last172.20.47.254。
h=12，总4096，可用4094。172.20在172.16/12私有块内。

### 英文作答

The /20 mask is 255.255.240.0. The third-octet block size is 16. Therefore, 172.20.37.140 lies in 172.20.32.0/20. The broadcast is 172.20.47.255 and the ordinary usable range is 172.20.32.1–172.20.47.254, containing 4094 hosts.

### 易错、变式与反馈

broadcast不是172.20.32.255；host位跨两个octet。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页17–19、33–48**，关键词`Subnetting`。

## T074

**/16 分4块与原答案勘误**

- 题型：计算；检索码：C08；依据：AI计算变式；题值并非真实试题。
- 知识点：IPv4 subnetting（IPv4 子网划分）。

**Question:** Split 172.16.0.0/16 into four equal subnets. Give usable hosts for /17 and /18.

**中文题意：**分4块，并校正workshop主机数。

<!-- answer-guidance:T074:start -->
### 组织方式与答题思路

**任务类型：**等长子网＋勘误。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 四块确定借2位并得到/18。
2. 第三octet用64步长列四块。
3. 每块填network、first、last、broadcast。
4. 用host bits复核/17和/18普通可用数。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **33–48**；课件主题：Subnetting。

搜索词：`Exercise 3`；`/17`；`/18`。

查到后确认：同时看Workshop题和题库勘误，/17应为32766可用。

**换问法时：**重算2^h−2，不记错印值；/18总地址16384与可用16382要分开。
<!-- answer-guidance:T074:end -->

### 计算步骤

借2位，新/18，mask255.255.192.0，h14，每块16384地址、16382可用。

| Network | First | Last | Broadcast |
|---|---|---|---|
|172.16.0.0/18|172.16.0.1|172.16.63.254|172.16.63.255|
|172.16.64.0/18|172.16.64.1|172.16.127.254|172.16.127.255|
|172.16.128.0/18|172.16.128.1|172.16.191.254|172.16.191.255|
|172.16.192.0/18|172.16.192.1|172.16.255.254|172.16.255.255|

/17为2^15−2=32766可用，原solutions p.5误写32764；/18为16382，不是16384。

### 英文作答

Borrow two bits to produce four /18 subnets. Their third-octet network values are 0, 64, 128 and 192. Each has 16382 ordinary usable hosts. A /17 has 32766 usable hosts. Total addresses must be distinguished from usable host addresses.

### 易错、变式与反馈

原solutions p.5：/17误写32764，/18误写16384；正确分别32766、16382。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页33–48**，关键词`Subnetting`。

## T075

**/23 至少10子网**

- 题型：计算；检索码：C09；依据：AI计算变式；题值并非真实试题。
- 知识点：IPv4 subnetting（IPv4 子网划分）。

**Question:** Subnet 200.100.10.0/23 into at least ten equal subnets with at least 25 hosts each.

**中文题意：**把/23分成至少10块并保留每块25主机。

<!-- answer-guidance:T075:start -->
### 组织方式与答题思路

**任务类型：**跨原块边界的分割。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 原/23先确定512地址覆盖范围。
2. 至少10块需借4位到/27。
3. 核对每块30可用满足25。
4. 按第三/第四octet依次列16块。
5. 明确题号从1起数再定位第10块。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **33–48**；课件主题：Subnetting。

搜索词：`Exercise 5`；`/23`；`/27`。

查到后确认：核对/23跨两个/24范围及Workshop原地址勘误。

**换问法时：**本题自拟200.100.10.0与Workshop原172.16.0.0分开，不混写题中地址。
<!-- answer-guidance:T075:end -->

### 计算步骤

原块为200.100.10.0–200.100.11.255，共512地址。2^3=8不够，借4位得/27，共16块。
每块32地址、30可用；mask255.255.255.224。
network依次：200.100.10.{0,32,64,96,128,160,192,224}，再200.100.11.{0,32,64,96,128,160,192,224}。
第10块（按1起数）200.100.11.32/27，可用.33–.62，broadcast.63。
本题200.100.10.0/23为AI自拟地址变式，不是Workshop原题地址。原Workshop Ex5使用172.16.0.0/23并误称public；两者需分开。

### 英文作答

Borrow four bits from the /23 to create sixteen /27 subnets. Each supports 30 ordinary hosts. The original block spans two /24 ranges, so subnet numbering continues into 200.100.11.0. The tenth subnet is 200.100.11.32/27.

### 易错、变式与反馈

别把原/23误当/24；第0索引与第1计数要说明。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页33–48**，关键词`Subnetting`。

## T076

**/8 改为 /16**

- 题型：计算；检索码：C10；依据：AI计算变式；题值并非真实试题。
- 知识点：IPv4 subnetting（IPv4 子网划分）。

**Question:** How many /16 subnets can be created from 10.0.0.0/8, and what is the range of 10.7.0.0/16?

**中文题意：**计算/8到/16与指定子网范围。

<!-- answer-guidance:T076:start -->
### 组织方式与答题思路

**任务类型：**前缀差与范围。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 由/16−/8求借8位和256块。
2. 求每/16的16个host bits。
3. 对10.7.0.0/16列first、last、broadcast。
4. 检查第二octet变化范围。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **33–48**；课件主题：Subnetting。

搜索词：`/8`；`/16`；`10.0.0.0`。

查到后确认：核对借位差与block内部可用主机数是不同计算。

**换问法时：**原块/新前缀变化后分别算子网数和每块主机数。
<!-- answer-guidance:T076:end -->

### 计算步骤

借16−8=8位，所以256个/16，network为10.0.0.0、10.1.0.0……10.255.0.0。
/16剩16host bits，总65536、可用65534。
10.7.0.0/16的first10.7.0.1，last10.7.255.254，broadcast10.7.255.255。

### 英文作答

Eight borrowed bits create 256 /16 subnets. Each has 65534 ordinary usable hosts. For 10.7.0.0/16, the usable range is 10.7.0.1–10.7.255.254 and the broadcast address is 10.7.255.255.

### 易错、变式与反馈

子网数量用新旧prefix差；host数量用32−新prefix。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页33–48**，关键词`Subnetting`。

## T077

**VLSM 变式**

- 题型：计算；检索码：C11；依据：AI计算变式；题值并非真实试题。
- 知识点：IPv4 subnetting（IPv4 子网划分）。

**Question:** Allocate subnets for 100, 50, 20 and 10 hosts from 192.168.50.0/24 using VLSM.

**中文题意：**按不同大小分配子网。材料有VLSM概念，本综合分配为AI扩展。

<!-- answer-guidance:T077:start -->
### 组织方式与答题思路

**任务类型：**VLSM分配。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按主机需求从大到小排序。
2. 逐个求最小足够prefix。
3. 在剩余空间中按prefix边界对齐分配。
4. 列每块可用范围与broadcast。
5. 检查无重叠、未越界并标剩余空间。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **33–48**；课件主题：Subnetting。

搜索词：`VLSM`；`host requirements`。

查到后确认：核对VLSM按不同需求用不同prefix，/24原边界仍约束全部分配。

**换问法时：**地址顺序可有多种合理方案；评价是否满足容量、对齐、不重叠和原块约束。
<!-- answer-guidance:T077:end -->

### 计算步骤

按主机需求从大到小：100→/25（126可用）；50→/26（62）；20→/27（30）；10→/28（14）。

|需求|Network|可用范围|Broadcast|
|---|---|---|---|
|100|192.168.50.0/25|.1–.126|.127|
|50|192.168.50.128/26|.129–.190|.191|
|20|192.168.50.192/27|.193–.222|.223|
|10|192.168.50.224/28|.225–.238|.239|

余192.168.50.240/28可保留。每块要满足自己的prefix对齐，不重叠。

### 英文作答

Allocate the largest requirement first. Use /25, /26, /27 and /28 blocks beginning at .0, .128, .192 and .224. Each meets its host requirement and none overlap. The final .240/28 block remains available.

### 易错、变式与反馈

作为范围拓展训练，不声称老师明确点名VLSM综合分配必考。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页33–48**，关键词`Subnetting`。

## T078

**不可行需求判断**

- 题型：计算；检索码：C12；依据：AI计算变式；题值并非真实试题。
- 知识点：IPv4 subnetting（IPv4 子网划分）。

**Question:** Can a /24 support eight equal ordinary subnets with at least 40 usable hosts each?

**中文题意：**判断需求是否可同时满足。

<!-- answer-guidance:T078:start -->
### 组织方式与答题思路

**任务类型：**可行性证明。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按8块求/27并发现30可用不足40。
2. 反向由40求至少/26。
3. 核对/24只放4个/26。
4. 提出至少512地址且对齐的/23或修改需求。

**现有参考答案的组织方式：**

- 条件、计算步骤及必要表格。
- 英文作答：结果与条件解释。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **33–48**；课件主题：Subnetting。

搜索词：`subnet requirement`；`usable hosts`。

查到后确认：核对子网数和主机数的两个独立下界。

**换问法时：**要求不可行时展示冲突证据，不能通过使用network/broadcast地址凑主机。
<!-- answer-guidance:T078:end -->

### 计算步骤

8子网需借3位，所以/27，每块30可用，不够40。
40主机至少6host bits，即每块/26或更大；/24只容4个/26。
8×64=512地址，最小连续总块/23（且需边界对齐）。
结论：给定/24做不到；扩大地址分配或修改需求。

### 英文作答

No. Eight equal subnets from a /24 require /27, which supports only 30 ordinary hosts per subnet. Supporting 40 hosts requires at least /26. Eight /26 blocks need 512 addresses, equivalent to a suitably aligned /23 allocation.

### 易错、变式与反馈

不能只检查子网数不检查host数。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页33–48**，关键词`Subnetting`。

## T079

**Routing boundaries 与 AS**

- 题型：简答；检索码：Q50；依据：范围扩展题。
- 知识点：Routing mechanisms（路由机制）。

**Question:** Explain autonomous systems, IGPs, EGPs and routing boundaries.

**中文题意：**解释自治系统与路由边界。

<!-- answer-guidance:T079:start -->
### 组织方式与答题思路

**任务类型：**定义＋范围。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 定义AS、IGP与跨AS的BGP作用。
2. 给RIP/OSPF和BGP对应例子。
3. 区分physical/logical及hard/soft boundaries。
4. 按requirements与flows解释边界放置。

**现有参考答案的组织方式：**

- 第1段：AS与IGP/BGP范围。
- 第2段：physical与logical边界例子。
- 第3段：hard/soft、FA/WG及放置依据。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **49–58**；课件主题：Routing Mechanism。

搜索词：`AS`；`IGP`；`EGP`；`boundaries`。

查到后确认：核对AS行政策略范围和hard/soft边界，而非只看地理距离。

**换问法时：**若问BGP内部形式，可连接iBGP，但别把iBGP等同OSPF这类IGP。
<!-- answer-guidance:T079:end -->

### 中文思路

AS共同策略；IGP内部，BGP跨AS；FA/WG、hard/soft。

### 英文参考答案（134词）

An autonomous system, or AS, is a group of IP prefixes under a common administrative routing policy. An interior gateway protocol, or IGP, distributes routing information inside an AS. RIP and OSPF are examples. BGP is used for routing policy and reachability between autonomous systems, although it also has an internal form.

Routing boundaries divide a network physically or logically according to requirements. Physical examples include interfaces, isolation LANs and DMZs. Logical examples include functional areas, workgroups and administrative domains.

The course describes boundaries between autonomous systems as hard boundaries and internal divisions as soft boundaries. Functional areas can group similar work, while workgroups may share location or applications. Boundaries help organize hierarchy, management and security. Their placement should follow requirements and flows rather than being chosen only because a convenient device is available.

### 易错、变式与反馈

BGP的iBGP形式在AS内部用；不能绝对说BGP只在外部。

变式：Compare functional areas and workgroups; give physical and logical boundary examples.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页49–58**，关键词`Routing Mechanism`。

## T080

**Default、filter、aggregation 与 policy**

- 题型：简答；检索码：Q51；依据：范围扩展题。
- 知识点：Routing mechanisms（路由机制）。

**Question:** Describe mechanisms for manipulating routing flows.

**中文题意：**描述默认路由、过滤、聚合与策略。

<!-- answer-guidance:T080:start -->
### 组织方式与答题思路

**任务类型：**机制列举＋作用。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. default route写无更具体匹配时的出口。
2. aggregation写合适前缀的汇总。
3. 区分route filtering与packet filtering。
4. policy写组织偏好并核对可达性。

**现有参考答案的组织方式：**

- 第1段：default与aggregation。
- 第2段：route filtering与ACL/packet filtering。
- 第3段：policy及汇总、过滤的路径风险。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **59–61**；课件主题：Manipulating Flows。

搜索词：`default route`；`aggregation`；`filtering`；`policy`。

查到后确认：核对过滤的是路由信息还是数据包，汇总需满足前缀条件。

**换问法时：**若给路由表，按最长前缀匹配解释default何时才用。
<!-- answer-guidance:T080:end -->

### 中文思路

默认兜底；route filtering控路由信息；ACL过滤包另层；aggregate连续前缀。

### 英文参考答案（133词）

A default route provides a next hop when no more specific route matches a destination. It is useful for a simple network with one main exit. Route aggregation summarizes suitable prefixes, reducing routing information and supporting hierarchy.

Route filtering controls which routes are accepted, advertised or used. Packet filtering and access control lists control traffic according to packet properties. The lecture discusses these together, but filtering route information and filtering data packets are different operations.

Routing policies guide decisions using organizational requirements, such as preferred providers or administrative boundaries, rather than only a simple distance metric. These mechanisms can affect reachability and service paths. A designer must check that an aggregation or filter does not hide required destinations or create incorrect paths. Choices should be linked to the flow map and documented policy.

### 易错、变式与反馈

route filtering与packet ACL不能机械画等号。

变式：Explain a default route, summarize prefixes or describe provider-selection policy.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页59–61**，关键词`Manipulating Flows`。

## T081

**Static 与 dynamic routing**

- 题型：简答；检索码：Q52；依据：范围扩展题。
- 知识点：Routing mechanisms（路由机制）。

**Question:** Compare static and dynamic routing and their architectural trade-offs.

**中文题意：**比较静态/动态路由。

<!-- answer-guidance:T081:start -->
### 组织方式与答题思路

**任务类型：**对称比较＋选型。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按配置方式和适应拓扑变化比较。
2. 比较协议开销、维护工作与规模。
3. 给稳定stub和多路径网络适用场景。
4. 依恢复、增长与技能要求选择。

**现有参考答案的组织方式：**

- 第1段：static的配置、低协议开销与场景。
- 第2段：dynamic的交换、适应性与资源代价。
- 第3段：双方限制及需求驱动选型。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **62–68、77–79**；课件主题：Routing Strategies。

搜索词：`static routing`；`dynamic`；`convergence`。

查到后确认：核对动态更新资源和静态人工维护代价。

**换问法时：**若问哪种更好，先陈述网络规模和故障恢复要求，不给无条件排名。
<!-- answer-guidance:T081:end -->

### 中文思路

静态简单低协议开销人工维护；动态适应但开销/收敛/技能。

### 英文参考答案（126词）

Static routes are configured explicitly. They avoid the control traffic and processing needed to exchange dynamic routing updates. They can be useful for a small, stable or stub network with a simple exit.

Dynamic routing protocols exchange reachability information and adapt routes when topology changes. This supports larger or more interconnected networks, but it uses bandwidth, processor time and memory. The designer must also consider convergence, stability and staff skills.

A static route does not automatically change simply because a better path appears. Maintaining many static routes can become difficult and error-prone. Conversely, adding a complex dynamic protocol to a simple network can create unnecessary work. Select the simplest approach that meets the actual resilience, growth and policy requirements. Re-evaluate it as hierarchy and interconnectivity increase.

### 易错、变式与反馈

simple不意味着一律先上RIP；课件后页已提示旧建议过时。

变式：Explain convergence and the effect of increasing hierarchy or path diversity.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页62–68、77–79**，关键词`Routing Strategies`。

## T082

**RIP、OSPF 与 BGP 选择**

- 题型：简答；检索码：Q53；依据：范围扩展题。
- 知识点：Routing protocol selection（路由协议评估与选择）。

**Question:** Compare RIP, OSPF and BGP and explain how routing protocols should be evaluated.

**中文题意：**比较三种协议与评价标准。

<!-- answer-guidance:T082:start -->
### 组织方式与答题思路

**任务类型：**多协议比较＋评价。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 分别说明RIP、OSPF、BGP的角色与基本机制。
2. 按规模、收敛、层级与政策比较。
3. 列带宽、CPU、内存、稳定与运维评价标准。
4. 区分内部路由和跨域需求。

**现有参考答案的组织方式：**

- 第1段：RIP特征及限制。
- 第2段：OSPF与BGP的角色。
- 第3段：评价维度和需求匹配。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **62–79**；课件主题：Evaluating Routing Protocols。

搜索词：`RIP`；`OSPF`；`BGP`；`scalability`。

查到后确认：核对IGP/跨域范围、RIP hop 15和OSPF areas。

**换问法时：**若给企业场景，可同时选内部协议与边界BGP，不把三者强行互相替代。
<!-- answer-guidance:T082:end -->

### 中文思路

RIP distance vector/hop15；OSPF link-state/areas；BGP path-vector/policy；评价收敛开销稳定规模。

### 英文参考答案（131词）

RIP is a distance-vector IGP that uses hop count. Its maximum usable hop count is 15, and it can be slow to converge. Its simplicity suits limited networks but restricts scalability.

OSPF is a link-state IGP. It supports areas and is better suited to larger hierarchical networks, although operation is more complex. BGP is a path-vector protocol that supports policy-based routing between autonomous systems. It is important for inter-domain connectivity.

Protocol evaluation should consider convergence time, bandwidth overhead, processor and memory use, stability, scalability, hierarchy and interconnectivity. The choice should also fit service requirements and management skills. A network requiring fast recovery and many alternative paths places different demands on routing from a small stub network. No protocol is best for every role; internal routing and inter-domain routing solve different problems.

### 易错、变式与反馈

不要把BGP简单说成“最快路由”；OSPF不是distance vector。

变式：Select a protocol for a small LAN, large campus or ISP boundary.

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页62–79**，关键词`Evaluating Routing Protocols`。

## T083

**RIPv1、RIPv2 与旧建议**

- 题型：简答；检索码：Q54；依据：范围扩展题。
- 知识点：Routing protocol selection（路由协议评估与选择）。

**Question:** Compare RIPv1 and RIPv2. Why must routing recommendations be read in context?

**中文题意：**比较RIP版本，解释旧经验规则的边界。

<!-- answer-guidance:T083:start -->
### 组织方式与答题思路

**任务类型：**版本比较＋语境。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按classful/classless和mask信息比较RIPv1/v2。
2. 说明RIPv2改进不消除RIP限制。
3. 识别课件旧建议与后续dated提示。
4. 回到规模、收敛、资源与技能评价。

**现有参考答案的组织方式：**

- 第1段：RIPv1/v2与VLSM。
- 第2段：RIPv2仍有hop与扩展限制。
- 第3段：历史建议、语境与可保留原则。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **69–76**；课件主题：RIPv2。

搜索词：`RIPv1`；`RIPv2`；`VLSM`；`dated`。

查到后确认：同时查看旧建议及dated提示页，避免只读前页。

**换问法时：**若题干明确要求lecture recommendations，应说明其历史语境及适用条件。
<!-- answer-guidance:T083:end -->

### 中文思路

v1 classful无mask/VLSM；v2 classless带mask；15hop仍限制；不要机械2协议上限。

### 英文参考答案（131词）

RIPv1 uses classful routing information and does not support variable-length subnet masking. RIPv2 carries subnet mask information and supports classless addressing and VLSM. This makes it more flexible for subnet design.

However, RIPv2 still has RIP’s hop-count limitation and is not automatically suitable for a large or highly interconnected network. Version improvements do not remove every limitation of the basic approach.

The lecture also presents older advice about starting with simple routes and limiting the number of protocols. A later slide says that some of these recommendations are dated and should not be memorized as universal rules. The lasting design principle is to manage complexity while meeting requirements. Evaluate scale, convergence, overhead, vendor compatibility and operational skill for the actual network instead of applying a historical recipe without checking its conditions.

### 易错、变式与反馈

不能把课件“2 max”当所有网络必须满足的技术定律。

变式：Why does supporting CIDR not make RIP suitable for every network?

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页69–76**，关键词`RIPv2`。

## T084

**iBGP 与 eBGP**

- 题型：简答；检索码：Q92；依据：缺口补题；依据课件的AI参考答案。
- 知识点：Routing protocol selection（路由协议评估与选择）。

**Question:** Compare iBGP and eBGP using the autonomous systems in the lecture diagram.

**中文题意：**按图说明AS100内部及AS之间的BGP。

<!-- answer-guidance:T084:start -->
### 组织方式与答题思路

**任务类型：**比较＋读图。以下为教学建议。

**建议答题路线（按实际题干调整）：**

1. 按peers是否同AS定义iBGP/eBGP。
2. 在图中指出AS100内外关系。
3. 解释iBGP传递外部目的地信息。
4. 区分iBGP与IGP，并强调按AS而非距离分类。

**现有参考答案的组织方式：**

- 第1段：eBGP与iBGP定义。
- 第2段：课件AS100图对应关系。
- 第3段：与IGP的区别及地理距离例子。

**回Moodle核对：**

- [Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → PDF物理页 **72–73**；课件主题：Evaluating Routing Protocols。

搜索词：`iBGP`；`eBGP`；`AS100`。

查到后确认：看AS边界和peers归属，核对AS100到其他AS的连线。

**换问法时：**若AS编号变化，按新归属重新判断，不背固定编号关系。
<!-- answer-guidance:T084:end -->

### 中文思路

eBGP：不同AS的BGP peers；iBGP：同一AS内BGP peers。图中AS100内是iBGP，100与200/300/400是eBGP。iBGP不是IGP的别名。

### 英文参考答案（135词）

External BGP, or eBGP, exchanges BGP reachability information between peers in different autonomous systems. Internal BGP, or iBGP, exchanges BGP information between peers within the same autonomous system.

In the lecture diagram, connections from AS100 to AS200, AS300 and AS400 are eBGP relationships. BGP relationships between routers inside AS100 are iBGP. This allows information about external destinations and related routing policy to be shared within the organization’s routing domain.

iBGP should not be confused with an interior gateway protocol such as OSPF. An IGP supports internal network reachability, while iBGP distributes BGP information inside the AS. They can work together. The distinction is based on the AS membership of the peers, not the physical distance between them. Two nearby border routers can use eBGP, while geographically separated routers in the same AS can use iBGP.

### 易错、变式与反馈

iBGP不等于OSPF；inside同一大楼不代表same AS；BGP不是只按最短hop选择。

变式：先遮住答案复述；再换一个场景说明分类、机制或条件。

概念核对：[RFC4271](https://www.rfc-editor.org/rfc/rfc4271.html)，§1.1关于internal/external peers；本次不增加BGP报文或路径属性的深层配置考点。

概念：□不清楚 □能解释；英文：□看懂 □能复述 □独立写；Moodle：□能定位。具体卡点：____。

### 来源

- [Moodle：Week 7 - Lecture Slides](https://moodle.uowplatform.edu.au/mod/resource/view.php?id=4625919) → **PDF物理页72–73**，关键词`Evaluating Routing Protocols`。

