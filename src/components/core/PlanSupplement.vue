<template>
        <div class=" w-full grid grid-cols-12 gap-2">
            <div class="h-48 lg:h-auto lg:w-48 flex text-center overflow-hidden col-span-2" >
                <label class="cursor-pointer label flex flex-row justify-center items-center w-full h-full">
                    <BaseInput class="p-icon p-round" name="icon" type="check" v-model="selected"/>
                    <img class="w-16 h-16 mx-5 label" :src="icon" alt="airplane"/>
                </label>
            </div>
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r px-4 flex flex-col justify-between leading-normal col-span-10">
                <div class="flex flex-row justify-between leading-normal">
                    <div class="w-3/4 p-3">
                        <div class="border-r border-gray-300 w-full flex justify-center items-start flex-col py-2 pr-2">
                            <div class="text-primary font-bold text-xl mb-2">{{name}}</div>
                            <p class="text-gray-700 text-base">{{description}}</p>
                        </div>
                        <button class="bg-primary py-1 px-6 hover:bg-secondary text-white rounded-full mt-2" @click="moreInformation">Más información</button>
                    </div>
                    <div class="flex items-center justify-center w-1/4 flex-col">
                        <p class="text-2xl leading-none">${{price}}</p>
                        <p class="text-primary text-sm font-bold ">Mensual</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import BaseInput from './BaseInput'
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'PlanSupplement',
        components: { BaseInput },
        props: {
            name: {type: String, default: 'Unnamed'},
            description: {type: String, default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of' },
            icon: {type: String, default: 'not image' },
            price: {type: [Number, String], default: 0 },
            annexed: {type: Object, default: () => ({}) },
        },
        data: () =>({
            selected: false
        }),
        computed: {
            ...mapState({
                annexesSelected: state => state.annexesSelected
            }),
        },
        methods: {
            ...mapActions(['setAnnexesSelected']),
            moreInformation(){
                this.$emit('more-information')
            }
        },
        watch: {
            selected(){
                let items = []
                if(this.selected){
                    items = [...this.annexesSelected, this.annexed]
                }else{
                    items = this.annexesSelected.filter(anxd => anxd.item!==this.annexed.item )
                }
                this.setAnnexesSelected(items)
            }
        }
    }
</script>

<style scoped>
</style>