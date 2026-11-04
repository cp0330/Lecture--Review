# 验证与限制 · 2026-11-04

题库内容、题目来源、答案逻辑和界面分别核对。[公开版匿名化说明](privacy.md)。以下记录不代表用户已完成练习或掌握知识。

- **来源保留**：对照修订前题库逐项比较23个去重原题组（Mock 1–2与Assignment 1–4）。原英文条件保留，样例身份、联系值和密码按公开版要求匿名化，图片路径改为相对路径。五张原图按字节比较一致；Mock 1和Mock 3的服务图相同。六个Mock 3重复入口保留。见[source manifest](tests/source-manifest.json)。
- **内容完整性**：54个来源任务块，48个去重题目组，158个小题；全部非重复题均有目标、至少三步推理、完成后核对及易错点。49项范围映射涵盖老师列出的六个广义范围。原题歧义、标识假设、最低参与数量及SQL方言限制单独说明。
- **查询与数据操作**：内存SQLite执行并记录48项查询结果。用结构、NULL位置和数值保持一致的匿名化作业数据核对A3/A4，用独立边界数据验证NULL、空集合、同名/同号不同银行、年界、并列最大值、零报名、取消报名、join放大、foreign key、CASCADE及子表先删除。日期函数使用明确的方言适配；动态日期按数据库时区核对。见[可复跑测试](tests/validate.py)及[执行记录](tests/results.json)。
- **Normalization**：穷举14组FD问题的全部最小keys及F⁺中的normal form条件；给课件p9、p11、p15的有损分解建立投影/join反例，并核对修正分解保留原配对。
- **UI状态**：27项最小DOM环境检查覆盖旧草稿迁移、筛选、深链接、tabs、输入保存、重复来源跳转、导入合并、保存失败时保留内存草稿，以及生成页面的JavaScript语法。见[UI测试](tests/app.test.mjs)与[结果](tests/ui-results.json)。这不冒充实际浏览器视觉检查。
- **图示**：八张参考conceptual schema预渲染为SVG；包含attributes、identifiers、multiplicities，医院图标明qualifiers，self-association包含role names。四个不同的原题图保持不变。

MySQL专属DDL、账户、GRANT/REVOKE、日志及并发语句依据课程资料和[官方文档](sources.md)静态核对。本机MySQL 26.7在初始化独立临时实例时发生SIGSEGV，未连接或修改已有数据库。因此没有宣称全套SQL已在MySQL执行通过；SQLite结果不能替代该证明。并发题明确区分显式事务、默认autocommit、Oracle模型和MySQL同表子查询限制。

发布后的HTTPS浏览器检查会另行记录。浏览器曾拒绝本机file预览，未使用其他本地访问方式绕过限制。

复跑：安装package.json中固定版本依赖后，执行`npm run build`、`npm test`。测试仅使用临时内存数据，不连接已有数据库。
