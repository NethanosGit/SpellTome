<template>
  <v-app-bar
    class="text-white"
    :border="true"
    color="transparent"
    density="compact"
    :elevation="0"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon>
        <img src="../img/icons/android-chrome-192x192.png" class="dnd-logo" />
      </v-app-bar-nav-icon>
      <v-app-bar-title text="SpellCraft"></v-app-bar-title>
      <v-btn-toggle
        v-model="navSelection"
        rounded="1"
        density="compact"
        variant="text"
        color="red"
        class="text-brownish mx-3"
        group
      >
        <v-btn value="spells" to="/">Spells</v-btn>
      </v-btn-toggle>
    </template>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";

const navSelection = ref("spells");
</script>
<style>
.dnd-logo {
  width: 42px;
}
</style>
