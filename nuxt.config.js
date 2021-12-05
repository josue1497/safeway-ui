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
            { rel: 'icon', type: 'image/x-icon', href: '@/assets/img/favicon.png' }

        ],
    },
    buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/dotenv',],
    dir: {
        pages: 'pages'
    },
    components: true,
    dev: process.env.NODE_ENV !== 'production',
    target: 'static',
    plugins: [{ src: '~/plugins/PrettyCheckbox.js', ssr: false }],
    srcDir: 'src',
    css: [
        '@/assets/css/main.css'
    ],
    tailwindcss: {
        cssPath: '@/assets/css/tailwind.css',
        configPath: '../tailwind.config.js',
    }
}