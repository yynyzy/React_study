//该文件用于统一管理路由
import Login from '../pages/login'
import User from '../pages/user'

const routes = [
    { path: '/login', component: Login },
    { path: '/user', component: User }
]
export default routes