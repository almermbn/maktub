<template>
    <div id="app">
        
        <Header></Header>
            
        <!-- renders current route node-->
        <router-view/></router-view>

        <Footer></Footer>

    </div>
</template>

<script>

    import Footer from './components/Footer.vue'
    import Header from './components/Header.vue'

    export default {
        components: { Footer, Header },
        name: 'App',
        data () {
            return { 
            }
        },       
        methods: {
        }
    }
</script>

<style lang="scss">
    @import url('../node_modules/animate.css/animate.min.css');
    @import url('../node_modules/@fortawesome//fontawesome-free/css/all.css');
    @import url('../node_modules/vue-animate-transitions/dist/vue-animate-transitions.min.css');
    
    @import 'node_modules/bootstrap/scss/bootstrap';
    @import 'node_modules/bootstrap-vue/src/index.scss';

    @import './assets/scss/style.scss';
    @import './assets/css/responsive.css';
</style>
