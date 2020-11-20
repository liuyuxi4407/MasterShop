<template>
  <div class="tab-bar-item" @click="ItemClick">
    <div class="item_img" v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="item_img-active" v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}" id="item_size">
      <slot name="item-size"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  methods: {
    ItemClick() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
  },
};
</script>


<style scoped>
.tab-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item_img-active{
    flex: 2;

}
img {
  width: 24px;
  height: 24px;
}
.item_img {
  flex: 2;
}
#item_size {
  flex: 1;
}
.active{
    color: red
}
</style>