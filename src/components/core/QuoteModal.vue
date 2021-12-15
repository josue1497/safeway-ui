<template>
    <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
         :style="{background: 'rgb(122,122,122, 0.5)'}" id="modal-id" v-show="visible">
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <!--content-->
            <div class="">
                <!--body-->
                <div class="text-center p-5 flex-auto justify-center">
                    <h2 class="text-xl font-bold py-4 leading-none">Enviar cotización</h2>
                    <p class="text-sm text-gray-500 px-8">A continuación te llegará un correo electrónico con la información de tu cotizacion.</p>
                    <div class="p-4 w-full grid grid-cols-12 gap-4 mt-5 mb-5">
                        <BaseInput name="name" mandatory label="Nombres" type="text" class="col-span-6" v-model="customer.first_name"></BaseInput>
                        <BaseInput name="last_name" mandatory label="Apellidos" type="text" class="col-span-6" v-model="customer.last_name"></BaseInput>
                        <BaseInput name="phone-number" mandatory label="Teléfono celular" type="text" class="col-span-6" v-model="customer.cellphone"></BaseInput>
                        <BaseInput name="email" mandatory label="E-mail" type="text" class="col-span-6" v-model="customer.email"></BaseInput>
                    </div>

                </div>
                <!--footer-->
                <div class="p-3 text-center space-x-4 md:block">
                    <button class="mb-2 md:mb-0 bg-white w-1/4 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" @click="close">
                        Cerrar
                    </button>
                    <button :class="`inline-flex  w-1/4 items-center px-4 py-2 mt-5 font-semibold leading-6 text-sm text-white bg-primary hover:bg-secondary transition ease-in-out duration-150 rounded-full ${loading ?'cursor-not-allowed':''}`"
                            :disabled="loading" @click="send">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span class="mx-auto">Enviar</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseInput from './BaseInput'
    export default {
        name: 'QuoteModal',
        components: { BaseInput },
        props: {
            visible : {type: Boolean, default: false },
            loading : {type: Boolean, default: false }
            },
        data: () => ({
            customer: { email: '', first_name:'', last_name: '' , cellphone: '' }
        }),
        methods: {
            close(){
                this.$emit('close')
            },
            send(){
                this.$emit('send', this.customer)
            }
        }
    }
</script>

<style scoped>

</style>