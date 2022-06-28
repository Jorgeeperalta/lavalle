<template>
  <v-responsive class="overflow-y-auto">
    <v-lazy class="mx-auto my-12">
      <div class="contenedor">
        <img src="@/assets/playa.jpg" class="responsive" />
        <div class="texto-encima"><h1 class="hwhite"></h1></div>
        <div class="centrado">
          <h1 class="hblue">{{ titulo }}</h1>
        </div>
      </div>
    </v-lazy></v-responsive
  >
</template>

<script>
export default {
  data: () => ({
    titulo: "Sistema Gestion Empresas",
  }),
};
</script>

<style>
.contenedor {
  position: relative;
  display: inline-block;
  text-align: center;
}
.texto-encima {
  position: absolute;
  top: 20px;
  left: 10px;
}
.hwhite {
  color: white;
}
.hblue {
  font-size: 80px;
  color: rgb(6, 6, 113);
}
.centrado {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.responsive {
  width: 100%;
  height: 900px;
}
</style>
