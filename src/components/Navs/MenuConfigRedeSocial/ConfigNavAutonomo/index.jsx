import './styles.css';
import { Link } from 'react-router-dom';

function ConfigNavAutonomo() {
    return (
        <main className='intoConfigAutonomo'>
            <div className="fotousuario">
                <img src="" alt="usuario" />
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