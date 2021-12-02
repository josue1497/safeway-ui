<template>
    <div class="p-5 w-3/4 mx-auto">
        <div class="mx-4 p-4">
            <div class="flex items-center">
                <div v-for="(step, index) of steps" :key="index" :class="`flex items-center flex-row ${index+1 !== steps.length?'w-full':''}`">
                    <div class="flex items-center text-primary relative"  >
                        <div
                                :class="`
                                rounded-full
                                transition
                                duration-500
                                ease-in-out
                                h-12
                                w-12
                                py-3
                                border-2 bg-primary
                                ${step===current || alreadyTraveled(step)?'bg-primary text-white':'bg-white text-primary'}
                                text-center
                                flex justify-center items-center
                              `"
                        >
                            <span v-if="alreadyTraveled(step)" class="material-icons">check</span>
                            <span v-else class="font-bold">{{ step }}</span>
                        </div>
                    </div  >
                    <div
                            class="
                              flex-auto
                              border-t-2
                              transition
                              duration-500
                              ease-in-out
                              border-purple-500
                              w-3/4
                            "
                            v-if="index+1 !== steps.length"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Stepper',
        props: {
            route: { type: Array, default: () => [] },
            steps: { type: Array, default: () => [] },
            current: { type: Number, default: 0 }
        },
        methods: {
            alreadyTraveled(step){
                return this.route.some(item => item === step)
            }
        }
    }
</script>

<style scoped>

</style>