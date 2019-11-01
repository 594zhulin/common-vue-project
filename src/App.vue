<template>
  <div id="app">
    <Button>111</Button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
import { getAdminList } from '@/api/demo.js'
export default {
  name: 'app',
  components: {
    Button
  },
  mounted(){
    getAdminList().then(res=>{
      console.log(res)
    })
  },
  methods:{
    
  }
}
</script>

<style>
</style>
