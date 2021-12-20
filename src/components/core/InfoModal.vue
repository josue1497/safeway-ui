<template>
    <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
         :style="{background: 'rgb(122,122,122, 0.5)'}" id="modal-id" v-show="visible">
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="w-3/4  w-16 p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <div class="">
                <div class="text-center p-5 flex-auto justify-center">
                    <h2 class="text-xl font-bold py-4 leading-none text-primary">{{title}}</h2>
                    <div class="p-6 w-full grid grid-cols-12 gap-4 mt-5 mb-5 text-justify">
                        <div class="col-span-12" v-html="contentText"></div>
                    </div>

                </div>
                <div class="py-3 text-center space-x-4 md:block">
                    <button class="mb-2 md:mb-0 bg-white w-1/4 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" @click="close">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseInput from './BaseInput'
    export default {
        name: 'InfoModal',
        components: { BaseInput },
        props: {
            visible : {type: Boolean, default: false },
            title : {type: String, default: 'untitle' },
            contentText : {type: String, default: 'No text' },
            },
        data: () => ({
            customer: { email: '', first_name:'', last_name: '' , cellphone: '' }
        }),
        methods: {
            close(){
                this.$emit('close')
            },
        }
    }
</script>

<style scoped>

</style>