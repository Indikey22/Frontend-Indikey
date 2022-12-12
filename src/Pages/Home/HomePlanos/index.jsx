import './styles.css';
import Check from '../../../assets/img/check.svg';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import React, { useEffect } from 'react';


function Planos(){
    useEffect(() =>{
        Aos.init({duration: 1500});
     }, []);
    return(
        <>
        <main className='HomeAssinatura'>
            <div className='DescricaoAssinatura'>
                <h1 className='TituloAssinatura'> <span className='Amarelo'>Conheça </span> nossos <span className='Azul'>planos </span> para <span className='Amarelo'>você </span><span className='Azul'>prestador de serviço</span></h1>
                <span>Planos que se adequam a sua necessidade são a chave para o sucesso</span>
            </div>

            <div data-aos="fade-right" data-aos-delay="300" className='CampoPlanos'>
                <div className='PlanoAssinatura'>
                    <h3 className='TipoAssinatura'>Gratuito</h3>
                    <span>Tudo o que você precisa para começar o seu negócio</span>
                    <hr />
                    <div className='InfoCentro'>
                    <Link to='/Cadastro' ><button className='IniciarAssinatura'>Iniciar</button></Link>
                   </div>
                    <hr />
                    <span> <img src={Check} alt='Check' /> 5 Conexões </span>
                    <span> <img src={Check} alt='Check' /> SAQ </span>
                    <span> <img src={Check} alt='Check' /> 1 Usuário</span>
                </div>

                <div className='PlanoAssinatura'>
                <h3 className='TipoAssinatura'>Básico</h3>
                    <span>Aumente suas indicações e também sua demanda</span>
                    <hr />
                    <div className='InfoCentro'>
                    <span><b>R$ 20,00</b> /Mensal</span>
                    <Link to='/Cadastro' ><button className='IniciarAssinatura'>Iniciar</button></Link>
                    </div>
                    <hr />
                    <span> <img src={Check} alt='Check' /> 10 Conexões </span>
                    <span> <img src={Check} alt='Check' /> SAQ </span>
                    <span> <img src={Check} alt='Check' /> 2 Usuário</span>
                </div>

                <div className='PlanoAssinatura'>
                <h3 className='TipoAssinatura'>Regular</h3>
                <span>Para você que quer crescer ainda mais</span>
                    <hr />
                    <div className='InfoCentro'>
                    <span><b>R$ 30,00</b> /Mensal</span>
                    <Link to='/Cadastro' ><button className='IniciarAssinatura'>Iniciar</button></Link>
                    </div>
                    <hr />
                    <span> <img src={Check} alt='Check' /> 30 Conexões </span>
                    <span> <img src={Check} alt='Check' /> SAQ </span>
                    <span> <img src={Check} alt='Check' /> 3 Usuário</span>
                    <span> <img src={Check} alt='Check' /> Cursos</span>
                </div>

                <div className='PlanoAssinatura'>
                <h3 className='TipoAssinatura'>Premium</h3>
                <span>Alta demanda e auxilio na gestão de seu negócio</span>
                    <hr />
                    <div className='InfoCentro'>
                    <span><b>R$ 50,00</b> /Mensal</span>
                    <Link to='/Cadastro' ><button className='IniciarAssinatura'>Iniciar</button></Link>
                    </div>
                    <hr />
                    <span> <img src={Check} alt='Check' /> 50 Conexões </span>
                    <span> <img src={Check} alt='Check' /> SAQ </span>
                    <span> <img src={Check} alt='Check' /> 3 Usuário</span>
                    <span> <img src={Check} alt='Check' /> Cursos + Mentoria</span>
                </div>
            </div>
        </main>
        </>
    );
}

export default Planos;