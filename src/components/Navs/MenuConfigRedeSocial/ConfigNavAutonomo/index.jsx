import './styles.css';
import Perfil from '../../../../assets/img/perfilconfigautonomo.svg'
import { Link } from 'react-router-dom';

function ConfigNavAutonomo() {
    return (
        <main className='ConfigNavAutonomo'>
            <div className="introConfigAutonomo">
                <div className="txtConfigAutonomo">
                    <img src={Perfil} alt="usuario" />
                    <h2>Antonio Superbi</h2>
                </div>
                <div className="btn-Autonomos">
                    <img src="" alt="sino" />
                    <label class="switch">
                        <input type="checkbox"/>
                            <span class="slider"></span>
                    </label>
                </div>
            </div>
            <nav className="navConfigAutonomo">
                <Link to='/InfoPessoalAutonomo'>Informações Pessoais</Link>
                <Link to='/ContratosAutonomo'>Contratos</Link>
                <Link to='/SegurancaAutonomo'>Segurança</Link>
            </nav>
        </main>
    );
}

export default ConfigNavAutonomo;