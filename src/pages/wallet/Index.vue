<template>
  <div class="wallet-page">
    <ListWallet />
  </div>
</template>

<script>
import ListWallet from './components/ListWallet.vue'

export default {
  name: 'WalletPage',
  components: {
    ListWallet
  }
}
</script>

<style lang="scss" scoped>
</style>
