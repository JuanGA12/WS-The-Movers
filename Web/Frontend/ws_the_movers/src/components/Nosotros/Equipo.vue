<template>
  <v-container fluid>
    <v-row justify="center"  class="pb-5 pt-5 f">
      <v-col style="color:#283593" cols="12" justify="center" align="left">
        <v-container>
          <h1 class="headline font-weight-bold">Nuestro Equipo</h1>
        </v-container>
      </v-col>
      <v-col cols="12" justify="center" align="center">
        <v-card
          height="350"
          max-width="330"            
          width="230"
          flat
          color="transparent"
        >
          <v-img src="../../assets/Equipo/Presidente.png"/>
          <v-card-title class="justify-center" style="color:#283593">
            Juan Gálvez
          </v-card-title>
          <v-card-subtitle style="color:#283593">
            Presidente
            <v-tooltip right color="white">
              <template v-slot:activator="{ on, attrs }">
                <a style="color:black"  v-bind="attrs" v-on="on" @click="Enviar_Prin()">jgalvez@wsthemovers.com.pe</a> 
              </template>
              <span class="subheading font-weight-medium" style="color:#000000">Enviar correo</span>
            </v-tooltip>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col md="3" sm="6" xs="12" lg="3" xl="3" justify="center" align="center"
        v-for="persona in Equipo" :key="persona.Nombre">
        <v-card
          height="250"
          max-width="330"
          width="240"
          flat
          color="transparent"
        >
          <v-img :src="persona.Img"/>
          <v-card-title class="justify-center" style="color:#283593">
            {{persona.Nombre}}
          </v-card-title>
          <v-card-subtitle style="color:#283593">
            {{persona.Cargo}}
            <v-tooltip right color="white">
              <template v-slot:activator="{ on, attrs }">
                <a style="color:black" v-bind="attrs" v-on="on" @click="Enviar(persona.Correo)">{{persona.Correo}}</a> 
              </template>
              <span class="subheading font-weight-medium" style="color:#000000">Enviar correo</span>
            </v-tooltip>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>  
  </v-container>
</template>

<script>
export default {
    name:'Equipo',
    data() {
      return {
        Equipo:[
          {Nombre:'Elisa Gálvez', Img: require('../../assets/Equipo/Gerente.jpg'), Cargo:'Gerente', Correo:'egalvez@wsthemovers.com.pe'},
          {Nombre:'Reynaldo Cornejo', Img: require('../../assets/Equipo/Contador_General.jpg'), Cargo:'Contador General', Correo:'rcornejo@wsthemovers.com.pe'},
          {Nombre:'Gildo Cairo', Img: require('../../assets/Equipo/Gerente_Cuentas.jpg'), Cargo:'Gerente de Cuentas', Correo:'gcairo@wsthemovers.com.pe'}
        ]
      }
    },
    methods:{
      Enviar_Prin(){
        window.open("mailto:jgalvez@wsthemovers.com.pe")
      },
      Enviar(correo){
        let a = "mailto:" + correo;
         window.open(a)
      }
    }
}
</script>

<style>

</style>