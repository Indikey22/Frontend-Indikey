import './styles.css';
import MenuVendedor from '../../../../../components/Navs/MenuVendedor/index';
import HeaderEcommerce from '../../../../../components/Headers/HeaderEcommerce/index';
import ProdutosServicosVendas from '../../../../../components/ProdutosServicosVendas';

function VendedorProdutos() {
    return (
        <>
            <HeaderEcommerce />
            <MenuVendedor />
            <h4>Conheça outros produtos do Antonio</h4>
            <div className="produtosServicosVendas">
                <ProdutosServicosVendas />
                <ProdutosServicosVendas />
                <ProdutosServicosVendas />
            </div>
        </>
    );
}

export default VendedorProdutos;