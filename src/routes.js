// 引入网页
import HomePage from './pages/home.vue';
import entry from './pages/entry_related.vue';
import before from './pages/before.vue';
import after from './pages/after.vue';
import care from './pages/care.vue';
import TIJIANPAGE from './pages/tijian'
// 将网页加入路由
export default [
    {
        path:'/',
        component:HomePage
    },
    {
        path:'/home/',
        component:HomePage
    },
    {
        path:'/entry_related/',
        component:entry
    },
    {
        path:'/before/',
        component:before
    },
    {
        path:'/after/',
        component:after
    },
    {
        path:'/care/',
        component:care
    },
    {
        path:'/tijian/',
        component:TIJIANPAGE
    }
];