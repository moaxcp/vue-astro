<template>
  <div id="app">
    <rux-toggle
        id="app-toggle"
        :checked="toggle"
        @click.prevent="toggle = !toggle"></rux-toggle> {{ toggle }}
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    toggle: {
      get() {
        return this.$store.state.toggle
      },
      set(value) {
        this.$store.commit('setToggle', value)
      }
    }
  }
}
</script>

<style>
@import '/assets/css/astro.core.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
