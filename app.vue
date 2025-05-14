<template>
  <div id="app">
    <router-view /> <!-- Qui viene visualizzata la pagina attiva -->
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: sans-serif;
  text-align: center;
}

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
