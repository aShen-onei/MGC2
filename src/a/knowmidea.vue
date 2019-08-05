<template><!--    标签-->
    <f7-page>
        <f7-navbar title="导航栏">
            <f7-subnavbar :inner="false">
                <f7-searchbar
                search-container=".search-list"
                search-in=".item-title"
                ：disable-button="!$theme.a"
                ></f7-searchbar>
            </f7-subnavbar>
        </f7-navbar>
        <f7-navbar title="入职前">
                <f7-subnavbar :inner="false">
                    <f7-searchbar
                            search-container=".search-list"
                            search-in=".item-title"
                            ：disable-button="!$theme.a"
                ></f7-searchbar>
            </f7-subnavbar>
        </f7-navbar>
    </f7-page>
</template>

<script>
    export default {
        name: "know midea"
    }
</script>

<style scoped>

</style>