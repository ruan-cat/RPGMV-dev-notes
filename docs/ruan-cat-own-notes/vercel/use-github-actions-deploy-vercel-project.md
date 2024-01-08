# 使用 github 工作流来部署 vercel 项目

主要是希望使用自定义域名配置。所以才考虑用 github 工作流来实现 vercel 配置。

## 项目

目前用钻头的小爱丽丝官网来做测试。

## try1

尝试。发现效果不太好。

```yaml
# 参考资料
# https://vercel.com/guides/how-can-i-use-github-actions-with-vercel
# https://vercel.com/guides/how-to-alias-a-preview-deployment-using-the-cli

name: Vercel Preview Deployment
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
on:
  push:
    branches:
      - dev
jobs:
  install:
    runs-on: ubuntu-latest
    steps:
      - uses: pnpm/action-setup@v2
        with:
          version: 8.14.0

  Deploy-Preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Vercel CLI
        run: npm install --global vercel@latest pnpm@8.14.0
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}
      - name: Build Project Artifacts
        run: vercel build --token=${{ secrets.VERCEL_TOKEN }}
      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }} && vercel alias set dev-test ruan-cat.com
```

## try2

```yaml
# 参考资料
# https://github.com/marketplace/actions/vercel-action
# https://vercel.com/guides/how-can-i-use-github-actions-with-vercel

name: Vercel Preview Deployment
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
on:
  push:
    branches-ignore:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v19
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }} # Required
          vercel-org-id: ${{ secrets.ORG_ID}} #Required
          vercel-project-id: ${{ secrets.PROJECT_ID}} #Required
          alias-domains: dev-test.ruan-cat.com
```

## 在 monorepo 内部署项目？

上面的可以了，可以在 dev 分支内部署了。但是我不清楚在 monorepo 内实现多项目的部署。

可能的路径配置？

### `vercel-action` 的 `working-directory` 配置？

- https://github.com/marketplace/actions/vercel-action#inputs

工作流的配置可以考虑配置路径地址，让多个不同的物理地址映射到多个不同的 url。

### `vercel.json` 的 `outputDirectory` 配置？

- https://vercel.com/docs/projects/project-configuration#outputdirectory

在配置文件内指定部署的目录。但是发现这个配置只能去指定一个物理地址，不能指定更多的地址。
