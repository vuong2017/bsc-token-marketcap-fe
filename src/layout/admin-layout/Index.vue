<template>
  <div id="admin">
    <SideBar />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import SideBar from '@/components/sider-bar/Index.vue'

export default {
  name: 'AuthLayout',
  components: {
    SideBar
  }
}
</script>

<style lang="scss" scoped>
#admin {
  display: flex;
}
</style>
