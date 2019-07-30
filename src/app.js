// 引入vue
import Vue from 'vue';
// 引入framework7
import Framework7 from 'framework7/framework7.esm.bundle.js';
// 引入f7vue插件
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
// 引入F7样式
import 'framework7/css/framework7.bundle.css';
// 引入图标样式
// import IconsStyles from './css/icons.css';
// import AppStyles from './css/app.css';
// 引入app组件
import App from './app.vue';
// 初始化F7
Framework7.use(Framework7Vue);
// 初始化vue
new Vue({
    el: '#app',
    template: '<app/>',

    // 注册app组件
    components: {
        app: App
    }
});