#!/usr/bin/env sh

# abort on errors 
# 發生錯誤時執行終止指令
set -e

# build 
# 打包編譯
npm run build

# navigate into the build output directory
# 移動到打包資料夾下，若你有調整的話打包後的資料夾請務必調整
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# 部署到自定義網域
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# http 模式(目前以這方式較容易推上去)
git push -f https://github.com/Tami1118/side-project-booking.git main:gh-pages


cd -