<template>
  <div >
    <Carousel/>
    <v-container>
      
      <v-divider/>
      <v-divider/>

      <Skills/>

      <v-divider/>
      <v-divider/>

      <Mudanza_Des/>

      <v-divider/>
      <v-divider/>
      
   </v-container>
  </div>
</template>

<script>
import Carousel from '../components/Inicio/Carousel';
import Skills from '../components/Inicio/Skills';
import Mudanza_Des from '../components/Inicio/Mudanza_Des';
export default {
    components: {
      Carousel,
      Skills,
      Mudanza_Des
    }
}
</script>

<style scoped>
</style>