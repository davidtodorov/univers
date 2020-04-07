<template>
  <AppAuthenticationForm title="Login">
    <v-form>
      <v-text-field
        label="Username"
        name="username"
        type="text"
        color="#232323"
        v-model="username"
      />

      <v-text-field
        id="password"
        label="Password"
        name="password"
        type="password"
        color="#232323"
        v-model="passdword"
      />
    </v-form>
  </AppAuthenticationForm>
</template>

<script>
import AppAuthenticationForm from "./AuthenticationForm";

export default {
  components: {
    AppAuthenticationForm
  },
  data: () => {
    return {
      username: "",
      password: ""
    };
  },
  props: {
    source: String
  }
};
</script>