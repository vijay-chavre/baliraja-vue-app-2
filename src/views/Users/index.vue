<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import DataTable from "@/components/DataTable/Table.vue";
const store = useStore();
const cols = [
  {
    title: "First Name",
    dataIndex: "firstName",
    render: (record, col) => {
      record[col.dataIndex];
    },
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
  },
];

const allUsers = computed(() => {
  return store.getters["User/getAllUsers"];
});

const getAllUsers = () => {
  store.dispatch("User/getAllUsersAction");
};
</script>


<template>
  <div>Users Page</div>
  <v-btn @click="getAllUsers"> Get All Users</v-btn>

  <DataTable :columns="cols" :data="allUsers" />
</template>