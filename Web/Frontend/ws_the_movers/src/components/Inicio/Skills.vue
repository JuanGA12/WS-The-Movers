<template>
  <v-row justify="center"  class="pb-5 pt-5">

      <v-col  md="6" sm="12" xs="12" lg="3" xl="3" justify="center" align="center"
      v-for="skill in skills" :key="skill.title"
      >
        <v-hover
         v-slot:default="{ hover }"
        >
          <v-card
            :elevation="hover ? 16 : 3"
            height="390"
            max-width="350"
            shaped
            color=#01579B
          
          >
            <v-img
              class="white--text align-end"
              :src="skill.img"
            />
            <v-card-title class="white--text justify-center" justify="center" align="center">
                <h4 class="font-weight-bold">{{skill.title}}</h4>
               
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text class="text--primary">
              <div class="white--text font-weight-medium body-1" justify="center" align="start">{{skill.descripcion}}</div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

    
    </v-row>
</template>

<script>
export default {
    name: 'Skills',
    data (){
        return{
            skills: [
            { title: "Experiencia", img: require('../../assets/experiencia.jpg'), descripcion:'40 años trasladando no solo menaje de casa sino también sentimientos y más de 3,000 mudanzas realizadas nos permiten garantizar un servicio a su medida.'  },
            { title: "Calidad de Servicio", img: require('../../assets/calidad.jpg'), descripcion:'Contamos con una variedad de servicios con los más altos estándares de calidad, seguridad y cuidados respectivos.' },
            { title: "Personal Calificado", img: require('../../assets/personal_cal.png') ,descripcion:'Disponemos de personal calificado, confiable y responsable para trasladar sus bienes de la manera más rápida, segura y eficaz.' },
            { title: "Cobertura a Nivel Mundial", img: require('../../assets/cobertura.png') ,descripcion:'Nuestra amplia red de agentes en todo el mundo nos permite realizar traslados a cualquier parte del planeta.' }          
            ],
        }
    },

}
</script>

<style>

</style>