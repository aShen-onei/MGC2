<template>
    <f7-page>
        <f7-navbar back-link="返回">
                <f7-nav-title center > 我是毕业生 </f7-nav-title>
        </f7-navbar>
        <f7-searchbar
                disable-link-text="Cancel"
                placeholder="Search in items"
                :clear-button="true"
        ></f7-searchbar>

        <f7-swiper pagination navigation scrollbar>
            <f7-swiper-slide><img src="../../pic/广告1.jpg"></f7-swiper-slide>
            <f7-swiper-slide><img src="../../pic/广告2.jpg"></f7-swiper-slide>

        </f7-swiper>

        <f7-block>
            <f7-row tag="p">

                <f7-col tag="span">
                    <f7-button href="/entry_related/" raised class="h1"></f7-button>
                    <a  class="button color-black">入职相关</a>
                </f7-col>
                <f7-col tag="span">
                    <f7-button raised class="h2"></f7-button>
                    <a href="#" class="button color-black">认识美的</a>
                </f7-col>
                <f7-col tag="span">
                    <f7-button raised class="h3"></f7-button>
                    <a href="#" class="button color-black">便利生活</a>
                </f7-col>
            </f7-row>
            <f7-row tag="p">
                <f7-col tag="span">
                    <f7-button raised class="h4" ></f7-button>
                    <a href="#" class="button color-black">相关培训</a>
                </f7-col>
                <f7-col tag="span">
                    <f7-button raised class="h5"></f7-button>
                    <a href="#" class="button color-black">讨论交流</a>
                </f7-col>
            </f7-row>
        </f7-block>
    </f7-page>
</template>
<script>
    export default {}
</script>
