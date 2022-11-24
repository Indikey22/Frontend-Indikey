import './styles.css';
import { Link } from 'react-router-dom';

function Pedidos(){
    return(
        <>
        Pedidos
        <Link to='/Identificacoes'> Ir para a segunda etapa de compra</Link>
        </>
    );
}

export default Pedidos;