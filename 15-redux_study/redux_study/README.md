##
react-redux模型图
1.所有的UI组件都应该包裹一个容器组件，他们是父子关系。
2.容器组件是真正和redux打交道的，里面可以随意的使用redux的api。
3.UI组件中不能使用任何redux的api。
4.容器组件会传给UI组件:(1).redux中所保存的状态。(2).用于操作状态的方法。5.备注:容器给UI传递:状态、操作状态的方法，均通过props传递。

## 5.求和案例_react-redux基本使用
(1).明确两个概念:
    1).UI组件:不能使用任何redux的api，只负责页面的呈现、交互等。
    2).容器组件:负责和redux通信，将结果交给UT组件。
(2).如何创建一个容器组件——靠react-redux的connect函数
    写法: connect(mapStateToProps,mapDispatchToProps)(UI组件)   
    -mapstateToProps:映射状态，返回值是一个对象
    -mapDispatchToProps:映射操作状态的方法，返回值是一个对象
(3).备注:容器组件中的store是靠props传进去的，而不是在容器组件中直接引入

### 6.求和案例_react-redux优化
(1).容器组件和UI组件整合一个文件
(2).无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可。
(3).使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作。
(4).mapDispatchToProps也可以简单的写成一个对象
(5).一个组件要和redux“打交道”要经过哪几步?
    (1).定义好UT组件---不暴露
    (2).引入connect生成一个容器组件，并暴露，写法如下:
         connect(
            state =>({key:value})，//映射状态
            {key : xxxxxAction}//映射操作状态的方法)(UI组件)
    3).在UI组件中通过this.props.xxxxxxx读取和操作状态
