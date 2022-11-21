import './style.css'

import React from 'react';
import Fade from 'react-reveal/Fade';

import logo from '../../../img/assets/logo.svg'

function LoginCadastro() {
    return (
            <main  className="containerLogin">
            <Fade top>  
                <img src={logo} alt="logo indikey"  className="logoTopo" />
            </Fade>
                <article className="conteudoCadastroLogin">
                    <h1>Crie Seu Login</h1>
                    <form action="" id="formularioLogin">
                        <p>Email</p>
                        <input type="email" />
                        <p>Senha</p>
                        <input type="password" />
                        <p>Confirmar senha</p>
                        <input type="password" />
                    </form>
                    <div className="termos">
                        <input type="checkbox" />
                        <p>Ao clicar você aceita os termos de serviço e a política de privacidade do Indikey.</p>
                    </div>
                    <section className="botoes">
                        <div className="botoesCadastro">
                            <div className="BtnProximo">Proximo</div>
                        </div>
                    </section>
                </article>
            </main>
        
    )
}
export default LoginCadastro;