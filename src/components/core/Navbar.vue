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
                            alt="svelte logo" />
                </li>
            </ul>

            <!-- to bar right  -->
            <ul class="flex items-center">
                <li class="h-auto w-auto">
                    <span class="material-icons text-primary">account_circle</span>
                </li>

            </ul>

        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
    }
</script>

<style scoped>

</style>