# Image2

给互联网设计师的 AI 图片提示词灵感库。

## 目录结构

```text
.
├── index.html              # 页面入口，适合 GitHub Pages 直接部署
├── src/                    # 前端源码
│   ├── script.js           # 页面数据、筛选和交互逻辑
│   └── styles.css          # 页面样式
├── assets/                 # 图片等静态资源
│   ├── posters/            # 电影海报图片，页面使用 webp 文件
│   ├── app-icons/          # macOS 风格 App 图标，页面使用 webp 文件
│   └── kingkong-icons/     # 首页金刚区图标合辑，页面使用 webp 文件
├── scripts/                # 本地工具脚本
│   └── compress-images.mjs # 批量压缩图片为 WebP
├── docs/                   # 需求、提示词、产品创意和设计参考文档
├── package.json            # npm 脚本和依赖
└── package-lock.json       # 依赖锁定文件
```

## 常用命令

```bash
npm install
npm run compress:images
```

`node_modules/` 是本地依赖目录，不需要提交到 GitHub。
