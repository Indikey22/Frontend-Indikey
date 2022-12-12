import './styles.css';
import Floricultora from '../../../assets/img/floricultura.svg';
import Fotografo from '../../../assets/img/fotografo.png';
import Estrelas from '../../../assets/img/estrelas.svg';
import IconeNegocio from '../../../assets/img/icone-negocio.svg';
import IconeFerramenta from '../../../assets/img/icone-ferramenta.svg';
import Aos from 'aos';
import "aos/dist/aos.css"
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
                        <div data-aos="fade-right" data-aos-delay="300" className='Slides'>
                            <div className='InfoSlides'>
                            <h3 className='Floricultura'>Floricultura</h3>
                                <img src={Estrelas} alt='Estrelas' />
                                <h4 className='NomeServico'>Maria Flores</h4>
                            </div>
                            <div className='ImageSlides'>
                                <img src = {Floricultora} alt = "Floricultora" />
                            </div>
                        </div>
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
                            <div className='InfoSlides'>
                                <h3 className='Fotografo'>Serviços</h3>
                                <img src={Estrelas} alt='Estrelas' />
                                <h4 className='NomeServico'>Fotógrafo</h4>
                            </div>
                            <div className='ImageSlides'>
                            <img src = {Fotografo} alt = "Fotografo" />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </article>
        </>
    );
}

export default Servicos;