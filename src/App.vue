<template>
  <div id="app">
    <rux-global-status-bar appname="Astro App" version="3.0">
      <rux-tabs id="tab-set-id-1">
        <rux-tab v-for="route in this.$router.getRoutes()"
            :key="route.name"
            :id="`tab-id-${route.name}`"
            @click="select(route.name)"
            :selected="isSelected">{{ route.name }}</rux-tab>
      </rux-tabs>
    </rux-global-status-bar>

    <rux-tab-panels aria-labelledby="tab-set-id-1">
      <rux-tab-panel v-for="route in this.$router.getRoutes()"
                     :key="route.name"
                     :aria-labelledby="`tab-id-${route.name}`">
        <router-view :key="$route.fullPath" />
      </rux-tab-panel>
    </rux-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {

  },
  methods: {
    isSelected(name) {
      return this.$route.name == name;
    },
    select(name) {
      this.$router.push({ name: name }).catch(()=>{});
    }
  }
}
</script>

<style lang="css">
</style>
