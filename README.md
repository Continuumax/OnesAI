# One’sAI 官网（by ContinuuMax）

One’sAI 产品单页官网。One’sAI 是 HearthTone 播放器内置的全本地歌曲解读引擎：播放任意一首歌，它就为这首歌写一行字；优先由本机 Ollama 模型生成，未安装模型时降级为内置词频引擎，数据全程不离开本机。

风格：参考 37signals 的「信号目录」语言——整页单一钴蓝底（#0E2FD8）、纯白字、编号目录（`01.` – `06.`）、零装饰、零边框、零阴影；字号随视口流式缩放（`1.25em + 1vw`）。

## 页面

- `index.html` — 单页官网：
  - 顶部导航（EN / 简 / 繁切换，默认 English，选择持久化在 localStorage `onesai.lang`）
  - 一句产品介绍
  - 六条编号目录：一首歌一行字 / 什么都不离开这台电脑 / 你的模型你的电脑 / 永远有答案 / 用最少的字 / 长在 HearthTone 里
  - 样句区（「它写过的一些句子」，可「更多句子」随机换一批，展示本机模型 / 内置引擎两种来源）
  - 墨黑页脚条：下载 HearthTone 白色按钮 + 链接

## 特点

- 纯静态 HTML/CSS/JS，无构建依赖、无后端、无任何外部资源（字体本地自托管于 `assets/fonts/`）。
- 目录 hover 行为（桌面端）：悬停条目展开一行说明并点亮，兄弟条目变暗；触屏与移动端说明文字常开。
- 白字对钴蓝底对比度 8.69:1（WCAG AAA）；支持键盘焦点与 `prefers-reduced-motion`。
- 页面语言：English（默认）、简体中文、繁體中文。
- 1440 / 1280 / 390 宽度验证零水平溢出、零 console 错误。

## 目录结构

```
.
├── index.html            # 单页官网
├── assets/
│   ├── css/site.css      # 全部样式（含字距、目录、页脚）
│   ├── js/i18n.js        # 三语字典 + 样句池
│   ├── js/site.js        # 语言切换 + 样句换批
│   └── fonts/
│       └── archivo-var-latin.woff2   # Archivo 可变字重（本地自托管）
├── .nojekyll             # 禁用 GitHub Pages 的 Jekyll 处理
└── README.md
```

## 部署到 GitHub Pages

作为 ContinuuMax 主站子目录（推荐，站内链接 `hearthtone/…` 直接生效）：

1. 将本文件夹整体作为主站仓库的 `onesai/` 子目录提交推送。
2. 访问 `https://<用户名>.github.io/<仓库名>/onesai/`。

作为独立仓库（`hearthtone/download.html` 等站内链接需自行调整）：

1. 将本文件夹内容作为仓库根目录推送。
2. 仓库设置 → Pages → 部署分支选择 `main`，目录选「根目录 / (root)」，保存。

> `.nojekyll` 已包含，避免 Jekyll 特殊处理，确保所有页面原样发布。
> 本地预览：`python -m http.server 8000` 后访问 `http://localhost:8000/`。

> AI生成
