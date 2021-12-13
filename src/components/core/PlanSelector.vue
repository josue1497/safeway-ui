<template>
        <div :class="`mx-3 py-4 px-5 hover:shadow-xl transform hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out w-80 rounded overflow-hidden ${active?'shadow-xl border border-gray scale-105 ':''}`" @click="selector">
            <div class="w-full h-10 flex align-center justify-center" :style="{
                background: bannerColor,
                background: gradient,
                }">
                <div class="text-xl font-bold text-center text-white leading-10" >{{planName}}</div>
            </div>
            <div class="px-6 py-2">
                <div class="font-bold text-center text-sm mb-3">Beneficios</div>
                <p :class="`text-gray-700 text-sm px-2 py-1 ${index+1 === benefits.length ? '':'border-b'} border-gray-300 text-center`" v-for="(benefit, index) of benefits" :key="index">
                    {{ benefit }}
                </p>
                <div :class="`text-primary text-3xl mt-5 text-base border-t  leading-none pt-4 border-primary text-center w-3/4 mx-auto`">
                    <p class="font-regular leading-none ">{{ `$${price}` }}</p>
                    <p class="text-primary text-sm font-bold leading-none ">{{type}}</p>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'PlanSelector',
        props: {
            planName: {type: String, default: 'Unnamed'},
            benefits: {type: Array, default: () => ([])},
            bannerColor: {type: String, default: 'Unnamed'},
            price: {type: [String, Number], default: 'Not priced'},
            type: {type: String, default: 'Not priced'},
            active: {type: Boolean, default: false},
            gradient: {type: [String, Number], default:'linear-gradient(45deg, rgba(131,131,131,1) 0%, rgba(210,210,210,1) 61%, rgba(198,198,198,1) 100%)'}
        },
        methods: {
            selector(){
                this.$emit('select')
            }
        }
    }
</script>

<style scoped>

</style>