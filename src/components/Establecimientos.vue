<template>
  <v-data-table
    :headers="headers"
    :items="establecimientos"
    sort-by="ubicacion"
    class="elevation-5"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title outlined flat>ESTABLECIMIENTOS</v-toolbar-title>
        <v-divider color="white" class="mx-4" inset vertical></v-divider>

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="getProvincias(), getMunicipios(), (editedIndex = -1)"
              outlined
              color="green"
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Nuevo Item
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.ubicacion"
                      label="Ubicacion"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      :items="countries"
                      item-text="name"
                      item-value="name"
                      v-model="editedItem.pkCountry"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      :items="province"
                      item-text="nombre"
                      item-value="name"
                      v-model="editedItem.pkProvince"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      :items="municipios"
                      item-text="nombre"
                      item-value="name"
                      v-model="editedItem.pkState"
                    >
                    </v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" outlined @click="close"> Cancelar </v-btn>
              <v-btn color="green" outlined @click="save"> Gardar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Esta seguro de eliminar este item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancelar</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        color="yellow"
        small
        class="mr-2"
        @click="
          editItem(item), (editedIndex = 1), getProvincias(), getMunicipios()
        "
      >
        mdi-pencil
      </v-icon>
      <v-icon color="red" small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    establecimientos: [],
    municipios: [],
    countries: [
      {
        id: 0,
        name: "ARGENTINA",
      },
      { id: 1, name: "BRASIL" },
      {
        id: 2,
        name: "PARAGUAY",
      },
    ],
    pkItem: 0,
    usuarioNombre: "",
    province: [],
    provincias: [],
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "ubicacion", value: "ubicacion" },
      { text: "Pais", value: "fkpais" },
      { text: "Provincia", value: "fkprovincia" },
      { text: "Localidad", value: "fklocalidad" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    editedIndex: -1,
    editedItem: {
      name: "",
      ubicacion: 0,
      pkCountry: "",
      pkProvince: "",
      pkState: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Item" : "Edita Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
    this.$store.commit("getProvincias");
    this.$store.commit("getMunicipios");
  },
  mounted() {
    this.usuarioNombre = sessionStorage.user;
  },

  methods: {
    getProvincias() {
      this.province = this.$store.state.provincias;
    },
    getMunicipios() {
      this.municipios = this.$store.state.municipios;
    },

    initialize() {
      var obj = this;

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
          `${obj.$store.state.url}establecimientos`,
          requestOptions
        );
        const data = await response.json();

        return data;
      }

      const result = asyncData();

      result.then((data) => {
        this.establecimientos = data;
        this.establecimientos = this.establecimientos.result;
        console.log(data);
      });

      setTimeout(() => {
        this.comprueba();
      }, 7300000);
    },
    comprueba() {
      this.$store.commit("logout");
      console.log(sessionStorage.token);
      window.location = "/";
    },
    editItem(item) {
      this.editedItem = item;
      this.pkItem = item.id;

      this.dialog = true;
    },

    deleteItem(item) {
      this.pkItem = item.id;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + sessionStorage.token + "");

      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,

        redirect: "follow",
      };

      const promise = Promise.race([
        fetch(
          "http://localhost:3001/api/establecimientos/" + this.pkItem,
          requestOptions
        ).then((response) => response.text()),
        new Promise((resolve, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 520000)
        ),
      ]);

      promise.then((result) => console.log(result), this.initialize()),
        promise.catch((error) => console.log(error));
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        const myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          "Bearer " + sessionStorage.token + ""
        );
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          name: this.editedItem.name,
          ubicacion: this.editedItem.ubicacion,
          fkpais: this.editedItem.pkCountry,
          fkprovincia: this.editedItem.pkProvince,
          fklocalidad: this.editedItem.pkState,
          fkusuario: sessionStorage.id,
        });

        const requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        const promise = Promise.race([
          fetch(
            "http://localhost:3001/api/establecimientos/" + this.pkItem,
            requestOptions
          ).then((response) => response.text()),
          new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 520000)
          ),
        ]);

        promise.then((result) => console.log(result), this.initialize()),
          promise.catch((error) => console.log(error));
      } else {
        const myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          "Bearer " + sessionStorage.token + ""
        );
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          name: this.editedItem.name,
          ubicacion: this.editedItem.ubicacion,
          fkpais: this.editedItem.pkCountry,
          fkprovincia: this.editedItem.pkProvince,
          fklocalidad: this.editedItem.pkState,
          fkusuario: sessionStorage.id,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        const promise = Promise.race([
          fetch(
            "http://localhost:3001/api/establecimientos",
            requestOptions
          ).then((response) => response.text()),
          new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 520000)
          ),
        ]);

        promise.then((result) => console.log(result), this.initialize()),
          promise.catch((error) => console.log(error));
      }
      this.close();
    },
  },
};
</script>
<style scoped></style>
