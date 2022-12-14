import './styles.css';
import IconeNegocio from '../../../assets/img/icone-negocio.svg';
import IconeFerramenta from '../../../assets/img/icone-ferramenta.svg';
import Aos from 'aos';
import "aos/dist/aos.css"
import Fotografo from '../../../assets/img/fotografo.svg'
import Garcom from '../../../assets/img/garçom.svg'
import Confeiteira from '../../../assets/img/confeiteira.svg'
import Carousel from 'react-bootstrap/Carousel';
import Floricultura from '../../../assets/img/floricultura.svg'
import Feira from '../../../assets/img/feirinha.svg'
import Construcao from '../../../assets/img/construcao.svg'
import React, { useEffect } from 'react';


function Servicos() {
    useEffect(() =>{
        Aos.init({duration: 1500});
     }, []);
    return (
        <>
        <article id="containerLojasServicos">
            <main className='HomeLojas'>
                <div className='CampoLojas'>
                    <h1 className='TituloLojas'>Compre <span className='Azul'>produtos</span> nas <span className='Amarelo'>melhores</span> lojas</h1>
                </div>
                <div className='ConteudoLojas'>
                    <section className='Slide'>
                    <Carousel id="carroselTopoSobre">
                            <Carousel.Item className="itemCarrosel" interval={2000}>
                                <img
                                className="d-block w-30"
                                src={Floricultura}
                                alt="First slide"
                                />                            
                            </Carousel.Item>
                            <Carousel.Item className="itemCarrosel" interval={2000}>
                                <img
                                className="d-block w-30"
                                src={Feira}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="itemCarrosel" interval={2000}>
                                <img
                                className="d-block w-30"
                                src={Construcao}
                                alt="Third slide"
                                />                            
                            </Carousel.Item>
                        </Carousel>
                    </section>

                    <section data-aos="fade-left" data-aos-delay="300" className='Texto'>
                        <h1 className='TituloNumero'><span className='Azul'>+5120 <img src={IconeNegocio} alt='Icone de Negocio' /> </span> Empresas</h1>
                        <div className='TextoLoja'>
                            <span>
                                Na plataforma indikey, já existem mais de 5 mil empresas cadastradas, que
                                começaram sua jornada conosco, e não se arrependeram
                            </span>
                        </div>
                    </section>
                </div>
            </main>

            <main className='HomeServico'>
                <div className='CampoServicos'>
                    <h1 className='TituloServicos'><span className='Azul'>Contrate</span> os <span className='Amarelo'>melhores</span> serviços</h1>
                </div>

                <div className='ConteudoServicos'>
                    <section data-aos="fade-right" data-aos-delay="300" className='Texto2'>
                        <h1 className='TituloNumero2'><span className='Azul'>+230 <img src={IconeFerramenta} alt='Icone de Ferramente' /> </span> Serviços</h1>
                        <div className='TextoServico'>
                            <p>
                                Prestadores de serviços autônomoes também tem seu lugar no indikey, atualmente contamos com mais de 200 trabalhadores, e você pode ser o próximo
                            </p>
                        </div>
                    </section>

                    <section className='Slide' id='fotografoSlide'>
                        <div data-aos="fade-left" data-aos-delay="300" className='Slides'>
                        <Carousel id="carroselTopoSobre">
                            <Carousel.Item className="itemCarrosel" interval={2000}>
                                <img
                                className="d-block w-30"
                                src={Fotografo}
                                alt="First slide"
                                />                            
                            </Carousel.Item>
                            <Carousel.Item className="itemCarrosel" interval={2000}>
                                <img
                                className="d-block w-30"
                                src={Confeiteira}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="itemCarrosel" interval={2000}>
                                <img
                                className="d-block w-30"
                                src={Garcom}
                                alt="Third slide"
                                />                            
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </section>
                </div>
            </main>
        </article>
        </>
    );
}

export default Servicos;