<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: 'TabBar'
}
</script>


<style scoped>
    .tab-bar{
        width: 100vw;
        height: 49px;
        background: turquoise;
        display: flex;
        position: fixed;
        bottom: 0;
    }
</style>