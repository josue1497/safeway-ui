<template>
        <nav class="px-16 flex justify-between bg-white h-20  border-gray-300 border-b ">
            <ul class="flex items-center">
                <li>
                    <img
                            class=" h-full w-1/4"
                            src="../../assets/img/logo-1.png"
                            alt="safeway logo logo" />
                </li>
            </ul>
            <ul class="flex items-center justify-center" v-if="this.user_logged">
                <li class="h-auto w-auto flex flex-row justify-center items-center" >
                    <span class="mr-2">{{ userName }}</span>
                    <span class="material-icons text-primary">account_circle</span>
                </li>
            </ul>
        </nav>
</template>

<script>
    import userInfoMixin from '../../mixins/userInfo.mixin'
    export default {
        name: 'Navbar',
        mixins: [userInfoMixin],
    }
</script>

<style scoped>

</style>