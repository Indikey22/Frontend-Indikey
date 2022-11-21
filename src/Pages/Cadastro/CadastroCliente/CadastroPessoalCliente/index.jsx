import './style.css'

import React from 'react';
import Fade from 'react-reveal/Fade';

import logo from '../../../img/assets/logo.svg'




function CadastroPessoalCliente() {
    return (
            <main  className="containerCadastroPessoalCliente">
            <Fade top>  
                <img src={logo} alt="logo indikey"  className="logoTopo" />
            </Fade>
                <article className="conteudoCadastroPessoalCliente">
                    <h1>Informações Pessoais</h1>
                    <form action="" id="formularioCadastroPessoalCliente"> 
                    {/* falta o required a qusitos de teste */}
                        <p>Nome Completo *</p>
                        <input type="text" />                                                
                        <p>CPF</p>
                        <input type="text" id="CPF"/>
                        <p>Data de Nascimento *</p>
                        <input type="date" id="dataNascCliente"/>
                        <p>Telefone</p>
                        <input type="text" />
                        <p>Gênero</p>                        
                        <select id="generoLista">
                            <option value="false"></option>
                            <option value="value1">Feminino</option>
                            <option value="value3">Masculino</option>
                            <option value="value4">Outro</option>
                        </select>
                    </form>
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
export default CadastroPessoalCliente;