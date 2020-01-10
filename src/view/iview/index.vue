<template>
  <div class="iview-tree">
    <Tree :data="data"></Tree>
  </div>
</template>
<script>
const bigData = require("./big-tree.json");
export default {
  data () {
    return {
      data: bigData.data
    }
  }
}
</script>
<style>
.iview-tree {
  height: 100%;
  width: 600px;
  margin: 0 auto;
  overflow: auto;
}
</style>