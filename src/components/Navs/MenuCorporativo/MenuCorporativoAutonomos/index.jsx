import './styles.css';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/img/logo.svg';
import Dashboard from '../../../../assets/img/dashboard.svg';
import Tarefas from '../../../../assets/img/tarefas.svg';
import Indikey from '../../../../assets/img/redesocial.svg';
import Suporte from '../../../../assets/img/suporte.svg'
import Configuracoes from '../../../../assets/img/configuracoes.svg';
import Sair from '../../../../assets/img/sair.svg'

function MenuCorporativo() {
    return (
        <div className='LateralAutonomos'>
            <nav className='MenuAutonomos'>
                <div className="logoimage">
                    <img src={Logo} alt="" className="logoimage"/>
                </div>
                <ul className='NavegacaoAutonomos'>
                    <Link to='/Dashboard'><span className="iconesNav"><img src={Dashboard} alt="icone do Dashboard" /><li>Dashboard</li></span></Link>
                    <Link to='/Tarefas'><span className="iconesNav"><img src={Tarefas} alt="icone do Tarefas" /><li>Tarefas</li></span></Link>
                    <Link to='/Indikey'><span className="iconesNav"><img src={Indikey} alt="icone do Indikey" /><li>Indikey</li></span></Link>
                    <Link to='/SuporteRede'><span className="iconesNav"><img src={Suporte} alt="icone do Suporte" /><li>Suporte</li></span></Link>
                    <Link to='/InfoPessoalAutonomo'><span className="iconesNav"><img src={Configuracoes} alt="icone do " /><li>Configurações</li></span></Link>
                </ul>
            </nav>
            <div className="btnAutonomos">
                <Link to='/'><img src={Sair} alt='icone do sair' /><button className='sairAutonomos'>  Sair</button></Link>
            </div>
        </div>
    );
}

export default MenuCorporativo;