#!/usr/bin/env sh

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/liuwanlong/liuwanlong.github.io master
