

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const formRef = ref(null);
const formData = ref({
  email: "",
  password: "",
  nameRules: [
    (v) => !!v || "Name is required",
    (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
  ],
  emailRules: [
    (v) => !!v || "E-mail is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ],
});

const validate = async () => {
  const { valid } = await formRef.value.validate();
  if (valid) {
    store.dispatch("Login/setAccessTokenAction", "tokenValue");
    router.push({
      name: "Dashboard",
    });
  }
};

const reset = () => formRef.value.reset();
</script>

<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="500">
    <v-img
      cover
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <div class="form">
      <div>Login</div>
      <v-form ref="formRef" v-model="valid" lazy-validation>
        <v-text-field
          v-model="formData.email"
          :size="small"
          :counter="10"
          :rules="formData.emailRules"
          label="User Name"
          required
          :prepend-inner-icon="'mdi-email'"
        ></v-text-field>

        <v-text-field
          v-model="formData.password"
          :type="show1 ? 'text' : 'password'"
          name="password"
          label="Password"
          hint="At least 8 characters"
          :size="small"
          counter
          @click:append="show1 = !show1"
          :prepend-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        ></v-text-field>

        <div class="actions">
          <v-btn color="success" class="mr-4" @click="validate">
            Validate
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

          <!-- <v-btn color="warning" @click="resetValidation">
            Reset Validation
          </v-btn> -->
        </div>
      </v-form>
    </div>
  </v-card>
</template>

<style scoped>
.form {
  padding: 10px;
}

.actions {
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
}
</style>
