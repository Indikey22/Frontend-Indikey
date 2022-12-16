import './styles.css';
import { Link } from 'react-router-dom';
import Foto from '../../../assets/img/perfilvendedor.svg';
import Overal from '../../../assets/img/overal.svg';
import Conexoes from '../../../assets/img/conexoes.svg';
import Produtos from '../../../assets/img/produtos.svg';

function MenuVendedor() {
    return (
        <>
            <main className='PerfilVendas'>
                <div className="perfilTopo">
                        <img src={Foto} alt="" className='vendedor' />
                    <div className="txtVendas">
                        <h1>Antônio Superbi</h1>
                        <h5>Organizador de Eventos</h5>
                    </div>
                </div>
                <div className="btnContrato">
                    <Link to='/Contratos'><button>Contratar</button></Link>
                </div>
            </main>
            <nav className="navegacaovendas">
                <ul>
                    <Link to='/VendedorAvaliacoes'><img src={Overal} alt="icone de avaliações" /><span className='sessaoVendedor'>ﾠAvaliações</span></Link>
                    <Link to='/VendedorIndicacoes'><img src={Conexoes} alt="icone de indicações" /><span className='sessaoVendedor'>ﾠIndicações</span></Link>
                    <Link to='/VendedorProdutos'><img src={Produtos} alt="icone de produtos" /><span className='sessaoVendedor'>ﾠProdutos</span></Link>
                    <span className='underline'></span>
                </ul>
            </nav>
        </>
    );
}

export default MenuVendedor;