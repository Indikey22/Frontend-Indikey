import './styles.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import logo from '../../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function CadastroRevisaoServico() {
    return (
        <>
            <Link to='/'>
                <Fade top>
                    <img src={logo} alt="logo indikey" className="logoTopo" />
                </Fade>
            </Link>
            <section className="botoes">
                <div className="botoesCadastro">
                <div className="BtnProximo">Finalizar</div>
                </div>
            </section>
            CadastroRevisaoServico
        </>
    );
}

export default CadastroRevisaoServico;