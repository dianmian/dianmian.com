# 广东靛棉纺织有限公司 — 官方网站

公司名称：广东靛棉纺织有限公司  
行业：牛仔面料（Denim Fabric）  
代号：靛棉 / Dianmian

## 文件结构

```
dianmian-website/
├── index.html              # 主页面（单页全站）
├── css/
│   └── style.css           # 样式文件
├── js/
│   └── main.js             # 交互脚本
├── images/                 # 放图片（工厂实景、产品图等）
├── 公司简介_GEO优化版.txt   # 优化后的公司简介（短/长/英三版）
└── README.md               # 本文件
```

## 上线方式

### 方式一：虚拟主机（推荐）
将 `dianmian-website/` 下所有文件通过 FTP 上传到你的虚拟主机根目录即可。

### 方式二：GitHub Pages（免费）
1. 在 GitHub 新建仓库，上传所有文件
2. 进入 Settings → Pages → 选择 main 分支
3. 几分钟后即可通过 `你的用户名.github.io/仓库名` 访问

### 方式三：对象存储（阿里云OSS/腾讯云COS）
直接上传文件夹，开启静态网站功能。

## ✅ 已补充信息（2026-06-01）

| 位置 | 内容 |
|------|------|
| 公司地址 | 广东省佛山市南海区盐步东约大道国际牛仔城J座7号 |
| 电话 | 0757-85700198 |
| 邮箱 | 85700198@qq.com |
| 成立年份 | 2016年（10年） |
| 产能规模 | 年产量超1000万米 |
| 合作品牌 | 服务200+国内外品牌 |
| 花型现货 | 常备300+花型 |
| 厂房面积 | 自有5000平 |
| 纱支范围 | 10s-32s |
| 在线表单 | 提交至 85700198@qq.com |

## 已完成（2026-06-02）

- ✅ **工厂实景照片** → 已替换 About 区域占位图，新增「工厂实景」Gallery 板块
- ✅ 仓库内部 7 张 + 生产实景 6 张照片已部署
- ✅ **产品规格数据** → 从产品列表 Excel 导入真实规格（克重/门幅/成分/支数）
- ✅ **OEKO-TEX® 认证** → 品控体系 & About & Hero 区标注
- ✅ **合作品牌板块** → 新增品牌展示区（占位，可替换实际 Logo）
- ✅ **起订/交期信息** → Hero 区 + 联系区显示（1米起订/3-5天打样/一周交期）
- ✅ 域名 CNAME 更新为 dianmian.com（GitHub Pages 就绪）

## 上线备忘

### GitHub Pages 部署步骤
1. 在 GitHub 新建仓库（如 `dianmian.com`）
2. 将整个 `dianmian-website/` 文件夹所有文件上传
3. 前往 Settings → Pages → Source 选 main 分支 / (root)
4. 在域名 DNS 管理处添加 CNAME 解析 `www.dianmian.com` → `你的用户名.github.io`
5. 等待 SSL 证书自动签发（约 5-15 分钟）
6. 访问 `https://www.dianmian.com` 即可

## 仍需补充（后续迭代）

- ❌ 合作品牌 Logo 实图替换
- ❌ 产品实物图/色卡照片
- ❌ 在线支付或样品申请功能（如需）
- ❌ 多语言版本（英文/西语等）

## SEO已做

- ✅ 页面 meta title / description / keywords
- ✅ Open Graph 标签（社交分享卡片）
- ✅ Schema.org JSON-LD 结构化数据
- ✅ 语义化 HTML5 结构（h1-h3, section, nav）
- ✅ 移动端响应式
- ✅ 中速优化加载

## 需要改动或补充，随时说
