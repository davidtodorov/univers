<template>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="#22AA94"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
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
  export default {
    data: () => {
      return {
        username: '',
        password: ''
      }
    },
    props: {
      source: String,
    },
  }
</script>