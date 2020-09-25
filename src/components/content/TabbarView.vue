<template>
  <Tabbar>
    <Tabbar-item path="/home">
      <img slot="item-icon"
           src="~assets/img/tabbar/home.svg"
           alt="">
      <img slot="item-icon-active"
           src="~assets/img/tabbar/home_active.svg"
           alt="">
      <div slot="item-text">首页</div>
    </Tabbar-item>
    <Tabbar-item path="/category">
      <img slot="item-icon"
           src="~assets/img/tabbar/category.svg"
           alt="">
      <img slot="item-icon-active"
           src="~assets/img/tabbar/category_active.svg"
           alt="">
      <div slot="item-text">分类</div>
    </Tabbar-item>
    <Tabbar-item path="/cart">
      <img slot="item-icon"
           src="~assets/img/tabbar/shopcart.svg"
           alt="">
      <img slot="item-icon-active"
           src="~assets/img/tabbar/shopcart_active.svg"
           alt="">
      <div slot="item-text">购物车</div>
    </Tabbar-item>
    <Tabbar-item path="/profile">
      <img slot="item-icon"
           src="~assets/img/tabbar/profile.svg"
           alt="">
      <img slot="item-icon-active"
           src="~assets/img/tabbar/profile_active.svg"
           alt="">
      <div slot="item-text">我的</div>
    </Tabbar-item>
  </Tabbar>
</template>
<script>
// 可以在配置文件中（修改resolve对象），给文件夹配置别名，避免特别长的文件路径
// 如果是import中运用别名，可以直接写成配置文件中的别名；html中运用别名，需要在别名前加~
import Tabbar from 'components/common/tabbar/Tabbar'
import TabbarItem from 'components/common/tabbar/TabbarItem'
export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
