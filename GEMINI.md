# 项目总览

这是一个用于管理多个文档站点的 Monorepo 项目。它使用 pnpm 进行包管理，使用 Turbo 进行构建编排，并使用 VitePress 来生成文档站点。

此项目结构为一个 pnpm 工作区（workspace），所有的文档包都存放在 `docs` 目录中。`docs` 目录下的每一个包都是一个独立的 VitePress 站点。

主要的文档站点包括：
- `@ruan-cat-docs/docs-01-star`：01-star 团队的公开文档。
- `@ruan-cat-docs/rpgmv-dev-notes`：关于 RPG Maker MV 的开发笔记。
- `@ruan-cat-docs/notes`：Ruan Cat 的个人笔记。

# 构建与运行

## 构建所有站点

要构建所有的文档站点，请在项目的根目录下运行以下命令：

```bash
pnpm build
```

此命令会通过 Turbo 来并行构建每一个站点。

## 在本地运行单个站点

要在开发模式下运行单个文档站点，请先进入目标包的目录，然后运行 `docs:dev` 脚本。例如，要运行 `ruan-cat-notes` 站点：

```bash
cd docs/ruan-cat-notes
pnpm docs:dev
```

这会为该站点启动一个本地开发服务器。

# 开发约定

- **包管理**：本项目使用 pnpm 来管理依赖。请使用 pnpm 来安装、添加或移除包。
- **构建系统**：本项目使用 Turbo 来管理构建流程。相关的构建任务定义在 `turbo.json` 文件中。
- **文档**：文档站点是使用 VitePress 构建的。每个站点的配置信息位于其对应包内的 `.vitepress` 目录中。
- **Git**：项目的根 `package.json` 文件中包含几个用于 Git 分支变基（rebase）的脚本。