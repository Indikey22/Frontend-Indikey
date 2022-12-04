import './styles.css';
import Header from '../../../../../components/Headers/HeaderEcommerce/index';
import Catalogo from '../../VendasCatalogo/CatalogoHome/index';
import Carrinho from '../../VendasCarrinho/index';
import { Link } from 'react-router-dom';

function VendasTopo(){
    return(
        <>
         <Header />
         <main>
            carrosel aqui
            <Link to='/Freelancer'>Ir para filtro de Freelancers</Link>
         </main>
         <Catalogo />
         <Carrinho />
        </>
    );
}

export default VendasTopo;