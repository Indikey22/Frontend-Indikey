import './styles.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import logo from '../../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function CadastroRevisaoEmpresa() {
    return (
        <>
        <main  className="RevisaoCadastroEmpresa">
            <Link to='/'>
                <Fade top>
                    <img src={logo} alt="logo indikey" className="logoTopo" />
                </Fade>
            </Link>          
            <article className="conteudoCadastroRevisaoEmpresa">
            <h1>Revisão</h1>
                <section id="formularioRevisaoEmpresa">
                    {/*  */}
                    <div className="revisaoEmpresaTopo">
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
                    <div className="revisaoEmpresaMeio">
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
                    <div className="revisaoEmpresaBaixo">
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
                            <p>CNPJ</p>
                            <p>XX. XXX. XXX/0001-XX</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="revisaoEmpresaBaixo">
                        <div>
                            <p>Telefone</p>
                            <p>55 (11)99999-9999</p>
                        </div>
                        <section className="botoes">
                            <div className="botoesCadastro"></div>
                            <Link to='/InfoPessoalEmpresa'><div className="BtnProximo">Finalizar</div></Link>                       
                        </section>                    
                    </div>
                </section>
            </article>             
            </main>

        </>
    );
}

export default CadastroRevisaoEmpresa;