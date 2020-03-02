<template>
  <div class="container">
    <div @click="$router.push('/user/userCenter')">
      nuxt
    </div>
    <nuxt-link to="/user"> userlink</nuxt-link>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
}
</style>
