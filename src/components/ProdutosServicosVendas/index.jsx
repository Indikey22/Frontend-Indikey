import './styles.css';
import { Link } from 'react-router-dom';

function ProdutosServicosVendas() {
    return (
            <main className="produtosservicosvendas">
                <div className="produtoimage">
                    <img src="" alt="" />
                </div>
                <div className="txtprodutoservicosvendas">
                    <h5>Produto 01</h5>
                    <h5>300,00</h5>
                </div>
                <div className="btnprodutoservicosvendas">
                    <Link to='/'><button>Adicionar ao carrinho</button></Link>
                </div>
            </main>
    );
}

export default ProdutosServicosVendas;