<template>
    <div :class="`flex items-start py-2 flex-col `">
        <label :for="name" class="text-primary main-label"
               v-if="isNaturalInput || isSelect || isAutocomplete || showLabel">
            {{ label }}
            <span class="text-red-600" v-if="mandatory">*</span>
        </label>
        <div class="flex items-start justify-center w-full items-center">
            <input class="w-full form-input mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black"
                   :type="type"
                   :placeholder="label"
                   :aria-label="label"
                   :name="name"
                   v-if="isNaturalInput"
                   @input="updateValue($event.target.value)"
            />
            <select class="form-select w-full mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black"
                    :type="type"
                    :placeholder="label"
                    :aria-label="label"
                    :name="name"
                    v-if="isSelect"
                    @input="updateValue($event.target.value)"
            >
                <option value="">Seleccione una opción</option>
                <option v-for="(option, index) of options" :key="index" :value="option"> {{option}}</option>
            </select>
            <div class="w-full flex flex-row  mt-2 appearance-none bg-transparent border-none text-gray-700 py-1 leading-tight focus:outline-none"
                 v-if="isRadio"
            >
                <div v-for="(option, index) of options" :key="index" class="mr-4">
                    <b-field>
                        <b-radio v-model="value"
                                 @input="updateValue"
                                 :native-value="option"
                                 :name="name">
                            {{ option }}
                        </b-radio>
                    </b-field>
                </div>
            </div>
            <div class="w-full flex flex-row appearance-none bg-transparent border-none text-gray-700 py-1 leading-tight focus:outline-none"
                 v-if="isCheck"
            >
                <div>
                    <b-field>
                        <b-checkbox @input="updateValue" :name="name" :native-value="value" v-model="value"/>
                    </b-field>
                </div>
                <div class="ml-3">
                    <label :for="name" v-html="label"></label>
                </div>
            </div>
            <div class="w-full flex flex-row relative appearance-none bg-transparent border-none text-gray-700 py-1 leading-tight focus:outline-none"
                 v-if="isAutocomplete"
            >
                <div class="relative w-full">
                    <input class="w-full form-input mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black"
                           :type="type"
                           :placeholder="label"
                           :aria-label="label"
                           :name="name"
                           :id="id"
                           @input="filterOptions($event.target.value)"
                           autocomplete="off"
                           @focus="showMenu=true"
                           @blur="blurInput"
                    />
                    <div class="absolute top-10 right-0 w-full text-center flex flex-col border shadow-2xl"
                         v-show="showMenu">
                        <div v-show="!_options.length">
                            Sin resultados
                        </div>
                        <div class="w-full relative  max-h-56 overflow-y-auto" v-show="_options.length">
                            <div class="w-full py-1 text-center bg-white hover:bg-secondary hover:text-white cursor-pointer"
                                 v-for="(option, index) of _options"
                                 :key="index" @click.prevent="setOption(option)">{{option}}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="h-full flex items-center">
                <span class="material-icons" v-if="icon" v-html="icon"></span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'BaseInput',
        props: {
            id: { type: String, default: null },
            icon: { type: String, default: null },
            label: { type: String, default: null },
            name: { type: String, default: null },
            type: { type: String, default: 'text' },
            mandatory: { type: Boolean, default: false },
            showLabel: { type: Boolean, default: false },
            value: { type: [String, Number, Boolean], default: null },
            options: { type: Array, default: () => ([]) },
            border: { type: Boolean, default: true },
        },
        data: () => ({
            showMenu: false,
            val: '',
        }),
        computed: {
            isSelect() {
                return this.type === 'select'
            },
            isRadio() {
                return this.type === 'radio'
            },
            isCheck() {
                return this.type === 'check'
            },
            isAutocomplete() {
                return this.type === 'autocomplete'
            },
            isNaturalInput() {
                return !this.isSelect && !this.isRadio && !this.isCheck && !this.isAutocomplete
            },
            _options() {
                if (this.val) return this.options.filter(opt => opt.toLowerCase().includes(this.val.toLowerCase()))

                return this.options
            },
        },
        methods: {
            updateValue(value) {
                this.$emit('input', value)
                this.showMenu = false
            },
            filterOptions(val) {
                this.val = val
            },
            setOption(val = '') {
                console.log(val)
                if (val) {
                    this.updateValue(val)
                    const el = document.querySelector(`#${this.id}`)
                    if (el) el.value = val
                }
            },
            blurInput() {
                setTimeout(() => {
                    this.showMenu = false
                }, 100)

            },
        },
    }
</script>

<style scoped>
    .main-label {
        min-width: 10vh;
    }
</style>