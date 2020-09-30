<template>
  <div v-if="Object.keys(detailInfo).length !== 0"
       class="detailInfo"></div>
</template>
<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style scoped>
</style>