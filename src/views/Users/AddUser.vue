<script setup>
import { addUsers } from "@/store/API/userApi";
import { ref } from "vue";
const form = ref(null);
const formData = ref({
  firstName: "",
  lastName: "",
});
const validate = async () => {
  const { valid } = await form.value.validate();

  if (valid) {
    console.log(formData);
    const res = await addUsers(formData.value);
    console.log(res);
  }
};
const reset = () => {
  form.value.reset();
};
const resetValidation = () => {
  form.value.resetValidation();
};
</script>

<template>
  <div class="formContainer">
    <v-card title="Add User" width="500px" variant="outlined">
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="formData.firstName"
            :counter="10"
            label="First Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="formData.lastName"
            :counter="10"
            label="Last Name"
            required
          ></v-text-field>

          <v-btn color="success" class="mr-4" @click="validate">
            Validate
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

          <v-btn color="warning" @click="resetValidation">
            Reset Validation
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.formContainer {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
}
</style>