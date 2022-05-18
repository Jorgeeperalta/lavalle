<template>
  <v-app>
    <v-sheet id="scrolling-techniques-4" class="overflow-y-auto">
    <v-app-bar
        absolute
        color="purple accent-4"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-5"
        scroll-threshold="150"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
        <v-btn icon  href="/login">
          <v-icon >mdi-account</v-icon>
        </v-btn>
       

        <v-spacer></v-spacer>
      </v-app-bar>
    </v-sheet>

    <div class="fondo">
      <v-row>
        <v-col cols="12">
          <template>
            <v-parallax
              dark
                 src="https://picsum.photos/1920/1080?random"
              height="900"
            >
              <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                  <h1 class="display-4 font-weight-thin mb-3">
                   General Lavalle
                  </h1>
                  <h4 class="subheading">
                    Sistema integral ganadero
                  </h4>
                </v-col>
              </v-row>
            </v-parallax>
          </template>
        </v-col>
        <v-col> </v-col>
      </v-row>
      <div>
        <v-row>
          <v-col md="6">
            <template>
              <v-container>
                <v-row>
                  <v-card>
                    <v-img
                      height="200px"
                      src="https://i.ibb.co/TLKPktk/True-hard-worker-Cropped-closeup-of-a-strong-muscular-male-holding-a-dumbbell-posing-against-black-b.jpg"
                    >
                      <v-app-bar flat color="rgba(0, 0, 0, 0)">
                        <!-- <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon> -->

                        <v-toolbar-title class="title white--text pl-0">
                          Messages
                        </v-toolbar-title>

                        <v-spacer></v-spacer>

                        <!-- <v-btn color="white" icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn> -->
                      </v-app-bar>

                      <v-card-title class="white--text mt-8">
                        <!-- <v-avatar size="56">
                      <img alt="user" src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg">
                    </v-avatar>
                    <p class="ml-3">
                      John Doe
                    </p> -->
                      </v-card-title>
                    </v-img>

                    <v-card-text class="targeta">
                      <div class="font-weight-bold ml-8 mb-2">
                        Today
                      </div>

                      <v-timeline align-top dense>
                        <v-timeline-item
                          v-for="message in messages"
                          :key="message.time"
                          :color="message.color"
                          small
                        >
                          <div>
                            <div class="font-weight-normal">
                              <strong>{{ message.from }}</strong> @{{
                                message.time
                              }}
                            </div>
                            <div>{{ message.message }}</div>
                          </div>
                        </v-timeline-item>
                      </v-timeline>
                    </v-card-text>
                  </v-card>
                </v-row>
              </v-container>
            </template>
          </v-col>
          <!-- <v-img height="200px" src="https://i.ibb.co/1XZgTZK/Captura-de-pantalla-2021-03-17-092734.png"> -->
          <v-col md="6">
            <template>
              <v-container>
                <v-row justify="space-around">
                  <v-card>
                    <v-img
                      height="200px"
                      src="https://i.ibb.co/s2v91M8/Muscular-young-woman-athlete-with-a-skipping-rope-drinking-water-on-black-background.jpg"
                    >
                      <v-app-bar flat color="rgba(0, 0, 0, 0)">
                        <!-- <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon> -->

                        <v-toolbar-title class="title white--text pl-0">
                          Messages
                        </v-toolbar-title>

                        <v-spacer></v-spacer>

                        <!-- <v-btn color="white" icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn> -->
                      </v-app-bar>

                      <v-card-title class="white--text mt-8">
                        <!-- <v-avatar size="56">
                      <img alt="user" src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg">
                    </v-avatar>
                    <p class="ml-3">
                      John Doe
                    </p> -->
                      </v-card-title>
                    </v-img>

                    <v-card-text class="targeta">
                      <div class="font-weight-bold ml-8 mb-2">
                        Today
                      </div>

                      <v-timeline align-top dense>
                        <v-timeline-item
                          v-for="message in messages"
                          :key="message.time"
                          :color="message.color"
                          small
                        >
                          <div>
                            <div class="font-weight-normal">
                              <strong>{{ message.from }}</strong> @{{
                                message.time
                              }}
                            </div>
                            <div>{{ message.message }}</div>
                          </div>
                        </v-timeline-item>
                      </v-timeline>
                    </v-card-text>
                  </v-card>
                </v-row>
              </v-container>
            </template>
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col md="6">
          <div style="width: 70%; margin: 0px auto;">
            <br />
            <h4>UN PLAN A TU MEDIDA</h4>
            <h1>Estás a un paso de una vida más sana y activa</h1>
            <br />
            <h2>
              Mirá todo lo que incluye nuestro Plan Total Anual. Si querés más
              información, escribinos.
            </h2>
            <h3>Clases y entrenamientos online</h3>
            <h3>Matrícula bonificada</h3>
          </div>
        </v-col>

        <v-col md="6">
          <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="child in item.items" :key="child.title">
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-row class="inner">
          <v-col md="6">
            <div style="width: 70%; margin: 0px auto;">
              <br />
              <h1>{{ encadireccion }}</h1>
              <br />
              <h2>{{ direccion }}</h2>
              <h3>{{ textoinformativo }}</h3>
            </div>
          </v-col>
          <v-col md="6">
            <template>
              <vl-map
                data-projection="EPSG:4326"
                style="height: 360px;  width: 780px"
              >
                <vl-view
                  :zoom.sync="zoom"
                  :center.sync="center"
                  :rotation.sync="rotation"
                ></vl-view>

                <vl-layer-tile>
                  <vl-source-osm></vl-source-osm>
                </vl-layer-tile>

                <vl-feature>
                  <vl-feature>
                    <vl-geom-point
                      :coordinates="[-56.704639612001095, -36.48966469083406]"
                    ></vl-geom-point>

                    <vl-style-box>
                      <vl-style-circle :radius="25">
                        <vl-style-fill color="green"></vl-style-fill>
                        <vl-style-stroke color="red"></vl-style-stroke>
                      </vl-style-circle>
                      <vl-style-text
                        text="Gimnasio Vero"
                        font="20px monospace"
                      ></vl-style-text>
                    </vl-style-box>
                  </vl-feature>
                </vl-feature>
              </vl-map>
            </template>
          </v-col>
        </v-row>
      </v-row>
      <v-row>
        <v-col md="6">
          <div style="width: 70%; margin: 0px auto;">
            <h1>
              Encontranos en nuestras redes sociales para conocer más sobre
              nuestra sede y poder contactarnos. Todos Los Derechos Reservados
            </h1>
          </div>
        </v-col>
        <v-col md="6">
          <div style="width: 70%; margin: 0px auto;"></div>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    encadireccion: "Ubicacion del Gimnasio",
    direccion: "Calle 28 entre 23 y 21 Las toninas, Partido de La Costa",
    textoinformativo: "A pasitos de la terminal",
    items: [
      {
        action: "mdi-ticket",
        items: [
          {
            title: "List Item",
          },
        ],
        title: "Attractions",
      },
      {
        action: "mdi-silverware-fork-knife",
        active: true,
        items: [
          {
            title: "Breakfast & brunch",
          },
          {
            title: "New American",
          },
          {
            title: "Sushi",
          },
        ],
        title: "Dining",
      },
      {
        action: "mdi-school",
        items: [
          {
            title: "List Item",
          },
        ],
        title: "Education",
      },
      {
        action: "mdi-run",
        items: [
          {
            title: "List Item",
          },
        ],
        title: "Family",
      },
      {
        action: "mdi-bottle-tonic-plus",
        items: [
          {
            title: "List Item",
          },
        ],
        title: "Health",
      },
      {
        action: "mdi-content-cut",
        items: [
          {
            title: "List Item",
          },
        ],
        title: "Office",
      },
      {
        action: "mdi-tag",
        items: [
          {
            title: "List Item",
          },
        ],
        title: "Promotions",
      },
    ],
    zoom: 17,
    center: [-56.702517940538876, -36.48986763101459],
    rotation: 0,
    messages: [
      {
        from: "Horarios",
        message: `Amplios horarios`,
        time: "09:00am a 21:00pm",
        color: "deep-purple lighten-1",
      },
      {
        from: "Ambiente",
        message: "Espacios climatizados",
        time: "En todo momento",
        color: "green",
      },
      {
        from: "Alimentación",
        message: "App de nutricion gratuita",
        time: "9:47am",
        color: "deep-purple lighten-1",
      },

      {
        from: "You",
        message: "Wi-Fi",
        time: "Gratis",
        color: "deep-purple lighten-1",
      },
    ],
  }),
};
</script>

<style>
.outer {
  position: relative;
  width: 100%;
  height: 400px;

  background-color: #6381e4;
}

.inner {
  width: 100%;

  background-color: #8e91e4;
  height: 400px;
}

.fondo {
  width: 100%;
  height: 200px;
  background-color: #19193a;
}

.targeta {
  width: 100%;
  height: 600px;
  background-color: #788aeea6;
}

.divdireccion {
  display: table;
  margin-right: auto;
  margin-left: auto;
}
.divplan {
  display: table;
  margin-right: auto;
  margin-left: auto;
}
</style>
