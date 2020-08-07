<template>
  <div>
    <v-tabs
      v-model="tab" background-color=#C5CAE9 color=#283593 grow>
      <v-tab v-for="item in items" :key="item">
        <h3 class="visible-lg-and-up  hidden-md-and-down">
          {{item}}
        </h3>

        <h4 class="visible-md  hidden-sm-and-down hidden-lg-and-up ">
          {{item}}
        </h4> 

        <h5 class="visible-sm  hidden-xs-only hidden-md-and-up ">
          {{item}}
        </h5>

        <h6 class="visible-xs  hidden-sm-and-up">
          {{item}}
        </h6>  

      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <div v-if="item == '¿Quienes Somos?'">
          <Quienes_Somos/>
        </div>

        <div v-else-if="item == 'Afiliaciones'">
          <Afiliaciones/>
        </div>

        <div v-else-if="item == 'Reconocimiento'">
          <Reconocimiento/>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Afiliaciones from './Lista_Tabs/Afiliaciones';
import Quienes_Somos from './Lista_Tabs/Quienes_Somos';
import Reconocimiento from './Lista_Tabs/Reconocimientos';
export default {
    name:'Tabs',
    components: {
        Afiliaciones,
        Quienes_Somos,
        Reconocimiento
    },
    data () {
      return {
        tab: null,
        items: [
          '¿Quienes Somos?',
          'Afiliaciones',
          'Reconocimiento'
        ],
      }
    },

    mounted () {
      console.log(this.$vuetify.breakpoint.name)
    }
}
</script>

<style>

</style>