<template>
    <div>
        <p class="mb-2 text-2xl">TextArea</p>
        <div>
            <TextArea
                v-model:value="inputTextAreaValue"
                name="sample"
            />
        </div>
        <div>
            <p>disable</p>
            <TextArea
                v-model:value="inputTextAreaDisabledValue"
                name="sample-disable"
                :disabled="true"
            />
        </div>
        <div>
            <p>error</p>
            <TextArea
                v-model:value="inputTextAreaErrorValue"
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
        const inputTextAreaDisabledValue = ref('')
        const inputTextAreaErrorValue = ref('error')

        return {
            inputTextAreaValue,
            inputTextAreaDisabledValue,
            inputTextAreaErrorValue
        }
        
    },
})
</script>
