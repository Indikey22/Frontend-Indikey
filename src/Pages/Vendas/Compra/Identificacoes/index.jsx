import './styles.css'
import { Link } from 'react-router-dom';
import HeaderEcommerce from "../../../../components/Headers/HeaderEcommerce/index";
import TimeLineIdentidicacao from '../../../../assets/img/timeLineId.svg';

function Identificacoes(){
    return(
        <>
        <HeaderEcommerce id="headerPedido"/>
        <main id='identificacaoCompra'>
            <div className='timeLineCompra'>
                <img src={TimeLineIdentidicacao} alt="" />
            </div>
            <article id='containerIdentificacao'>
                <div className='idTopo'>
                    <h4>Dados</h4>
                    <h4>Endereço de Entrega</h4>
                </div>
                <section id='idMeioCima'>
                    <div id='nomeCompleto'>
                        <p>Nome Completo</p>
                        <p className='weigthMaior'>Antonio Superbi</p>
                    </div>
                    <div>
                        <p>Logradouro</p>
                        <p className='weigthMaior'>Avenida João 157</p>
                    </div>
                    <div>
                        <p>CEP</p>
                        <p className='weigthMaior'>12345-000</p>
                    </div>
                </section>
                <section id='idMeio'>
                    <div id='EmailId'>
                        <p>Email</p>
                        <p className='weigthMaior'>antoniosuperbi@gmail.com</p>
                    </div>
                    <section id='idCidade'>
                        <div id='cidade'>
                            <p>Cidade</p>
                            <p className='weigthMaior'>São Paulo</p>
                        </div>
                        <div>
                            <p>Uf</p>
                            <p className='weigthMaior'>SP</p>
                        </div>
                    </section>
                   </section>
                   <section id='idBaixoCompra'>
                        <div >
                            <p>CPF</p>
                            <p className='weigthMaior'>12345678910</p>
                        </div>
                   </section>
            </article>
                <div id='continuarPedido'>
                    <Link to='/Pagamentos'><div className="BtnProximoPedidos">Continuar</div></Link>
                </div>
        </main>
        </>
    );
}

export default Identificacoes;