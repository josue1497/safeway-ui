<template>
    <div class="bg-white my-5">
        <nav class="tabs flex flex-col sm:flex-row align-center justify-center">
            <button :data-target="`panel-${index}`" @click="updateValue(item)" v-for="(item, index) of items" :key="index"
                    :class="`tab ${item===value?'active text-primary border-primary':'text-gray-600'} transition-all duration-200 ease-in-out  py-2 px-6 w-48 block hover:text-primary focus:outline-none border-b-2 font-bold`">
               {{ item }}
            </button>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'TabSelector',
        props: {
            items: { type: Array, default: () => [] },
            value: { type: [String, Object, Number], default: null },
        },
        methods: {
            updateValue(value) {
                this.$emit('input', value)
            },
        },
    }
</script>

<style scoped>
    .tab-content {
        display: none;
    }

    .tab-content.active {
        display: block;
    }
</style>