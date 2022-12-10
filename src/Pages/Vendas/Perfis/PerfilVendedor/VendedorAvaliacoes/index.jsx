import './styles.css';
import MenuVendedor from '../../../../../components/Navs/MenuVendedor/index';
import HeaderEcommerce from '../../../../../components/Headers/HeaderEcommerce/index';
import ComentariosUserVendas from '../../../../../components/ComentariosUserVendas/index';
import AvaliacoesVendasGeral from '../../../../../components/AvaliacoesVendas';

function VendedorAvaliacoes() {
    return (
        <>
            <HeaderEcommerce />
            <MenuVendedor />
            <div className="vendedoravaliacoes">
                <div className="userscomentarios">
                    <ComentariosUserVendas />
                    <ComentariosUserVendas />
                    <ComentariosUserVendas />
                    <ComentariosUserVendas />
                    <ComentariosUserVendas />
                    <ComentariosUserVendas />
                </div>
                <div className='overral'><AvaliacoesVendasGeral /></div>
            </div>
        </>
    );
}

export default VendedorAvaliacoes;