import './styles.css';
import Perfil from '../../../../assets/img/perfilconfigautonomo.svg'
import { Link } from 'react-router-dom'
import InfoPessoalR from '../../../../assets/img/InfoRede.svg'
import ProdutosRed from '../../../../assets/img/ProdutosRed.svg'
import SegurancaRed from '../../../../assets/img/SegRed.svg'



function ConfigNavAutonomo() {
    return (
        <main className='ConfigNavAutonomo'>
            <div className="introConfigAutonomo">
                <div className="txtConfigAutonomo">
                    <img src={Perfil} alt="usuario" className='IconRedC' />
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
            <br />
            <nav className="navConfigAutonomo">
                <Link to='/InfoPessoalAutonomo'><img src={InfoPessoalR} alt='Icone' />  Informações Pessoais</Link>
                <Link to='/ContratosAutonomo'><img src={ProdutosRed} alt='Icone' />  Produtos</Link>
                <Link to='/SegurancaAutonomo'><img src={SegurancaRed} alt='Icone' /> Segurança</Link>
            </nav>
        </main>
    );
}

export default ConfigNavAutonomo;