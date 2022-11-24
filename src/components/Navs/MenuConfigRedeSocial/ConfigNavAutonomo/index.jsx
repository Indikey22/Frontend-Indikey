import './styles.css';
import { Link } from 'react-router-dom';

function ConfigNavAutonomo(){
    return(
        <>
        <Link to='/InfoPessoalAutonomo'>Informações Pessoais</Link>
        <Link to='/ContratosAutonomo'>Contratos</Link>
        <Link to='/SegurancaAutonomo'>Segurança</Link>
        </>
    );
}

export default ConfigNavAutonomo;