import './styles.css'
import { Link } from 'react-router-dom';

function Identificacoes(){
    return(
        <>
        Identificações
        <Link to='/Pagamentos'> Ir para a segunda etapa de compra</Link>
        </>
    );
}

export default Identificacoes;