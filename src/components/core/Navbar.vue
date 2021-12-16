<template>
    <div class="flex-1 flex flex-col">
        <nav class="px-16 flex justify-between bg-white h-20  border-gray-300 border-b ">
            <!-- top bar left -->
            <ul class="flex items-center">
                <!-- add button -->
                <li>
                    <img
                            class=" h-full w-1/4"
                            src="../../assets/img/logo-1.png"
                            alt="safeway logo logo" />
                </li>
            </ul>

            <!-- to bar right  -->
            <ul class="flex items-center justify-center">
                <li class="h-auto w-auto flex flex-row justify-center items-center" v-if="this.user_logged">
                    <span class="mr-2">{{ userName }}</span>
                    <span class="material-icons text-primary">account_circle</span>
                </li>

            </ul>

        </nav>
    </div>
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