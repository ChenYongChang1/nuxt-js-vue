<template>
  <div>
    <vue-particles
        color="#D9D9D9"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#D9D9D9"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    <div class="box">
      <nuxt />
    </div>
  </div>
</template>

<script>

export default {

}
</script>
<style>
#particles-js{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}
.box{
  position: relative;
  width: 80%;
  min-width: 1000px;
  max-width: 1400px;
  z-index: 1;
  margin: auto;
}
</style>
