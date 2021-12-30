#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m '阮中楠自动化部署'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>

# new
# https://gitee.com/HechiCollegeComputerAssociation/RPGMV-dev-notes.git
# https://gitee.com/HechiCollegeComputerAssociation/rpgmv-dev-notes.git

# old
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

git push -f https://gitee.com/HechiCollegeComputerAssociation/RPGMV-dev-notes.git main-dev-notes-page

cd -