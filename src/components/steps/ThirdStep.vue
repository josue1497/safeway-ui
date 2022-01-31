<template>
    <div class="container flex px-8 justify-center flex-col m-5 w-3/4 mx-auto">
        <h1 class="text-xl font-bold text-primary text-center">Proceso de Emisión</h1>
        <Stepper :steps="steps" :route="alreadyTraveled" :current="2"></Stepper>
        <div class="mx-auto w-3/4">
            <div class="mt-10 w-full">
                <ExpansionPanel
                        :title="'Información del beneficiario principal:'">
                    <div class="w-full">
                        <div class="grid grid-cols-12 gap-4 mt-10 mb-5">
                            <BaseInput name="dni" mandatory label="Identificación" type="text" class="col-span-12"
                                       v-model="beneficiary.identification"></BaseInput>
                            <BaseInput name="names" mandatory label="Nombres" type="text" class="col-span-6"
                                       v-model="beneficiary.first_name"></BaseInput>
                            <BaseInput name="lastnames" mandatory label="Apellidos" type="text" class="col-span-6"
                                       v-model="beneficiary.last_name"></BaseInput>
                            <BaseInput name="address" mandatory label="Dirección" type="text" class="col-span-12"
                                       v-model="customer.address"></BaseInput>
                            <BaseInput name="local-number" label="Teléfono convencional" type="text" class="col-span-4"
                                       v-model="customer.conventional_phone"></BaseInput>
                            <BaseInput name="phone-number" mandatory label="Telefono celular" type="text"
                                       class="col-span-4" v-model="customer.cellphone"></BaseInput>
                            <BaseInput name="email" mandatory label="E-mail" type="text" class="col-span-4"
                                       v-model="customer.email"></BaseInput>
                            <BaseInput name="birth-date" mandatory label="Fecha de nacimiento" type="date"
                                       class="col-span-6" v-model="beneficiary.birth_date"></BaseInput>
                            <BaseInput name="birth-place" id="input-birth-place" mandatory label="Lugar de nacimiento"
                                       type="autocomplete" class="col-span-6" :options="places"
                                       v-model="beneficiary.place_of_birth" icon="keyboard_arrow_down"></BaseInput>
                        </div>
                    </div>
                </ExpansionPanel>
                <ExpansionPanel
                        title="Información del beneficiario secundario:"
                        v-for="(_beneficiary, index) of beneficiaries" :key="index"
                        show-clear @clear="clearBeneficiary(index)">
                    <div class="w-full">
                        <div class="grid grid-cols-12 gap-4 mt-10 mb-5">
                            <BaseInput name="dni" mandatory label="Identificación" type="text" class="col-span-12"
                                       v-model="_beneficiary.identification"></BaseInput>
                            <BaseInput name="names" mandatory label="Nombres" type="text" class="col-span-6"
                                       v-model="_beneficiary.first_name"></BaseInput>
                            <BaseInput name="lastnames" mandatory label="Apellidos" type="text" class="col-span-6"
                                       v-model="_beneficiary.last_name"></BaseInput>
                            <BaseInput name="address" mandatory label="Dirección" type="text" class="col-span-12"
                                       v-model="_beneficiary.address"></BaseInput>
                            <BaseInput name="local-number" label="Teléfono convencional" type="text" class="col-span-4"
                                       v-model="_beneficiary.conventional_phone"></BaseInput>
                            <BaseInput name="phone-number" mandatory label="Telefono celular" type="text"
                                       class="col-span-4" v-model="_beneficiary.cellphone"></BaseInput>
                            <BaseInput name="email" mandatory label="E-mail" type="text" class="col-span-4"
                                       v-model="_beneficiary.email"></BaseInput>
                            <BaseInput name="birth-date" mandatory label="Fecha de nacimiento" type="date"
                                       class="col-span-6" v-model="_beneficiary.birth_date"></BaseInput>
                            <BaseInput name="birth-place" id="input-birth-place" mandatory label="Lugar de nacimiento"
                                       type="autocomplete" class="col-span-6" :options="places"
                                       v-model="_beneficiary.place_of_birth" icon="keyboard_arrow_down"></BaseInput>
                        </div>
                    </div>
                </ExpansionPanel>
                <button class="group hover:bg-primary hover:shadow-lg px-4 py-2 mt-5 flex justify-center items-center border border-primary rounded "
                        v-if="canAddPersonal"
                        @click="addBeneficiary">
                    <span class="material-icons mr-auto text-primary group-hover:text-white">add_circle_outline</span>
                    <span class="ml-3 group-hover:text-white">Añadir beneficiario secundario</span>
                </button>
            </div>
            <div class="border-b border-gray-300 p-5"></div>
            <div class="flex justify-center align-center w-full mt-5 flex-col mt-10">
                <h3 class="text-lg font-bold uppercase">Datos para facturación:</h3>
                <div class="grid grid-cols-12 gap-4 ">
                    <BaseInput name="type_identifier" id="type_identifier" mandatory label="Factura a nombre de:"
                               type="radio"
                               :options="invoiceTo" :show-label="true" class="col-span-12"
                               v-model="invoiceInformation.type_identifier"></BaseInput>
                    <BaseInput name="social-reason" id="social-reason" mandatory label="Nombre/Razón Social" type="text"
                               class="col-span-6"
                               v-model="invoiceInformation.business_name"></BaseInput>
                    <BaseInput name="ruc" id="ruc" mandatory label="C.I/RUC" type="text" class="col-span-6"
                               v-model="invoiceInformation.ruc"></BaseInput>
                    <BaseInput name="email-to-invoice" id="email-to-invoice" mandatory
                               label="Correo electrónico para facturación" type="text"
                               class="col-span-6" v-model="invoiceInformation.email"></BaseInput>
                    <BaseInput name="phone" id="phone" mandatory label="Teléfono" type="text" class="col-span-6"
                               v-model="invoiceInformation.phone"></BaseInput>
                    <BaseInput name="address" id="address" mandatory label="Dirección" type="text" class="col-span-12"
                               v-model="invoiceInformation.address"></BaseInput>
                </div>
                <div class="flex justify-center items-center w-full flex-col my-8">
                    <BaseInput name="agree" v-model="conditions"
                               :label="`<div class='text-justify'>
                                        <p>Por medio del presente certifico que he leído esta solicitud, que la he llenado conscientemente y que toda la información escrita en este anexo es veraz y exacta y, en consecuencia, ninguno de los beneficiarios ha sido diagnosticado con una condición médica, ni tiene antecedentes o problemas de salud conocidos con anterioridad a la fecha de celebración del contrato, más allá de lo informado en el apartado denominado Información Médica sobre los Beneficiarios.</p><br>
                                        <p>Conozco y acepto que la omisión de declaración de cualquier información que no haya sido revelada o sea inexacta, le da derecho a la Compañía a la falta de prestación del servicio de asistencia o terminación del contrato.</p><br>
                                        <p>Autorizo a Safeway a solicitar a cualquier clínica, hospital, centro médico o médico tratante la información que considere necesaria sobre nuestro estado de salud y para que acceda a toda la información médica confidencial (pasada, presente y futura) mía y de los beneficiarios.</p><br>
                                        <p>En consecuencia, no será necesario que Safeway solicite autorización ni a mí ni a los beneficiarios cada vez que tenga que acceder a información médica confidencial.</p><br>
                                        <p>Esta autorización será válida mientras el contrato se mantenga vigente.</p>
                                        </div>`" type="check"></BaseInput>
                </div>
                <div class="flex justify-start items-start items-start w-full flex-col">
                    <p>(<span class="text-red-600">*</span>) Campos obligatorios</p>
                </div>
                <div class="container p-4 flex flex-row justify-around align-center">
                    <button class="bg-white border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white transition-all duration-200 ease-in-out mx-auto w-1/4 rounded rounded-full"
                            @click="backStep">Volver a cotizar
                    </button>
                    <button :class="`inline-flex  w-1/4 items-center px-4 py-2 font-semibold leading-6 text-sm text-white bg-primary hover:bg-secondary transition ease-in-out duration-150 rounded-full ${loading ?'cursor-not-allowed':''}`"
                            @click="nextStep" :disabled="loading">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" v-if="loading">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span class="mx-auto">Continuar</span>
                    </button>
                </div>
            </div>


        </div>
    </div>
</template>
<script>
    import Stepper from '../core/Stepper'
    import BaseInput from '../core/BaseInput'
    import MedicalInformation from '../core/MedicalInformation'
    import ExpansionPanel from '../core/ExpansionPanel'
    import { mapState } from 'vuex'
    import {
        cities,
        defaultBeneficiary,
        defaultCustomer,
        invoiceInformationDefault,
    } from '../../data/constants'
    import * as safewaySurvey from '../../assets/data/survey'
    import userInfoMixin from '../../mixins/userInfo.mixin'

    export default {
        name: 'ThirdStep',
        components: { ExpansionPanel, MedicalInformation, BaseInput, Stepper },
        computed: {
            ...mapState({
                annexes: state => state.annexes,
                membership: state => state.membership,
                plan: state => state.plan,
                annexesSelected: state => state.annexesSelected,
            }),
            canAddPersonal() {
                return this.plan.name !== 'Individual'
            },
            showTextArea() {
                return this.surveyResponse.some(survey => survey.isBoolean && survey.response !== 'No')
            },

        },
        data: () => ({
            documents: ['Cédula', 'Pasaporte'],
            genre: ['Hombre', 'Mujer'],
            invoiceTo: ['Cliente', 'Otra persona natural o jurídica'],
            places: cities,
            yesno: ['Si', 'No'],
            steps: [1, 2, 3, 4],
            alreadyTraveled: [1],
            beneficiaries: [],
            beneficiary: { ...defaultBeneficiary },
            customer: { ...defaultCustomer },
            survey: [...safewaySurvey.default],
            surveyResponse: [],
            invoiceInformation: { ...invoiceInformationDefault },
            conditions: false,
            loading: false,
        }),
        async mounted() {
            await this.getSurvey()
        },
        methods: {
            async getSurvey() {
                this.survey = await this.$axios.$get(`${process.env.BASE_URL}/survey`)
                this.surveyResponse = [...this.survey.map(survey => ({
                    survey_id: survey.id,
                    item: survey.item,
                    response: survey.isBoolean ? 'No' : '',
                    isBoolean: survey.isBoolean,
                }))]
            },
            async nextStep() {
                if(this.validateCustomer()){
                    alert('Disculpe, aún falta información principal de clientes.')
                    return
                }

                if(this.validateBeneficiaries()){
                    alert('Disculpe, aún falta información referente a sus beneficiarios.')
                    return
                }

                if(this.validateInvoiceInformation()){
                    alert('Disculpe, aún faltan algunos datos de facturación.')
                    return
                }

                await this.sendClientInformation()

                this.$emit('next')
            },
            backStep() {
                this.$emit('back')
            },
            addBeneficiary() {
                this.beneficiaries = [...this.beneficiaries, defaultBeneficiary]
            },
            setBeneficiaryByCustomer(customer) {
                this.beneficiaries[0] = {
                    ...this.beneficiaries[0],
                    first_name: customer.first_name,
                    last_name: customer.last_name,
                    address: customer.address,
                }
            },
            clearBeneficiary(index) {
                this.beneficiaries.splice(index, 1)
            },
            validateCustomer() {
                return !this.customer.first_name || !this.customer.last_name || !this.customer.identification || !this.customer.email
                    || !this.customer.cellphone || !this.customer.address
            },
            validateBeneficiaries() {
                return this.beneficiaries.some(beneficiary => !beneficiary.identification || !beneficiary.first_name || !beneficiary.last_name || !beneficiary.birth_date || !beneficiary.place_of_birth)
            },
            validateInvoiceInformation() {
                return !this.invoiceInformation.ruc || !this.invoiceInformation.business_name
                    || !this.invoiceInformation.email || !this.invoiceInformation.phone || !this.invoiceInformation.address
                    || !this.invoiceInformation.type_identifier
            },
            async sendClientInformation() {
                const membership_annexed = this.annexesSelected.map(anx => ({ membership_annexed_id: anx.annexed_id }))
                const info_customer = { ...this.customer, plan_membership_id: this.membership.membership_id }
                const { beneficiaries } = this
                const survey = this.surveyResponse.map(({ survey_id, response, isBoolean }) => ({
                    survey_id,
                    answer_boolean: isBoolean ? response === 'Si' : null,
                    answer_text: !isBoolean ? response : '',
                }))
                const invoice = {
                    ...this.invoiceInformation,
                    is_customer: this.invoiceInformation.is_customer === 'Cliente' ? 1 : 0,
                    identifier: this.invoiceInformation.ruc,
                }
                const data = {
                    user_id: this.currentUser.id,
                    membership_annexed,
                    info_customer,
                    beneficiaries,
                    survey,
                    invoice,
                }
                this.loading = true
                const response = await this.$axios.$post(`${process.env.BASE_URL}/user-customer`, data, { ...this.config })
                this.loading = false
                console.log(response)
                return response
            },
        },
        mixins: [userInfoMixin],
        watch: {
            'beneficiary.first_name'(newValue) {
                this.customer.first_name = newValue
            },
            'beneficiary.last_name'(newValue) {
                this.customer.last_name = newValue
            },
            'beneficiary.identification'(newValue) {
                this.customer.identification = newValue
            },
            'invoiceInformation.type_identifier'(newValue) {
                console.log(newValue)
                if ('Cliente' === newValue) {
                    console.log('si')
                    this.invoiceInformation.ruc = this.customer.identification
                    this.invoiceInformation.business_name = `${this.customer.first_name} ${this.customer.last_name}`
                    this.invoiceInformation.email = this.customer.email
                    this.invoiceInformation.phone = this.customer.conventional_phone
                    this.invoiceInformation.address = this.customer.address

                } else {
                    this.invoiceInformation.ruc = ''
                    this.invoiceInformation.business_name = ``
                    this.invoiceInformation.email = ''
                    this.invoiceInformation.phone = ''
                    this.invoiceInformation.address = ''

                }
            },
        },
    }
</script>
<style scoped>

</style>