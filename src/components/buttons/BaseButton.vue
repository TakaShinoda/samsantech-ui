<template>
    <button class="px-3 rounded-md h-10" @click="handleClick">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BaseButton',
    emits: {
        click: null
    },
    setup(_, { emit }) {
        const handleClick = () => {
            emit('click')
        }

        return {
            handleClick
        }
    },
})
</script>
