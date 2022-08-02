<template>
  <div class="admin">
    <SideBar class="admin__side-bar" />
    <div class="admin__content">
      <Header />
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/sider-bar/Index.vue'
import Header from '@/components/header/Index.vue'

export default {
  name: 'AuthLayout',
  components: {
    SideBar,
    Header
  }
}
</script>

<style lang="scss" scoped>
.admin {
  display: flex;

  &__side-bar {
    height: 100vh;
  }

  &__content {
    width: 100%;
    padding: 20px;
  }
}
</style>
