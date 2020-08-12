<template>
  <v-container fluid>
    <v-row justify="center">
      <v-container>
        <v-banner class="v" elevation="2">
          <v-col style="color:#283593" cols="12" justify="center" align="start">
            <p>
              LALALALA
            </p>
          </v-col> 
        </v-banner>
      </v-container>
      <v-col cols="12">
        <v-divider color="black"/>
      </v-col>
      <v-col cols="12" style="color:#283593" justify="center" align="left" class="g">
        <v-container class="pb-0">
          <h1 class="headline font-weight-bold pt-5 pb-0">Nuestros Reconocimientos</h1>
        </v-container>
      </v-col>
      <v-col cols="12" justify="center" align="start" class="g">
        <v-container>
          <v-timeline>
            <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              large
              icon="mdi-trophy-award"
            >
              <template v-slot:opposite>
                <span
                  :class="`headline font-weight-bold ${year.color}--text`"
                  v-text="year.year"
                ></span>
              </template>
              <div class="py-4">
                <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`"
                  v-for="(premio,i) in year.Premios" :key="i"
                >{{premio}}</h2>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </v-col>
      <v-col cols="12">
        <v-divider color="black"/>
      </v-col>
      <v-col cols="12" style="color:#283593" justify="center" align="left">
        <v-container>
          <h1 class="headline font-weight-bold">Galería</h1>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name:'Reconocimientos',
    data() {
      return {
        years: [
          {
            color: 'cyan',
            year: '2000',
            Premios: [
              'Cinta Roja y Blanca.',
            ],
          },
          {
            color: 'green',
            year: '2001',
            Premios: [
              'Cinta Roja y Blanca.',
            ],
          },
          {
            color: 'pink',
            year: '2002',
            Premios: [
              'Cinta Roja y Blanca.',
              'Empresa Peruana del Año.'
            ],
          },
          {
            color: 'red',
            year: '2003',
            Premios: [
              'Cinta Roja y Blanca.',
              'Empresa Peruana del Año.',
              'Excelencia Empresaria.'
            ],
          },
          {
            color: 'orange',
            year: '2004',
            Premios: [
              'Cinta Roja y Blanca.',
            ],
          },
          {
            color: 'cyan',
            year: '2005',
            Premios: [
              'Empresa Peruana del Año.'
            ],
          },
          {
            color: 'green',
            year: '2008',
            Premios: [
              'Éxito Awards.',
              'Empresa de Bandera Peruana.'
            ],
            
          },
          {
            color: 'pink',
            year: '2012',
            Premios: [
              'Empresa Peruana del Año.' 
            ],
          },
        ]
      }
    },  
}
</script>

<style>

</style>