<template>
  <div >
    <Carousel/>
    <v-container fluid>
      <v-divider color="black"/>
      <v-container>
        <v-row justify="center"  class="pb-5 pt-5">
          <v-col style="color:#283593" cols="12" justify="center" align="center">
            <h1>Bienvenidos a World Shipping the Movers</h1>
          </v-col>  
          <v-col style="color:#283593" cols="12" justify="center" align="center" >
                Tenemos 40 años de experiencia que nos han permitido consolidarnos como líderes en el rubro. 
                Somos especialistas en mudanzas nacionales, internacionales, embalajes y almacenajes, lo que nos convierte en su mejor opción   
          </v-col>         
        </v-row>
      </v-container>
      <v-divider color="black"/>

      <Skills/>

      <v-divider color="black"/>
       <v-container>
        <v-row justify="center"  class="pb-5 pt-5">
          <v-col style="color:#283593" cols="12" justify="center" align="left">
            <h1>Nuestros Clientes</h1>
          </v-col>
           <v-col style="color:#283593" cols="12" justify="center" align="center">
            <v-sheet
              class="mx-auto"
              elevation="8"
              fluid
            >
              <v-slide-group
                v-model="model"
                class="pa-4"
                show-arrows
              >
                <v-slide-item
                  v-for="cliente in Clientes"
                  :key="cliente.Nombre"
                  v-slot:default="{ active, toggle }"
                >
                  <v-hover v-slot:default="{ hover }" >
                    <v-card
                      :color="active ? 'black' : 'blue'"
                      :elevation="hover ? 16 : 2"
                      class="ma-4"
                      :class="{ 'on-hover': hover }"
                      width="200"
                      @click="toggle"
                    >
                      <v-img
                        class="white--text align-center"
                        :src="cliente.Imagen"
                      />
                        <v-row
                          class="fill-height"
                          align="start"
                          justify="center"
                        >
                          <v-scale-transition>
                            <v-icon
                              v-if="active"
                              color="white"
                              size="48"
                              v-text="'mdi-close-circle-outline'"
                            ></v-icon>
                          </v-scale-transition>
                        </v-row>
                    </v-card>
                  </v-hover>
                </v-slide-item>
              </v-slide-group>

              <v-expand-transition>
                <v-sheet
                  v-if="model != null"
                  color="grey lighten-4"
                  height="100"
                  tile
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <v-chip
                      class="ma-2"
                      color="cyan"
                      label
                      text-color="white"
                      to="/testimonios"
                    >
                      <v-icon left>mdi-certificate</v-icon>
                      <h1>Testimonios</h1>
                    </v-chip>
                  </v-row>
                </v-sheet>
              </v-expand-transition>
            </v-sheet>
          </v-col>
        </v-row>
       </v-container>       
   </v-container>
  </div>
</template>

<script>
import Carousel from '../components/Inicio/Carousel';
import Skills from '../components/Inicio/Skills';
export default {
    components: {
      Carousel,
      Skills,
    },
    data: () => ({
      model: null,
      Clientes: [
        {Nombre:'Abbott', Imagen: require('../assets/Clientes/Abbott.jpg')},
        {Nombre:'Bata', Imagen: require('../assets/Clientes/Bata.jpg')},
        {Nombre:'Belatrix', Imagen: require('../assets/Clientes/Belatrix.jpg')},
        {Nombre:'Binswanger', Imagen: require('../assets/Clientes/Binswanger.jpg')},
        {Nombre:'Boehringer Ingelheim', Imagen: require('../assets/Clientes/Boehringer.png')},
        {Nombre:'Calida', Imagen: require('../assets/Clientes/Calida.jpg')},
        {Nombre:'Capella & Delgado Abogados', Imagen: require('../assets/Clientes/Capella.jpg')},
        {Nombre:'Corporacion Financiera de Inversiones', Imagen: require('../assets/Clientes/Cfi.jpg')},
        {Nombre:'General Electric', Imagen: require('../assets/Clientes/Ge.png')},
        {Nombre:'Gerens', Imagen: require('../assets/Clientes/Gerens.jpg')},
        {Nombre:'Gruas PM', Imagen: require('../assets/Clientes/Gruaspm.jpg')},
        {Nombre:'Gtech', Imagen: require('../assets/Clientes/Gtech.jpg')},
        {Nombre:'Hamburg Süd', Imagen: require('../assets/Clientes/Hamburgsud.jpg')},
        {Nombre:'Huawei', Imagen: require('../assets/Clientes/Huawei.jpg')},
        {Nombre:'International Institute for Democracy and Electoral Assistance', Imagen: require('../assets/Clientes/Idea.png')},
        {Nombre:'Statkraft Perú S.A.', Imagen: require('../assets/Clientes/Statkraft.jpg')},
        {Nombre:'Sunarp', Imagen: require('../assets/Clientes/Sunarp.jpg')},
        {Nombre:'Troy & Ginnette Doudy', Imagen: require('../assets/Clientes/Troy.png')},
        {Nombre:'Victor Medina', Imagen: require('../assets/Clientes/VictorM.png')},
        {Nombre:'Viva GyM S.A.', Imagen: require('../assets/Clientes/Vivagym.jpg')},
      ]
    })
}
</script>

<style scoped>
.v-card {
  transition: opacity .10s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.4;
 }
</style>