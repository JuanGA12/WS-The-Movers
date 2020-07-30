<template>
  <v-footer
    color=#01579B
  >
    <v-card
      class="flex"
      flat
      color=#01579B
    >
      <v-card-title color="blakcxa" >

        <v-btn small color="dark" dark >Av. Republica de Colombia 120, tercer piso, San Isidro, Lima-Perú. </v-btn>

        <v-spacer></v-spacer>

        <v-btn small class="white--text" dark color="dark"  > Telf.: (511) 637-5151</v-btn>
        <v-btn small class="white--text" dark color="dark"  > Email.: wsthemovers@wsthemovers.com.pe </v-btn>      
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} <strong>World Shipping - The Movers</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
     name: 'Footer',
}
</script>

<style>

</style>