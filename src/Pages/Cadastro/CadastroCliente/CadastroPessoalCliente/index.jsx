import './styles.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import logo from '../../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function CadastroPessoalCliente() {
    return (
        <main className="containerCadastroPessoalCliente">
            <Link to='/'>
                <Fade top>
                    <img src={logo} alt="logo indikey" className="logoTopo" />
                </Fade>
            </Link>
            <article className="conteudoCadastroPessoalCliente">
                <h1>Informações Pessoais</h1>
                <form action="" id="formularioCadastroPessoalCliente">
                    {/* falta o required a qusitos de teste */}
                    <p>Nome Completo *</p>
                    <input type="text" />
                    <p>CPF</p>
                    <input type="text" id="CPF" />
                    <p>Data de Nascimento *</p>
                    <input type="date" id="dataNascCliente" />
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
                        <Link to='/CadastroLoginCliente'><div className="BtnAnterior">Voltar</div></Link>
                        <Link to='/CadastroEnderecoCliente'><div className="BtnProximo">Proximo</div></Link>
                    </div>
                </section>
            </article>
        </main>

    )
}
export default CadastroPessoalCliente;