<template>
    <div class="container flex px-8 justify-center flex-col m-5 w-3/4 mx-auto">
        <h1 class="text-xl font-bold text-primary text-center">Proceso de Emision</h1>
        <Stepper :steps="steps" :route="alreadyTraveled" :current="2"></Stepper>
        <form class="mx-auto w-3/4" @submit="() => {return false}">
            <div class="grid grid-cols-2 gap-4 ">
                <p class="col-span-2 uppercase font-bold">Informacion de cliente:</p>
                <BaseInput name="dni-type" mandatory label="Tpo de identificación" type="select" :options="documents"></BaseInput>
                <BaseInput name="dni" mandatory label="Identificación" type="text" icon="search"></BaseInput>
                <BaseInput name="name" mandatory label="Nombre" type="text"></BaseInput>
                <BaseInput name="lastname" mandatory label="Apellido" type="text"></BaseInput>
            </div>
            <div class="grid grid-cols-3 gap-4 mt-5 mb-5">
                <BaseInput name="local-number" mandatory label="Telefono convensional" type="text" icon="search"></BaseInput>
                <BaseInput name="phone-number" mandatory label="Telefono celular" type="text"></BaseInput>
                <BaseInput name="email" mandatory label="E-mail" type="text"></BaseInput>
            </div>
            <div class="border-b border-gray-300 p-5"></div>
            <div class="grid grid-cols-2 gap-4 mt-10">
                <p class="col-span-2 uppercase font-bold">Informacion de los beneficiarios:</p>
                <BaseInput name="dni-type" mandatory label="Tpo de identificación" type="select" :options="documents"></BaseInput>
                <BaseInput name="dni" mandatory label="Identificación" type="text" icon="search"></BaseInput>
            </div>
            <div class="grid grid-cols-3 gap-4 mt-5 mb-5">
                <BaseInput name="name" mandatory label="Nombre" type="text"></BaseInput>
                <BaseInput name="lastname" mandatory label="Apellido" type="text"></BaseInput>
                <BaseInput name="genre" mandatory label="Sexo" type="radio" :options="genre"></BaseInput>
                <BaseInput name="birth-place" mandatory label="Lugar de nacimiento" type="text"></BaseInput>
                <BaseInput name="height" mandatory label="Estatura" type="text"></BaseInput>
                <BaseInput name="weight" mandatory label="Peso" type="text"></BaseInput>
            </div>
            <div class="border-b border-gray-300 p-5"></div>
            <div class="flex justify-center align-center w-full mt-10 flex-col">
                <h3 class="text-lg font-bold uppercase mb-4">INFORMACIÓN MÉDICA SOBRE EL BENEFICIARIO:</h3>
                <MedicalInformation name="form1" description="¿Han sido diagnosticado de cualquier condición médica, consecuente de enfermedad
                        y/o accidente, que haya requerido de hospitalización, tratamiento médico y/o
                        medicamentos con anterioridad a la presente fecha?"/>
                <MedicalInformation name="form2" description="¿Han sido notificados de necesitar hospitalización, cirugía, tratamiento, consultas
                        médicas qué a la fecha no se hayan llevado a cabo o existe alguna razón por la cual"/>
                <MedicalInformation name="form3" description="¿Están bajo algún tratamiento o medicación o están bajo evaluación para determinar un diagnóstico no definido?"/>
                <div class="flex justify-center items-center w-full flex-col my-2">
                    <label for="condition_detail">Por favor dar detalles de las respuestas afirmativas incluyendo el número de pregunta, beneficiario,
                        diagnóstico, fecha, nombre de médico u hospitales, tratamientos recibidos y/o medicamentos prescritos,
                        estado actual y cualquier otro detalle adicional que considere necesario mencionar en base a la pregunta:</label>
                    <textarea name="condition_detail" id="condition_detail" rows="5" class="w-full my-2 border border-black"></textarea>
                </div>
                <div class="flex justify-center items-center w-full flex-col my-8">
                    <BaseInput name="agree" :label="`<p>El agente declara que asesoró al cliente a fin de que la solicitud y toda la documentación contenga
                                                    información veraz. La falta de veracidad puede afectar la validez del contrato o el reembolso de los
                                                     reclamos.</p><br><br><p> El agente reconoce que el cliente aceptó que actúa por su cuenta y representación en esta
transacción. Así como también reconoce que el cliente ha leído y acepta los términos y condiciones</p>`" type="check"></BaseInput>
                </div>
                <div class="container p-4 flex flex-row justify-around align-center">
                    <button class="bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 ease-in-out mx-auto w-1/4 rounded py-2 rounded-full" @click="backStep">Volver a cotizar</button>
                    <button class="bg-primary text-white hover:bg-secondary transition-all duration-200 ease-in-out mx-auto w-1/4 rounded py-2 rounded-full" @click="nextStep">Continuar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import Stepper from '../core/Stepper'
    import BaseInput from '../core/BaseInput'
    import MedicalInformation from '../core/MedicalInformation'
    export default {
        name: 'ThirdStep',
        components: { MedicalInformation, BaseInput, Stepper },
        data: () =>({
            documents: ['Natural', 'Jurídico'],
            genre: ['Hombre', 'Mujer'],
            yesno: ['Si', 'No'],
            steps: [1, 2, 3, 4],
            alreadyTraveled: [1]
        }),
        methods: {
            nextStep(){
                this.$emit('next')
            },
            backStep(){
                this.$emit('back')
            }
        }
    }
</script>

<style scoped>

</style>