import './styles.css';
import MenuCorporativo from '../../../components/Navs/MenuCorporativo/MenuCorporativoAutonomos/index';

function SuporteRede() {
    return (
        <div className='SuporteRede'>
            <MenuCorporativo />
            <div className='SuporteDash'>

                <h2>Precisa de ajuda?</h2>

                <div className='PaginaSuporteR'>
                    <section className='DuvidasFrequentes'>

                        <h3>Dúvidas Frequentes</h3>
                        <div className="containerDuvidas">
                            <div className="content">
                                <div className="accordion_item">
                                    <div className="accordion_header">
                                        <span className='PerguntaD'>
                                            Posso alterar meu plano a qualquer momento?
                                        </span>
                                        <div className="icon">
                                            +
                                        </div>
                                    </div>

                                    <div className="accordion_content">
                                        <p className='RespostaD'>
                 Sim, é possível fazer a troca do plano diretamente no site na página de planos, sem a necessidade de fazer ligação ao SAQ, mas caso precise de ajuda, conta com a gente!
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion_item">
                                    <div className="accordion_header">
                                        <span className='PerguntaD'>
                                        Como saber se o prestador de serviço é confiavel?
                                        </span>
                                        <div className="icon">
                                            +
                                        </div>
                                    </div>

                                    <div className="accordion_content">
                                        <p className='RespostaD'>
                                        Contamos com um sistema de avaliações que prioriza a experiência do cliente, é possivel conhecer um pouco mais sobre o trabalho pela página de avaliações.
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion_item">
                                    <div className="accordion_header">
                                        <span className='PerguntaD'>
                                        Posso dividir minhas conexões?
                                        </span>
                                        <div className="icon">
                                            +
                                        </div>
                                    </div>

                                    <div className="accordion_content">
                                        <p className='RespostaD'>
                                        A disponibilidade para compartilhar suas conexões com outros usuários variam de acordo com cada plano, mas a partir do plano básico oferecemos o limite de 2 usuários.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='FaleConosco'>
                        <h3>Fale Conosco</h3>
                        <br />
                        <div className='FormsSuporte'>
                            <forms>
                                <label>Nome completo</label> <br />
                                <input type='text' required='requised' />
                                <br /> <br />

                                <label>Descrição</label> <br />
                                <input className='DescricaoSuporte' type='text' required='requised' />
                                <br /> <br />

                                <button className='EnviarSuporte'>Enviar</button>
                            </forms>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default SuporteRede;