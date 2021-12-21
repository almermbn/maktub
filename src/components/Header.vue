<template>
    <div id="wrapper-header">
        <!--================Header Menu Area =================-->
        <header class="header_area" :class="navFixed ? 'navbar_fixed' : ''">
            <div class="top_menu d-lg-block d-none">
                <div class="container">
                    <div class="float-left">
                        <ul class="left_side">
                            <li>
                                <a href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="float-right">
                        <ul class="right_side">
                            <li>
                                <a href="#">
                                    <i class="fas fa-phone"></i>
                                    (31)2568-4444 / (31) 2568-7738
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-envelope"></i>
                                    comercialbhz@expressomaktub.com.br
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="main_menu">
                <nav class="navbar navbar-expand-lg w-100">
                    <div class="container">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <a class="navbar-brand logo_h" href="" v-smooth-scroll>
                            <img src="../assets/img/logo.png" alt="" />
                        </a>
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <div class="row w-100">
                                <div class="col-lg-12 pr-lg-0">
                                    <ul class="nav navbar-nav ml-auto justify-content-end">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#wrapper-header" v-smooth-scroll>Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#toTracking" v-smooth-scroll>Rastreamento</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#toService" v-smooth-scroll>Serviços</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#toCR" v-smooth-scroll>Central de Relacionamento</a>
                                        </li>
                                        <li class="nav-item ">
                                            <a class="nav-link" href="#toMission" v-smooth-scroll>Missão</a>
                                        </li>
                                        <li class="nav-item ">
                                            <a class="nav-link" href="#toUnits" v-smooth-scroll>Unidades</a>
                                        </li>                                  
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <!--================Header Menu Area =================-->
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                navFixed: false
            }
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        },
        methods: {
            goTo(_route){
                if(this.$router.currentRoute.path != _route){
                    this.$router.push(_route);
                }
            },
            updateScroll(){
                var scroll = window.scrollY;
                var headerHeight = 125;
                this.scrollPosition = window.scrollY;

                if (scroll >= headerHeight) {
                    this.navFixed = true;
                } else {
                    this.navFixed = false;
                }
            }    
        }
    }
</script>

<style>
</style>

