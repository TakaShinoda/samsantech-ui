<template>
    <textarea
        class="border-2 border-solid rounded-md p-2"
        :class="`${errorClass}`"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        :rows="rows"
        :cols="cols"
        @input="updateValue"
    />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

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
            default: 4
        },
        cols: {
            type: Number,
            required: false,
            default: 30
        },
        isError: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: ['input'],
    setup(props, { emit }) {
        const updateValue = ({ target }: { target: HTMLInputElement }) => {
            emit('input', target.value)
        }

        const errorClass = computed(() => 
            props.isError ? 'border-red-400' : ''
        )

        return {
            updateValue,
            errorClass
        }
    },
})
</script>
