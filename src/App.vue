<template>
  <div id="app">
    <rux-global-status-bar appname="Astro App" version="3.0">
      <rux-tabs id="tab-set-id-1">
        <rux-tab id="tab-id-1" :selected="isSelected('button')" @click="select('button')">Button</rux-tab>
        <rux-tab id="tab-id-2">Tab 2 title</rux-tab>
        <rux-tab id="tab-id-3">Tab 3 title</rux-tab>
      </rux-tabs>
    </rux-global-status-bar>

    <rux-tab-panels aria-labelledby="tab-set-id-1">
      <rux-tab-panel aria-labelledby="tab-id-1">
        <router-view name="button" />
      </rux-tab-panel>
      <rux-tab-panel aria-labelledby="tab-id-2">Tab 2 HTML content</rux-tab-panel>
      <rux-tab-panel aria-labelledby="tab-id-3">Tab 3 HTML content</rux-tab-panel>
    </rux-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    isSelected(name) {
      return this.$route.name == name;
    },
    select(name) {
      console.log(`selected ${name}`);
      this.$router.push({ name: name }).catch(()=>{});
    }
  }
}
</script>

<style lang="css">
</style>
