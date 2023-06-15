# dependabot

- [使用 Dependabot 确保供应链安全](https://docs.github.com/zh/code-security/dependabot)
- [使用 Dependabot](https://docs.github.com/zh/code-security/dependabot/working-with-dependabot)

初步上次使用，发现机器人会频繁的警告，频繁的发送邮件和 pr。故不再使用该功能。这里暂时停止使用。

等以后学会了，再做处理。

## dependabot.yml 工作流配置文件

- https://www.jianshu.com/p/9ac44e72a04e

```yml
# Basic dependabot.yml file with
# minimum configuration for two package managers

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: "daily"

  # Enable version updates for Docker
  - package-ecosystem: "docker"
    # Look for a `Dockerfile` in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"
```
