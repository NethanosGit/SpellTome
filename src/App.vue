<template>
  <v-app>
    <v-main class="bg-brown-darken-5">
      <Navbar></Navbar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
.bg-brown-darken-5 {
  background: #181310;
}

.text-brownish {
  color: #d9c8bf !important;
}

:root {
  --brown-light-5: #d9c8bf;
  --brown-darken-5: #181310;
}
</style>
