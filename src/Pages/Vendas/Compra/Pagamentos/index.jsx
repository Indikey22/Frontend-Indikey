import './styles.css'
import { Link } from 'react-router-dom';
import TimeLinePagamento from '../../../../assets/img/timeLinePagamento.svg';
import iconeCartao from '../../../../assets/img/iconeCartao.png';
import iconeBoleto from '../../../../assets/img/iconeBoleto.png';
import HeaderEcommerce from "../../../../components/Headers/HeaderEcommerce/index";


function Pagamentos(){
    return(
        <>
        <HeaderEcommerce id="headerPedido"/>

        <div className='timeLineCompra'>
            <img src={TimeLinePagamento} alt="" />
        </div>
        <article id='containerPagamento'>
            <section id='metodoPagamento'>
                <div id='btnCartao'>
                    <img src={iconeCartao} alt="" />
                    Cartão de Crédito
                </div>
                <div id='btnBoleto'>
                    <img src={iconeBoleto} alt="" />
                    Boleto
                </div>
            </section>
            <article id='dadosCartao'>
                <section className='cartaoCima'>
                    <div className='esquerdaCartao'>
                        <p>Número do Cartão</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Validade</p>
                        <input type="text" placeholder='MM/AAAA' />
                    </div>
                </section>
                <section>
                    <div className='esquerdaCartao'>
                        <p>Nome impresso no Cartão</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>CVV</p>
                        <input type="text"  />
                    </div>
                </section>
                <section  className='esquerdaCartao'>
                    <div>
                        Número de Parcelas
                        <select>
                            <option value="false"></option>
                            <option value="value1">1X</option>
                            <option value="value3">2X</option>
                            <option value="value4">3X</option>
                            <option value="value4">4X</option>
                            <option value="value4">5X</option>
                            <option value="value4">6X</option>
                            <option value="value4">7X</option>
                            <option value="value4">8X</option>
                            <option value="value4">9X</option>
                            <option value="value4">10X</option>
                            <option value="value4">11X</option>
                            <option value="value4">12X</option>                                    
                        </select>
                    </div>
                    <div id='continuarPedido'>
                        <Link to='/Ecommerce'><div className="BtnProximoPedidos">Continuar</div></Link>
                    </div>
                </section>
            </article>
        </article>
        </>
    );
}

export default Pagamentos;