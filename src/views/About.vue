<template>
  <v-app id="inspire">
    <v-img :src="require('@/assets/86708-vacas.jpg')">
      <v-app-bar app clipped-right flat height="72">
        <v-icon @click="(drawer = !drawer), (mini = !mini)">
          {{ mini ? "mdi-format-list-bulleted" : "mdi-dots-vertical" }}
        </v-icon>
        <v-spacer></v-spacer>

        <h3 style="text-align: center">{{ title }}</h3>

        <v-spacer></v-spacer>
        <v-icon @click="logout()">mdi-logout</v-icon>
        <!-- <v-responsive max-width="156">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            background-color="grey lighten-2"
          ></v-text-field>
        </v-responsive> -->

        <div id="settings-wrapper">
          <v-menu
            rounded="lg"
            style="margin-top: -150px"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            nudge-left="20"
            offset-y
            origin="top right"
            content-class="v-settings"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-card
                id="settings"
                class="py-2 px-4"
                color="rgba(0, 0, 0, .3)"
                dark
                flat
                link
                min-width="100"
                min-height="50"
                style="
                  position: fixed;
                  top: 115px;
                  right: -35px;
                  border-radius: 8px;
                  z-index: 1;
                "
              >
                <v-icon
                  v-show="!hidden"
                  style="top: 0px"
                  fab
                  color="rgba(0, 0, 0, .3)"
                  x-large
                  absolute
                  bottom
                  left
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-cog</v-icon
                >
              </v-card>
            </template>

            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <img :src="require('@/assets/20210620_165438.jpg')" />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{ usuarioNombre }}</v-list-item-title>
                    <v-list-item-subtitle
                      >Founder of Vuetify</v-list-item-subtitle
                    >
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn
                      :class="fav ? 'red--text' : ''"
                      icon
                      @click="fav = !fav"
                    >
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-item>
                  <v-list-item-action>
                    <v-switch
                      v-model="$vuetify.theme.dark"
                      hint=""
                      inset
                      label="Dark/Light"
                      persistent-hint
                      color="purple"
                    ></v-switch>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action>
                    <v-switch v-model="hints" color="purple"></v-switch>
                  </v-list-item-action>
                  <v-list-item-title>En desarrollo</v-list-item-title>
                </v-list-item>
              </v-list>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="menu = false"> Cancel </v-btn>
                <v-btn color="primary" text @click="menu = false"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute>
        <h3 style="text-align: center">Pantallas</h3>

        <v-divider color="white" class="mx-3 my-5"></v-divider>

        <div
          v-for="n in pantalla"
          :key="n.id"
          class="d-block text-center mx-auto mb-1"
          color="grey lighten-1"
          size="28"
        >
          <h4
            onMouseover="this.style.color='red'"
            onMouseout="this.style.color='black'"
            style="text-align: left"
            outlined
            @click="content(n)"
            block
          >
            <v-icon :color="n.color">{{ n.mdi }}</v-icon>
            {{ n.name }}
          </h4>
        </div>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <v-row>
            <v-col>
              <v-lazy
                dark
                v-if="title == 'ESTABLECIMIENTOS'"
                style="margin-top: -50px"
                color="grey darken-1"
                min-height="70vh"
                rounded="xl"
                @click="(drawer = false), (mini = !mini)"
              >
                <establecimientos></establecimientos>
              </v-lazy>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <v-responsive max-width="156">
        <v-footer app height="72" inset>
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
import establecimientos from "../components/Establecimientos.vue";
export default {
  components: {
    establecimientos,
  },
  data: () => ({
    hidden: false,
    fav: true,
    menu: false,
    message: false,
    hints: true,
    usuarioNombre: "",
    drawer: true,
    mini: true,
    numero: 0,
    title: "",
    pantalla: [
      // {
      //   id: 1,
      //   name: "ESTABLECIMIENTOS",
      //   mdi: "mdi-checkbox-blank-outline",
      //   color: "red lighten-1",
      // },
      // {
      //   id: 2,
      //   name: "POTREROS",
      //   mdi: "mdi-shape-polygon-plus",
      //   color: "purple lighten-2",
      // },
      // { id: 3, name: "ANIMALES", mdi: "mdi-cow", color: "blue lighten-1" },
      // {
      //   id: 4,
      //   name: "GRUPOS/CATEGORIAS",
      //   mdi: "mdi-sitemap",
      //   color: "teal lighten-1",
      // },
      // {
      //   id: 5,
      //   name: "PANEL DE CONTROL",
      //   mdi: "mdi-timetable",
      //   color: "lime accent-3",
      // },
    ],
  }),
  computed: {},
  mounted() {
    this.usuarioNombre = sessionStorage.user;
    console.log(this.usuarioNombre);
    this.initialize();
    this.comprueba()
  },
  methods: {
    comprueba(){
       if(!sessionStorage.token){
             window.location = "/";
       }
    },
    logout() {
      this.$store.commit("logout");
      window.location = "/";
    },
    initialize() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + sessionStorage.token + "");
      myHeaders.append("Cookie", "lang=en");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      async function asyncData() {
        const response = await fetch(
          "http://localhost:3001/api/pantallas",
          requestOptions
        );
        const data = await response.json();

        return data;
      }

      const result = asyncData();

      result.then((data) => {
        this.pantalla = data;
        this.pantalla = this.pantalla.result;
        console.log(data);
      });
      setTimeout(() => {
        if (this.pantalla == "") {
          window.location = "/login";
        }
      }, 500);
    },
    content(n) {
      this.numero = n;
      //   console.log(n);
      this.title = n.name;
    },
  },
};
</script>
<style lang="sass">
.v-settings
  .v-item-group > *
    cursor: pointer

  &__item
    border-width: 3px
    border-style: solid
    border-color: transparent !important

    &--active
      border-color: #00cae3 !important
</style>
