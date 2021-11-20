<template>
<div id="wrapper-company">
    <!--================ Home Banner Area =================-->
    <section class="home_banner_area banner-area">
        <div class="banner_inner d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="banner_content d-flex flex-md-row flex-column">
                            <div class="banner-left text-md-right">
                                <h1 class="text-uppercase">About Us</h1>
                            </div>
                            <div class="banner-right position-relative">
                                <p>
                                    Transportando com segurança por todo o Brasil!
                                </p>
                                <span class="main_btn mt-4 mt-md-0" href="#">
                                    <a href="index.html" class="text-white">Maktub</a> 
                                    <i class="fa fa-arrow-right mx-2"></i>
                                    <a href="about.html" class="text-white"> {{ title }}</a> 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================ End Home Banner Area =================-->
</div>  
</template>

<script>
    export default {
        name: 'Banner',
        data () {
            return {
                
            }
        },
        props: {
            title: String,
        },
        methods: {
            
        }
    }
</script>

<style scoped lang="scss">
   
</style>
