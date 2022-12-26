<template>
  <v-card :loading="props.loading">
    <template v-slot:loader="{ isActive }">
      <v-progress-circular
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      >
      </v-progress-circular>
    </template>
    <v-table theme="dark">
      <TableHeader :cols="props.columns" />
      <TableBody :cols="props.columns" :data="props.data" />
    </v-table>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";
import TableHeader from "@/components/DataTable/TableHeader";
import TableBody from "@/components/DataTable/TableBody";
const props = defineProps({
  columns: {
    type: [Object],
    default: function () {
      return [];
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
  data: {
    type: [Object],
    default: function () {
      return [];
    },
  },
  onRowClicked: Function,
});
</script>

<style>
</style>