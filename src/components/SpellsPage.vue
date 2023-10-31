<template>
  <v-container class="w-100 d-flex-inline">
    <v-row class="faded-background w-auto d-flex justify-center">
      <v-divider
        :thickness="2"
        class="border-opacity-100"
        color="red"
      ></v-divider>
      <v-slide-group
        :direction="horizontal"
        v-model="selectedClass"
        class="ma-0"
        multiple
      >
        <v-slide-group-item
          v-for="dndClass in classes"
          :key="dndClass"
          v-slot="{ isSelected, toggle }"
        >
          <v-btn
            :color="isSelected ? '#312721' : 'transparent'"
            elevation="0"
            class="pa-0 ma-0 h-auto rounded-2"
            :border="false"
            @click="toggle"
          >
            <v-col class="pa-0 ma-0 d-flex flex-column h-auto align-center"
              ><img
                class="class-filter-icon"
                v-bind:src="'./img/classes/' + dndClass + '-icon.png'"
              />
              <div class="text-brownish text-size-12">
                {{ dndClass }}
              </div>
            </v-col>
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
      <v-divider
        :thickness="2"
        class="border-opacity-100"
        color="red"
      ></v-divider>
    </v-row>
  </v-container>
</template>
<script setup>
/* eslint-disable */
import phbData from "../assets/5EToolsData/phb_5eTools.json";
import { ref } from "vue";
import _ from "lodash";

const selectedClass = ref(null);
const classes = ref([
  "artificer",
  "bard",
  "cleric",
  "druid",
  "monk",
  "paladin",
  "ranger",
  "sorcerer",
  "warlock",
  "wizard",
]);
</script>
<style>
.v-expansion-panel-title:hover > .v-expansion-panel-title__overlay {
  opacity: 0 !important;
}

.v-expansion-panel-title--active > .v-expansion-panel-title__overlay {
  opacity: 0 !important;
}

.v-expansion-panel--active {
  background-image: url("../assets/components/spellGridBarHover.png") !important;
  transition: background-image 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67),
    z-index 0s !important;
}

.v-expansion-panel {
  min-height: 70px !important;
}

.class-filter-icon {
  width: 50px;
}

.spell-icon {
  width: 40px;
}

.faded-background {
  background: #000000;
}

.v-slide-group__next,
.v-slide-group__prev {
  flex: 0 1 20px;
  min-width: 25px !important;
}

.dnd-background {
  background-image: url("../assets/components/spellGridBar.png");
  background-size: 100% 73px;
  transition: background-image 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67),
    z-index 0.5s;
}

.w-5 {
  width: 5% !important;
}

.w-10 {
  width: 10% !important;
}

.w-15 {
  width: 15% !important;
}

.w-20 {
  width: 20% !important;
}

.w-30 {
  width: 30% !important;
}

.w-60 {
  width: 60% !important;
}

.w-62 {
  width: 62% !important;
}

.w-70 {
  width: 70% !important;
}

.text-size-12 {
  font-size: 11px;
}
</style>
