import './styles.css'
import feedbackPlataforma from '../../../assets/img/plataformaSobre.svg'
import iconeLamapada from '../../../assets/img/iconeLampada.svg'
import interrogacao from '../../../assets/img/iconeDuvida.svg'
import separacaoMeio from '../../../assets/img/separacaoSobre.svg'
import pessoasSobreTopo from '../../../assets/img/pessoasSobreTopo.svg'


function SobreNosMeio(){
    return(
        <>
        <article id="qmIndikey">
            <div id="tituloSobreTopo">
                <h1>Entenda o Processo de Criação do Indikey</h1>
            </div>
            <h2>Quem é o <span className="indiAzul">Indi</span><span className="keyAmarelo">key</span></h2>
            <div id="conteudoQmIndikey">
                <section id="IndiEsquerda">                        
                    <div>
                        <div id="numeracaoTopicos">
                            <img src={interrogacao} alt="time line pg sobre" />
                            <p className="numeroPagina">01</p>
                        </div>
                        <div className="textoEsquerdaSobreTopo">
                            <p>Indikey é oportunidade, visibilidade e cescimento, indikey é a chave.</p>
                            <p>Com o intuito de impulsionar a empreendores a atigir a capacidade maxima no mercado de trabalho </p>
                        </div>
                    </div>
                    <div id="separacaoMeio"><img src={separacaoMeio} alt="linha separa conteudo" /></div>
                </section>
                <section id="IndiDireita">
                    <img src={pessoasSobreTopo} alt="linha separa conteudo" />
                </section>
            </div>            
        </article>

        {/*  */}
              <article id="PqIndikey">
                <h4 className="tituloPq">Por que foi criado?</h4>
                <div id="conteudoPqIndikey">

                    <section id="PqIndiEsquerda">   
                        <div id="tituloEsquerda"><h3>Venha <span className="indiAzul">fazer</span> parte dessa <span className="indiAzul">família</span></h3></div>
                        <div id="imgPlataforma"><img src={feedbackPlataforma} alt="" /></div>          
                        <article id="informacoesDireitaBaixo">
                            <button>Siaba Mais</button>   
                            <p><span className="EmpresasEProdutos"><span className="indiAzul">+</span> 5120</span> Empresas</p> 
                            <p><span className="EmpresasEProdutos"><span className="indiAzul">+</span> 230</span> Produtos</p> 
                        </article>
                    </section>

                    <div><img src={separacaoMeio} alt="linha separa conteudo" /> </div>
                    <section id="PqIndiDireita">
                        <div className="motivoPqDireita">
                            <div><img src={iconeLamapada} alt="" /></div> 
                            <div className="conteudoPqDireita">
                                <h3>Inovação</h3>
                                <p>Criado com o proposito de ampliar e unificar o comercio local, de forma simples e prática</p>
                            </div>
                        </div>
                        <div className="motivoPqDireita"> 
                            <div><img src={iconeLamapada} alt="" /></div> 
                            <div className="conteudoPqDireita">
                                <h3>Conexões</h3>
                                <p>O Indikey cria conexões entre o microempreeendedor e o prestador de serviço, gerando mais econômia</p>
                            </div></div>
                        <div className="motivoPqDireita"> 
                            <div><img src={iconeLamapada} alt="" /></div> 
                            <div className="conteudoPqDireita">
                                <h3>Facilidade</h3>
                                <p>Um dos nossos propóstios é facilitar a vida de quem produz, fornece e de quem compra os produtos.</p>
                            </div></div>
                    </section>
                </div>
                
            </article>
        </>
    )
}
export default SobreNosMeio;