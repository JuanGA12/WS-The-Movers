<template>
  <Cartas/>
</template>

<script>
import Cartas from '../components/Testimonios/Cartas';
export default {
  components:{
    Cartas
  },
  mounted () {
      console.log(this.$vuetify.breakpoint.name)
    }

}
</script>

<style>

</style>