import './style.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import logo from '../../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function CadastroPessoalServico() {
    return (
            <main  className="containerCadastroPessoalServico">
            <Link to='/'>
                <Fade top>
                    <img src={logo} alt="logo indikey" className="logoTopo" />
                </Fade>
            </Link>
                <article className="conteudoCadastroPessoalServico">
                    <h1>Informações Pessoais</h1>
                    <form action="" id="formularioCadastroPessoalServico">
                        <p>Nome Completo</p>
                        <input type="text" />
                        <p>CNPJ</p>
                        <input type="text" id="cnpj"/>
                        <p className="semCNPJ">Não tem CNPJ?</p>
                        <p>Telefone</p>
                        <input type="text" />
                        <p>Categoria</p>
                        <input type="text" />
                    </form>
                    <div className="termos">
                        <input type="checkbox" />
                        <p>Ao clicar você aceita os termos de serviço e a política de privacidade do Indikey.</p>
                    </div>
                    <section className="botoes">
                        <div className="botoesCadastro">
                            <Link to='/CadastroLoginServico'><div className="BtnAnterior">Voltar</div></Link>
                            <Link to='/CadastroEnderecoServico'><div className="BtnProximo">Proximo</div></Link>
                        </div>
                    </section>
                </article>
            </main>
        
    )
}
export default CadastroPessoalServico;