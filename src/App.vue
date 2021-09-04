<template>
  <ButtonSample />
  <DialogSample />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonSample from './components/buttons/ButtonSample.vue'
import DialogSample from './components/dialogs/DialogSample.vue'

export default defineComponent({
  name: 'App',
  components: {
    ButtonSample,
    DialogSample
  },
})
</script>

<style>
/* #app { */
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
/* } */
</style>
