import { Link } from 'react-router-dom';
import './styles.css';
import Flores from "../../../../../assets/img/flores.svg";
import Fotografos from "../../../../../assets/img/fotografos.svg";
import Bebidas from "../../../../../assets/img/barmans.svg";
import Decoracoes from "../../../../../assets/img/festas.svg";
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
                            <img src={Flores} alt="" className='imageProduto'/>
                        </Link>
                        <Link to="/CatalogoGrid">
                            <img src={Fotografos} alt="" className='imageProduto'/>
                        </Link>
                        <Link to="/CatalogoGrid">
                            <img src={Decoracoes} alt="" className='imageProduto'/>
                        </Link>
                        <Link to="/CatalogoGrid">
                            <img src={Bebidas} alt="" className='imageProduto'/>
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