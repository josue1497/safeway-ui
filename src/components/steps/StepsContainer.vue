<template>
    <div>
        <div class="container mx-auto px-4" v-if="information.length">
            <FirstStep v-if="currentStep===1" :items="items" :plans="information" @next="setStep(2)"></FirstStep>
            <SecondStep v-if="currentStep===2" @next="validateUser(3)" @back="setStep(1)"></SecondStep>
            <ThirdStep v-if="currentStep===3" @next="setStep(4)" @back="setStep(2)"></ThirdStep>
            <FourthStep v-if="currentStep===4" @back="setStep(3)" @pay="setStep(5)"></FourthStep>
            <FifthStep v-if="currentStep===5" @reset="reset"></FifthStep>
        </div>
        <div  v-else class="container h-screen w-full flex justify-center items-center flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto; animation-play-state: running; animation-delay: 0s;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#3a8e81" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" style="animation-play-state: running; animation-delay: 0s;">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" style="animation-play-state: running; animation-delay: 0s;"></animateTransform>
                </circle>
            </svg>
        </div>
    </div>
</template>

<script>
    import FirstStep from './FirstStep'
    import SecondStep from './SecondStep'
    import ThirdStep from './ThirdStep'
    import FourthStep from './FourthStep'
    import FifthStep from './FifthStep'

    import * as safewayData from "../../assets/data/example";
    import userInfoMixin from '../../mixins/userInfo.mixin'


    export default {
        name: 'StepsContainer',
        components: { FifthStep, FourthStep, ThirdStep, SecondStep, FirstStep },
        data: () => ({
            currentStep: 1,
            information: [],
            // information: safewayData.default,
        }),
        async mounted() {
            await this.fetchInitialInformation()
            if(this.$route.query.step)
                this.setStep(parseInt(this.$route.query.step, 10))
        },
        methods: {
            reset(){
                location.href = '/'
            },
            setStep(step){
                this.currentStep = step
            },
            async fetchInitialInformation() {
                console.log('Enviando peticion')
                const information = await this.$axios.$get(`${process.env.BASE_URL}/plan`)
                console.log(information)
                this.information = information
            },
            validateUser(step) {
                if(this.user_logged)
                    this.setStep(step)
                else this.$router.push(`/register/?returnStep=${step}`)
            }
        },
        computed: {
            items() {
               return this.information.map(inf => inf.name)
            }
        },
        mixins: [userInfoMixin]
    }
</script>

<style scoped>

</style>