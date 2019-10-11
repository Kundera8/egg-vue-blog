<template>
  <el-row class="layout">
    <el-col :span="24" class="header">
      <header-comp></header-comp>
    </el-col>
    <el-col :span="24" class="main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-col>
  </el-row>
</template>
<script>
import headerComp from './components/headerComp'
export default {
  name: 'layout',
  components: { headerComp }
}
</script>
