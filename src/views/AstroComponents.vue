<template>
  <div>
    <rux-toggle
        id="app-toggle"
        :checked="toggle"
        @click.prevent="toggle = !toggle"></rux-toggle> {{ toggle }}
    <rux-button icon="settings">
      Button with icon using astro UXDS icon web component
    </rux-button>
  </div>
</template>

<script>
export default {
  name: 'AstroComponents',
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
};
</script>

<style scoped>

</style>