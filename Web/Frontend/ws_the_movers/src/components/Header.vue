<template>
    <v-app-bar
      app
      fixed
      flat
      color="white"
    >
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          src="../assets/Logo_WS.png"
          transition="scale-transition"
          width="130"
        />
      </div>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
       <v-btn v-for="item in menu" :key="item.title" :to="item.link"  text>{{
            item.title
          }}</v-btn>
      </v-toolbar-items>   

      <v-menu 
        offset-y v-if="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            v-bind="attrs"
            v-on="on"
            text
            >
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </template>
        <v-list 
        dense>
            <v-list-item
                v-for="(item, index) in menu"
                :key="index"
                :to="item.link"
            >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Header',
    data (){
        return{
            menu: [
            { icon: "home", title: "Inicio",link:'/'  },
            { icon: "info", title: "Nosotros",link:'/nosotros' },
            { icon: "warning", title: "Servicios",link:'/servicios' },
            { icon: "home", title: "Cotizador",link:'/Cotizador' },
            { icon: "info", title: "Testimonios",link:'/Testimonios'  },
            { icon: "warning", title: "Contacto",link:'/Contacto'  },            
            ],
        }
    },
    methods: {
    }
}
</script>

<style>

</style>