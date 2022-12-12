import './styles.css';
import Celular from '../../../assets/img/celular.svg'
import Google from '../../../assets/img/play.svg'
import Apple from '../../../assets/img/apple.svg'
import Aos from 'aos';
import "aos/dist/aos.css"
import React, { useEffect } from 'react';

function Mobile() {
    useEffect(() =>{
        Aos.init({duration: 1500});
     }, []);
    return (
        <aside className='mobile'>
            <div className="app">
                <img data-aos="fade-right" data-aos-delay="300" src={Celular} alt="app mobile" />
            </div>
            <div data-aos="fade-left"  className="textoMobile">
                <h1><span className='azul'>Faça</span> o <span className='amarelo'>dowload</span> do nosso <span className='azul'>aplicativo</span></h1>
                <h5>O indikey também é mobile. Faça o download agora, e agarre as oportunidades</h5>
                <div className='download'>
                    <button className='google'><img src={ Google } alt="goolge"/>Google Play</button>
                    <button className='ios'><img src={ Apple } alt="ios"/>Aplle Store</button>
                </div>
            </div>
        </aside>
    );
}

export default Mobile;