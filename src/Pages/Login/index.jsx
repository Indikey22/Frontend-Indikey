import './styles.css'

import React from 'react';
import Fade from 'react-reveal/Fade';

import logo from '../../assets/img/logo.svg'




function Login() {
    return (
            <main  className="Login">
                <Fade top>  
                    <img src={logo} alt="logo indikey"  className="logoTopo" />
                </Fade>   
                <article className="conteudoLogin">
                <h1><span className="FacaAzul">Faça</span> seu <span className="LoginAmarelo">Login</span></h1>

                <form action="" id="formularioLogin">
                        <p>Email</p>
                        <input type="email" />
                        <p>Senha</p>
                        <input type="email" />
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
export default Login;