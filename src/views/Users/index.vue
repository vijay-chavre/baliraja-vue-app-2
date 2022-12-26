<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import DataTable from "@/components/DataTable/Table.vue";
const store = useStore();
const router = useRouter();
const loading = ref(false);
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

onMounted(() => {
  getAllUsers();
});
const allUsers = computed(() => {
  return store.getters["User/getAllUsers"];
});

const getAllUsers = () => {
  loading.value = true;
  store.dispatch("User/getAllUsersAction");
  loading.value = false;
};

const addUser = () => {
  router.push({
    name: "Add User",
  });
};
</script>


<template>
  <div>Users Page</div>
  <v-btn @click="getAllUsers"> Get All Users</v-btn>
  <v-btn @click="addUser"> Add User</v-btn>
  <DataTable :loading="loading" :columns="cols" :data="allUsers" />
</template>