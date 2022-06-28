<template>
 
    <v-app> <Barra /> <Inicio  style="margin-top: -50px"> </Inicio> <Tab></Tab> </v-app>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'
import Barra from "../components/Barra.vue";
import Tab from "../components/Tab.vue"

export default {
  name: 'Home',
  components: {
    Inicio,
    Barra,
    Tab, 
  
  }
}
</script>
