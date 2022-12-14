import { Link } from 'react-router-dom';
import './styles.css';
import Flores from "../../../../../assets/img/flores.svg";
import Fotografos from "../../../../../assets/img/fotografos.svg";
import Bebidas from "../../../../../assets/img/barmans.svg";
import Decoracoes from "../../../../../assets/img/decorativos.svg";
import Vestidos from "../../../../../assets/img/vestidos.svg";

function VendasCatalogo() {
    return (
        <>
            <aside className="gridProdutosVendas">
                <div className="txtgridProdutos">
                    <div className='underline'></div>
                    <h3>Catálogo</h3>
                </div>
                <div className="gridProdutos">
                    <div className="cardsProdutos">
                        <Link to="/CatalogoGrid">
                            <img src={Decoracoes} alt="" className='imageProduto'/>
                        </Link>
                        <Link to="/CatalogoGrid">
                            <img src={Decoracoes} alt="" className='imageProduto'/>
                        </Link>
                        <Link to="/CatalogoGrid">
                            <img src={Decoracoes} alt="" className='imageProduto'/>
                        </Link>
                        <Link to="/CatalogoGrid">
                            <img src={Decoracoes} alt="" className='imageProduto' id="bebida"/>
                        </Link>
                    </div>
                    <div id="cardProdutos">
                        <Link to="/CatalogoGrid">
                            <img src={Vestidos} alt="" />
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default VendasCatalogo;