<template>
  <v-app-bar
    class="text-white"
    color="transparent"
    density="compact"
    :elevation="1"
  >
    <v-app-bar-nav-icon class="ml-6">
      <img src="../img/logos/DND-logo.png" class="dnd-logo" />
    </v-app-bar-nav-icon>

    <v-btn-toggle
      v-model="navSelection"
      rounded="1"
      density="compact"
      variant="text"
      color="red"
      class="text-brownish"
      group
    >
      <v-btn value="spells" to="/">Spells</v-btn>
      <v-btn value="rules" to="/rules">Rules</v-btn>
      <v-btn value="settings" to="/settings">Settings</v-btn>
    </v-btn-toggle>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";

const navSelection = ref("spells");
</script>
<style>
.dnd-logo {
  width: 60px;
}
</style>
