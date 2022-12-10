import './styles.css';
import MenuVendedor from '../../../../../components/Navs/MenuVendedor/index';
import HeaderEcommerce from '../../../../../components/Headers/HeaderEcommerce/index';
import ConexoesVendas from '../../../../../components/ConexoesVendas/index';

function VendedorIndicacoes() {
    return (
        <>
            <HeaderEcommerce />
            <MenuVendedor />
            <h4>Conheça as principais conexões do Antonio</h4>
            <div className="conexoesVendasUser">
                <ConexoesVendas  />
                <ConexoesVendas  />
                <ConexoesVendas  />
                <ConexoesVendas  />
            </div>
        </>
    );
}

export default VendedorIndicacoes;