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

# 输出编译文件
$ npm run build

# 删除编译文件
$ npm run del
```



#### 图标字体使用

```
# css文件
/src/iconfont.css

# 图标字体文件
/src/fonts/
```

使用见`/test/fontdemo`



#### less基础样式文件及规范

* [less教程](http://less.bootcss.com/)


* 存放路径`src/less`

```
目录src/less
.
├── base
├── index.less
└── widget
```

* 基本样式文件:`base`文件下

```
目录/src/less/base
.
├── reset.less      # reset文件
├── fun.less       # 函数文件
└── variable.less  # 页面变量
```

* 组件样式文件：`widget`

页面中凡涉及到公用部分组件，如返回顶部，可以将此部分单一组件，单独写样式

```
目录/src/less/widget
.
└── backtop.less   # demo示例：返回顶部
```

* 引入样式文件

以`index.less`为例

```
// 引入基本样式
@import 'base/base.less';
@import 'base/fun.less';
@import 'base/variable.less';

// 引入组件样式
@import 'widget/backtop.less';

// 以下为页面自定义样式
h1{...}
```



#### html基础规范

* 头部引入针对ie8 polyfill

* 页面组件部分需要设置开头结束标记

  ```
  <!-- widget start:返回顶部 -->
          <div class="backtop">
              <div class="backtop-icon">
                  <i class="icon uf uf-triangle-up"></i>
              </div>
          </div>
  <!-- widget end:返回顶部 -->
  ```



#### js规范

* 公共部分统一写入`public.js`
