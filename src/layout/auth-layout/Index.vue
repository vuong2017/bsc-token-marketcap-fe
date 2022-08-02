<template>
  <div id="auth-layout">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>
