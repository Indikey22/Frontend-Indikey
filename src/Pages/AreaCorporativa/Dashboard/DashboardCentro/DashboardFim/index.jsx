import './styles.css';
import graficoProdutividade from "../../../../../assets/img/graficoProdutividade.png"
import topProduto from "../../../../../assets/img/topProdutos.png"
import RosquinhaChart from '../../../../../components/GraficosDashboard/RosquinhaChart';

function DashboardFim(){
    return(
        <div className="dashboardFim">
            
            <div className="Produtividade">
                {/* <img src={graficoProdutividade} alt="" /> */}
                <RosquinhaChart />
            </div>

            <div className="topProdutos">
                <img src={topProduto} alt="" />
            </div>
        </div>
    );
}

export default DashboardFim;