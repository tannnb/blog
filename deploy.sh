# 构建
set -e

# 生成静态文件
npm run docs:build

# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy：更新文章'

git push -f https://github.com/tannnb/blog.git master:gh-pages

cd -
