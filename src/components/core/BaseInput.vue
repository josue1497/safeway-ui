<template>
    <div :class="`flex items-start ${isNaturalInput || isSelect? ' border-b border-black':''} py-2 flex-col`">
        <label :for="name" class="text-primary" v-if="isNaturalInput || isSelect">{{ label }}
            <span class="text-red-600" v-if="mandatory">*</span>
        </label>
        <div class="flex items-start justify-center w-full">
            <input class="w-full mt-2 appearance-none bg-transparent border-none text-gray-700 py-1 leading-tight focus:outline-none"
                   :type="type"
                   :placeholder="label"
                   :aria-label="label"
                   :name="name"
                   v-if="isNaturalInput"
                   @change="updateValue"
            />
            <select class="w-full mt-2 appearance-none bg-transparent border-none text-gray-700 py-1 leading-tight focus:outline-none"
                   :type="type"
                   :placeholder="label"
                   :aria-label="label"
                   :name="name"
                    v-if="isSelect"
                    @change="updateValue"
            >
                <option value="">Seleccione una opción</option>
                <option v-for="(option, index) of options" :key="index" :value="option"> {{option}}</option>
            </select>
            <div class="w-full flex flex-row  mt-2 appearance-none bg-transparent border-none text-gray-700 py-1 leading-tight focus:outline-none"
                 v-if="isRadio"
            >
                <div v-for="(option, index) of options" :key="index" class="mr-4">
                    <input type="radio" :id="option" :name="name" :value="option"  @change="updateValue"/>
                    <label :for="name">{{ option }}</label>
                </div>
            </div>
            <div class="w-full flex flex-row appearance-none bg-transparent border-none text-gray-700 py-1 leading-tight focus:outline-none"
                 v-if="isCheck"
            >
                <div>
                    <input type="checkbox" :id="name" :name="name" v-model="value"  @change="updateValue"/>
                </div>
                <div class="ml-3">
                    <label :for="name" v-html="label"></label>
                </div>
            </div>
            <span class="material-icons" v-if="icon" v-html="icon">
            </span>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'BaseInput',
        props: {
            icon: { type: String, default: null},
            label: { type: String, default: null},
            name: { type: String, default: null},
            type: { type: String, default: 'text'},
            mandatory: { type: Boolean, default: false},
            value: { type: [String, Number, Boolean], default:null },
            options: { type: Array, default: () => ([])},
            border: { type: Boolean, default:true}
        },
        computed: {
          isSelect(){
              return this.type === 'select'
          },
          isRadio(){
              return this.type === 'radio'
          },
          isCheck(){
              return this.type === 'check'
          },
          isNaturalInput(){
              return !this.isSelect && !this.isRadio && !this.isCheck
          }
        },
        methods: {
            updateValue(value) {
                this.$emit('input', value)
            },
        }
    }
</script>

<style scoped>

</style>