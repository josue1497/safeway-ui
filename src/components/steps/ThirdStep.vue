<template>
    <div class="container flex px-8 justify-center flex-col m-5 w-3/4 mx-auto">
        <h1 class="text-xl font-bold text-primary text-center">Proceso de Emisión</h1>
        <Stepper :steps="steps" :route="alreadyTraveled" :current="2"></Stepper>
        <div class="mx-auto w-3/4">
            <div class="grid grid-cols-12 gap-4 mt-5 mb-5">
                <p class="col-span-2 uppercase font-bold col-span-12">Información del cliente:</p>
                <BaseInput name="dni" mandatory label="Número de cédula" type="text" class="col-span-6" v-model="customer.dni"></BaseInput>
                <BaseInput name="name" mandatory label="Nombres y Apellidos" type="text" class="col-span-6" v-model="customer.names"></BaseInput>
                <BaseInput name="address" mandatory label="Dirección" type="text" class="col-span-12" v-model="customer.address"></BaseInput>
                <BaseInput name="local-number" mandatory label="Teléfono convencional" type="text" class="col-span-4" v-model="customer.conventional_phone"></BaseInput>
                <BaseInput name="phone-number" mandatory label="Telefono celular" type="text" class="col-span-4" v-model="customer.cellphone"></BaseInput>
                <BaseInput name="email" mandatory label="E-mail" type="text" class="col-span-4" v-model="customer.email"></BaseInput>
            </div>
            <div class="border-b border-gray-300 p-5"></div>
            <div class="mt-10 w-full">
                <ExpansionPanel :title="index === 0 ? 'Información del beneficiario principal:':'Información del beneficiario secundario:'" v-for="(beneficiary, index) of beneficiaries" :key="index"
                                :show-clear="index>0" @clear="clearBeneficiary(index)">
                    <div class="w-full">
                        <div class="grid grid-cols-12 gap-4 mt-10 mb-5">
                            <BaseInput name="names" mandatory label="Nombre y apellido" type="text" class="col-span-6" v-model="beneficiary.names"></BaseInput>
                            <BaseInput name="dni" mandatory label="Identificación" type="text"  class="col-span-6" v-model="beneficiary.dni"></BaseInput>
                            <BaseInput name="birth-date" mandatory label="Fecha de nacimiento" type="date" class="col-span-4" v-model="beneficiary.birth_date"></BaseInput>
                            <BaseInput name="age" mandatory label="Edad" type="number" class="col-span-4" v-model="beneficiary.age"></BaseInput>
                            <BaseInput name="genre" mandatory label="Sexo" type="radio" :options="genre" :show-label="true" v-model="beneficiary.genre"></BaseInput>
                            <BaseInput name="birth-place" mandatory label="Lugar de nacimiento" type="text" class="col-span-4" v-model="beneficiary.born_place"></BaseInput>
                            <BaseInput name="height" mandatory label="Estatura" type="text" class="col-span-4" v-model="beneficiary.height"></BaseInput>
                            <BaseInput name="weight" mandatory label="Peso" type="text" class="col-span-4" v-model="beneficiary.weight"></BaseInput>
                        </div>
                    </div>
                </ExpansionPanel>
                <button class="group hover:bg-primary hover:shadow-lg px-4 py-2 mt-5 flex justify-center items-center border border-primary rounded " v-if="canAddPersonal"
                        @click="addBeneficiary">
                    <span class="material-icons mr-auto text-primary group-hover:text-white">add_circle_outline</span>
                    <span class="ml-3 group-hover:text-white">Añadir beneficiario secundario</span>
                </button>
            </div>
            <div class="border-b border-gray-300 p-5"></div>
            <div class="flex justify-center align-center w-full mt-10 flex-col">
                <h3 class="text-lg font-bold uppercase mb-4">INFORMACIÓN MÉDICA SOBRE EL BENEFICIARIO:</h3>
                <div v-for="(surveyR, index) of survey" class="flex justify-center align-center w-full flex-col">
                    <MedicalInformation
                            :key="index" :name="`survey-${surveyR.item}`"
                            :description="surveyR.description" v-if="surveyR.isBoolean" v-model="surveyResponse[index].response"/>
                    <div class="flex justify-center items-center w-full flex-col my-2" v-if="!surveyR.isBoolean && showTextArea">
                        <label for="condition_detail">{{surveyR.description}}</label>
                        <textarea name="condition_detail" id="condition_detail" rows="5" class="w-full my-2 border border-black" v-model="surveyResponse[index].response"></textarea>
                    </div>
                </div>
            </div>
            <div class="border-b border-gray-300 p-5"></div>
            <div class="flex justify-center align-center w-full mt-5 flex-col mt-10">
                <h3 class="text-lg font-bold uppercase">Datos para facturación:</h3>
                <div class="grid grid-cols-12 gap-4 ">
                    <BaseInput name="genre" mandatory label="Factura a nombre de:" type="radio" :options="invoiceTo" :show-label="true" class="col-span-12" v-model="invoiceInformation.client_to"></BaseInput>
                    <BaseInput name="social-reason" mandatory label="Nombre/Razón Social" type="text" class="col-span-6"  v-model="invoiceInformation.reason_name"></BaseInput>
                    <BaseInput name="ruc" mandatory label="C.I/RUC" type="text"  class="col-span-6"  v-model="invoiceInformation.ruc"></BaseInput>
                    <BaseInput name="email-to-invoice" mandatory label="Correo electrónico para facturación" type="text" class="col-span-6" v-model="invoiceInformation.email"></BaseInput>
                    <BaseInput name="phone" mandatory label="Teléfono" type="text" class="col-span-6" v-model="invoiceInformation.phone_number"></BaseInput>
                    <BaseInput name="address" mandatory label="Dirección" type="text" class="col-span-12"  v-model="invoiceInformation.address"></BaseInput>
                </div>
                <div class="flex justify-center items-center w-full flex-col my-8">
                    <BaseInput name="agree" v-model="conditions" :label="`<p>El agente declara que asesoró al cliente a fin de que la solicitud y toda la documentación contenga
                                                    información veraz. La falta de veracidad puede afectar la validez del contrato o el reembolso de los
                                                    reclamos.</p><br><p> El agente reconoce que el cliente aceptó que actúa por su cuenta y representación en esta
                                                    transacción. Así como también reconoce que el cliente ha leído y acepta los términos y condiciones</p>`" type="check"></BaseInput>
                </div>
                <div class="flex justify-start items-start items-start w-full flex-col">
                    <p>(<span class="text-red-600">*</span>) Campos obligatorios</p>
                </div>
                <div class="container p-4 flex flex-row justify-around align-center">
                    <button class="bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 ease-in-out mx-auto w-1/4 rounded py-2 rounded-full" @click="backStep">Volver a cotizar</button>
                    <button class="bg-primary text-white hover:bg-secondary transition-all duration-200 ease-in-out mx-auto w-1/4 rounded py-2 rounded-full" @click="nextStep">Continuar</button>
                    <div id="tooltip-default" role="tooltip" class="tooltip absolute z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 duration-300 transition-opacity invisible dark:bg-gray-700">
                        Tooltip content
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
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
    import { beneficiaries, defaultBeneficiary, defaultCustomer, invoiceInformationDefault } from '../../data/constants'
    import * as safewaySurvey from "../../assets/data/survey";

    export default {
        name: 'ThirdStep',
        components: { ExpansionPanel, MedicalInformation, BaseInput, Stepper },
        computed: {
            ...mapState({
                annexes: state => state.annexes,
                membership: state => state.membership,
                plan: state => state.plan,
                annexesSelected: state => state.annexesSelected
            }),
            canAddPersonal(){
                return this.plan.name !== 'Individual'
            },
            showTextArea(){
                return this.surveyResponse.some(survey => survey.response !== 'No')
            },

        },
        data: () =>({
            documents: ['Cédula', 'Pasaporte'],
            genre: ['Hombre', 'Mujer'],
            invoiceTo: ['Cliente', 'Otra persona natural o jurídica'],
            yesno: ['Si', 'No'],
            steps: [1, 2, 3, 4],
            alreadyTraveled: [1],
            beneficiaries: [...beneficiaries],
            customer: {...defaultCustomer},
            survey: [],
            surveyResponse: [],
            invoiceInformation: {...invoiceInformationDefault},
            conditions: false,
        }),
        mounted(){
            this.survey = [...safewaySurvey.default]
            this.surveyResponse = [...this.survey.map(survey => ({item: survey.item, response: 'No'}))]
        },
        methods: {
            nextStep(){
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
                this.$emit('next')
            },
            backStep(){
                this.$emit('back')
            },
            addBeneficiary(){
                this.beneficiaries = [...this.beneficiaries, defaultBeneficiary]
            },
            clearBeneficiary(index){
               this.beneficiaries.splice(index, 1)
            },
            validateCustomer(){
                return !this.customer.names || !this.customer.dni || !this.customer.email
                    || !this.customer.cellphone || !this.customer.conventional_phone || !this.customer.address
            },
            validateBeneficiaries(){
                return this.beneficiaries.some(beneficiary => !beneficiary.dni || !beneficiary.names || !beneficiary.age
                    || !beneficiary.birth_date || !beneficiary.genre || !beneficiary.born_place || !beneficiary.height || !beneficiary.weight)
            },
            validateInvoiceInformation(){
                return !this.invoiceInformation.client_to || !this.invoiceInformation.ruc || !this.invoiceInformation.reason_name
                    || !this.invoiceInformation.email || !this.invoiceInformation.phone_number || !this.invoiceInformation.address
            },
        }
    }
</script>
<style scoped>

</style>