import './styles.css';
import { Link } from 'react-router-dom';

function MenuCliente(){
    return(
        <>
        <Link to='/ClienteInfoPessoal'>Informações Pessoais</Link>
        <Link to='/ClienteCartoes'>Cartões</Link>
        <Link to='/ClienteSegurancas'>Segurança</Link>
        <Link to='/ClienteSuporte'>Suporte</Link>
        <Link to='/ClienteAvaliacoes'>Avaliações</Link>
        </>
    );
}

export default MenuCliente;