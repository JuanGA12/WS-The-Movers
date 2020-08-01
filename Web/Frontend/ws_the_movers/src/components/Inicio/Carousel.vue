<template>
  <v-container
  fluid
  pa-0
  pb-5 
  >
  <v-carousel
      cycle 
      hide-delimiter-background
      show-arrows-on-hover
   >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
   </v-carousel>
  </v-container>
</template>

<script>
export default {
    name: 'Carousel',
    data () {
      return {
        items: [
          {
            src: 'http://www.wsthemovers.com.pe/images/slider/pic_slider_1_2_2.jpg', 
            titulo:'¿Planeas Mudarte?',
            des:'Cotizamos tu mudanza con precios accesibles, consulta sin compromiso'
          },
          {
            src: 'http://www.wsthemovers.com.pe/images/slider/pic_slider_1_2_1.jpg', 
            titulo:'Expertos en Mudanzas',
            des:'Aplicamos las mejores técnicas de embalaje necesarios para tu mudanza'
          },
          {
            src: 'http://www.wsthemovers.com.pe/images/slider/pic_slider_1_1_1.jpg', 
            titulo:'Traslado eficiente',
            des:'Transportamos tus bienes con total seguridad y puntualidad'
          }
        ],
      }
    },
}
</script>

<style>

</style>