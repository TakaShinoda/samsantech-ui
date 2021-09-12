<template>
    <div>
        <p class="mb-2 text-2xl">Dialogs</p>
        <div>
            <Dialog :is-visible="dialogVisible" @backdrop-clicked="switchDialog">
                <template #title>
                    <p class="font-bold">ダイアログ</p>
                </template>
                <template #body>
                    本文を記述します 本文を記述します 本文を記述します 本文を記述します 本文を記述します 
                </template>
                <template #footer>
                    <div class="flex justify-end">
                        <SecondryButton @click="switchDialog">close</SecondryButton>
                    </div>
                </template>
            </Dialog>
        </div>
        <div class="mb-2">
            <PrimaryButton @click="switchDialog">open</PrimaryButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Dialog from './Dialog.vue'
import PrimaryButton from '../buttons/PrimaryButton.vue'
import SecondryButton from '../buttons/SecondaryButton.vue'

export default defineComponent({
    name: 'DialogSample',
    components: {
        Dialog,
        PrimaryButton,
        SecondryButton
    },
    setup() {
        const dialogVisible = ref(false)
        const switchDialog = () => {
            dialogVisible.value = !dialogVisible.value
        }

        return {
            dialogVisible,
            switchDialog
        }
    },
})
</script>
