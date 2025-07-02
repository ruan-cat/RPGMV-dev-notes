# 使用 changesets 的官方 github 工作流实现发包

- https://github.com/changesets/action

## 总是说 404 错误

changesets/action

无法发包，总是说 404 错误。

```log
error an error occurred while publishing @xxxx/xxx: E404 Not Found - PUT https://registry.npmjs.org/@xxxx - Not found
error npm error 404  '' is not in this registry.
```

```yaml
- name: 在 .npmrc 内写入token
  run: |
    cat << EOF > "$HOME/.npmrc"
      //registry.npmjs.org/:_authToken=$NPM_TOKEN
    EOF
  env:
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}

- name: 构建并发版
  id: changesets
  uses: changesets/action@v1
  with:
    commit: "chore: release package(s)"
    title: "chore: release package(s)"
    publish: pnpm release
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

- https://github.com/changesets/action/issues/311#issuecomment-1666950465
- https://zhuanlan.zhihu.com/p/25771848717

配置 NODE_AUTH_TOKEN 环境变量即可，太坑了。要看官方 issue 才有相关的说明。

## 想办法同时实现 github release 和 changelog 的生成

在一次提交内，实现两个 github release 的发布，并给各自的子包生成 changelog 文件。

- https://github.com/conventional-changelog/conventional-changelog/releases

![2025-07-01-22-16-56](https://gh-img-store.ruan-cat.com/img/2025-07-01-22-16-56.png)

![2025-07-02-18-04-43](https://gh-img-store.ruan-cat.com/img/2025-07-02-18-04-43.png)
