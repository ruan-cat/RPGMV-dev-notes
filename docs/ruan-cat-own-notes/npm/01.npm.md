# npm

## 清空缓存

怎么清空项目的 node 缓存的？是用`npm cache clean --force`还是`npm cache verify`？

怎么清空项目的本地缓存？像这样的东西用什么命令可以快速清空？

![2023-02-20-11-18-58](https://raw.githubusercontent.com/RuanZhongNan/img-store/main/img/2023-02-20-11-18-58.png)

## 输出全局安装的依赖包 npm ls -g

- https://docs.npmjs.com/cli/v6/commands/npm-ls

指定为 json 格式输出

```bash
npm ls -g --json=true
```

查询指定深度，目前仅查询第一层即可。

```bash
npm ls -g --json=true --depth=0
```

## funding ？

```bash
90 packages are looking for funding
  run `npm fund` for details
```

npm 包怎么标记自己为 looking for funding ？

TODO:

如果自己也想让自己的包标记为 funding，对外宣布这些依赖包寻求资助，该怎么实现呢？
