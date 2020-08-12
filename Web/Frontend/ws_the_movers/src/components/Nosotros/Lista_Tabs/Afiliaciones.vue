<template>
  <v-container fluid>
    <v-row justify="center">
      <v-container>
        <v-banner class="v" elevation="2">
          <v-col style="color:#283593" cols="12" justify="center" align="start">
            <p>
              Somos miembros de diversas organizaciones mundiales, las cuales permiten únicamente la afiliación de empresas de alto nivel y reconocimiento.
            </p>
          </v-col> 
        </v-banner>
      </v-container>
      <v-col cols="12">
        <v-divider color="black"/>
      </v-col>
      <v-col cols="12" style="color:#283593" justify="center" align="left" class="g">
        <v-container>
          <h1 class="headline font-weight-bold pt-5">Nuestras Afiliaciones</h1>
        </v-container>
      </v-col>
     
      <v-col cols="6" justify="center" align="center" class="g">
        
        <v-card max-width="400" width="400" flat height="250" color="transparent">
        
          <v-img src="../../../assets/Lacma.png"  height="150"
            width="280"></v-img>
           
          <v-card-title class=" pb-0 caption font-weight-medium justify-center">
            Latin American and Caribbean International Movers Association
          </v-card-title>
          <v-card-actions class="justify-center pt-1">
            <v-tooltip right color="black">
              <template v-slot:activator="{ on, attrs }">
                <v-btn x-large icon v-bind="attrs" v-on="on" @click="Ir_Lacma()">
                  <v-icon color=#283593>
                    mdi-search-web
                  </v-icon>
                </v-btn>
              </template>
              <span class="subheading font-weight-medium" style="color:white">Ir a la página</span>
            </v-tooltip>
          </v-card-actions>
         
        </v-card>
       
      
      </v-col>
      <v-col cols="6" justify="center" align="center" class="g" >
     
        <v-card max-width="400" width="400" flat height="250" color="transparent">
          <v-img src="../../../assets/CCPE.png" height="120"
            width="300" ></v-img>
          <v-card-title class="caption font-weight-medium justify-center"> 
            Cámara de comercio de Perú en España
          </v-card-title>
        </v-card>
       
      </v-col>
      
    </v-row>
  </v-container>    
</template>

<script>
export default {
    name:'Afiliaciones',
    methods:{
      Ir_Lacma(){
        window.open("https://www.lacmassoc.org/","Lacma")

      }
    }
}
</script>

<style>

</style>