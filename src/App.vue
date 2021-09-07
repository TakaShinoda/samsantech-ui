<template>
  <ButtonSample />
  <DialogSample />
  <InputTextSample />
  <InputRadioSample />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonSample from './components/buttons/ButtonSample.vue'
import DialogSample from './components/dialogs/DialogSample.vue'
import InputTextSample from './components/forms/InputTextSample.vue'
import InputRadioSample from './components/forms/InputRadioSample.vue'

export default defineComponent({
  name: 'App',
  components: {
    ButtonSample,
    DialogSample,
    InputTextSample,
    InputRadioSample
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
  margin: 5px;
}
</style>
