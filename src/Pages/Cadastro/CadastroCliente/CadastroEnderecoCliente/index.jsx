import './styles.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import logo from '../../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function CadastroEnderecoCliente() {
    return (
        <>
            <Link to='/'>
                <Fade top>
                    <img src={logo} alt="logo indikey" className="logoTopo" />
                </Fade>
            </Link>
            <section className="botoes">
                <div className="botoesCadastro">
                    <Link to='/CadastroPessoalCliente'><div className="BtnAnterior">Voltar</div></Link>
                    <Link to='/CadastroRevisaoCliente'><div className="BtnProximo">Proximo</div></Link>
                </div>
            </section>
            CadastroEnderecoCliente
        </>
    );
}

export default CadastroEnderecoCliente;