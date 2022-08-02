<template>
  <div class="login-page">
    <Login />
  </div>
</template>

<script>
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  background: #122131;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
