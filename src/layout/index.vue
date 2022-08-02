<template>
  <div id="app">
    <transition name="fade">
      <AuthLayout v-if="this.$route.meta.layout === 'AuthLayout'">
        <router-view />
      </AuthLayout>
      <AdminLayout v-else>
        <router-view />
      </AdminLayout>
    </transition>
  </div>
</template>

<script>
import AuthLayout from './auth-layout/Index.vue'
import AdminLayout from './admin-layout/Index.vue'

export default {
  name: 'AppLayout',
  components: {
    AuthLayout,
    AdminLayout
  }
}
</script>
