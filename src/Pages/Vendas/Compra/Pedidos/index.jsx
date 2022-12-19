import './styles.css';
import { Link } from 'react-router-dom';
import HeaderEcommerce from "../../../../components/Headers/HeaderEcommerce/index";
import TimeLine from '../../../../assets/img/timeLineCompra.svg';
import CasteloInflavel from '../../../../assets/img/casteloInflavel.svg';
import lixeira from '../../../../assets/img/iconeLixeira.png';


function Pedidos(){
    return(
        <>
        <HeaderEcommerce id="headerPedido"/>
        <main id="containerPedido">
            <article id="infoPedido">
                <div className='timeLineCompra'>
                    <img src={TimeLine} alt="" />
                </div>
                <h2>Confira seu pedido</h2>
                <section id='InfoProdutos'>
                    <div className='InfoProdutosEsquerda'>
                        <p>Produtos</p>
                    </div>
                    <div className='InfoProdutosDireita'>
                        <p>Quantidade</p>
                        <p>Valor Unitário</p>
                        <p>Valor Total</p>
                    </div>
                </section>
                <section id="produtoValores">
                    <div className='castelo'>
                        <img src={CasteloInflavel} alt="" />
                        <p>Castelo Inflável</p>
                    </div>
                    <div >
                        <p id='qntdProduto'><span className="amarelo">-</span>   2   <span className="azul">+</span></p>
                    </div>
                    <p>R$ 150,00</p>
                    <div id='totalProduto'>
                        <p>R$ 300,00</p>
                        <img src={lixeira} alt="" />
                    </div>
                </section>               
                <section id='subTotal'>
                        <div >
                            <p>Subtotal: </p>
                            <p>R$300,00</p>
                        </div>
                    </section>
                <article id='entregaEcupom'>
                    <section id="entrega">
                            <h5>Prazo para Entrega</h5>
                            <p>CEP</p>
                            <div className='botoesEntrega'>
                                <input type="text" placeholder='00000-000'/>
                                <div className="BtnCalcular">Calcular</div>
                            </div>
                    </section><section id="entrega">
                            <h5>Cupom de desconto</h5>
                            <p>Informe o cupom</p>
                            <div className='botoesEntrega'>
                                <input type="text" />
                                <div className="BtnCalcular">Inserir</div>
                            </div>
                    </section>
                </article>
                <div id='continuarPedido'>
                    <Link to='/Identificacoes'><div className="BtnProximoPedidos">Continuar</div></Link>
                </div>
            </article>
        </main>
        </>
    );
}

export default Pedidos;