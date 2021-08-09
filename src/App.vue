<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="css">
@import 'assets/css/astro.css';
@import 'assets/css/astro-icons.css';
</style>
