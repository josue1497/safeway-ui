export default {
    head: {
        titleTemplate: '%s - Safeway',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'descriSption', name: 'description', content: 'Meta description' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
            { rel: 'icon', type: 'image/x-icon', href: '~/assets/img/favicon.png' }

        ],
    },
    buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/dotenv', '@nuxtjs/toast',],
    dir: {
        pages: 'pages'
    },
    components: true,
    dev: process.env.NODE_ENV !== 'production',
    target: 'static',
    plugins: [
        { src: '~/plugins/PrettyCheckbox.js', ssr: false },
        { src: '~/plugins/vuex-persist', ssr: false }
        ],
    srcDir: 'src',
    css: [
        '@/assets/css/main.scss',
        '@/assets/css/main.css'
    ],
    tailwindcss: {
        cssPath: '@/assets/css/tailwind.css',
        configPath: '../tailwind.config.js',
    },
    modules: [
        ['nuxt-buefy', { css: false, materialDesignIcons: false }],
        '@nuxtjs/axios',
        '@nuxtjs/toast',
    ],
    env: {
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
    },
    loading: {
        color: '#3a8e81',
        height: '5px'
    },
    toast: {
        duration: 3000,
        singleton: true,
        closeOnSwipe: true
    }
}