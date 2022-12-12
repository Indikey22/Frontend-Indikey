import './style.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import logo from '../../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function CadastroPessoalEmpresa() {
    return (
            <main  className="containerCadastroPessoalEmpresa">
            <Link to='/'>
                <Fade top>
                    <img src={logo} alt="logo indikey" className="logoTopo" />
                </Fade>
            </Link>
                <article className="conteudoCadastroPessoalEmpresa">
                    <h1>Informações Pessoais</h1>
                    <form action="" id="formularioCadastroPessoalEmpresa">
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
                    <section className="botoes">
                        <div className="botoesCadastro">
                            <Link to='/CadastroLoginEmpresa'><div className="BtnAnterior">Voltar</div></Link>
                            <Link to='/CadastroEnderecoEmpresa'><div className="BtnProximo">Proximo</div></Link>
                        </div>
                    </section>
                </article>
            </main>
        
    )
}
export default CadastroPessoalEmpresa;