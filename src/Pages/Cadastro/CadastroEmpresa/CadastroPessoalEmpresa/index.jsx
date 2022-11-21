import './style.css'

import React from 'react';
import Fade from 'react-reveal/Fade';

import logo from '../../../img/assets/logo.svg'


function CadastroPessoalEmpresa() {
    return (
            <main  className="containerCadastroPessoalEmpresa">
            <Fade top>  
                <img src={logo} alt="logo indikey"  className="logoTopo" />
            </Fade>
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
                    <div className="termos">
                        <input type="checkbox" />
                        <p>Ao clicar você aceita os termos de serviço e a política de privacidade do Indikey.</p>
                    </div>
                    <section className="botoes">
                        <div className="botoesCadastro">
                            <div className="BtnAnterior">Voltar</div>
                            <div className="BtnProximo">Proximo</div>
                        </div>
                    </section>
                </article>
            </main>
        
    )
}
export default CadastroPessoalEmpresa;