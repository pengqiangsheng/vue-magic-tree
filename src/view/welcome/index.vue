<template>
  <div class="welcome-you">
    <div>
      <ul class="nav">
        <li @click="goto('ztree')">ZTree-Tree 测试</li>
        <li @click="goto('ele')">Element-Tree 测试</li>
        <li @click="goto('iview')">IView-Tree 测试</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style>
.welcome-you {
  height: 100%;
}
.nav {
  width: 600px;
  margin: 0 auto;
}
.nav > li {
  font-size: 20px;
  list-style: none;
  margin: 10px 0;
}
.nav > li:hover {
  cursor: pointer;
  color: #FFFFFF;
  background: #67C23A;
}

</style>