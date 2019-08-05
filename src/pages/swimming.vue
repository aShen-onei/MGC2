<template>
    <f7-page>
        <f7-navbar title="游泳池" back-link="返回" center>
        </f7-navbar>
        <f7-list>
            <f7-list accordion-list>
                <f7-list-item accordion-item title="美图">
                    <f7-accordion-content>
                        <f7-swiper pagination navigation scrollbar>
                            <f7-swiper-slide><img src="../../picture/6.jpg"></f7-swiper-slide>
                            <f7-swiper-slide><img src="../../picture/6.jpg"></f7-swiper-slide>
                            <f7-swiper-slide><img src="../../picture/6.jpg"></f7-swiper-slide>
                            <f7-swiper-slide><img src="../../picture/6.jpg"></f7-swiper-slide>
                        </f7-swiper>
                    </f7-accordion-content>
                </f7-list-item>

                <f7-list-item accordion-item title="泳池规格">
                    <f7-accordion-content>
                        <f7-list>
                            <f7-list-item title="池长：50m"></f7-list-item>
                            <f7-list-item title="池宽：21m"></f7-list-item>
                            <f7-list-item title="水深: 1.8m"></f7-list-item>
                        </f7-list>
                    </f7-accordion-content>
                </f7-list-item>
                <f7-list-item accordion-item title="泳池开放时间">
                    <f7-accordion-content>
                        <f7-list>
                            <f7-list-item title="周一-周五：6:00-22:00"></f7-list-item>
                            <f7-list-item title="周六、周日：全天开放"></f7-list-item>
                        </f7-list>
                    </f7-accordion-content>
                </f7-list-item>
            </f7-list>
        </f7-list>
    </f7-page>
</template>

<script>
    export default {
        name: "swimming"
    }
</script>

<style scoped>

</style>