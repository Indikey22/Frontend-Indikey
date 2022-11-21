import './style.css'

import React from 'react';
import Fade from 'react-reveal/Fade';

import logo from '../../../assets/img/logo.svg'



function CadastroEnderecoServico() {
    return (
            <main  className="containerCadastroEnderecoServico">
            <Fade top>  
                <img src={logo} alt="logo indikey"  className="logoTopo" />
            </Fade>
                <article className="conteudoCadastroEnderecoServico">
                    <h1>Adicione Seu Endereço</h1>
                    <form action="" id="formularioCadastroEnderecoServico"> 
                    {/* falta o required a qusitos de teste */}
                        <p>Cep</p>
                        <input type="text" /> 
                        <div id="cidade">  
                            <div>                                       
                                <p>Cidade</p>
                                <input type="text" id="cidadeInput"/>
                            </div>
                            <div>
                                <p>UF</p>
                                <select id="generoListaUF">
                                    <option value="false"></option>
                                    <option value="value1">SP</option>
                                    <option value="value3">AC</option>
                                    <option value="value4">AL</option>
                                    <option value="value4">AP</option>
                                    <option value="value4">AM</option>
                                    <option value="value4">BA</option>
                                    <option value="value4">CE</option>
                                    <option value="value4">DF</option>
                                    <option value="value4">ES</option>
                                    <option value="value4">GO</option>
                                    <option value="value4">MA</option>
                                    <option value="value4">MG</option>
                                    <option value="value4">MS</option>
                                    <option value="value4">MT</option>
                                    <option value="value4">PA</option>
                                    <option value="value4">PB</option>
                                    <option value="value4">PE</option>
                                    <option value="value4">PI</option>
                                    <option value="value4">PR</option>
                                    <option value="value4">RJ</option>
                                    <option value="value4">RN</option>
                                    <option value="value4">RO</option>
                                    <option value="value4">RR</option>
                                    <option value="value4">RS</option>
                                    <option value="value4">SC</option>
                                    <option value="value4">SE</option>
                                    <option value="value4">TO</option>
                                </select>
                            </div>
                        </div>      
                        <p>Logradouro</p>
                        <input type="text" />
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
export default CadastroEnderecoServico;