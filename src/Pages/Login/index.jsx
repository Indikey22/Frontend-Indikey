import './styles.css'
import React from 'react';
import Fade from 'react-reveal/Fade';
import Logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <main className="Login">
            <Link to='/'>
                <Fade top>
                    <img src={Logo} alt="logo indikey" className="logoTopo" />
                </Fade>
            </Link>
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
                    <div className="botoesLogin">
                        <div className="BtnProximo">Proximo</div>
                    </div>
                </section>
            </article>

        </main>

    )
}
export default Login;