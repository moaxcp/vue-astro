<template>
  <div class="main-container">
    <div class="sidebar-menu">
      <rux-tree :data="JSON.stringify(this.treeConfig)" v-on:tree-updated="componentSeleted"></rux-tree>
    </div>
    <div class="guide-container">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AstroComponents",
  data() {
    return {

    }
  },
  computed: {
    treeConfig() {
      const selected = this.$route.name;
      return [
        {
          label: "Button",
          status: "critical",
          selected: selected == 'Button'
        },
        {
          label: "Switch",
          status: "critical",
          selected: selected == 'Switch'
        },
        {
          label: "Icon",
          status: "critical",
          selected: selected == 'Icon'
        }
      ]
    }
  },
  methods: {
    componentSeleted(event) {
      const selected = event.detail.selected.label;
      const route = this.$router.getRoutes().find(r => r.name == selected);
      this.$router.push({ name: route.name });
    }
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
}

.sidebar-menu {
  flex: 1;
}

.guide-container {
  flex: 6;
}
</style>