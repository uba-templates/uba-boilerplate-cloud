# uba-boilerplate-cloud
云服务脚手架 - Cloud Platform Boilerplate

本仓库为用友云官网准备，为保证项目能快速开始，提供此资源。



#### 知识储备

* less
* gulp




#### 环境需求

全局环境：

* node : 建议6.0以上LTS版本
* npm : 建议3.0以上
* gulp




#### 目录结构

```
.
├── README.md
├── gulpfile.js     # gulp配置
├── node_modules
├── package.json    
├── src             # 源码
│   ├── css         # css文件
│   ├── fonts       # 字体图标文件
│   ├── html        # 静态页面
│   ├── images      # 图片资源
│   ├── js          # 脚本文件
│   └── less        # less未编译文件
├── dist            # 编译后资源
├── test
│   └── fontdemo    # 字体图标使用demo
└── vendor          # 第三方资源
    ├── animate     # css3动画库
    ├── jquery      # jquery
    ├── normalize   
    └── velocity    # 动画库
```



#### 如何使用

```
# 下载仓库资源后，安装依赖包
$ npm install

# 开发实时刷新页面(默认3333端口 )
$ npm run live
或
$ gulp

# 输出编译文件
$ npm run build
或
$ gulp output

# 删除编译文件
$ npm run del
或
$ gulp del
```



#### 图标字体使用

```
# css文件
/src/iconfont.css

# 图标字体文件
/src/fonts/
```

使用见`/test/fontdemo`



#### base.less使用

`src/less/base`目录包含目前的基本样式，使用时需要`@import 'base/base.less';`

