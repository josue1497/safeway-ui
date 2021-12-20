<template>
    <div class="container flex px-8 justify-center flex-col m-5 w-3/4 mx-auto">
        <h1 class="text-xl font-bold text-primary text-center">Proceso de Emision</h1>
        <Stepper :steps="steps" :route="alreadyTraveled" :current="3"></Stepper>
        <div class="mx-auto w-3/4">
            <h3 class="text-lg font-bold">Resumen de pago:</h3>
            <div class="w-full grid grid-cols-12 mt-5">
                <div class="col-span-8 bg-primary text-white py-2 px-3 font-bold">Plan y Anexos</div>
                <div class="col-span-4 bg-primary text-white py-2 px-3 font-bold">Subtotal</div>
            </div>
            <div class="w-full grid grid-cols-12">
                <div class="col-span-8  py-2 px-3 border-b border-r border-gray-500">Plan {{`${plan.name} ${membership.name}`}}</div>
                <div class="col-span-4  py-2 px-3 border-b border-gray-500">${{membership.priceUSD}}</div>
            </div>
            <div class="w-full grid grid-cols-12" v-for="(anxs, index) of annexesSelected" :key="index">
                <div class="col-span-8  py-2 px-3 border-b border-r border-gray-500">{{anxs.name}}</div>
                <div class="col-span-4  py-2 px-3 border-b border-gray-500">${{anxs.priceUSD}}</div>
            </div>
            <div class="w-full grid grid-cols-12">
                <div class="col-span-8  py-2 px-3 border-b border-r border-gray-500 text-right">Subtotal</div>
                <div class="col-span-4  py-2 px-3 border-b border-gray-500">${{subTotal}}</div>
            </div>
            <div class="w-full grid grid-cols-12">
                <div class="col-span-8  py-2 px-3 border-b border-r border-gray-500 text-right">IVA</div>
                <div class="col-span-4  py-2 px-3 border-b border-gray-500">${{iva}}</div>
            </div>
            <div class="w-full grid grid-cols-12">
                <div class="col-span-8 font-bold text-primary py-2 px-3 border-b border-r border-gray-500 text-right">Total</div>
                <div class="col-span-4  py-2 px-3 border-b border-gray-500">${{total}}</div>
            </div>
            <div class="grid grid-cols-3 gap-4 mt-16">
                <BaseInput name="titular" mandatory label="Titular" type="text" class="col-span-3"></BaseInput>
                <BaseInput name="card_number" mandatory label="Número de tarjeta" type="text"></BaseInput>
                <BaseInput name="valid_date" mandatory label="Válida hasta" type="text" ></BaseInput>
                <BaseInput name="cve" mandatory label="CVE" type="text" ></BaseInput>
            </div>
            <div class="container p-4 flex flex-row justify-around align-center mt-10">
                <button class="bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 ease-in-out mx-auto w-1/4 rounded py-2 rounded-full" @click="back">Volver</button>
                <button class="bg-primary text-white hover:bg-secondary transition-all duration-200 ease-in-out mx-auto w-1/4 rounded py-2 rounded-full" @click="toPay">Pagar ${{total}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Stepper from '../core/Stepper'
    import BaseInput from '../core/BaseInput'
    import { mapState } from 'vuex'

    export default {
        name: 'FourthStep',
        components: { BaseInput, Stepper },
        data: () => ({
            steps: [1, 2, 3, 4],
            alreadyTraveled: [1,2]
        }),
        computed: {
            ...mapState({
                annexes: state => state.annexes,
                membership: state => state.membership,
                plan: state => state.plan,
                annexesSelected: state => state.annexesSelected
            }),
            total(){
                let totalAnnexes = 0
                if(this.annexesSelected.length){
                    totalAnnexes = this.annexesSelected.map(anx => anx.priceUSD).reduce((previousValue, currentValue) => previousValue + currentValue)
                }
                return (this.membership.priceUSD + totalAnnexes).toFixed(2)
            },
            iva(){
                return (this.total * 0.16).toFixed(2)
            },
            subTotal(){
              return (this.total - this.iva).toFixed(2)
            }
        },
        methods: {
            toPay(){
                this.$emit('pay')
            },
            back(){
                this.$emit('back')
            }
        }
    }
</script>

<style scoped>

</style>