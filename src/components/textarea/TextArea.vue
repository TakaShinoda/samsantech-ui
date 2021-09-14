<template>
    <textarea
        class="border-2 border-solid rounded-md p-2"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        :rows="rows"
        :cols="cols"
        @input="updateValue"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TextArea',
    props: {
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: false,
            default: ''
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        },
        rows: {
            type: Number,
            required: false,
            default: 2
        },
        cols: {
            type: Number,
            required: false,
            default: 20
        }
    },
    emits: ['input'],
    setup(_, {emit}) {
        const updateValue = (e: any) => {
            emit('input', e.target.value)
        }
        return {
            updateValue
        }
    },
})
</script>
