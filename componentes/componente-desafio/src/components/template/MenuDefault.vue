<template>
  <v-navigation-drawer app>
    <menu-default />
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Menu</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <itens-menu />
  </v-navigation-drawer>
</template>
<script>
import ItensMenu from "./ItensMenu";
export default {
  components: { "itens-menu": ItensMenu }
};
</script>
