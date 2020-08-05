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
import backgroundUrl from '@/assets/Background.png'
export default {
  name: 'App',

  components: {
    Header,
    Footer
  },
  data() {
      return {
        backgroundUrl
      }
    }
};
</script>
<style scoped>
.estiloFondo{
    background-color: #FFFFFF,
} 
</style>