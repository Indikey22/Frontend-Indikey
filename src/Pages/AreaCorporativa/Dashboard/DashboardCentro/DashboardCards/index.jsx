import './styles.css';
import LucrodoMes from '../../.././../../assets/img/lucrodomes.svg';
import Metas from '../../.././../../assets/img/metas.svg';
import ProdutoMaisVendido from '../../.././../../assets/img/produtomaisvendido.svg';
import Conexoes from '../../.././../../assets/img/conexoesdash.svg';

function DashboardCards() {
    return (
        <div className="dashboardCards">
            <div className="dashcard">
                <img src={LucrodoMes} alt="icone de lucro" />
                <div className="txtCardsDash">
                    <h5>R$ 22.150,00</h5>
                    <h6>Lucro do mês</h6>
                </div>
            </div>
            <div className="dashcard">
                <img src={Metas} alt="icone de lucro" />
                <div className="txtCardsDash">
                    <h5>9/14</h5>
                    <h6>Metas Alcançadas</h6>
                </div>
            </div>
            <div className="dashcard">
                <img src={ProdutoMaisVendido} alt="icone de lucro" />
                <div className="txtCardsDash">
                    <h5>436</h5>
                    <h6>Produto mais Vendido</h6>
                </div>
            </div>
            <div className="dashcard">
                <img src={Conexoes} alt="icone de lucro" />
                <div className="txtCardsDash">
                    <h5>9/14</h5>
                    <h6>Conexões</h6>
                </div>
            </div>
        </div>
    );
}

export default DashboardCards;