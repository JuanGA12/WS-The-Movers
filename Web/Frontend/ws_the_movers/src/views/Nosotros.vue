<template>
  <div>

    <Tabs/>

    <v-divider color="black"/>
    
    <Equipo/>
  </div>
</template>

<script>
import Tabs from '../components/Nosotros/Tabs';
import Equipo from '../components/Nosotros/Equipo';
export default {
  components: {
    Tabs,
    Equipo
  }
}
</script>

<style>

</style>