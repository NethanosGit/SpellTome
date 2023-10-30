<template>
  <v-app>
    <v-main class="bg-image">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  }),
};
</script>
<style>
.bg-image {
  background: #f9f9f9 url("./assets/components/background-dark.png") repeat;
}
</style>
