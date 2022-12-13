import './styles.css';
import DashboardCards from '../DashboardCards/index';
import DashboardVendas from '../DashboardVendas/index';
import DashboardFim from '../DashboardFim/index';
import Lupa from '../../../../../assets/img/lupa.svg';

function DashboardIntro() {
    return (
        <>
            <div className="introducaoDashboard">
                <div className="txtDashboard">
                    <h1>Olá, <span className='txtAzul'>Antonio</span></h1>
                    <h6 className='txtAzul'>Bem vindo de volta!</h6>
                </div>
                <div className="pesquisarDash">
                    <img src={Lupa} alt="Pesquisar" />
                    <input type="text" className='pesquisar-input' id='pesquisar-input' placeholder='Pesquisar' maxLength="200" />
                </div>
            </div>
            <DashboardCards />
            <DashboardVendas />
            <DashboardFim />
        </>
    );
}

export default DashboardIntro;