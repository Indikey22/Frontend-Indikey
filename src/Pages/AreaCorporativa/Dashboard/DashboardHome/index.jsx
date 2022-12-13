import './styles.css';
import MenuCorporativo from '../../../../components/Navs/MenuCorporativo/MenuCorporativoAutonomos/index';
import DashboardCentro from '../../Dashboard/DashboardCentro/DashboardIntro/index';
import DashboardDireita from '../../Dashboard/DashboardDireita/DashboardIntro/index';

function Dashboard() {
    return (
        <div className='layoutAutonomos'>
            <MenuCorporativo />
            <div><DashboardCentro /></div>
            <div><DashboardDireita /></div>
        </div>
    );
}

export default Dashboard;