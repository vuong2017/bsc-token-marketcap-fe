<template>
  <div id="app">
    <AuthLayout v-if="this.$route.meta.layout === 'AuthLayout'" />
    <AdminLayout v-else-if="this.$route.meta.layout === 'AdminLayout'" />
    <router-view v-else/>
  </div>
</template>

<script>
import AuthLayout from '@/layout/auth-layout/Index.vue'
import AdminLayout from '@/layout/admin-layout/Index.vue'

export default {
  name: 'AppLayout',
  components: {
    AuthLayout,
    AdminLayout
  }
}
</script>
