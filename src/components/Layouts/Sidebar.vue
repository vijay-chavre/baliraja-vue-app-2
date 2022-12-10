<script setup>
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const items = reactive([
  { text: "Home", icon: "mdi-clock", path: "Home" },
  { text: "All Users", icon: "mdi-account", path: "Users" },
  { text: "All Environments", icon: "mdi-flag", path: "Environments" },
]);

const onClickListItem = (item) => {
  router.replace({
    name: `${item.path}`,
  });
};
</script>
<template>
  <v-list dense>
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      active-color="primary"
      active-class="border"
      variant="plain"
      :active="route.name === item.path"
      class="listItem"
      rounded="xl"
      @click="
        () => {
          onClickListItem(item);
        }
      "
    >
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </template>
    </v-list-item>
  </v-list>
</template>

<style scoped>
.listItem {
  margin: 10px;
}
.border {
  font-size: 16px;
  border-color: purple !important;
}
</style>

