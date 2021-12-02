<template>
    <section>
        <Navbar></Navbar>
        <div class="container mx-auto px-4">
            <StepsContainer></StepsContainer>
        </div>
    </section>
</template>

<script>
    import Navbar from '../components/core/Navbar'
    import StepsContainer from '../components/steps/StepsContainer'
    export default {
        components: { StepsContainer, Navbar },
        head: () =>({
            title: 'Home',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'description',
                    name: 'description',
                    content: 'My custom description'
                }
            ]
        }),
        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()

                setTimeout(() => this.$nuxt.$loading.finish(), 500)
            })
        }
    }
</script>