<template>
    <div class="container mx-auto px-4">
        <FirstStep v-if="currentStep===1" :items="items" :plans="information" @next="setStep(2)"></FirstStep>
        <SecondStep v-if="currentStep===2" @next="setStep(3)" @back="setStep(1)"></SecondStep>
        <ThirdStep v-if="currentStep===3" @next="setStep(4)" @back="setStep(2)"></ThirdStep>
        <FourthStep v-if="currentStep===4" @back="setStep(3)" @pay="setStep(5)"></FourthStep>
        <FifthStep v-if="currentStep===5" @reset="setStep(1)"></FifthStep>
    </div>
</template>

<script>
    import FirstStep from './FirstStep'
    import SecondStep from './SecondStep'
    import ThirdStep from './ThirdStep'
    import FourthStep from './FourthStep'
    import FifthStep from './FifthStep'

    import * as safewayData from "../../assets/data/example";

    export default {
        name: 'StepsContainer',
        components: { FifthStep, FourthStep, ThirdStep, SecondStep, FirstStep },
        data: () => ({
            currentStep: 1,
            information: safewayData.default,
        }),
        mounted() {
            console.log(this.information)
        },
        methods: {
            setStep(step){
                this.currentStep = step
            },
        },
        computed: {
            items() {
               return this.information.map(inf => inf.name)
            }
        }
    }
</script>

<style scoped>

</style>