<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary">test</el-button>
    <el-page-header @back="goBack"
                    content="详情页面">
    </el-page-header>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    goBack () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
