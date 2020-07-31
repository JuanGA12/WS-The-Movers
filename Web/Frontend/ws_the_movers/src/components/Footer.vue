<template>
  <v-footer
    color=#01579B
  >
    <v-container>
      <v-row justify="center" no-gutters class="white--text">

        <v-col cols="4" md="4" sm="12" justify="center" align="center">
          <p class="caption">Av. Republica de Colombia 120, tercer piso, San Isidro, Lima-Perú.</p>
        </v-col>
        <v-col cols="4" md="4" sm="12" justify="center" align="center">
          <p class="caption">Telf: (511) 637-5151</p>
        </v-col>
        <v-col cols="4" md="4" sm="12" justify="center" align="center">
          <p class="caption"> Email: wsthemovers@wsthemovers.com.pe</p>
        </v-col>

      </v-row>
      <v-divider/>
      <v-divider/>
      <v-row no-gutters class="white--text pt-3 pb-0">
        <v-col cols="12" justify="center" align="center">
          <p class="caption">{{ new Date().getFullYear() }} <strong>World Shipping - The Movers</strong></p>
        </v-col>
      </v-row>
    </v-container>
    
  </v-footer>
</template>

<script>
export default {
     name: 'Footer',
}
</script>

<style>

</style>