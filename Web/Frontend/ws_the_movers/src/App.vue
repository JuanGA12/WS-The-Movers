<template>
  <v-app >
    <Header/>
    <v-content class="estiloFondo">
     <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '@/components/App/Header';
import Footer from '@/components/App/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.estiloFondo{
    background-color: #FFFFFF
;
  } 
</style>