<script setup>
//import { client } from './client';
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';

const shops = ref([])

//  async function getShops() {
//  shops.value =  await client.fetch('*[_type == "product"]')
// localStorage.setItem('@shops', JSON.stringify(shops.value)) 
// console.log('get shop function')
//   console.log('shops',shops.value)  
// }

onMounted(() => {
  console.log('App mounted')

 // getShops()
})

</script>

<template>
  
  <router-view></router-view>

</template>

<style scoped>

</style>
