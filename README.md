项目创建:
1.npm install -g create-react-app
2.npx create-react-app app --typescript
    这里需要注意使用create-react-app创建项目的时候,一般会出现问题两种原因: 
    i. create-react-app版本问题，需要npm uninstall -g create-react-app,重新安装。
    ii. windows 系统出现安装权限错误，一般需要在c:/user..目录下，或者使用cmd管理员权限创建
3.npm install --save react-redux @types/react-redux
4.npm install --save redux @types/redux
5.npm install --save redux-saga @types/redux-saga
6.npm install --save history @types/history
7.npm install --save redux-logger @types/redux-logger
8.npm install --save redux-devtools-extension @types/redux-devtools-extension
9.npm install --save typesafe-actions
10.npm install --save connected-react-router react-router
11.npm install --save sass node-sass