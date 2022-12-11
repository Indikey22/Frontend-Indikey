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
            <aside className="gridProdutos">
                <div className="txtgridProdutos">
                    <div className='underline'></div>
                    <h3>Catálogo</h3>
                </div>
                <div className="cardsgridProdutos">
                    <Link to='/CatalogoGrid'>
                        <div className="card">
                            <img src={Flores} alt="" />
                        </div>
                    </Link>
                    <Link to='/CatalogoGrid'>
                        <div className="cardProdutos">
                            <img src={Fotografos} alt="" />
                        </div>
                    </Link>
                    <Link to='/CatalogoGrid'>
                        <div className="cardProdutos">
                            <img src={Decoracoes} alt="" />
                        </div>
                    </Link>
                    <Link to='/CatalogoGrid'>
                        <div className="cardProdutos">
                            <img src={Bebidas} alt="" />
                        </div>
                    </Link>
                </div>
                    <Link to='/CatalogoGrid'>
                        <div className="cardeProdutos">
                            <img src={Vestidos} alt="" />
                        </div>
                    </Link>
            </aside>
        </>
    );
}

export default VendasCatalogo;