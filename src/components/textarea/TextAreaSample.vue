<template>
    <div>
        <p class="mb-2 text-2xl">TextArea</p>
        <div>
            <TextArea
                v-model="inputTextAreaValue"
                name="sample"
            />
        </div>
        <div>
            <p>disable</p>
            <TextArea
                name="sample-disable"
                :disabled="true"
            />
        </div>
        <div>
            <p>error</p>
            <TextArea
                name="sample-error"
                :is-error="true"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TextArea from './TextArea.vue'

export default defineComponent({
    name: 'TextAreaSample',
    components: {
        TextArea
    },
    setup() {
        const inputTextAreaValue = ref('')

        return {
            inputTextAreaValue
        }
        
    },
})
</script>
