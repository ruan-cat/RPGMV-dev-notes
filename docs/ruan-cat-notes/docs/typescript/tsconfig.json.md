# tsconfig.json

在平时的开发中，需要经常配置该文件。为了记录平时遇到的各种配置问题，这里记录该配置文件的常用配置。

## 无法写入文件“babel.config.js”，因为它会覆盖输入文件。

- https://www.typescriptlang.org/tsconfig#outDir
- https://blog.csdn.net/phker/article/details/108995357 （仅评论区而非正文）

```json
{
	"compilerOptions": {
		"outDir": "dist"
	}
}
```

## monorepo 单仓架构下怎么编写 tsconfig.json 文件？

- extends
- references

## references 字段

- https://juejin.cn/post/7126043888573218823
