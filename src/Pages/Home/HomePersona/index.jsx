import './styles.css';
import Proposito from '../HomeProposito/index';
import Servicos from '../HomeServicos/index';
import Planos from '../HomePlanos/index';
import Mobile from '../HomeMobile/index';
import Moca from '../../../assets/img/mocachs.svg';
import SetaBotao from '../../../assets/img/setaHS.svg';
import imagemdir from '../../../assets/img/img-direita-inicio.svg';
import Fade from 'react-reveal/Fade';
import Comentarios from '../HomeComentarios/index';

function Persona() {
    return (
        <>
            <main className='HomeTopo'>
                <div id="containerHomeTopo">
                    <div className='txtHomeTopo'>
                        <Fade bottom>
                            <h1 className='titulo1'>
                                <span className='titulo_azul'>Indikey</span> a <span className='titulo_amarelo'>chave</span> para o seu
                                <span className='titulo_azul'> negócio</span>
                            </h1>
                        </Fade>
                        <span className='txthome'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing.</span>
                        <br /> <br />
                        <button className='botao_saibamais'>Saiba Mais  <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className='imageHomeTopoDireita'>
                    <img src={imagemdir} alt='Modelo' />
                </div>

            </main>
            <section className="conteudoHomeSobre">
                <div className="esquerdaCHS">
                    <img src={Moca} alt="" className="tamanhoMocaCHS" />
                </div>
                <div className="container_CHS">
                    <div className="conteudo_containerCHS">
                        <h2 className="h2_CHS">Indikey</h2>
                        <h3 className="h3_CHS">Como nascemos</h3>
                        <p className="p_CHS">O indikey nasceu da ideia de ajudar os trabalhadores
                            locais a divulgarem e terem mais demanda de seus serviços, nós do VisibiliKey
                            priorizamos três tópicos bastante importantes para eliminar esse problema, sendo: a Visibilidade, Impulsionamento e a Conexão.
                        </p>
                        <button className="botaoCHS" value="submit">Faça seu cadastro <img src={SetaBotao} alt="seta para o botão" className="SetaBotao" /></button>
                    </div>
                </div>
            </section>
            <Proposito />
            <Servicos />
            <Planos />
            <Mobile />
            <Comentarios />
        </>
    );
}

export default Persona;