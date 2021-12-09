<template>
    <div class="mb-2">
        <div class="flex">
            <button @click="show=!show" class=" w-full flex justify-center align-center bg-primary text-white rounded hover:bg-secondary px-4 py-3 cursor-pointer focus:outline-none mr-2">
                <span>{{ title }}</span>
                <span class="material-icons ml-auto" v-if="!show">expand_more</span>
                <span class="material-icons ml-auto" v-if="show">expand_less</span>
            </button>
        </div>
        <div :class="`transition-all duration-100 ease-in-out ${show ? 'h-auto px-4 py-3 my-2 text-gray-700' : 'h-0'}`">
            <slot v-if="show"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ExpansionPanel',
        props: {
            title: {type: String, default: ''},
            show: {type: Boolean, default: true},
        },
        computed: {
        }
    }
</script>

<style scoped>

</style>