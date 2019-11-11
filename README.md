npx create-react-app train-ticket

学习ReactHooks的小项目

总结中间我遇到的坑  
1、如果执行npm run eject报错执行一下命令  
cd train-ticket  
git init   
git add .  
git commit -m "Saving before ejecting"  
npm run eject  
npm run build  
npm start  


2、使用lazy用import导入组件时如果import报错——node版本太低，升级node版本然后重新开始创建项目  
如果不重新创建项目，还是会报错  
