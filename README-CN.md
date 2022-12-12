![GitHub all releases](https://img.shields.io/github/downloads/wiwengweng/mendix-antd-icon/total?style=social)

[English](https://github.com/wiwengweng/mendix-antd-icon/blob/master/README.md)

## 介绍

基于 Ant Design 实现的 Mendix Widget 小部件。 widget 实现了 Ant Design (antd) 中 [`icon`](https://ant.design/components/icon) 的大部分接口。你可以去 [这里](https://ant.design/components/icon) 查看原始 antd 组件的各种功能。
点击这个[在线 Demo](https://demo-antdwidgets-sandbox.mxapps.io/)可在线预览该组件的特性。

![Ant Design 下拉菜单](./resources/introduction.png)

## 特征

1. 支持两种类型的资源，包括：`buildin`和`external iconfont`。
2. 支持静态定义或使用attribute绑定动态iconfont。
4. 支持其他Ant Design图标API配置

## 快速开始

1. 将小部件添加到 Mendix 项目。
    1. 从[这里](https://github.com/wiwengweng/mendix-antd-dropdown-menu/releases/download/antdropdownmenu-v1.0.0/mendix.AntDropdownMenu.mpk)下载mpk文件。
    3. 将 mpk 文件复制到您的 Mendix 项目目录 `{YourMendixProjectFolder}/widgets/`。
    4. 使用 Mendix Studio Pro 打开您的 Mendix 项目，然后单击菜单 `Menu > App > Synchronize App Directory`。
2. 使用`Antd Icon`。
    1. 选择任意页面并从 Mendix Studio Pro 的工具箱中搜索“Antd Icon”。
    2. 在页面中添加一个`Antd Icon` 组件。
    3. 设置组件的属性。双击组件并按照设置进行操作：
        1. 从Icon source中选择`Buildin`；
        2. 从“Select icon”下拉列表中选择一个图标
        3. 完成配置，运行项目看效果

## 演示项目
1. 你可以在[这里](https://demo-antdwidgets-sandbox.mxapps.io/)访问在线 demo。  
2. 也可以从[这里](https://github.com/zjh1943/mendx-antd-widgets-show)下载 demo project，在自己的 Mendix Studio Pro 上启动运行。  
    

## 详细配置说明

### General

General选项卡包含大多数常见的配置选项

![属性-一般](./resources/icon-general.png)

* Icon source - 支持内置图标和使用外部 iconfont。
* Select icon - 为用户提供 50 多个内置图标
* Icon code - 指定数据属性以检索图标名称
* rotate - 支持图标旋转
* Spin - 支持图标旋转动画

External Iconfont

你可以使用 iconfont 自定义图标
![](./resources/icon-external.png)

在`Icon source`中添加一个iconfont库，并填写`Icon code`

附：使用 iconfont 的 Ant Design Icon 有一些限制。 Iconfonts 以 `icon-` 命名。例如：`icon-wrong-b`。我们将用第二部分 `wrong-b` 填入 `Icon code`中即可。

## 与 antd 图标功能对比

这里列出了 `antd` 中 `icon` 的所有参数，并说明了 widget 是否支持这些 API，以及为什么不支持（最终开发者可以 DIY）。如果你想了解更多`antd`中的原始API，请[查看](https://ant.design/components/icon)。

![](./resources/API%E5%AF%B9%E6%AF%94.png)
## 问题、建议和功能请求
[Github问题](https://github.com/wiwengweng/mendix-antd-icon/issues)

同时，欢迎您进入中国技术论坛，了解更多关于Mendix widget开发的信息。 [查看](https://marketplace.siemens.com.cn/low-code-community)

## 本地开发和贡献

1. 克隆项目到本地，并安装依赖:`npm install`. 如果 npm 版本是v7.x.x, （用户可使用`npm -v`检查版本）, 使用一下命令安装依赖:`npm install--legacy-peer-deps`.
2. 在命令行运行npm start开始编译打包组件:
    * 项目开始编译...
    * 等待编译完成，组件会在dist 目录下自动生成；
    * 开发者可以自行修改package.json中的配置项，指定Mendix的测试项目地址，编译完成后后组件会自动同步到deployment 和 widgets目录中。