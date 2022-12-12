import './styles.css';
import { Link } from 'react-router-dom';

function ProdutosServicosVendas() {
    return (
            <main className="cardprodvendas">
                <div className="imageprodserv">
                    <img src="" alt="" />
                </div>
                <div className="txtprodserv">
                    <h5>Produto 01</h5>
                    <h5>300,00</h5>
                </div>
                <div className="btnprodserv">
                    <button>Adicionar ao carrinho</button>
                </div>
            </main>
    );
}

export default ProdutosServicosVendas;