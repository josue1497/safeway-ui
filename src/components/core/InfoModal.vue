<template>
    <div class="min-w-screen max-h-screen  overflow-auto animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
         :style="{background: 'rgb(122,122,122, 0.5)'}" id="modal-id" v-show="visible">
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="w-3/4  w-16 p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white flex">
            <button class="absolute inset-x-0top-0 right-0 px-5"  @click="close">
                <span class="text-secondary material-icons">close</span>
            </button>
            <div class="max-h-full">
                <div class="text-center p-5 flex-auto justify-center">
                    <h2 class="text-3xl font-bold py-2 leading-none text-primary">{{title}}</h2>
                    <div class="p-6 w-full grid grid-cols-12 gap-4 mb-5 text-justify">
                        <div class="col-span-12" v-html="contentText"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseInput from './BaseInput'
    export default {
        name: 'InfoModal',
        components: { BaseInput },
        props: {
            visible : {type: Boolean, default: false },
            title : {type: String, default: 'untitle' },
            contentText : {type: String, default: 'No text' },
            },
        data: () => ({
            customer: { email: '', first_name:'', last_name: '' , cellphone: '' }
        }),
        methods: {
            close(){
                this.$emit('close')
            },
        }
    }
</script>

<style>
    ul.safeway-link-ul {
        list-style: none; /* Remove default bullets */
    }

    ul.safeway-link-ul li::before {
        content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
        color: #3a8e81; /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1em; /* Also needed for space (tweak if needed) */
        margin-left: -1em; /* Also needed for space (tweak if needed) */
        font-size: 24px;
    }
</style>