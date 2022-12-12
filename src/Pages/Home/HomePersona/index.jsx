import './styles.css';
import Proposito from '../HomeProposito/index';
import Servicos from '../HomeServicos/index';
import Planos from '../HomePlanos/index';
import Mobile from '../HomeMobile/index';
import Moca from '../../../assets/img/mocachs.svg';
import SetaBotao from '../../../assets/img/setaHS.svg';
import imagemdir from '../../../assets/img/img-direita-inicio.png';
import Fade from 'react-reveal/Fade';
import Comentarios from '../HomeComentarios/index';
import Header from '../../../components/Headers/HeaderHome/index';
import Footer from '../../../components/Footer/index';
import Aos from 'aos';
import "aos/dist/aos.css"
import React, { useEffect } from 'react';

function Persona() {

     useEffect(() =>{
        Aos.init({duration: 1500});
     }, []);
    
    return (
        <>
        <Header />
            <main className='HomeTopo'>
                <div id="containerHomeTopo">
                    <div className='txtHomeTopo'>
                        <Fade bottom>
                            <h1 className='titulo1'>
                                <span className='titulo_azul'>Indikey</span> a <span className='titulo_amarelo'>chave</span> para o seu
                                <span className='titulo_azul'> negócio</span>
                            </h1>
                        </Fade>
                        <span className='txthome'>Faça seu cadastro agora!<br />
                        Conheça nossos planos e impusione o seu negócio.  </span>
                        <br /> <br />
                        <div className='imageHomeTopoDireitaMobile'>
                            <img src={imagemdir} alt='Modelo' />
                            {/* só aparece no mobile */}
                        </div>
                        <button className='botao_saibamais'>Faça seu cadastro <img src={SetaBotao} alt="seta para o botão" className="SetaBotao" /> </button>
                    </div>
                </div>
                <div className='imageHomeTopoDireita'>
                    <Fade right>
                    <img src={imagemdir} alt='Modelo' />
                    </Fade>
                </div>

            </main>
            <section className="conteudoHomeSobre">
                <div className="esquerdaCHS">
                    <img src={Moca} alt="" data-aos="fade-right" className="tamanhoMocaCHS" />
                </div>
                <div className="container_CHS">
                    <div className="conteudo_containerCHS">
                        <h2 data-aos="fade-left" className="h2_CHS">Indikey</h2>
                        <h3 data-aos="fade-left" className="h3_CHS">Como nascemos</h3>
                        <p data-aos="fade-left" className="p_CHS">O indikey nasceu da ideia de ajudar os trabalhadores
                            locais a divulgarem e terem mais demanda de seus serviços, nós do VisibiliKey
                            priorizamos três tópicos bastante importantes para eliminar esse problema, sendo: a Visibilidade, Impulsionamento e a Conexão.
                        </p>
                        <button className="botaoCHS" value="submit">Saiba mais <img src={SetaBotao} alt="seta para o botão" className="SetaBotao" /></button>
                    </div>
                </div>
            </section>
            <Proposito />
            <Servicos />
            <Planos />
            <Mobile />
            <Comentarios />
            <Footer />
        </>
    );
}

export default Persona;