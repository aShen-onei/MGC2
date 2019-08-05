
import HomePage from './pages/home.vue';
import entry from './pages/entry_related.vue';
import before from './pages/before.vue';
import after from './pages/after.vue';
import care from './pages/care.vue';
import TIJIANPAGE from './pages/tijian'
import About from './pages/about.vue';
import Inovation from './pages/inovation.vue';
import Swimming from './pages/swimming.vue';
import Full from './pages/full.vue';
import Interaction from './pages2/interaction.vue';
import Interestinggroup from './pages2/interestinggroup.vue';
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
    },
    {
        path:'/interestinggroup/',
        component:Interestinggroup
    },
    {
        path:'/about/',
        component: About
    },
    {
        path:'/inovation/',
        component: Inovation
    },
    {
        path:'/swimming/',
        component: Swimming
    },
    {
        path:'/full/',
        component: Full
    },
    {
        path:'/interaction/',
        component: Interaction
    }
];