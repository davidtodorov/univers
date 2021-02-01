<template>
  <v-expansion-panels accordion focusable multiple >
      <AppEnvironments></AppEnvironments>
  </v-expansion-panels>
</template>

<script>
import AppEnvironments from '../accordions/Environments/Environment'
export default {
    components: {
        AppEnvironments
    }
}
</script>

<style>

</style>