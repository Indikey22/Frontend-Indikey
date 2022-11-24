import './styles.css';
import { Link } from 'react-router-dom';

function ConfigNavEmpresa(){
    return(
        <>
        <Link to='/InfoPessoalEmpresa'>Informações Pessoais</Link>
        <Link to='/ProdutosEmpresa'>Produtos</Link>
        <Link to='/SegurancaEmpresa'>Segurança</Link>
        </>
    );
}

export default ConfigNavEmpresa;