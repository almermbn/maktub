<template>
<div id="wrapper-company">

    <Banner :title="title"></Banner>

   <!--================ Feature Area =================-->
   <section class="feature-area section_gap_top">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-7">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="single-feature">
                                <img src="../assets/img/feature/f1.png" alt="">
                                <h4>Rastreio</h4>
                                <p>
                                    EM BREVE - Faça o Rastreio de suas encomendas aqui.
                                </p>
                                <a href="#">Rastreie sua Encomenda</a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single-feature">
                                <img src="../assets/img/feature/f2.png" alt="">
                                <h4>Dúvidas?</h4>
                                <p>
                                    EM BREVE - Tire aqui suas dúvidas.
                                </p>
                                <a href="#">Fale Conosco</a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single-feature">
                                <img src="../assets/img/feature/f3.png" alt="">
                                <h4>Get a Quote</h4>
                                <p>
                                    The French Revolutioncons tituted for the conscience of the dominant the French Revolutioncons.
                                </p>
                                <a href="#">Start a quote</a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single-feature">
                                <img src="../assets/img/feature/f4.png" alt="">
                                <h4>Simule a Cotação do Frete</h4>
                                <p>
                                    EM BREVE - Faça aqui sua cotação de frete.
                                </p>
                                <a href="#">Simular Cotação</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 offset-md-0 col-md-12 text-left section-title-wrap">
                    <h5>Quem Somos</h5>
                    <h2>
                        Logistica Boaretto
                    </h2>

                    <h4>Transportando com segurança por todo o Brasil!</h4>
                    <p>
                        A Logistica Boaretto é uma empresa sólida. Fundada em 1997 conta com profissionais qualificados e com ampla experiência em transporte de cargas. Sua matriz administrativa em Belo Horizonte – MG conta com unidade operacional e proporciona atendimento para todo o estado de Minas Gerais, Goiás, DF, região nordeste e sul do país, além da macrorregião de Franca – SP.

						Nossas unidades de negócios em Franca – SP e Nova Serrana – MG, proporcionam atendimento em 24h para entregas de cargas originadas/recebidas em Belo Horizonte.

						A Logistica Boaretto é especialista em soluções de transporte, nosso foco é a execução de serviços expressos. 

						Com uma frota monitorada 24h, especializada e pronta para atender às mais diversas necessidades de nossos clientes, oferecemos soluções em logística e distribuição de cargas.
						Na Boaretto você encontra atendimento personalizado por meio de estrutura própria e alianças operacionais, permitindo otimização de tempo e redução de custos nas suas operações.

						Nossa equipe, tecnologia, experiência e recursos se conectam para cumprir em tempo nossa missão, para que nossos clientes possam se sentir tranquilos de que seus produtos serão transportados de forma ótima e segura ao seu destino.
.
                    </p>
                    <a href="#" class="main_btn">Leia Mais - Quem Somos</a>
                </div>
            </div>
        </div>
    </section>
    <!--================ End Feature Area =================-->
</div>  
</template>

<script>

    import Banner from './Banner.vue';

    export default {
        name: 'Company',
        components: { Banner },
        data () {
            return {
                title: 'Empresa'
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped lang="scss">
   
</style>
