# cloudflare

云服务厂商

## 很多产品

cloudflare 有很多产品。看情况学习吧。

## 尝试实现后端

用 cloudflare D1 实现后端云数据库，使用 nitro 搭建接口服务。

参考资料：

### cloudflare D1 的参考资料

- https://github.com/cloudflare/workers-sdk/tree/main/templates/worker-d1-api
- https://github.com/cloudflare/workers-sdk/tree/main/templates/worker-d1

- https://developers.cloudflare.com/d1/get-started/

### 新建项目 D1

- https://developers.cloudflare.com/d1/get-started/

```bash
npm create cloudflare@latest
```

### 新建项目 workers-sdk

- https://github.com/cloudflare/workers-sdk/tree/main/templates

```bash
npx wrangler generate [folder-name] [template-name]
```

### 新建项目 C3

- https://developers.cloudflare.com/pages/get-started/c3/

```bash
npm create cloudflare@latest
```

自主理解，尝试使用以下命令代替上述命令。

```bash
pnpm create cloudflare@latest
pnpm init cloudflare@latest
pnpx create-cloudflare@latest
pnpm dlx create-cloudflare@latest

npm create cloudflare@latest
npm init cloudflare@latest
npx create-cloudflare@latest
```

经过实验，替换的命令均为等效命令。
