<template>
  <div id="app">
    <!-- 使用缓存，除了详情页之外 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style>
  
</style>