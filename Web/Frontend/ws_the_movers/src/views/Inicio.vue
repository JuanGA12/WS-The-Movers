<template>
  <div>

    <Carousel/>

    <v-container fluid>

      <v-divider color="black"/>

      <Presentacion/>

      <v-divider color="black"/>

      <Skills/>

      <v-divider color="black"/>

      <Clientes/>

      <Mudanza_Des/>

    </v-container>
  </div>
</template>

<script>
import Carousel from '../components/Inicio/Carousel';
import Presentacion from '../components/Inicio/Presentacion';
import Skills from '../components/Inicio/Skills';
import Clientes from '../components/Inicio/Clientes';
import Mudanza_Des from '../components/Inicio/Mudanza_Des'
export default {
    components: {
      Carousel,
      Presentacion,
      Skills,
      Clientes,
      Mudanza_Des
    }
}
</script>

<style>
</style>