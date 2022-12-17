<template>
  <v-table theme="dark">
    <TableHeader :cols="props.columns" />
    <TableBody :cols="props.columns" :data="props.data" />
  </v-table>
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