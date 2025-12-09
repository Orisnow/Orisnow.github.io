<script setup>
import { ref } from 'vue' 

const props = defineProps({title: String})
const open = ref(false)
</script>

<template>
    <div class="folding-box">
        <button @click="open = !open">
            <div class="folding-bar">
                <div class="title">
                    {{ props.title }}
                </div>
                <div class="arrow">
                    <span v-if="open"><iconify-icon icon="mdi:chevron-up"></iconify-icon></span>
                    <span v-else><iconify-icon icon="mdi:chevron-down"></iconify-icon></span>
                </div>
            </div>
        </button>
        <div class="content" v-if="open">
                <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.folding-box {
  width: 30%;
}
.folding-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    margin-top: 5px ;

    padding: 0.3em 0 0 0.3em;
}
.title{
    font-weight: 800;
}
span {
    font-size: 1.5rem;
}
button {
    display: block;
    width: 100%;
    background-color: rgb(40, 39, 39);
}
.content {
    font-size: medium;
    background-color: rgb(68, 63, 63);
    padding-left: 0.4rem;
    font-family: 更纱黑体SC;

}

</style>