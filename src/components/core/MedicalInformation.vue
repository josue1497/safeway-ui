<template>
    <div class="flex justify-center align-center w-full my-2">
        <p class="w-3/4">{{ description }}</p>
        <div class="w-1/4 flex justify-center items-center">
            <BaseInput :name="name" type="radio" :options="yesno" v-model="value" @change="updateValue"></BaseInput>
        </div>
    </div>
</template>

<script>
    import BaseInput from './BaseInput'
    export default {
        name: 'MedicalInformation',
        components: { BaseInput },
        props: {
            name: {type: String, default: ''},
            description: {type: String, default: ''},
            value: {type: Boolean, default: false}
        },
        data: () =>({
            yesno: ['Si', 'No']
        }),
        methods: {
            updateValue(value) {
                this.$emit('input', value)
            },
        }
    }
</script>

<style scoped>

</style>