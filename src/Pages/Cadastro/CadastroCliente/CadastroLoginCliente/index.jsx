import './style.css'
import React from 'react';
import Fade from 'react-reveal/Fade';
import logo from '../../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function LoginCadastro() {
    return (
        <main className="containerLogin">
            <Link to='/'>
                <Fade top>
                    <img src={logo} alt="logo indikey" className="logoTopo" />
                </Fade>
            </Link>
            <article className="conteudoCadastroLogin">
                <h1>Crie Seu Login</h1>
                <form action="" id="formularioLogin">
                    <p>Email</p>
                    <input type="email" required="required"/>
                    <p>Senha</p>
                    <input type="password" required="required"/>
                    <p id="confirmarSenha">Confirmar senha</p>
                    <input type="password" required="required"/>
                </form>
                <div className="termos">
                    <input type="checkbox" />
                    <p>Ao clicar você aceita os termos de serviço e a política de privacidade do Indikey.</p>
                </div>
                <section className="botoes">
                    <div className="botoesCadastro">
                       <Link to='/CadastroPessoalCliente'><div className="BtnProximo">Proximo</div></Link> 
                    </div>
                </section>
            </article>
        </main>

    )
}
export default LoginCadastro;