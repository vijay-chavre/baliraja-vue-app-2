<template>
  <tbody>
    <tr>
      <template v-for="col in props.cols" :key="col.title">
        <th class="text - left">
          {{ col.title }}
        </th>
      </template>
    </tr>
  </tbody>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["cols"]);
</script>