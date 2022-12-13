import './styles.css';
import Avaliacoes from '../../../../../assets/img/avaliacoes.svg';
import Recarregar from '../../../../../assets/img/recarregar.svg';

function DashboardAvaliacao() {
    return (
        <div className="dashboardAvaliacao">
            <div className="topoavaliacaoDash">
                <div className="txtavAliacaoDash">
                    <h6>Avaliações de clientes</h6>
                    <div className='avaliacao'><img src={Avaliacoes} alt="avaliacao" /><span>4.6</span></div>
                    <p>Classificação geral de 100 avaliações de clientes</p>
                </div>
                <img src={Recarregar} alt="recarregar" />
            </div>
            <div className="overalDash">
                <div className="barra"><span className="progresso"></span></div>
            </div>
        </div>
    );
}

export default DashboardAvaliacao;