# React路由
    //是H5的HistoryApi提供的路由
    const history = History.createHashHistory
    //是哈希路由，优点：兼容性好，不会造成页面刷新
    const history = History.createBrowserHistory

## 1.路由的基本使用
    1.明确好界面中的导航区、展示区
    2.导航区的a标签改为Link标签
 <Link to="/xxxxx">Demo</Link>
    3.展示区写Route标签进行路径的匹配
<Route path= ' /xxxx'component={Demo}/>
    4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 2. BrowserRouter 和 HashRouter
HashRouter地址后面会带一个#，#后面的资源不会发送给服务器

## 3、路由组件与一般组件
    1.写法不同:
        一般组件: <Demo/ >
        路由组件: <Route path=" /demo" component={Demo}/>
    2.存放位置不同:
        一般组件:components路由组件: pages
    3.接收到的props不同:
        一般组件:写组件标签时传递了什么，就能收到什么
        路由组件:接收到三个固定的属性：
                     history:
                        go: f go(n)
                        goBack: f goBack()
                        goForward: f goForward()
                        push: f push(path, state)
                        replace: f replace(path, state)
                    location:
                        pathname: "/about"
                        search: ""
                        state: undefined
                    match:
                        params: {}
                        path: "/about"
                        ur1: "/ about"

## 4.NavLink 与封装NavLink
    1.NavLink 可以实现路由链接的高亮，通过 activeclassName 指定样式名
    2.标签体内容是一个特殊的标签属性
    3.通过 this.props.children 可以获取标签体内容

## 5.Switch的便用
    1.通常情况下，path和lcomponent是一一对应的关系。
    2.Switch可以提高路由匹配效率(单一匹配)。

## 6.解决多级路径刷新页面样式丢失的问题
    1.public/index.html 中引入样式时不写./ 写/（常用)
    2.public/index.html 中引入样式时不写﹒/写%PUBLIC_URL%（常用)
    3.使用HashRouter

## 7.路由的严格匹配与模糊匹配
    1.默认使用的是模柳匹配（简单记:【输入的路径】必须包含要【匹配的路径】，且顺序要一致
    2.开启严格匹配:<Route exact={true} path="/about" component={About}/>
    3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

## 8.Redirect的使用
    1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由2.具体编码:
<Switch>
    <Route path=" / about" component={About}/>
    <Route path="/ home" component={Home}/>
    <Redirect to=" / about" />
</Switch>

## 9.嵌套路由
    1.注册子路由时要写上父路由的path值
    2.路由的匹配是按照注册路由的顺序进行的

## 10.向路由组件传递参数
    1.params参数
    路由链接(携带参数): <Link to='/demo/test/tom/18'}>详情</Link>
    注册路由(声明接收): <Route path="/demo/test/:name/:age" component={Test}/>
    接收参数:          const {id,title} = this.props.match.params

## 11.search参数
    路由链接(携带参数):  <Link to='/demo/test?name=tom&age=18'}>详情</Link>
    注册路由(无需声明，正常注册即可):<Route path="/demo/test" component={Test}/>
    接收参数:         this.props.location.search 
    
    备注:获取到的 search 是 urlencoded 编码字符串，需要借助 querystring 解析(脚手架已经帮你下载好了直接引用 import qs from querystring)

## 12.state参数
    路由链接(携带参数):
<Link to={{pathname:'/demo/test', state:{name:'tom', age:18} }}> 详情 </Link>
    注册路由(无需声明，正常注册即可):<Route path="/demo/test" component={Test}/>
    接收参数:        this.props.location.state
    备注:当前页面（标签页）刷新也可以保留住参数

## 13.编程式路由导航
    借助 this.prosp.history 对象上的API对操作路由跳转、前进、后退
    -this.prosp.history.push()
    -this.prosp.history.replace()
    -this.prosp.history.goBack()
    -this.prosp.history.goForward()
    -this.prosp.history.go()


# 深入了解react组件通信
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

## 6.组件通信方式总结
    组件间的关系:
            父子组件
            兄弟组件|(非嵌套组件)
            祖孙组件(跨级组件)
    几种通信方式:
        1.props :
             最简单的方式
        2.消息订阅-发布:
            pubs-sub,event等等
        3.集中式管理:
            redux.dva等等
         4.conText:
            生产者-消费者模式
    比较好的搭配方式:
            父子组件:props
            兄弟组件:消息订阅-发布、集中式管理
            祖孙组件(跨级组件):消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)

