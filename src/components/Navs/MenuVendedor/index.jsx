import './styles.css';
import { Link } from 'react-router-dom';

function MenuVendedor(){
    return(
        <>
        <Link to='/VendedorAvaliacoes'>Avaliações</Link>
        <Link to='/VendedorIndicacoes'>Indicações</Link>
        <Link to='/VendedorProdutos'>Produtos</Link>
        </>
    );
}

export default MenuVendedor;