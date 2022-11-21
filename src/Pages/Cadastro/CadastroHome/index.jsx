import './styles.css'
import React from 'react';
import Fade from 'react-reveal/Fade';
import logo from '../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
function Cadastro() {
    return (
        <>

            <main className="containerCadastro">
                <Link to='/'>
                    <Fade top>
                        <img src={logo} alt="logo indikey" className="logoTopo" />
                    </Fade>
                </Link>
                <h1 className="tituloCadastro"><Fade left><span className="azul">Bem</span></Fade> vindo a <span className="amarelo">página</span> de <Fade left><span className="azul">cadastro</span></Fade></h1>
                <div className="meioCadastro">

                    <div className="cardAmareloEsquerda">
                        <div className="cardTexto">
                            <h3>Cliente</h3>
                            <p>Cliente novo na plataforma? Faça seu cadastro aqui</p>
                           <Link to='/CadastroLogin'> <p className="linkCliente">Clique Aqui</p></Link>
                        </div>
                    </div>
                    <div className="cardAzul">
                        <div className="cardTexto">
                            <h3>Comercio</h3>
                            <p>Bem vindo comerciante, é novo na plataforma? cadastre-se agora</p>
                            <Link to='/CadastroLoginEmpresa'><p className="linkCliente">Clique Aqui</p></Link>
                        </div>
                    </div>
                    <div className="cardAmareloDireita">
                        <div className="cardTexto">
                            <h3>Autônomo</h3>
                            <p>Primeira vez no indikey? <br /> faça seu cadastro agora</p>
                            <Link to='/CadastroLoginServicos'><p className="linkCliente">Clique Aqui</p></Link>
                        </div>
                    </div>


                </div>
            </main>
        </>
    );
}

export default Cadastro;