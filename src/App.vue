<template>
  <div id="app">
    
    <TestVueInfiniteScroll />
  </div>
</template>

<script>
import TestVueInfiniteScroll from './components/TestVueInfiniteScroll'

export default {
  name: 'App',
  components: {
    TestVueInfiniteScroll
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
