<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="#22AA94" dark flat>
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Eamil"
                name="email"
                type="text"
                color="#232323"
                v-model="email"
                @blur="$v.email.$touch"
                :error-messages="emailErrors"
              />

              <v-text-field
                label="Username"
                name="username"
                type="text"
                color="#232323"
                v-model="username"
                @blur="$v.username.$touch"
                :error-messages="usernameErrors"
              />

              <v-text-field
                id="password"
                label="Password"
                name="password"
                type="password"
                color="#232323"
                v-model="password"
                @blur="$v.password.$touch"
                :error-messages="passwordErrors"
              />

              <v-text-field
                id="confirmPassword"
                label="Confirm Password"
                name="password"
                type="password"
                color="#232323"
                v-model="confirmPassword"
                @blur="$v.confirmPassword.$touch"
                :error-messages="confirmPasswordErrors"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="#22AA94" class="white--text">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  props: {
    source: String
  },
  data: () => {
    return {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    username: {
      required,
      minLength: minLength(5)
    },
    password: {
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs("password")
    }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push("E-mail is required");
      !this.$v.username.minLength && errors.push("The minimal length must be 5 symbols");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push("The minimal length must be 6 symbols");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.sameAs && errors.push("The passwords should match");
      return errors;
    }
  },
  methods: {
    submitHandler(){
        
    }
  },
};
</script>