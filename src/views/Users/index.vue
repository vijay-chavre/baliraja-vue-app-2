<script setup>
import { useStore } from "vuex";
const store = useStore();

const getAllUsers = () => {
  store.dispatch("User/getAllUsersAction");
};
</script>


<template>
  <div>Users Page</div>
  <button @click="getAllUsers">All Users</button>
</template>