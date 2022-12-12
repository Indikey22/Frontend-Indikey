import './styles.css';
import MenuCorporativo from '../../../components/Navs/MenuCorporativo/MenuCorporativoAutonomos/index';

function Dashboard(){
    return(
        <div className='layoutAutonomos'>
        <MenuCorporativo />
        <div className="Dashboard">
        </div>
        </div>
    );
}

export default Dashboard;