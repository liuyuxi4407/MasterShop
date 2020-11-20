<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="swiperList.length">
      <swiper-slide v-for="item in swiperList" :key="item.acm">
        <img class="swiper-img" :src="item.image" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "carrouse",
  data() {
    return {
    //   swiperList: [
    //     {
    //       id: 0,
    //       url: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
    //     },
    //     {
    //       id: 1,
    //       url: "https://api-hmugo-web.itheima.net/pyg/banner2.png",
    //     },
    //     {
    //       id: 2,
    //       url: "https://api-hmugo-web.itheima.net/pyg/banner3.png",
    //     },
    //   ],
      swiperOptions: {
        //下方小点
        pagination: {
          el: ".swiper-pagination",
        },
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
      },
    };
  },
  props: {
    swiperList: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style  scoped>
.wrapper {
  width: 100%;
  margin: 0 auto;
}
img {
  width: 100%;
}
</style>