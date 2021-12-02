<template>
    <div class="container mx-auto px-4 flex flex-col justify-center align-center p-6">
        <h1 class="text-xl font-bold text-primary text-center">Seleccione el plan ideal para ti:</h1>
        <TabSelector :items="items" v-model="current"></TabSelector>
        <div class="container mx-auto px-4 flex flex-row justify-center align-center">
            <PlanSelector v-for="(plan, index) of plans" :banner-color="plan.color" :benefits="plan.benefits"
            :plan-name="plan.name" :price="plan.price" :key="index" :type="plan.type" :active="planSelected===plan.id"
            @select="setPlan(plan.id)"></PlanSelector>
        </div>
        <div class="container p-4 flex">
            <button class="bg-primary text-white hover:bg-secondary transition-all duration-200 ease-in-out mx-auto w-1/4 rounded py-2 rounded-full" @click="nextStep">Continuar con la solicitud</button>
        </div>
    </div>
</template>

<script>
    import TabSelector from '../core/TabSelector'
    import PlanSelector from '../core/PlanSelector'
    import {plans} from '../../data/constants'
    export default {
        name: 'firstStep',
        components: { PlanSelector, TabSelector },
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
               this.$emit('next');
           }
        }
    }
</script>

<style scoped>

</style>