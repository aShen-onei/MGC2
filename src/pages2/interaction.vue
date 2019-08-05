<template>
    <f7-page>
        <f7-navbar title="互动交流" back-link="返回">
            <f7-nav-right>
                <f7-link>Alisa <img src="../../picture/卡通头像.jpg" height="45" width="45" hspace="0"></f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-subnavbar :inner="false">
            <f7-searchbar
                    search-container=".search-list"
                    search-in=".item-title"
                    disable-button-text="取消"
                    placeholder="搜索">
            </f7-searchbar>
        </f7-subnavbar>
        <f7-card class="demo-facebook-card">
            <f7-card-header class="no-border">
                <div class="demo-facebook-avatar"><img src="https://cdn.framework7.io/placeholder/people-68x68-1.jpg" width="34" height="34"/></div>
                <div class="demo-facebook-name">John Doe</div>
                <div class="demo-facebook-date">周一  2:15</div>
            </f7-card-header>
            <f7-card-content>
                <p>美好的午后!</p><img src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg" width="100%"/>
                <p class="likes">喜欢: 112 &nbsp;&nbsp; 评论: 43</p>
            </f7-card-content>
            <f7-card-footer class="no-border">
                <f7-link>喜欢</f7-link>
                <f7-link>评论</f7-link>
                <f7-link>分享</f7-link>
            </f7-card-footer>
        </f7-card>
        <f7-card class="demo-facebook-card">
            <f7-card-header class="no-border">
                <div class="demo-facebook-avatar"><img src="https://cdn.framework7.io/placeholder/people-68x68-1.jpg" width="34" height="34"/></div>
                <div class="demo-facebook-name">John Doe</div>
                <div class="demo-facebook-date">周一  2:15</div>
            </f7-card-header>
            <f7-card-content>
                <p>有木有单身的小姐姐，交个朋友呀!</p>
                <p>这是扣扣：903947422!</p>
                <p class="likes">喜欢: 112 &nbsp;&nbsp; 评论: 43</p>
            </f7-card-content>
            <f7-card-footer class="no-border">
                <f7-link>喜欢</f7-link>
                <f7-link>评论</f7-link>
                <f7-link>分享</f7-link>
            </f7-card-footer>
        </f7-card>
        <f7-card class="demo-facebook-card">
            <f7-card-header class="no-border">
                <div class="demo-facebook-avatar"><img src="https://cdn.framework7.io/placeholder/people-68x68-1.jpg" width="34" height="34"/></div>
                <div class="demo-facebook-name">John Doe</div>
                <div class="demo-facebook-date">周一  2:15</div>
            </f7-card-header>
            <f7-card-content>
                <p>美好的午后!</p><img src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg" width="100%"/>
                <p class="likes">喜欢: 112 &nbsp;&nbsp; 评论: 43</p>
            </f7-card-content>
            <f7-card-footer class="no-border">
                <f7-link>喜欢</f7-link>
                <f7-link>评论</f7-link>
                <f7-link>分享</f7-link>
            </f7-card-footer>
        </f7-card>
        <f7-fab position="right-bottom" slot="fixed" color="blue">
            <f7-icon ios="f7:我的" aurora="f7:我的" md="material:我的"></f7-icon>
            <f7-icon ios="f7:我的" aurora="f7:我的" md="material:我的"></f7-icon>
            <f7-fab-buttons position="top">
                <f7-fab-button label="我的帖子">1</f7-fab-button>
                <f7-fab-button label="我的收藏">2</f7-fab-button>
                <f7-fab-button label="我的评论">3</f7-fab-button>
                <f7-fab-button label="我的兴趣" href="/interestinggroup/">4</f7-fab-button>
            </f7-fab-buttons>
        </f7-fab>


    </f7-page>
</template>

<script>
    export default {
        name: "interaction"
    }
</script>

<style scoped>

</style>