import './styles.css';
import { Link } from 'react-router-dom';

function CatalogoItem(){
    return(
        <>
        CatalogoItem
        <Link to='/Pedidos'> Ir para a pagina inicial da compra</Link>
        </>
    );
}

export default CatalogoItem;