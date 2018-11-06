# 在根目录下执行一下命令

#!/usr/bin/env sh


# 确保脚本抛出遇到的错误
set -e


# 生成静态文件
npm run docs:build


# 进入生成的文件夹
cd docs/.vuepress/dist


# 如果是发布到自定义域名 请取消下面的注释并修改成自己的网址
echo 'blog.linhuifeng.com' > CNAME


git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master


# 如果发布到 https://<USERNAME>.github.io/<REPO>  使用ssh
# 请修改成自己仓库的地址  可以将ssh传输改成 https
git push -f git@github.com:Overcase/BLOG.git master:gh-pages
