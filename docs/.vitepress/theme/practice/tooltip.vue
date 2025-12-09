<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
    <div class="tooltip" @mouseenter="show = true" @mouseleave="show = false">
        <slot name="content"></slot>
        <div class="enter" v-if="show === true">
            <slot name="tip"></slot>
        </div>
    </div>
</template>

<style scoped>

</style>