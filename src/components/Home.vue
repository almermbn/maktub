<template>


    <div id="wrapper-home">

        <section class="service-area section_gap_top slider spacer">
            <div>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li> 
                    <li data-target="#myCarousel" data-slide-to="1" ></li> 
                    <li data-target="#myCarousel" data-slide-to="2" ></li> 
                    <li data-target="#myCarousel" data-slide-to="3" ></li>
                    <li data-target="#myCarousel" data-slide-to="4" ></li>
                    </ol>
                    
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <a href="#">
                            <img class="d-block img-fluid" src="../assets/img/maktub.jpg">
                        </a>
                        </div>
                        <div class="carousel-item ">
                            <a href="#">
                                <img class="d-block img-fluid" src="../assets/img/eficiencia.jpg">
                            </a>
                        </div>
                        <div class="carousel-item ">
                            <a href="#">
                                <img class="d-block img-fluid" src="../assets/img/maktub24h.jpg">
                            </a>
                        </div>   
                        <div class="carousel-item ">
                            <a href="#">
                                <img class="d-block img-fluid" src="../assets/img/medicamentos.jpg">
                            </a>
                        </div>   
                        <div class="carousel-item ">
                            <a href="#">
                                <img class="d-block img-fluid" src="../assets/img/escolha.jpg">
                            </a>
                        </div> 
                    </div>

                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Anterior</span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Próximo</span>
                    </a>
                </div>
            </div>
        </section>


        <!--================ Start Service Area =================-->
        <section class="service-area section_gap_top" id="toService">
            <div class="container">
                <div class="row justify-content-center section-title-wrap">
                    <div class="col-lg-12">
                        <h2 class="text-white">
                    Serviços
                        </h2>
                    </div>
                </div>
                <div class="row grid">
                    <div class="single-service">
                        <div class="thumb">
                            <img class="f-img img-fluid mx-auto" src="../assets/img/service/service1.jpg" alt="" />
                        </div>
                        <div class="service-box">
                            <h3>
                                TRANSPORTE DE CARGA FRACIONADA OU LOTAÇÃO
                            </h3>
                            <p>
                                Dispomos de uma frota moderna para distribuição de mercadorias e atendimento nas transferências
                                de produtos entre unidades e centros de distribuição em todos os estados da federação.
                                <br>
                                <br>
                            </p>
                        </div>
                    </div>

                    <div class="single-service">
                        <div class="thumb">
                            <img class="f-img img-fluid mx-auto" src="../assets/img/service/service2.jpg" alt="" />
                        </div>
                        <div class="service-box">
                            <h3>
                                ENTREGAS URBANAS
                            </h3>
                            <p>
                                Destinado a distribuição de mercadorias através do uso de veículos leves, que garantem a rapidez
                                necessária para a sua operação.
                               
                            </p>
                        </div>
                    </div>

                    <div class="single-service">
                        <div class="thumb">
                            <img class="f-img img-fluid mx-auto" src="../assets/img/service/service3.jpg" alt="" />
                        </div>
                        <div class="service-box">
                            <h3>
                                E-COMMERCE
                            </h3>
                            <p>
                                Nossa expertise em distribuição assegura aos clientes de E-COMMERCE a confiabilidade e a certeza
                                de um atendimento qualificado.
    
                            </p>
                        </div>
                    </div>

                    <div class="single-service">
                        <div class="thumb">
                            <img class="f-img img-fluid mx-auto" src="../assets/img/service/service4.jpg" alt="" />
                        </div>
                        <div class="service-box">
                            <h3>
                                TRANSPORTE DE MEDICAMENTOS
                            </h3>
                            <p>
                                Possuímos toda a estrutura, segurança e licença para armazenar e transportar medicamentos.
                  
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================ End Service Area =================-->

        <!--================ Start Tracking Area =================-->
        <section class="service-area white" id="toTracking">
            <div class="container">
                <div class="row justify-content-center section-title-wrap tracking-offset">
                    <div class="col-lg-12">
                        <h2 class="text-blue">
                            Localize sua Carga
                        </h2>
                    </div>
                </div>
                <div class="row tracking">
                    <div class="single-service col-lg-4 col-md-6">
                        <div class="service-box">
                            <form name="form2" method="post" target="_blank"> 
        
                                <h3 class="text-center"><img src="../assets/img/localizar.png" alt="Localize sua carga"> Por REMETENTE: </h3>
                                <p>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Nota Fiscal N:</label>
                                        <br>
                                        <input type="text" name="NR2" id="NR2" required class="form-control" v-model="inputNotaFiscalRemetente">
                                    </div>
                                
                                <p>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">CNPJ do Remetente:</label>
                                        <br>
                                        <input type="text" maxLength=14 id="cnpj2" name="cnpj2" required class="form-control" v-model="inputCnpjRemetente">
                                    </div>
                                <p>
                                    
                                <p class="text-center">
                                    <button type="button" @click="findBySender" class="btn btn-danger btn-sm">Localizar</button>
                                </p>
                                <p>
                                    <img src="../assets/img/caixa.png" class="img-fluid">
                                </p>

                            </form>
                        </div>
                    </div>

                    <div class="single-service col-lg-4 col-md-6">
                        <div class="service-box">
                            <form name="form1" action="https://ssw.inf.br/2/resultSSW_dest_nro" method="post" target="_blank">
                        
                                <h3 class="text-center"><img src="../assets/img/localizar.png" alt="Localize sua carga"> Por DESTINATÁRIO:</h3>
                                <p>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Nota Fiscal N:</label>
                                        <br>
                                        <input type="text" id="NR" name="NR" required class="form-control" >
                                    </div>
                                
                                <p>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">CNPJ do Destinatário:</label>
                                        <br>
                                        <input type="text" maxLength=14 id="cnpjdest" name="cnpjdest" required class="form-control" >
                                    </div>
                                
                                <p>
    
                                <p class="text-center">
                                    <button type="submit" class="btn btn-danger btn-sm">Localizar</button>
                                </p>
                                <p>
                                    <img src="../assets/img/caixa.png" class="img-fluid">
                                </p>

                            </form>   
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!--================ End Tracking Area =================-->

        <!--================ Start Quote Area =================-->
        <section class="quote-area section_gap_top">
            <div class="container">
                <div class="row justify-content-center section-title-wrap">
                    <div class="col-lg-12">
                        <h2 class="text-white">Central de Relacionamento</h2>
                        <h4 class="text-white" id="toCR">
                            <br>
                            <br>
                            Deixe aqui seu comentário ou mande suas dúvidas que retornaremos o mais breve possível!
                        </h4>
                    </div>
                </div>
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-12">
                        <div class="estimated-cost">
                            <form class="form-wrap">
                                <nav>
                                    <div class="nav nav-tabs justify-content-md-start justify-content-center" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active" id="nav-getEstimation-tab" data-toggle="tab" href="#nav-getEstimation"
                                        role="tab" aria-controls="nav-getEstimation" aria-selected="true">Fale Conosco:</a>
                                    </div>
                                </nav>

                                <!-- Tab Content -->
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-getEstimation" role="tabpanel" aria-labelledby="nav-getEstimation-tab">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label for="firstName">Nome</label>
                                                    <input type="text" v-model="name" class="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Informe o Nome"
                                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Informe Seu Nome'" />
                                                </div>
                                            </div>

                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label for="lastName">Sobrenome</label>
                                                    <input type="text" v-model="lastName" class="form-control" id="lastName" placeholder="Informe o Sobrenome" onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Informe o Sobrenome'" />
                                                </div>
                                            </div>

                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label for="emailAddress">Email:</label>
                                                    <input type="email" v-model="email" class="form-control" id="emailAddress" placeholder="Informe o E-mail"
                                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Informe seu e-mail'" />
                                                </div>
                                            </div>

                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label for="phone">Telefone</label>
                                                    <the-mask :masked="true" :mask="['(##) ####-####', '(##) #####-####']" v-model="phone" id="phone" class="form-control" placeholder="Informe um telefone de contato" onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Informe um telefone de contato'"/>
                                                </div>
                                            </div>

                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label for="company">Empresa</label>
                                                    <input type="text" v-model="company" class="form-control" id="company" placeholder="Informe o nome da empresa caso possua" onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Informe o nome da empresa caso possua'" />
                                                </div>
                                            </div>

                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <label for="description">Dúvida/Comentário</label>
                                                    <textarea type="text" v-model="description" class="form-control" id="description" placeholder="Dúvidas/Comentários" onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Deixe aqui sua Dúvida/Comentário'"></textarea>
                                                </div>
                                            </div>


                                            <div class="col-lg-12 mt-4">
                                                <div class="text-center confirm_btn_box">
                                                    <button type="button" class="main_btn text-uppercase" @click="sendEmail" :disabled="mailControl">Enviar Mensagem </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================ End Quote Area =================-->
		
        <!--================ Start Testimonial Area =================-->
        <section class="testimonial-area white">
            <div class="container" id="toMission">
                 <div class="row justify-content-center title-wrapper">
                    <div class="col-lg-12">
                        <h2 class="text-blue title-size">
                            A Empresa
                        </h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <carousel 
                            :autoplay="true" 
                            :items="1" 
                            :dots="false" 
                            :loop="true" 
                            :nav="true"
                            :autoplayTimeout="8000"
                            :navText="navText">

                            <!-- single testi -->
                            <div class="single_testi">
                                <h2>POLÍTICA DE QUALIDADE</h2>
                                <div>
                                    <p>
                                    <br>"Buscar a melhoria contínua na prestação de serviço de transporte de cargas,<br>
                                    <br>alcançando a satisfação dos clientes."<br> 
                                    </p>
                                </div>
                                <div class="testi_author d-flex justify-content-center align-items-center">
                                    <div class="thumb mr-4"><img src="../assets/img/testi-author.png" alt=""></div>
                                    <div class="a-desc text-left">
                                    </div>
                                </div>
                            </div>
                            <!-- single testi -->
                            <div class="single_testi">
                                <h2>MISSÃO</h2>
                                <div>
                                    <p>
                                    <br>"Prestar um serviço humanizado, com qualidade e segurança,<br>
                                    <br>concretizando sonhos".<br> 
                                    </p>
                                </div>
                                <div class="testi_author d-flex justify-content-center align-items-center">
                                    <div class="thumb mr-4"><img src="../assets/img/testi-author.png" alt=""></div>
                                    <div class="a-desc text-left">
                                    </div>
                                </div>
                            </div>
                            <!-- single testi -->
                            <div class="single_testi">
                                <h2>VISÃO</h2>
                                <div>
                                    <p>
                                    <br>"Ser reconhecida pela sociedade como uma transportadora moderna, útil e acessível, usando a tecnologia<br>
                                    <br>e inovação nos serviços."<br>
                                    </p>
                                </div>
                                <div class="testi_author d-flex justify-content-center align-items-center">
                                    <div class="thumb mr-4"><img src="../assets/img/testi-author.png" alt=""></div>
                                    <div class="a-desc text-left">
                                    </div>
                                </div>
                            </div>
                            <!-- single testi -->
                            <div class="single_testi">
                                <h2>VALORES</h2>
                                <div>
                                    <p>
                                    <br>Segurança: Ter o transporte de cargas como instrumento de segurança para nossos clientes.
                                    <br>Excelência: Oferecer um excelente atendimento, sendo agente de solução das necessidades dos
                                    clientes, com qualidade e eficiência.
                                    <br>Ética: Agir com honestidade, respeito, integridade e transparência em todas asnossas açòes e relações.
                                    <br>Conhecimento: Ter profissionais capacitados e qualificados, propiciando um desenvolvimento contínuo.
                                    <br>Comprometimento: Ter pró-atividade, responsabilidade e comprometimento com o que se faz, envolvendo-se em projetos, objetivose metas, de forma a atingir os resultados esperados. 
                                    </p>
                                </div>
                                <div class="testi_author d-flex justify-content-center align-items-center">
                                    <div class="thumb mr-4"><img src="../assets/img/testi-author.png" alt=""></div>
                                    <div class="a-desc text-left">
                                    </div>
                                </div>
                            </div>
                            <!-- single testi -->
                            <div class="single_testi">
                                <h2>ÁREA DE ATUAÇÃO</h2>
                                <div>
                                    <p>
                                        Somos especialistas em soluções de transporte. Nosso foco é a execução de serviços expressos através de pessoal 
                                        qualificado seja no transporte de transferência, distribuição ou logística.
                                        A Expresso MAKTUB é uma empresa sólida. Fundada em 1997 conta com profissionais qualificados e
                                        com ampla experiência em transporte de cargas. Sua matriz administrativa em Contagem-MG conta
                                        com unidade operacional e proporciona atendimento para todo o estado de Minas Gerais, Goiás, DF,
                                        Tocantins, região nordeste e sul do país, além da macroregião de Franca – SP.
                                    </p>
                                </div>
                                <div class="testi_author d-flex justify-content-center align-items-center">
                                    <div class="thumb mr-4"><img src="../assets/img/testi-author.png" alt=""></div>
                                    <div class="a-desc text-left">
                                    </div>
                                </div>
                            </div>                                
                            <div class="single_testi">
                                <h2>TECNOLOGIA</h2>
                                <div>
                                    <p>
                                        Toda a frota é rastreada via satélite 24 horas e equipada com rádio de comunicação permitindo um
                                        monitoramento preciso e em tempo real.
                                        TODAS AS UNIDADES POSSUEM: 
                                    </p>
                                    <p>Circuito interno de CFTV | Empilhadeiras | Gaiolas metálicas para melhor acomodação de cargas</p>
                                    <p>VEÍCULOS:</p>
                                    <p>Carretas Baú | Veículos Médios | Veículos Leves | VUC </p>
                                </div>
                                <div class="testi_author d-flex justify-content-center align-items-center">
                                    <div class="thumb mr-4"><img src="../assets/img/testi-author.png" alt=""></div>
                                </div>                                
                            </div>
                        </carousel>
                    </div>
                </div>
            </div>
        </section>
        <!--================ end Testimonial Area =================-->]

        <!--================ Start Units Area =================-->
        <section class="home-blog-area section_gap_top">
            <div class="container">
                <div class="row justify-content-center section-title-wrap">
                    <div class="col-lg-12">
                        <h2 class="text-blue" id="toUnits">
                            Unidades
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-home-blog">
                            <div class="thumb">
                                <img class="f-img img-fluid mx-auto" src="../assets/img/home-post/blog4.jpg" alt="" />
                            </div>
                            <div class="home-blog-box">
                                <a href="#">
                                    <h4>Contagem - MG (MATRIZ)</h4>
                                </a>
                                <p>                              
								Rua José Gonçalves Filho, 574 - Vera Cruz
                                </p>
                                <div class="bottom d-flex">
                                    <a href="#">(31)2568-4444 | (31)2568-5557</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-home-blog">
                            <div class="thumb">
                                <img class="f-img img-fluid mx-auto" src="../assets/img/home-post/blog2.jpg" alt="" />
                            </div>
                            <div class="home-blog-box">
                                <a href="#">
                                    <h4>NOVA SERRANA-MG</h4>
                                </a>
                                <p>
                                    Rua João Ferreira dos Santos, 123 - Bairro Jardim São Francisco
                                </p>
                                <div class="bottom d-flex">
                                    <a href="#">(37)3225-0007 | (37)3225-0021</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-home-blog">
                            <div class="thumb">
                                <img class="f-img img-fluid mx-auto" src="../assets/img/home-post/blog3.jpg" alt="" />
                            </div>
                            <div class="home-blog-box">
                                <a href="#">
                                    <h4>FRANCA-SP</h4>
                                </a>
                                <p>
                                    Rua Antonio Olavo Ferro, 1845 - Polo Industrial
                                </p>
                                <div class="bottom d-flex">
                                    <a href="#">(16)3723-8257 | (16)3703-2408</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================ end Units Area =================-->

        <!--================ Start CTA Area ================-->
        <section class="cta_area white">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="cta_inner d-flex flex-md-row flex-column justify-content-between align-items-center">
                            <div class="mb-md-0 mb-4 text-sm-left text-center">
                                <p>Nossa Equipe está Pronta para Atende-lo</p>
                                <h1>Conte Conosco!</h1>
                            </div>
                            <div class="">
                                <a href="#toCR" class="main_btn" v-smooth-scroll>+Fale Conosco</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================ End CTA Area ================-->
    </div>  
