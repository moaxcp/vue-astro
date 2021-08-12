<template>
  <div id="app">
    <rux-global-status-bar appname="Astro Vue" version="1.0">
      <rux-tabs id="tab-set-id-1">
        <rux-tab v-for="route in this.getTabRoutes()"
            :key="route.name"
            :id="`tab-id-${route.name}`"
            @click="select(route.name)"
            :selected="isSelected(route.name)">{{ route.name }}</rux-tab>
      </rux-tabs>
    </rux-global-status-bar>

    <rux-tab-panels aria-labelledby="tab-set-id-1">
      <rux-tab-panel v-for="route in this.getTabRoutes()"
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
  methods: {
    getTabRoutes() {
      return this.$router.getRoutes().filter(r => !r.parent);
    },
    isSelected(name) {
      return this.$route.fullPath.includes(name.toLowerCase());
    },
    select(name) {
      this.$router.push({ name: name }).catch(()=>{});
    }
  }
}
</script>

<style lang="css">
</style>
