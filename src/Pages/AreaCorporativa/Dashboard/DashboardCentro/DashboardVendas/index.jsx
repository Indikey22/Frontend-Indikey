import './styles.css';
import graficoVendas from "../../../../../assets/img/graficoVendas.svg"

function DashboardVendas(){
    return(
        <div>
            <img src={graficoVendas} alt="" className="dashboardVendas" />
        </div>
    );
}

export default DashboardVendas;