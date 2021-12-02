<template>
        <!--Card 1-->
        <div :class="`transition-all duration-200 ease-in-out w-80 rounded overflow-hidden ${active?'shadow-xl border border-gray':''} mx-3 py-4 px-5`" @click="selector">
            <div class="w-full h-10 flex align-center justify-center" :style="{
                background: bannerColor,
                background: `linear-gradient(58deg, ${bannerColor} 75%, rgba(255,255,255,1) 100%)`
                }">
                <div class="text-xl font-bold text-center text-white leading-10" >{{planName}}</div>
            </div>
            <div class="px-6 py-2">
                <div class="font-bold text-center text-sm mb-2">Beneficios</div>
                <p :class="`text-gray-700 text-base ${index+1 === benefits.length ? '':'border-b'} border-gray-300 text-center`" v-for="(benefit, index) of benefits" :key="index">
                    {{ benefit }}
                </p>

                <div :class="`text-primary font-bold text-3xl my-5 text-base border-t  leading-none p-4 border-primary text-center w-3/4 mx-auto`">
                    <p class="leading-none ">{{ `$${price}` }}</p>
                    <p class="text-primary text-sm font-light leading-none ">{{type}}</p>
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