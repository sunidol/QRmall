<template>
  <div id="app">
    <router-view></router-view>
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
