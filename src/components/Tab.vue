<template>
  <v-app>
    <div class="divsection">
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <!-- <v-list color="#859ae0">
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
          </v-list> -->
        </v-col>
        <v-col md="2"> <v-divider vertical align="center"></v-divider></v-col>
        <v-col cols="12" sm="6" md="5">
          <!-- <v-list color="#859ae0">
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
          </v-list> -->
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
    items: [
      {
        action: "mdi-ticket",
        items: [{ title: "List Item" }],
        title: "Attractions",
      },
      {
        action: "mdi-silverware-fork-knife",
        active: true,
        items: [
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
        ],
        title: "Dining",
      },
      {
        action: "mdi-school",
        items: [{ title: "List Item" }],
        title: "Education",
      },
    ],
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
