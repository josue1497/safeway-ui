<template>
    <div class="container mx-auto w-full flex justify-center flex-col items-center h-screen">
        <div class="container mx-auto w-full grid grid-cols-12">
            <div class="flex flex-col justify-center item-center border-r px-10 col-span-6">
                <div class="rounded overflow-hidden shadow-lg bg-gray-100 py-10 px-8 mx-auto">
                        <div class="font-bold text-xl mb-2 text-primary">Acceder</div>
                        <BaseInput type="text" mandatory label="Nombre de usuario o correo electronico" name="user" class="my-5"></BaseInput>
                        <BaseInput type="password" mandatory label="Contraseña" name="userPassword" class="my-5"></BaseInput>
                        <button class="bg-primary hover:bg-secondary hover:text-white text-white py-2 px-4 rounded w-full">
                            Acceder
                        </button>
                </div>
                <div class="flex justify-between items-center mt-10 w-3/4 mx-auto">
                    <BaseInput type="check" label="Recuerdame"></BaseInput>
                    <a href="#" class="text-secondary underline">¿Olvidaste la Contraseña?</a>
                </div>
            </div>

            <div class="rounded overflow-hidden flex justify-center items-center  col-span-6">
                <div class="flex flex-col justify-center item-center px-10 mx-auto">
                    <div class="py-10 px-8 mx-auto">
                        <div class="font-bold text-xl mb-2 text-primary">Registrarse</div>
                        <BaseInput type="text" mandatory label="Dirección de correo electrónico" name="email" class="my-5"></BaseInput>

                        <p class="text-gray-700 text-sm">
                            Se enviaré una contrase{a a tu dirección de correo
                            electrónico.
                        </p>
                        <p class="text-gray-700 text-sm mt-5">
                            Sus datos personales se utllizaran pare respaldar su
                            experiencia en este sitio web, para administrar el
                            acceso a su cuenta y para otros fines descritos en
                            nuestra politica de privacidad. politica de privacidad.
                        </p>
                        <button class="bg-primary hover:bg-secondary hover:text-white text-white py-2 px-4 mt-5 rounded w-full">
                            Registrarse
                        </button>
                    </div>

                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import BaseInput from '../components/core/BaseInput'
    export default {
        name: 'register',
        components: { BaseInput },
    }
</script>

<style scoped>

</style>