import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { API_URL } from "@/common/config";
export default new Vuex.Store({
  state: {
    province: [],
    provincias: [],
    municipio: [],
    municipios: [],
    url: ''
  },
  mutations: {
    logout(){
      sessionStorage.removeItem('token');
    },
    url(state){
       state.url =  API_URL
    },
    getMunicipios(state) {
      try {
        async function asyncData() {
          const response = await fetch(
            "https://apis.datos.gob.ar/georef/api/localidades?orden=nombre&max=300"
          );
          const data = await response.json();
          return data;
        }
        const result = asyncData();
        result.then((data) => {
          console.log(data);
          state.municipio = data;
        //  console.log(state.municipio);
        });
      } catch (e) {
        console.log(e);
      }
      setTimeout(function () {
        state.municipios = state.municipio.localidades;
      //  console.log(state.municipios);
      }, 1000);
    },
    get(state) {
      try {
        async function asyncData() {
          const response = await fetch(
            "https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.2/download/provincias.json"
          );
          const data = await response.json();
          return data;
        }
        const result = asyncData();
        result.then((data) => {
       //   console.log(data);
          state.province = data;
          //console.log(state.province);
        });
      } catch (e) {
        console.log(e);
      }
      setTimeout(function () {
        state.provincias = state.province.provincias;
      }, 1000);
    },
  },
  actions: {},
  modules: {},
});
