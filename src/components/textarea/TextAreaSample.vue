<template>
    <div>
        <p class="mb-2 text-2xl">TextArea</p>
        <div>
            <TextArea
                name="sample"
            />
        </div>
        <div>
            <TextArea
                name="sample-disable"
                disabled="true"
            />
        </div>
        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TextArea from './TextArea.vue'

export default defineComponent({
    name: 'TextAreaSample',
    components: {
        TextArea
    },
    setup() {
        
    },
})
</script>
