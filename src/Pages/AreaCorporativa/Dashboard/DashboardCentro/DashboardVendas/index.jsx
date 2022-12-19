import './styles.css';
import graficoVendas from "../../../../../assets/img/graficoVendas.svg"
import BarChart from '../../../../../components/GraficosDashboard/BarChart';

function DashboardVendas(){
    return(
        <div>
            {/* <img src={graficoVendas} alt="" className="dashboardVendas" /> */}
            <BarChart />
        </div>
    );
}

export default DashboardVendas;