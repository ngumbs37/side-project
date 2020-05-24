<template>
  <div id='app'>
    <nav-bar/>
  <div class='container'>
    <router-view/>
  </div>
  </div>
</template>


<script>
export default {
  name: 'home'
}
</script>


<style>
@import './styles/normalize.css';
@import './styles/skeleton.css';
@import './styles/index.css';
@import './styles/colors.css';

#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
