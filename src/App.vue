<template>
  <div id="app" class=".lightTheme">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import '/src/assets/css/astro.css';
</style>
