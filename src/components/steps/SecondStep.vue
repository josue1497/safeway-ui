<template>
    <div class="container mx-auto px-4 flex flex-col justify-center align-center p-6">
        <div class="w-full flex flex-row">
            <div class="w-full flex flex-row mr-auto">
                <button class="material-icons rounded-full py-1 px-2 bg-primary text-white text-sm ml-auto"  @click="showOrOpenModal">insert_drive_file</button>
            </div>
        </div>
        <h1 class="text-4xl font-bold text-primary text-center mb-2">Plan {{`${plan.name} ${membership.name}`}}</h1>
        <h2 class="text-3xl font-bold text-center mb-2">{{membership.priceUSD}}</h2>
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
        <QuoteModal :visible="modal" v-if="modal" @close="showOrOpenModal" @send="sendQuote" :loading="loading"></QuoteModal>
    </div>
</template>

<script>
    import PlanSelector from '../core/PlanSelector'
    import PlanSupplement from '../core/PlanSupplement'
    import airplane from '../../assets/img/viajes.png'
    import travel from '../../assets/img/accidente.png'
    import { mapState, mapActions } from 'vuex'
    import QuoteModal from '../core/QuoteModal'
    import userInfoMixin from '../../mixins/userInfo.mixin'

    export default {
        name: 'SecondStep',
        components: { QuoteModal, PlanSupplement, PlanSelector },
        data: () => ({
            airplane,
            travel,
            modal: false,
            loading: false,
        }),
        mounted(){
            this.setAnnexesSelected([])
        },
        methods: {
            ...mapActions(['setAnnexesSelected']),
            nextStep(){
                this.$emit('next')
            },
            backStep(){
                this.$emit('back')
            },
            setIcon(item = 0){
                if(item === 1) return this.airplane
                else return this.travel
            },
            showOrOpenModal(){
                this.modal = !this.modal
            },
            async sendQuote(customer){
                const membership_annexed = this.annexesSelected.map(anx => anx.annexed_id)
                const data = {...customer, membership_annexed, plan_membership_id: this.membership.membership_id}

                this.loading = true
                const response = await this.$axios.$post(`${process.env.BASE_URL}/potential-customer`, data, {...this.config} )
                console.log(response)
                if(response) {
                    this.$toast.success('Cotización enviada.')
                    this.showOrOpenModal()
                }
                else this.$toast.error('Error al enviar cotización.')

                this.loading = false

            }
        },
        computed: {
            ...mapState({
                annexes: state => state.annexes,
                plan: state => state.plan,
                membership: state => state.membership,
                annexesSelected: state => state.annexesSelected
            }),
            total(){
                let totalAnnexes = 0
                if(this.annexesSelected.length){
                    totalAnnexes = this.annexesSelected.map(anx => anx.priceUSD).reduce((previousValue, currentValue) => previousValue + currentValue)
                }
                return (this.membership.priceUSD + totalAnnexes).toFixed(2)
            },
        },
        mixins: [userInfoMixin]
    }
</script>

<style scoped>

</style>