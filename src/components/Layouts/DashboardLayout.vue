
<script setup>
import Sidebar from "@/components/Layouts/Sidebar";
</script>
<template>
  <v-layout>
    <v-app-bar>
      <v-spacer></v-spacer>

      <v-btn
        :prepend-icon="
          theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        @click="onClick"
        >Toggle Theme</v-btn
      >
    </v-app-bar>
    <v-navigation-drawer
      :style="{
        padding: '0px',
      }"
      permanent
    >
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <Sidebar />
    </v-navigation-drawer>

    <v-main>
      <v-card height="calc(100vh - 60px)">
        <router-view />
      </v-card>
    </v-main>
  </v-layout>
</template>



<style scoped>
.drawer nav {
  padding: 0px !important;
}
nav {
  padding: 0px !important;
}
</style>