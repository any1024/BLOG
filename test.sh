# 在根目录下执行一下命令

#!/usr/bin/env sh


# 确保脚本抛出遇到的错误
set -e

yarn run docs:build

git add .
git commit -m 'xl'
git push origin master:travis