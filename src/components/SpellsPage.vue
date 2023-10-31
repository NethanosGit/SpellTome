<template>
  <v-container class="w-100 d-flex-inline">
    <v-row class="pt-2">
      <h2 class="text-brownish">Spells</h2>
    </v-row>
    <v-row class="faded-background w-auto d-flex justify-center">
      <v-divider
        :thickness="3"
        class="border-opacity-100"
        color="red"
      ></v-divider>
      <v-slide-group
        :direction="horizontal"
        v-model="selectedClass"
        class="ma-0"
        multiple
        show-arrows
      >
        <v-slide-group-item
          v-for="dndClass in classes"
          :key="dndClass"
          v-slot="{ isSelected, toggle }"
        >
          <v-btn
            :color="isSelected ? '#312721' : 'transparent'"
            elevation="0"
            class="pa-0 h-auto rounded-2"
            :border="false"
            @click="toggle"
          >
            <v-col class="d-flex flex-column h-auto align-center"
              ><img
                class="class-filter-icon"
                v-bind:src="'./img/classes/' + dndClass + '-icon.png'"
              />
              <div class="text-brownish">
                {{ dndClass }}
              </div>
            </v-col>
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
    </v-row>
    <v-row class="faded-background">
      <v-form class="w-100">
        <v-container>
          <v-row class="d-flex flex-row justify-space-evenly">
            <v-col cols="5" md="2" class="mb-3 pa-0">
              <v-text-field
                label="Spell Name"
                variant="outlined"
                density="compact"
                bg-color="white"
                clearable="true"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="5" md="2" class="mb-3 pa-0">
              <v-text-field
                label="Spell Level"
                variant="outlined"
                density="compact"
                bg-color="white"
                clearable="true"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="5" md="2" class="mb-3 pa-0">
              <v-text-field
                label="School"
                variant="outlined"
                density="compact"
                bg-color="white"
                clearable="true"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="5" md="2" class="mb-3 pa-0">
              <v-text-field
                label="Damage Type"
                variant="outlined"
                density="compact"
                bg-color="white"
                clearable="true"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="3" md="1" class="mb-3 pa-0">
              <v-btn width="150" class="h-100">Apply Filters</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-row>
    <v-row>
      <v-container>
        <v-row class="text-brownish">
          <v-col class="v-col-auto text-transparent">---------------</v-col>
          <v-col class="v-col-auto">Level</v-col>
          <v-col class="v-col-3">Name</v-col>
          <v-col class="v-col-2">Casting Time</v-col>
          <v-col class="v-col-1">Duration</v-col>
          <v-col class="v-col-auto">Range/Area</v-col>
          <v-col class="v-col-auto">Attack/Save</v-col>
          <v-col class="v-col-auto">Damage/Effect</v-col>
        </v-row>
        <v-row>
          <v-expansion-panels class="text-brownish">
            <v-expansion-panel
              bg-color="transparent"
              rounded="false"
              class="dnd-background"
              variant="compact"
              elevation="0"
            >
              <v-expansion-panel-title>
                <v-row class="w-100">
                  <v-col class="w-auto">
                    <img
                      class="spell-icon"
                      v-bind:src="'./img/spells/eldritchblast.png'"
                    />
                  </v-col>
                  <v-col class="w-auto"> Eldritch Blast </v-col>
                </v-row>
              </v-expansion-panel-title>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
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
  width: 80px;
}

.spell-icon {
  width: 40px;
}

.faded-background {
  background: rgba(0, 0, 0, 0.04);
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

.text-brownish {
  color: #d9c8bf !important;
}
</style>
