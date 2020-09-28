<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <Tabbar-view />
  </div>
</template>

<script>
import TabbarView from 'components/content/TabbarView'
export default {
  name: 'app',
  components: {
    TabbarView
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
