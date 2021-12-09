<template>
    <div class="container mx-auto px-4 flex flex-col justify-center align-center p-6">
        <h1 class="text-4xl font-bold text-primary text-center">Plan Seleccionado</h1>
        <h2 class="text-3xl font-bold text-center">{{membership.priceUSD}}</h2>
        <h3 class="text-xl font-bold text-primary text-center">{{'Pago mensual'}}</h3>
        <div class="container mx-auto px-4 my-7 flex flex-col justify-center align-center">
            <h3 class="text-lg font-bold text-center">¿Quieres mejorar tu plan?</h3>
            <div class="flex flex-row justify-center items-center">
                <div>
                    <PlanSupplement v-for="(annexed, index) of annexes" class="w-3/4" :key="index" :name="annexed.name"
                                    :description="annexed.description"
                                    :icon="setIcon(annexed.item)"
                                    :price="annexed.priceUSD"
                                    :annexed="annexed"></PlanSupplement>
                </div>
                <div class="h-40 w-1/3 border border-gray p-10 container flex justify-center items-center flex-col">
                    <p class="text-lg font-regular text-center text-primary mb-3">Total a pagar</p>
                    <p class="text-4xl font-bold text-center leading-none">${{total}}</p>
                    <p class="text-xl font-bold text-center text-primary">Pago Mensual</p>
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
    import PlanSupplement from '../core/PlanSupplement'
    import airplane from '../../assets/img/viajes.png'
    import travel from '../../assets/img/accidente.png'
    import { mapState } from 'vuex'
    export default {
        name: 'SecondStep',
        components: { PlanSupplement, PlanSelector },
        data: () =>({
            airplane,
            travel
        }),
        methods: {
            nextStep(){
                this.$emit('next')
            },
            backStep(){
                this.$emit('back')
            },
            setIcon(item = 0){
                if(item === 1) return this.airplane
                else return this.travel
            }
        },
        computed: {
            ...mapState({
                annexes: state => state.annexes,
                membership: state => state.membership,
                annexesSelected: state => state.annexesSelected
            }),
            total(){
                let totalAnnexes = 0
                if(this.annexesSelected.length){
                    totalAnnexes = this.annexesSelected.map(anx => anx.priceUSD).reduce((previousValue, currentValue) => previousValue + currentValue)
                }
                return (this.membership.priceUSD + totalAnnexes).toFixed(2)
            }
        },
    }
</script>

<style scoped>

</style>