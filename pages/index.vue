<template>
  <div class="container">
    <div class="header bgcolor">
      <Header />
    </div>
    <div class="content">
      <div class="left">
        <!-- bgcolor -->
        <Sidbar></Sidbar>
      </div>
      <div class="right bgcolor">
        right
      </div>
    </div>

    <!-- <div @click="$router.push('/user/userCenter')">
      nuxt
    </div>
    <nuxt-link to="/user"> userlink</nuxt-link> -->
  </div>
</template>

<script>
export default {
  components:{
    Header: resolve => require(['../components/Header'], resolve),
    Sidbar: resolve => require(['../components/Sidbar'], resolve)
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 20px auto;
  .header {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;

  }
  .bgcolor {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .left{
    // background: rgba(12, 100, 129, 0.1);
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .left {
      width: 200px;
    }
    .right {
      width: calc(100% - 276px);
    }
  }
}
</style>
