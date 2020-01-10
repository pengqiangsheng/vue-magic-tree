<template>
  <div class="el-tree">
    <el-tree  :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
const bigData = require("@/mock/big-tree.json");
export default {
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    };
  },
  computed: {
    data() {
      return bigData.data
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>
<style>
.el-tree {
  height: 100%;
  width: 600px;
  margin: 0 auto;
  overflow: auto;
}
</style>