</template>

<script>

    import carousel from 'vue-owl-carousel'

    export default {
        name: 'Home',
        components: { carousel },
        data () {
            return {
                navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
                name: '',
                mailControl: false,
                lastName: '',
                email: '',
                description: '',
                phone: '',
                company: '',
                reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                inputNotaFiscalRemetente: null,
                inputCnpjRemetente: null
            }
        },
        methods: {
            sendEmail(){

                var vm = this;

                var data = {
                    name: this.name,
                    lastName: this.lastName,
                    email: this.email,
                    description: this.description,
                    phone: this.phone,
                    company: this.company,
                }

                if(this.phone.length != 0 && this.phone.length <= 14){
                    alert('Favor preencher os campos corretamente');

                    return false;
                }

                if(this.name && this.lastName && this.isEmailValid() && this.description){

                    this.mailControl = true;
                    this.$http.post(this.$remoteUrl + 'api/sendEmail', data).then(response => {
                        var result = response.data;
                        alert(result.message);
                        vm.clearForm();       

                        setTimeout(function() {
                            vm.mailControl = false;
                        }, 30000);

                    },function (response) {
                        alert('Houve um erro ao enviar email. Favor tentar mais tarde.')
                        console.log(response);
                        vm.clearForm();
                    });

                    
                } else {
                    alert('Favor preencher os campos corretamente');
                }
            },
            clearForm(){
                this.name = '';
                this.lastName = '';
                this.email = '';
                this.description = '';
                this.phone = '';
                this.company = '';
            },
            isEmailValid: function() {
                return this.email == "" ? false : this.reg.test(this.email) ? true : false;
            },
            findBySender(){
                window.location = `${'https://ssw.inf.br/app/tracking/' + this.inputCnpjRemetente+'/'+this.inputNotaFiscalRemetente}`
            },
            findByRecipient(){

            }
        }
    }
</script>

<style>
</style>

