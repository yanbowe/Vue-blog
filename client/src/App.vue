<template>
  <div id="app">
      <vue-particles
        color="#DFF353"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="star"
        :particleSize="4"
        linesColor="#5363F3"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="5"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .lizi{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -20;
  }
</style>
