<template>
  <v-app>
   <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
//import { get } from "./getProvince";

export default {
  name: 'App',
  dark: false,
  data: () => ({
    //
  }),
  mounted(){
    this.$store.commit("url");
  }
};
</script>
