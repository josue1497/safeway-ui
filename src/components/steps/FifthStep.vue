<template>
    <div class="container flex px-8 justify-center flex-col m-5 w-3/4 mx-auto">
        <h1 class="text-2xl font-bold text-primary text-center">Proceso finalizado con éxito</h1>
        <div class="mx-auto w-3/4">
            <lottie :width="208" :height="208" :options="lottieOptions" v-on:animCreated="handleAnimation" />
            <h3 class="text-lg text-primary text-center font-regular mt-16">Gracias por su pago, le llegará un correo electrónico con la factura y la emisión de su servicio de asistencia en viaje de salud.</h3>
            <div class="container p-4 flex flex-row justify-around align-center mt-10">
                <button class="bg-primary text-white hover:bg-secondary transition-all duration-200 ease-in-out mx-auto w-1/4 rounded py-2 rounded-full" @click="next">Volver al inicio</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Stepper from '../core/Stepper'
    import BaseInput from '../core/BaseInput'
    import lottie from 'vue-lottie/src/lottie.vue'
    import * as animationData from "../../assets/animations/success-check";

    export default {
        name: 'FifthStep',
        components: { BaseInput, Stepper, lottie},
        data: () => ({
            steps: [1, 2, 3, 4],
            alreadyTraveled: [1,2,3],
            anim: null, // for saving the reference to the animation
            lottieOptions: { animationData: animationData.default, loop: false }
        }),
        methods: {
            handleAnimation: function (anim) {
                this.anim = anim;
            },
            next(){
                this.$emit('reset')
            },
            back(){
                this.$emit('back')
            }
        }
    }
</script>

<style scoped>

</style>