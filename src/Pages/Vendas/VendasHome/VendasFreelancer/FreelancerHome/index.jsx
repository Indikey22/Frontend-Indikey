import './styles.css';
import Header from '../../../../Header/HeaderEcommerce/index';
import Catalogo from '../../VendasCatalogo/CatalogoHome/index';
import Carrinho from '../../VendasCarrinho/index';

function VendasTopo(){
    return(
        <>
         <Header />
         <main>
            carrosel aqui
         </main>
         <Catalogo />
         <Carrinho />
        </>
    );
}

export default VendasTopo;