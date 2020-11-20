<template>
  <div class="tab-bar-content">
    <tab-bar>
      <tab-bar-item path="/home">
        <img
          slot="item-icon"
          src="../../../assets/img/tabbar/home.png"
          alt=""
        />
         <img
          slot="item-icon-active"
          src="../../../assets/img/tabbar/home-o.png"
          alt=""
        />
        <div slot="item-size">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img
          slot="item-icon"
          src="../../../assets/img/tabbar/category.png"
          alt=""
        />
         <img
          slot="item-icon-active"
          src="../../../assets/img/tabbar/category-o.png"
          alt=""
        />
        <div slot="item-size">分类</div>
      </tab-bar-item>
      <tab-bar-item  path="/cart">
        <img
          slot="item-icon"
          src="../../../assets/img/tabbar/cart.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../../assets/img/tabbar/cart-o.png"
          alt=""
        />
        <div slot="item-size">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my">
        <img
          slot="item-icon"
          src="../../../assets/img/tabbar/my.png"
          alt=""
        />
         <img
          slot="item-icon-active"
          src="../../../assets/img/tabbar/my-o.png"
          alt=""
        />
        <div slot="item-size">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>


<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "TabBarContent",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>
