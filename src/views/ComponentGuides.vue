<template>
  <div>
    <rux-tree :data="JSON.stringify(this.exampleComponents)"></rux-tree>
  </div>
</template>

<script>
export default {
  name: "AstroComponents",
  data() {
    return {
      exampleComponents: [
        {
          label: "Button",
          status: "normal"
        },
        {
          label: "Switch",
          status: "normal"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>