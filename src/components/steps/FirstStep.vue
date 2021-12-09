<template>
    <div class="container mx-auto px-4 flex flex-col justify-center align-center p-6">
        <h1 class="text-xl font-bold text-primary text-center">Seleccione el plan ideal para ti:</h1>
        <TabSelector :items="items" v-model="current"></TabSelector>
        <div class="container mx-auto px-4 flex flex-row justify-center align-center mt-5">
            <PlanSelector v-for="(membership, index) of memberships"
                          :banner-color="getColorByMembership(membership.name)"
                          :benefits="membership.benefits.map(benefit => benefit.description)"
                          :plan-name="membership.name" :price="membership.priceUSD"
                          :key="index" type="Mensual"
                          :active="planSelected===membership.item"
                          @select="setMembershipData(membership)"></PlanSelector>
        </div>
        <div class="container p-4 flex mt-10">
            <button class="bg-primary text-white hover:bg-secondary transition-all duration-200 ease-in-out mx-auto w-1/4 rounded py-2 rounded-full" @click="nextStep">Continuar con la solicitud</button>
        </div>
    </div>
</template>

<script>
    import TabSelector from '../core/TabSelector'
    import PlanSelector from '../core/PlanSelector'
    import { mapActions } from 'vuex'
    export default {
        name: 'firstStep',
        components: {  PlanSelector, TabSelector },
        props: {
            plans: { type: Array, default: () => [] },
            items: { type: Array, default: () => [] },
        },
        mounted(){
            this.current = 'Individual'
            this._setPlan(2)
        },
        data: () =>({
            current: null,
            planSelected: 2,
            memberships: []
        }),
        methods: {
           ...mapActions(['setMembership', 'setAnnexes', 'setPlan']),
           _setPlan(item){
               this.planSelected = item
           },
           setMembershipData(item){
               this._setPlan(item.item)
               this.setMembership(item)
               this.setAnnexes(item.annexes)
           },
           nextStep(){
               this.$emit('next');
           },
           getColorByMembership(plan){
               switch(plan){
                   case 'Silver': return 'rgb(148, 148, 148)'
                   case 'Gold': return 'rgb(183, 137, 51)'
                   case 'Diamond' : return 'rgb(64, 67, 118)'
                   default: return 'rgb(0,0,0)'
               }
           }
        },
        watch: {
            current(){
               const plan = this.plans.find(_plan => _plan.name === this.current)
                if(plan) {
                    this.memberships = plan.memberships
                    console.log(plan)
                    this.setPlan(plan)
                }

                if(this.memberships)
                    this.setMembershipData(this.memberships[1])
            }
        }
    }
</script>

<style scoped>

</style>