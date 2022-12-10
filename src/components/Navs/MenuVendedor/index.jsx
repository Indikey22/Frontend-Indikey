import './styles.css';
import { Link } from 'react-router-dom';
import Foto from '../../../assets/img/perfilvendedor.svg';

function MenuVendedor() {
    return (
        <>
            <main className='PerfilVendas'>
                <div className="perfilTopo">
                        <img src={Foto} alt="" className='vendedor' />
                    <div className="txtVendas">
                        <h1>Antonio Superbi</h1>
                        <h5>Organizador de Eventos</h5>
                    </div>
                </div>
                <div className="btnContrato">
                    <Link to='/Contratos'><button>Contratar</button></Link>
                </div>
            </main>
            <nav className="navegacaovendas">
                <ul>
                    <Link to='/VendedorAvaliacoes'><li>Avaliações</li></Link>
                    <Link to='/VendedorIndicacoes'><li>Indicações</li></Link>
                    <Link to='/VendedorProdutos'><li>Produtos</li></Link>
                </ul>
            </nav>
        </>
    );
}

export default MenuVendedor;