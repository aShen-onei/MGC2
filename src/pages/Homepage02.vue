<template>
  <f7-page>
    <f7-navbar title="爱生活" back-link="Back"></f7-navbar>
    <!--        <f7-list>-->
    <!--            <f7-list-button title="图片"></f7-list-button>-->
    <!--        </f7-list>-->
    <f7-row>
      <!-- <f7-col>8% (.col-30)</f7-col> -->
      <f7-col>
        <!-- 84% (.col-315) -->
        <f7-swiper pagination navigation scrollbar>
          <f7-swiper-slide>
            <img src="../../picture/生活1.jpg" class="banner-img"/>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <img src="../../picture/哪吒1.jpg" class="banner-img"  />
          </f7-swiper-slide>
        </f7-swiper>
      </f7-col>
      <!-- <f7-col>8% (.col-30)</f7-col> -->
    </f7-row>

    <f7-list class="flex-wrap">
      <f7-list link="/MideaGlobalInnovationCenter/" title="美的全球创新中心" class="first-inner-flex-left">
        <!-- <img src="../../picture/美创.jpg"/> -->
        <div class="text-wrap">美的全球创新中心</div>
      </f7-list>
      <f7-list link="/MideaHeadquarters/" title="美的总部" class="first-inner-flex-right">
        <!-- <img src="../../picture/美的大楼.jpg"/> -->
        <div class="text-wrap">美的总部</div>
      </f7-list>
    </f7-list>
    
    <f7-list class="flex-wrap">
      <f7-list link="/XinduhuiApartment/" title="美的新都荟公寓" class="second-inner-flex-left">
        <!-- <img src="../../picture/新都荟.png" width="99" height="86" /> -->
        <div class="text-wrap">美的新都荟公寓</div>
      </f7-list>

      <f7-list title="广厦花园" class="second-inner-flex-right">
        <!-- <img src="../../picture/广厦花园.jpg" width="194" height="86" /> -->
        <a href="/guangsha/" class="text-wrap" style="color: black;margin-left: 77px">                         广厦花园</a>
      </f7-list>
    </f7-list>
<!--    <f7-list>-->
<!--      -->
<!--    </f7-list>-->
    <f7-list class="flex-wrap">
      <f7-list link="/MideaNewVillage/" title="美的新村" class="third-inner-flex-left">
        <div class="text-wrap">美的新村</div>
        <!-- <img src="../../picture/美的新村.jpg" width="96" height="84" /> -->
      </f7-list>
      <f7-list link="/MideaCoastalGarden/" title="海岸花园" class="third-inner-flex-center">
        <!-- <img src="../../picture/海岸花园.jpg" width="118" height="84" /> -->
        <div class="text-wrap">海岸花园</div>
      </f7-list>
      <f7-list link="/ChenCunZhizaohui/" title="陈村智造汇" class="third-inner-flex-right">
        <!-- <img src="../../picture/陈村制造汇.jpg" width="96" height="84" /> -->
        <div class="text-wrap">陈村智造汇</div>
      </f7-list>
    </f7-list>
  </f7-page>
</template>

<script>
export default {};
</script>

<style src="./homePage02.less" scoped>
    
</style>