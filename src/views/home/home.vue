<template>
  <div class="home">
    <carrouse :swiperList="swiperList"></carrouse>
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home";

import carrouse from "../../components/content/swipers/swiper"
export default {
  name: "home",
  components: {
    carrouse
  },
  data() {
    return {
      swiperList: []
    }
  },
  created() {
    this.getHomeMultidata()
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.ItemList = res.data.recommend.list;
        this.swiperList = res.data.banner.list
        console.log(res.data);
      });
    },
  },
};
</script>
