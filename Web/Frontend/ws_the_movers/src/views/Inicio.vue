<template>
  <div>
    <Carousel/>
    <v-container>
      <v-divider/>
      <v-divider/>
      <Skills/>
      <v-divider/>
      <v-divider/>
   </v-container>
  </div>
</template>

<script>
import Carousel from '../components/Carousel';
import Skills from '../components/Skills';
export default {
    components: {
      Carousel,
      Skills
    }
}
</script>

<style>

</style>