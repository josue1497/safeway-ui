<template>
    <div class="container mx-auto px-4 flex flex-col justify-center align-center p-6">
        <h1 class="text-2xl font-bold text-primary text-center">Plan Seleccionado</h1>
        <h2 class="text-xl font-bold text-center">{{'$44.50'}}</h2>
        <h3 class="text-lg font-bold text-primary text-center">{{'Pago mensual'}}</h3>
        <div class="container mx-auto px-4 my-7 flex flex-col justify-center align-center">
            <h3 class="text-lg font-bold text-center">¿Quieres mejorar tu plan?</h3>
            <div class="flex flex-row justify-center items-center">
                <div>
                    <PlanSupplement class="w-3/4" name="Anexo Multiviajes" description="La asistencia se prestará hasta un máximo de tres viajes por beneficiario y $19 99
por enfermedad por cada periodo de doce (12) meses."></PlanSupplement>
                    <PlanSupplement class="w-3/4" name="Anexo Enfermedades y Accidentes" description="La asistencia se prestará para todas las enfermedades y accidentes que requieran viajar al exterior para llevar a cabo una cirugía, operación o
procedimiento quirúrgico por cada periodo de doce (12) meses.
"></PlanSupplement>
                </div>
                <div class="h-40 w-1/3 border border-gray p-10 container flex justify-center items-center flex-col">
                    <p class="text-lg font-regular text-center text-primary">Total a pagar</p>
                    <p class="text-2xl font-bold text-center leading-none">$64.98</p>
                    <p class="text-lg font-bold text-center text-primary">Mensual</p>
                </div>
            </div>

        </div>
        <div class="container p-4 flex flex-row justify-around align-center">
            <button class="bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 ease-in-out mx-auto w-1/4 rounded py-2 rounded-full" @click="backStep">Seleccionar otro plan</button>
            <button class="bg-primary text-white hover:bg-secondary transition-all duration-200 ease-in-out mx-auto w-1/4 rounded py-2 rounded-full"  @click="nextStep">Continuar con la solicitud</button>
        </div>
    </div>
</template>

<script>
    import PlanSelector from '../core/PlanSelector'
    import {plans} from '../../data/constants'
    import PlanSupplement from '../core/PlanSupplement'
    export default {
        name: 'SecondStep',
        components: { PlanSupplement, PlanSelector },
        data: () =>({
            items: ['Individual', 'Grupal'],
            current: 'Individual',
            plans,
            planSelected: 0,
        }),
        methods: {
            setPlan(item){
                this.planSelected = item
            },
            nextStep(){
                this.$emit('next')
            },
            backStep(){
                this.$emit('back')
            }
        }
    }
</script>

<style scoped>

</style>