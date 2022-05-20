<template>
  <v-app id="inspire">
    <v-img  :src="require('@/assets/86708-vacas.jpg')">
      <v-app-bar color="grey darken-1" app clipped-right flat height="72">
        <v-icon @click="(drawer = !drawer), (mini = !mini)">
          {{ mini ? "mdi-format-list-bulleted" : "mdi-dots-vertical" }}
        </v-icon>
        <v-spacer></v-spacer>
        <h3 style="text-align:center">{{ title }}</h3>

        <v-spacer></v-spacer>

        <v-responsive max-width="156">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
             background-color="grey lighten-2"
          ></v-text-field>
        </v-responsive>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute color="grey lighten-2" >
        <v-avatar
          class="d-block text-center mx-auto mt-4"
          color="grey darken-1"
          size="36"
          ><img :src="require('@/assets/20210620_165438.jpg')"></v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>

        <div
          v-for="n in pantalla"
          :key="n.id"
          class="d-block text-center mx-auto mb-1"
          color="grey lighten-1"
          size="28"
        >
          <h4 style="text-align: left" outlined @click="content(n)" block>
            <v-icon>{{ n.mdi }}</v-icon>
            {{ n.name }}</h4
          >
        </div>
      </v-navigation-drawer>

      <!-- <v-main >
        <v-container @click="drawer=false">
           
        {{ numero }}
        </v-container>
      </v-main> -->
       <v-main >
      <v-container>
        <v-row>
          

          <v-col>
            <v-sheet
              color="black"
              min-height="70vh"
              rounded="lg"
               @click="drawer=false, mini = !mini"
            > 
             <establecimientos v-if="title == 'ESTABLECIMIENTOS'"></establecimientos>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
      <v-responsive max-width="156">
        <v-footer app color="grey darken-1" height="72" inset>
          <v-text-field
            background-color="grey lighten-2"
            dense
            flat
            hide-details
            rounded
            solo
          ></v-text-field>
          <!-- <v-btn>Buscar</v-btn> -->
        </v-footer>
      </v-responsive>
    </v-img>
  </v-app>
</template>

<script>
import establecimientos from "../components/Establecimientos.vue"
export default {
  components:{
        establecimientos
  },
  data: () => ({
    drawer: true,
    mini: true,
    numero: 0,
    title: "",
    pantalla: [
      { id: 1, name: "ESTABLECIMIENTOS", mdi: "mdi-checkbox-blank-outline" },
      { id: 2, name: "POTREROS", mdi: "mdi-shape-polygon-plus" },
      { id: 3, name: "ANIMALES", mdi: "mdi-cow" },
      { id: 4, name: "GRUPOS/CATEGORIAS", mdi: "mdi-sitemap" },
      { id: 5, name: "PANEL DE CONTROL", mdi: "mdi-timetable" },
    ],
  }),
  computed: {},
  mounted() {},
  methods: {
    content(n) {
      this.numero = n;
      console.log(n);
      this.title = n.name;
    },
  },
};
</script>
