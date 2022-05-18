<template>
  <v-app id="inspire">
    <v-img :src="require('@/assets/86708-vacas.jpg')">
      <v-app-bar app clipped-right flat height="72">
        <v-icon @click="(drawer = !drawer), (mini = !mini)">
          {{ mini ? "mdi-format-list-bulleted" : "mdi-dots-vertical" }}
        </v-icon>
        <v-spacer></v-spacer>
        <h3>{{ title }}</h3>

        <v-spacer></v-spacer>

        <v-responsive max-width="156">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute color="grey lighten-3">
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
          <v-label style="text-align: left" outlined @click="content(n)" block>
            <v-icon>{{ n.mdi }}</v-icon>
            {{ n.name }}</v-label
          >
        </div>
      </v-navigation-drawer>

      <v-main>
        {{ numero }}
      </v-main>
      <v-responsive max-width="156">
        <v-footer app color="grey blue-3" height="72" inset>
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
export default {
  data: () => ({
    drawer: true,
    mini: true,
    numero: 0,
    title: "",
    pantalla: [
      { id: 1, name: "usuarios", mdi: "mdi-airballoon" },
      { id: 2, name: "establecimentos", mdi: "mdi-skype" },
      { id: 3, name: "categoriaGanado", mdi: "mdi-soccer" },
      { id: 4, name: "potreros", mdi: "mdi-smoking" },
      { id: 5, name: "cantGanado", mdi: "mdi-star-half" },
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
