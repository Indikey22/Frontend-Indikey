 import './styles.css';
import LogoMissao from '../../../assets/img/logoMissao.svg'
import LogoVisao from '../../../assets/img/logoVisao.svg'
import LogoValores from '../../../assets/img/logoValores.svg'
import Aos from 'aos';
import "aos/dist/aos.css"
import React, { useEffect } from 'react';


function Proposito(){
    useEffect(() =>{
        Aos.init({duration: 1500});
     }, []);
    return(
        <>
        <section className="conteudoNP">
            <div className="areaTextoNP">
                <h2 className="h2CNP">
                    <span data-aos="fade-left" className="titulo-azulNP">Nosso </span><span data-aos="fade-top
                    " className="titulo-amareloNP"> Propósito</span>
                </h2>
                <h3 data-aos="fade-left" className="h3CNP">
                Nosso propósito como empresa, é ajudar e transformar a vida de pessoas.
                </h3>
            </div>
            <div className="containerNP">
                <div data-aos="fade-left" className="caixasMVV">
                    <h4 className="h4CNP">Missão</h4>
                    <p className="pCNP">Dar visibilidade, impulsionar e gerar conexões entre microempreendedores.</p>
                </div> {/* Missão visao e valores */}
                <div data-aos="fade-left" className="caixasMVV">
                    <h4 className="h4CNP">Visão</h4>
                    <p className="pCNP">Ser referencia em visibilidade, e ter um acesso para todos com plataforma mobile.</p>
                </div> {/* Missão visao e valores */}
                <div data-aos="fade-left" className="caixasMVV">
                    <h4 className="h4CNP">Valores</h4>
                    <p className="pCNP">Empatia, proximidade, visibilidadde, atenção, inovação e atitude empreendedora.</p>
                </div> {/* Missão visao e valores */} 
                <div className="containerLogos">
                    <img src={LogoMissao} alt="logo missão" data-aos="fade-left" className="posicaoLogos"/>
                    <img src={LogoValores} alt="logo valores" data-aos="fade-left"   className="posicaoLogos"/>
                    <img src={LogoVisao} alt="logo visão" data-aos="fade-left"  className="posicaoLogos"/>
                </div>
            </div>
        </section>
        </>
    );
}

export default Proposito;
