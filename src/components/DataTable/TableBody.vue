<template>
  <tbody>
    <template v-for="record in props.data" :key="record">
      <tr>
        <template v-for="col in props.cols" :key="col.title">
          <td>
            {{
              record.render ? record.render(record, col) : record[col.dataIndex]
            }}
          </td>
        </template>
      </tr>
    </template>
  </tbody>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["data", "cols"]);
</script>