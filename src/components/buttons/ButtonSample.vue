<template>
    <div>
        <p class="mb-2 text-2xl">Buttons</p>
        <div class="mb-2">
            <PrimaryButton @click="handleClick">Primary</PrimaryButton>
        </div>
        <div class="mb-2">
            <PrimaryButton :disabled="true" @click="handleClick">Primary Disabled</PrimaryButton>
        </div>
        <div class="mb-2">
            <SecondaryButton @click="handleClick">Secondary</SecondaryButton>
        </div>
        <div class="mb-2">
            <SecondaryButton :disabled="true" @click="handleClick">Secondary Disabled</SecondaryButton>
        </div>
        <div class="mb-2">
            <SuccessButton @click="handleClick">Success</SuccessButton>
        </div>
        <div class="mb-2">
            <SuccessButton :disabled="true" @click="handleClick">Success Disabled</SuccessButton>
        </div>
        <div class="mb-2">
            <DangerButton @click="handleClick">Danger</DangerButton>
        </div>
        <div class="mb-2">
            <DangerButton :disabled="true" @click="handleClick">Danger Disabled</DangerButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PrimaryButton from './PrimaryButton.vue'
import SecondaryButton from './SecondaryButton.vue'
import SuccessButton from './SuccessButton.vue'
import DangerButton from './DangerButton.vue'

export default defineComponent({
    name: 'ButtonSample',
    components: {
        PrimaryButton,
        SecondaryButton,
        SuccessButton,
        DangerButton
    },
    emits: {
        click: null
    },
    setup() {
      const handleClick = () => {
          alert('clicked')
      }

      return {
          handleClick
      }
    },
})
</script>
