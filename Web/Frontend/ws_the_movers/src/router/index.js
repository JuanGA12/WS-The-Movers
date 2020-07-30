import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Nosotros from '../views/Nosotros.vue'
import Servicios from '../views/Servicios.vue'
import Cotizador from '../views/Cotizador.vue'
import Testimonios from '../views/Testimonios.vue'
import Contacto from '../views/Contacto.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Incio',
      component: Inicio
    },
    {
      path: '/nosotros',
      name: 'Nostros',
      component: Nosotros
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: Servicios
    },
    {
      path: '/cotizador',
      name: 'Cotizador',
      component: Cotizador
    },
    {
      path: '/testimonios',
      name: 'Testimonios',
      component: Testimonios
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
