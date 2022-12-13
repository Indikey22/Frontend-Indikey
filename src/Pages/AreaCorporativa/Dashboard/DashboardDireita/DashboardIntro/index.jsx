import './styles.css';
import DashboardAvaliacao from '../DashboardAvaliacao/index';
import DashboardCalendario from '../DashboardCalendario/index';
import Sino from '../../../../../assets/img/sino.svg';
import Perfil from '../../../../../assets/img/perfilvendedor.svg';

function DashboardIntroDir(){
    return(
        <>
        <div className="introdireitaDash">
            <img src={Sino} alt="" />
            <img src={Perfil} alt="" />
        </div>
        <DashboardAvaliacao />
        <DashboardCalendario />
        </>
    );
}

export default DashboardIntroDir;