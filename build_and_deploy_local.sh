npm version patch 
npm run build
git add build/
ver=$(cat package.json | /d/Programs/jq/jq -r '.version')
git commit -m "v$ver build"
npm publish