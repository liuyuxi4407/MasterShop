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
        padding: 5px 0 0 0;
        width: 100vw;
        height: 49px;
        background: #fafafa;
        display: flex;
        position: fixed;
        bottom: 0;
    }
</style>