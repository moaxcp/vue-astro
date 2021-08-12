<template>
  <div>
  <rux-toggle
      id="app-toggle"
      :checked="toggle"
      @click.prevent="toggle = !toggle"></rux-toggle> {{ toggle }}
  </div>
</template>

<script>
export default {
  name: 'SwitchGuide',
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