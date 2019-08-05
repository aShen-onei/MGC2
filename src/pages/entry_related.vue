<template>
    <f7-page>
        <f7-navbar back-link="返回">
            <f7-nav-title> 入职 </f7-nav-title>
        </f7-navbar>
        <f7-list media-list>
        <f7-list-item
                link="/before/"
                title="入职前"
                subtitle="7月18号前"
        >
            <img slot="media" src="../../pic/ruzhiqian1.png" width="80" />
        </f7-list-item>
        <f7-list-item
                link="/after/"
                title="入职后"
                subtitle="7月18号起"
        >
            <img slot="media" src="../../pic/ruzhihou.png" width="80" />
        </f7-list-item>
        <f7-list-item
                link="/care/"
                title="注意事项"
        >
            <img slot="media" src="../../pic/zhuyishixiang.png" width="80" />
        </f7-list-item>
    </f7-list>

    </f7-page>
</template>

<script>
    export default {
        name: "entry_related"

    }
</script>

<style scoped>

</style>