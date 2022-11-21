import './styles.css'

import React from 'react';
import Fade from 'react-reveal/Fade';

import logo from '../../assets/img/logo.svg'
function Cadastro(){
    return(
        <>
        
        <main className="containerCadastro">

        <Fade top>  
            <img src={logo} alt="logo indikey"  className="logoTopo" />
        </Fade>
            <h1 className="tituloCadastro"><Fade left><span className="azul">Bem</span></Fade> vindo a <span className="amarelo">página</span> de <Fade left><span className="azul">cadastro</span></Fade></h1>
            <div className="meioCadastro">

                <div className="cardAmareloEsquerda">
                    <div className="cardTexto">
                        <h3>Cliente</h3>
                        <p>Cliente novo na plataforma? Faça seu cadastro aqui</p>
                        <p className="linkCliente">Clique Aqui</p>
                    </div>
                </div>                    
                <div className="cardAzul">
                    <div className="cardTexto">
                        <h3>Comercio</h3>
                        <p>Bem vindo comerciante, é novo na plataforma? cadastre-se agora</p>
                        <p className="linkCliente">Clique Aqui</p>
                    </div>
                </div>
                <div className="cardAmareloDireita">
                    <div className="cardTexto">
                        <h3>Autônomo</h3>
                        <p>Primeira vez no indikey? <br /> faça seu cadastro agora</p>
                        <p className="linkCliente">Clique Aqui</p>
                    </div>
                </div>


            </div>
        </main>
    </>
    );
}

export default Cadastro;