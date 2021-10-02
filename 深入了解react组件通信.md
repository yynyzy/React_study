## 1.setState
    深入setState
    一、setstate()更新状态的动作是异步还是同步的?----要看setstate的执行位置
        (1)．在由react所控制的回调中更新的动作是【异步】的:生命周期勾子、react事件监听回调
        (2)．在非react控制的异步回调中更新的动作是【同步】的:定时器回调、原生事件回调
    二、setState的两种写法:
    (1)．对象式写法: setstate( statechange，[callback])
        1.statechange为状态改变对象(该对象可以体现出状态的更改)
        2.callback是可选的回调函数，它在状态更新完毕、界面也更新后(render调用后)才被调用
    (2)．函数式写法:setstate(updater，[callback])
        1.updater为返回statechange对象的函数。
        2.updater可以接收到state和props。
        3.callback是可选的回调函数，它在状态更新、界面也更新后(render调用后)才被调用。
总结:
    1.对象式的settate是函数式的setstate的简写方式(语法糖)2.使用原则:
        (1).如果新状态不依赖于原状态===>使用对象方式
        (2).如果新状态依赖于原状态=-==>使用函数方式
        (3).如果需要在setstate()执行后获取最新的状态数据，要在第二个callback函数中读取。

## 2.React路由组件懒加载
    //1.通过React的lazy函数配合import()函数动态加载路由组件===>路由组件代码会被分开打包const Login = lazy(()=>import( 'xxx /xxxx/test ' ))
    //2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading
    
<Suspense fallback={<h1>loading...</h1>}>
    <Switch>
        <Route path=" /xxx" component={Xxxx}/><Redirect to="/ login" />
    </Switch>
</Suspense>

## 4.Effect Hook
    (1).Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)(2). React中的副作用操作:
            发ajax请求数据获取设置订阅/启动定时器
    (3)．语法和说明:
        useEffect(() =>{
                //在此可以执行任何带副作用操作return () => { //在组件卸载前执行
                //在此做一些收尾工作，比如清除定时器/取消订阅等
        }，[stateValue])//如果指定的是[]，回调函数只会在第一次render()后执行
    (4)．可以把useEffect Hook看做如下三个函数的组合
            componentDidMount()
            componentDidUpdate()
            componentwillUnmount()


## 5.Context理解
    一种组件间通信方式,常用于【祖组件】与【后代组件】间通信使用
    1)）创建Context容器对象:
        const xxxContext = React.createContext()
        //const { Provider }  = xxxContext
    2）渲染子组时，外面包裹 xxxContext.Provider，通过value属性给后代组件传递数据:
        <Provider value = { 数据 }>
                <子组件>
        </Provider>

    3)后代组件读取数据:
    //如果不写在一个页面中，记得引入从祖组件中暴露 xxxContext 然后在要用的后代组件中引入 
        //第一种方式:仅适用于类组件
        static contextType = xxxContext     //声明接收context 
        const {...} = this.context                        //读取context中的value数据
    
        //第二种方式:函数组件与类组件都可以
        //在引入的 xxxContext 中解构 Consumer
        const { Consumer } = xxxContext
        <Consumer>
            {
                value =>(  //value就是context中的value数据
                要显示的内容 )
            }
        </Consumer>

