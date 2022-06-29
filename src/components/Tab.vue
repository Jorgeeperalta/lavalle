<template>
  <v-app>
    <div class="divsection">
      <v-row>
        <v-col cols="12" sm="6" md="3">
         
        </v-col>
        <v-col md="2"> <v-divider vertical align="center"></v-divider></v-col>
        <v-col cols="12" sm="6" md="5">
         
        </v-col>
      </v-row>
    </div>
  
    <Section></Section>
    
  </v-app>
</template>

<script>
import Section from "../components/Section.vue";
export default {
  components: {
    Section,
  },
  data: () => ({
 
  }),
};
</script>

<style scoped>
.divsection {
  margin-top: -55px;
  background-color: #0f24689a;
  height: 150px;
}
</style>
