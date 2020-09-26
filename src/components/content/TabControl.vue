<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item,index) in title"
         @click="selectItem(index)">
      <span :class="{active: index===currentIdx}">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentIdx: 0
    }
  },
  props: {
    title: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    selectItem (index) {
      this.currentIdx = index
      this.$emit('tabChange', index)
    }
  }
}
</script>
<style scoped>
.tab-control {
  display: flex;
  justify-content: center;

  text-align: center;
  font-size: 15px;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  border-bottom: 3px solid var(--color-tint);
}
</style>