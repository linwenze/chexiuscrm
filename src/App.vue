<template>
  <div id="app">
    <router-view v-if="isView"/>
  </div>
</template>
<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isView: true
    }
  },
  methods: {
    reload () {
      this.isView = false;
      this.$nextTick(() => {
        this.isView = true;
      })
    }
  }
}

</script>
<style>
#app {
  width: 100%;
  height: 100%;
  min-width: 1400px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
