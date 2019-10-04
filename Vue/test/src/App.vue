<template>
  <div id="app">
    <img alt="SingCafe logo" src="https://image.shutterstock.com/image-vector/capital-s-letter-inserted-paper-260nw-717507451.jpg">
    <HelloWorld msg="Welcome to SingCafe"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import FoodPics from './components/FoodPics.vue'

export default {
  name: 'app2',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
