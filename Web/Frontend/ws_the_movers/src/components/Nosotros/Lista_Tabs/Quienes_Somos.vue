<template>
  <v-container fluid>
    <v-row justify="center" >

      <v-container>
        <v-banner  class="v"  elevation="2">
          <v-col style="color:#283593" cols="12" justify="center" align="start">
            <p>
              Somos un equipo atento a satisfacer las necesidades de la comunidad nacional e internacional en el traslado de bienes alrededor del mundo. Más de 40 años de experiencia, moderna infraestructura y profesionales calificados, nos permiten realizar un traslado seguro, a tiempo y sin problemas, a entera satisfacción de nuestros clientes.
            </p>

            <p>
              World Shipping The Movers. cuenta con 35 colaboradores, de los cuales 20 son embaladores y conductores. Nuestro staff recibe entrenamiento dentro y fuera del país, así como la necesaria especialización relacionada a su posición dentro de la compañia.
            </p>
          </v-col> 
        </v-banner>
      </v-container>
      <v-col cols="12">
        <v-divider color="black"/>
      </v-col>
      <v-col md="12" sm="12" xs="12" lg="12" xl="12" justify="center" align="center" class="g">
        <v-timeline class="hidden-sm-and-down" align-top>
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.Icon"
            fill-dot
          >
            <v-card color=#FAFAFA align="center" outlined>
              <v-img
                class="white--text align-end"
                height="150"
                width="280"
                :src="item.Img"
              />
              <v-card :color="item.color">
                <v-card-actions class="justify-center">
                  <v-tooltip right color="white">
                    <template v-slot:activator="{ on, attrs }">
                      <v-hover v-slot:default="{ hover }">
                        <v-btn :elevation="hover ? 20 : 4" rounded color=#C5CAE9 v-bind="attrs" v-on="on" @click="funcion(item.Nombre)">
                          <v-icon color=#283593>
                            {{item.Icon}}
                          </v-icon>
                        </v-btn>
                      </v-hover>
                    </template>
                    <span class="subheading font-weight-medium" style="color:#000000">Ver más</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-timeline-item>
        </v-timeline>
        
        <v-timeline class="hidden-md-and-up" v-if="this.$vuetify.breakpoint.name == 'sm' || 'xs'" dense>
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.Icon"
            fill-dot
          >
            <v-card color=#FAFAFA align="center" outlined>
              <v-img
                class="white--text align-end"
                height="150"
                width="280"
                :src="item.Img"
              />
              <v-card :color="item.color">
                <v-card-actions class="justify-center">
                  <v-tooltip right color="white">
                    <template v-slot:activator="{ on, attrs }">
                      <v-hover v-slot:default="{ hover }">
                        <v-btn :elevation="hover ? 20 : 4" rounded color=#C5CAE9 v-bind="attrs" v-on="on" @click="funcion(item.Nombre)">
                          <v-icon color=#283593>
                            {{item.Icon}}
                          </v-icon>
                        </v-btn>
                      </v-hover>  
                    </template>
                    <span class="subheading font-weight-medium" style="color:#000000">Ver más</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-timeline-item>
        </v-timeline>

        <v-dialog v-model="dialog1" persistent>
          <v-card justify="center" align="center">
            <v-card-title class="justify-center pb-0" justify="center" align="center">
              <h4 class="font-weight-medium headline" 
              style="color:#283593"
              >
                {{this.items[0].Nombre}}
              </h4>
            </v-card-title>
            <v-container  class="pb-0 pt-0">
              <v-divider color=#90A4AE />
            </v-container>
            <v-card-subtitle class="justify-center pt-3" justify="center" 
              align="center" style="color:#283593"
            >
              <h3 class="font-weight-medium">
                {{this.items[0].Preg}}
              </h3>
            </v-card-subtitle>
            <v-card-text justify="center" align="start" style="color:#283593">
              <v-container>
                <h3 class="font-weight-regular">
                  {{items[0].Descripcion}}
                </h3>  
              </v-container>
            </v-card-text>
            <v-divider color=#90A4AE />
            <v-card-actions class="justify-end">
              <v-btn @click="dialog1 = false"
                text
                color=#283593
              >
                <h4 class="font-weight-medium">
                  Cerrar
                </h4>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>


        <v-dialog v-model="dialog2" persistent>
          <v-card>
            <v-card-title class="justify-center pb-0" justify="center" align="center">
              <h4 class="font-weight-medium headline" 
              style="color:#283593"
              >
                {{this.items[1].Nombre}}
              </h4>
            </v-card-title>
            <v-container  class="pb-0 pt-0">
              <v-divider color=#90A4AE />
            </v-container>
            <v-card-subtitle class="justify-center pt-3" justify="center" 
              align="center" style="color:#283593"
            >
              <h3 class="font-weight-medium">
                {{this.items[1].Preg}}
              </h3>
            </v-card-subtitle>
            <v-card-text justify="center" align="start" style="color:#283593">
              <v-container>
                <h3 class="font-weight-regular">
                  {{items[1].Descripcion}}
                 </h3>  
              </v-container>
            </v-card-text>
            <v-divider color=#90A4AE />
            <v-card-actions class="justify-end">
              <v-btn @click="dialog2 = false"
                text
                color=#283593
              >
                <h4 class="font-weight-medium">
                  Cerrar
                </h4>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialog3" persistent>
          <v-card>
            <v-card-title class="justify-center pb-0" justify="center" align="center">
              <h4 class="font-weight-medium headline" 
              style="color:#283593"
              >
                {{this.items[2].Nombre}}
              </h4>
            </v-card-title>
            <v-container  class="pb-0 pt-0">
              <v-divider color=#90A4AE />
            </v-container>
            <v-card-subtitle class="justify-center pt-3" justify="center" 
              align="center" style="color:#283593"
            >
              <h3 class="font-weight-medium">
                {{this.items[2].Preg}}
              </h3>
            </v-card-subtitle>
            <v-card-text justify="center" align="start" style="color:#283593">
              <v-container>
                <v-list color="transparent">
                  <v-list-item v-for="item in items[2].Lista" :key="item">
                    <v-list-item-icon>
                      <v-icon color=#283593>mdi-star</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content style="color:#283593">
                      <h3 class="font-weight-regular">
                        {{item}}
                      </h3>  
                    </v-list-item-content>
                  </v-list-item>
                </v-list> 
              </v-container>
            </v-card-text>
            <v-divider color=#90A4AE />
            <v-card-actions class="justify-end">
              <v-btn @click="dialog3 = false"
                text
                color=#283593
              >
                <h4 class="font-weight-medium">
                  Cerrar
                </h4>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

  
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name:'Quienes_Somos',
    methods:{
      funcion(Nombre){
      
        if(Nombre == 'MISIÓN'){
          this.dialog1 = true;
        }else if(Nombre == 'VISIÓN'){
          this.dialog2 = true;
        }else if(Nombre == 'VALORES'){
          this.dialog3 = true;
        }
      }
    },
    data() {
      return {
      
        dialog1: false,
        dialog2: false,
        dialog3: false,
        items:[
        {
          Nombre:'MISIÓN',
          color: 'red lighten-2',
          Icon:'mdi-flag-variant-outline',
          Img:require('../../../assets/Mision.png'),
          Preg:'¿A QUÉ NOS DEDICAMOS?',
          Img2:require('../../../assets/Mision2.jpg'),
          Descripcion:'Somos una empresa especializada en brindar servicios de mudanzas y reubicaciones a personas y organizaciones, logrando que esta experiencia sea agradable, segura y confiable para nuestros clientes.',
        },
        {
          Nombre:'VISIÓN',
          color: 'purple darken-1',
          Icon:'mdi-eye-outline',
          Img:require('../../../assets/Vision.png'),
          Preg:'¿QUÉ BUSCAMOS?',
          Descripcion:'Ser la mejor empresa de mudanzas y reubicaciones en el Perú, brindando servicios que superen ampliamente las expectativas de nuestros clientes.',
        },
        {
          Nombre:'VALORES',
          color: 'green lighten-1',
          Icon:'mdi-diamond-stone',
          Img:require('../../../assets/Valores.png'),
          Preg:'¿EN QUÉ CREEMOS COMO EMPRESA?',
          Lista:[
            'Nuestros servicios los desarrollamos con integridad y honestidad.',
            'Estamos 100 % comprometidos con nuestros clientes, proveedores y colaboradores.',
            'El profesionalismo y la calidad son elementos claves de nuestros servicios.',
            'La Responsabilidad Social siempre está presente en nuestras decisiones.',
            'Inculcamos en nuestros colaboradores liderazgo, colaboración, innovación y respeto al medio ambiente.',
            'Somos un equipo deseoso de lograr nuevos retos y desafíos.'
          ]
        }
      ]
    }
  }
}
</script>

<style>
</style>