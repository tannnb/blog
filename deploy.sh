# 构建
set -e

# 生成静态文件
npm run build

# 导航到构建输出目录
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:tannnb/blog.git master:gh-pages

cd -
