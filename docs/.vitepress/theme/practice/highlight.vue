<script setup>
const { text } = defineProps(['text'])

</script>

<template>
    <div class="highlight">
        <p>Hi {{ text }}</p>
    </div>
</template>

<style scoped>
.highlight {
    display: inline-block;
    background-color: rgb(235, 216, 255);
    border-radius: 2px;
    padding: 0.5em;

}
.highlight p {
    color: red;
    font-weight: 700;
    font-family: 更纱黑体SC;
}
</style>