<template>
    <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  style="background: rgb(122,122,122,.5)" id="modal-id" v-show="visible">
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <!--content-->
            <div class="">
                <!--body-->
                <div class="text-center p-5 flex-auto justify-center">

                    <h2 class="text-xl font-bold py-4 leading-none">Enviar cotización</h2>
                    <p class="text-sm text-gray-500 px-8">A continuación te llegará un correo electrónico con la información de tu cotizacion.</p>

                    <div class="p-4 w-full grid grid-cols-12 gap-4 mt-5 mb-5">
                        <BaseInput name="name" mandatory label="Nombres y Apellidos" type="text" class="col-span-12" v-model="customer.names"></BaseInput>
                        <BaseInput name="phone-number" mandatory label="Teléfono celular" type="text" class="col-span-6" v-model="customer.phone"></BaseInput>
                        <BaseInput name="email" mandatory label="E-mail" type="text" class="col-span-6" v-model="customer.email"></BaseInput>
                    </div>

                </div>
                <!--footer-->
                <div class="p-3  mt-2 text-center space-x-4 md:block">
                    <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" @click="close">
                        Cerrar
                    </button>
                    <button class="mb-2 md:mb-0 bg-primary px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-secondary" @click="send">
                        Enviar
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
        props: { visible : {type: Boolean, default: false }},
        data: () => ({
            customer: { email: '', names:'', phone: '' }
        }),
        methods: {
            close(){
                this.$emit('close')
            },
            send(){
                this.$emit('send')
            }
        }
    }
</script>

<style scoped>

</style>