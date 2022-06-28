<template>
  <v-app>
    <div class="fondo">
      <div style="margin-top: 150px">
        <v-card
          color=""
          darkfull-header
          class="mx-auto"
          max-width="330"
          height="450"
          elevation="24"
          v-if="recuperar == 0"
        >  
     
          <p class="ptitle">Ingresar</p>

          <p class="psubtitle">Email / Contraseña</p>
         <v-divider></v-divider>
         <br><br>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12">
                  <v-text-field
                    v-model="usuario"
                    label="EMAIL"
                    counter
                    required
                    :rules="emailRules"
                    append-icon="mdi-email"
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
                    label="CONTRASEÑA"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                    v-on:keyup.enter="comprobar"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

          <v-card-text class="text--primary">
            <div></div>

            <div></div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              style="margin-top: 40px"
              color="black"
              text
              @click="comprobar"
            >
              Ingresar
            </v-btn>

            <v-btn
              style="margin-left: 90px; margin-top: 40px"
              color="black"
              text
              @click="mustraPantalla()"
            >
              Registrarse
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({
    ruta: "",
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
    usuario: "example@gmail.com",
    rules: {
      required: (value) => !!value || "Requerido.",
      min: (v) => v.length >= 8 || "Minimo 8 caracteres",
    },
  }),
  created() {},
  methods: {
    comprobar() {
      console.log(this.$store.state.url);
      var obj = this;

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
            `${obj.$store.state.url}auth/login`,
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
<style scoped>
.ptitle {
  text-align: center;
  color: rgb(6, 6, 6);
  font-size: 22px;
 
}
.psubtitle {
  text-align: center;
}
.fondo {
  background-image: url("../assets/86708-vacas.jpg");

  height: 900px;
}
</style>
