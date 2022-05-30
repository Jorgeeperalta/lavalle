<template>
  <v-app>
    <v-img :src="require('@/assets/86708-vacas.jpg')">
      <div style="margin-top: 150px">
        <v-card
          color="light-green lighten-2"
          darkfull-header
          class="mx-auto"
          max-width="400"
          height="400"
          v-if="recuperar == 0"
        >
          <v-card-title class="text-h5 grey lighten-2"> Login </v-card-title>

          <!-- <v-parallax
        src="https://imgsvr.radiocut.site/get/thumb/600/600/cuts_logos/d5/6c/d56c8368-b37f-4997-8cf6-328b2262cdcd.jpg"
      > -->
          <br /><br />

          <template>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="usuario"
                      label="Email"
                      hint=""
                      counter
                      required
                      :rules="emailRules"
                    >
                    </v-text-field>
                    <div prepend-icon="email"></div>
                  </v-col>
                  <br />

                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="INGRESE PASSWORD"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                      v-on:keyup.enter="comprobar"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </template>

          <v-card-text class="text--primary">
            <div></div>

            <div></div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="lime accent-3" text @click="comprobar">
              Ingresar
            </v-btn>

            <v-btn color="blue lighten-4" text @click="mustraPantalla()">
              Registrarse
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-img>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({
    emailRules: [
      (v) => !!v || "E-mail o nombre de usuario es requerido",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    dataLogin: [],
    recuperar: 0,
    snackbar: false,
    text: `Error de usuario o contraseña`,
    show1: false,
    aux_next: "",
    valid: "",
    next: "NO",
    password: "12345678",
    usuario: "admin",
    rules: {
      required: (value) => !!value || "Requerido.",
      min: (v) => v.length >= 8 || "Minimo 8 caracteres",
    },
  }),
  methods: {
    comprobar() {
      sessionStorage.token = 1;
      if (this.usuario != "" && this.password != "") {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "lang=en");

        var raw = JSON.stringify({
          email: this.usuario,
          password: this.password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow",
          body: raw,
        };

        async function asyncData() {
          const response = await fetch(
            "http://localhost:3001/api/auth/login",
            requestOptions
          );
          const data = await response.json();

          return data;
        }

        const result = asyncData();

        result.then((data) => {
          sessionStorage.token = data.data.token;
          sessionStorage.user = data.data.user.name;
          sessionStorage.role = data.data.user.role;
          sessionStorage.id = data.data.user.id;
          console.log(data.data.token);
          console.log(data);
          this.muestraPantalla();
        });
      }
    },

    muestraPantalla() {
      if (sessionStorage.token == "undefined") {
        this.$swal
          .fire({
            title: "Error de usuario o contraseña!!",
            showDenyButton: true,
            confirmButtonText: `Pantalla de Inicio`,
            denyButtonText: `Intenta una vez mas`,
          })
          .then((result) => {
            if (result.isConfirmed) {
              window.location = "/inicio";
            } else if (result.isDenied) {
              window.location = "/login";
              this.password = "";
              this.usuario = "";
            }
          });
      } else {
        window.location = "/about";
      }
    },

    validate() {
      if (this.$refs.form.validate()) {
        this.close();
      }
    },
  },
};
</script>
