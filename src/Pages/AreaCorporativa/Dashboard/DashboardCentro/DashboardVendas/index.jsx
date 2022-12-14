import './styles.css';
import graficoVendas from "../../../../../assets/img/graficoVendas.png"

function DashboardVendas(){
    return(
        <div className="dashboardVendas">
            <img src={graficoVendas} alt="" />
        </div>
    );
}

export default DashboardVendas;