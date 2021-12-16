<template>
    <div class="container mx-auto w-full flex justify-center flex-col items-center h-screen">
        <div class="container mx-auto w-full grid grid-cols-12">
            <div class="flex flex-col justify-center item-center border-r px-10 col-span-6">
                <div class="rounded overflow-hidden shadow-lg bg-gray-100 py-10 px-8 mx-auto">
                        <div class="font-bold text-xl mb-2 text-primary">Acceder</div>
                        <BaseInput type="text" mandatory label="Nombre de usuario o correo electronico" name="user" class="my-5" v-model="authUser.userName"></BaseInput>
                        <BaseInput type="password" mandatory label="Contraseña" name="userPassword" class="my-5" v-model="authUser.password"></BaseInput>
                    <button :class="`inline-flex  w-full items-center px-4 py-2 font-semibold leading-6 text-sm text-white bg-primary hover:bg-secondary transition ease-in-out duration-150 rounded ${loadingLogin ?'cursor-not-allowed':''}`"  :disabled="loadingLogin" @click="loginUser">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loadingLogin">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span class="mx-auto">Acceder</span>
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
                        <div class="grid grid-cols-12 gap-4 ">
                            <BaseInput type="text" mandatory label="Nombres" name="firstname" class="mt-5 col-span-6" v-model="user.firstName"></BaseInput>
                            <BaseInput type="text" mandatory label="Apellidos" name="lastname" class="mt-5 col-span-6" v-model="user.lastName"></BaseInput>
                            <BaseInput name="identification" mandatory label="Cédula" type="text" class="col-span-12" v-model="user.identifier"></BaseInput>
                            <BaseInput name="phone" mandatory label="Celular" type="text"  class="col-span-6" v-model="user.contactPhone"></BaseInput>
                            <BaseInput name="birthDate" mandatory label="Fecha de nacimiento" type="date"  class="col-span-6" v-model="user.birthDate"></BaseInput>
                            <BaseInput name="email" mandatory label="Dirección de correo electrónico" type="text" class="col-span-12" v-model="user.email"></BaseInput>
                            <BaseInput name="password" mandatory label="Contraseña" type="password" class="col-span-12" v-model="user.password"></BaseInput>
                            <BaseInput name="repeat-password" mandatory label="Repetir contraseña" type="password" class="col-span-12" v-model="password"></BaseInput>
                            <small v-if="password !== user.password" class="text-red-500 col-span-12">Las Contraseñas no coinciden. </small>
                        </div>
                        <button :class="`inline-flex  w-full items-center px-4 py-2 mt-5 font-semibold leading-6 text-sm text-white bg-primary hover:bg-secondary transition ease-in-out duration-150 rounded ${loading ?'cursor-not-allowed':''}`"  :disabled="loading" @click="createUser">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span class="mx-auto">Registrarse</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import BaseInput from '../components/core/BaseInput'
    import { defaultUser } from '../data/constants'
    import { mapActions } from 'vuex'
    export default {
        name: 'register',
        components: { BaseInput },
        data: () => ({
            loading: false,
            loadingLogin: false,
            user: {...defaultUser},
            authUser: { password: '', userName: '' },
            password: ''
        }),
        methods: {
            ...mapActions(['login']),
            async loginUser(){
                if(!this.authUser.userName || !this.authUser.password){
                    this.$toast.error('Debe ingresar nombre de usuario y contraseña')
                    return
                }

                this.loadingLogin = true
                const response = await this.$axios.$post(`${process.env.BASE_URL}/auth/login`, this.authUser)
                                        .catch(e=>console.log(e))
                console.log(response)
                if(response)  this.$toast.success('Sesión iniciada.')
                else this.$toast.error('Error al iniciar su sesión.')

                this.login(response? { user: response, user_logged: response.aproveToAccess === 1 , token: response.access_token}: {})

                if(response.aproveToAccess) {
                    this.$router.push(`../?step=${this.$route.query.returnStep || 1}`)
                }
                this.loadingLogin = false

            },
            async createUser(){
                if(this.validateUser()){
                    this.$toast.error('Todos los campos de usuario son requeridos.')
                    return
                }
                if(this.validatePassword()){
                    this.$toast.error('La contraseña ingresada no pudo ser validada.')
                    return
                }
                this.loading = true
                const response = await this.$axios.$post(`${process.env.BASE_URL}/user`, this.user)
                    .catch(e=>console.log(e))
                console.log(response)
                if(response)this.$toast.success('Usuario guardado de forma exitosa.')
                this.loading = false
            },
            validateUser(){
                return Object.keys(this.user).some(key => !this.user[key])
            },
            validatePassword(){
                return this.password !== this.user.password
            }
        }
    }
</script>

<style scoped>

</style>