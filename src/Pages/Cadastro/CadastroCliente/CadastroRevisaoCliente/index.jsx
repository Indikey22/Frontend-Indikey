import './style.css'

import React from 'react';
import Fade from 'react-reveal/Fade';

import logo from '../../../assets/img/logo.svg'




function RevisaoCadastroCliente() {
    return (
            <main  className="RevisaoCadastroCliente">
            <Fade top>  
                <img src={logo} alt="logo indikey"  className="logoTopo" />
            </Fade>           
            <article className="conteudoCadastroRevisao">
            <h1>Revisão</h1>
                <section id="formularioRevisao">
                    {/*  */}
                    <div className="revisaoTopo">
                        <div>
                            <p className="tituloInformacoes">Nome Completo</p>
                            <p className="informacoesUsuario">Antonio Superbi</p>  
                        </div>

                        <div>
                            <p className="tituloInformacoes">Cep</p>
                            <p className="informacoesUsuario">12345-000</p>  
                        </div>
                    </div>
                    {/*  */}
                    <div className="revisaoMeio">
                        <div>
                            <p className="tituloInformacoes">Email</p>
                            <p className="informacoesUsuario">antoniosuperbi@gmail.com</p>  
                        </div>

                        <div>
                            <p className="tituloInformacoes">Cidade</p>
                            <p className="informacoesUsuario">São Paulo</p>  
                        </div>

                        <div>
                            <p className="tituloInformacoes">UF</p>
                            <p className="informacoesUsuario">SP</p>  
                        </div>
                    </div>
                    {/*  */}
                    <div className="revisaoBaixo">
                        <div >
                            <p className="tituloInformacoes">Data de Nascimento</p>
                            <p className="informacoesUsuario">01/08/1990</p>  
                        </div>

                        <div>
                            <p className="tituloInformacoes">Logradouro</p>
                            <p className="informacoesUsuario">Avenida São João</p>  
                        </div>
                    </div>
                    {/*  */}

                    <div>
                        <div>
                            <p>CPF</p>
                            <p>123.456.789-00</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="revisaoBaixo">
                        <div>
                            <p>Telefone</p>
                            <p>55 (11)99999-9999</p>
                        </div>
                        <div className="BtnProximo">Finalizar</div>
                    </div>
                </section>
            </article>             
            </main>
        
    )
}
export default RevisaoCadastroCliente;