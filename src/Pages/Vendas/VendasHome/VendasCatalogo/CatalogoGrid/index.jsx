import './styles.css';
import { Link } from 'react-router-dom';
import ProdutosCatalogo from '../../../../../props/ProdutosCatalogo';
import BtnPesquisaCatalogoProduto from '../../../../../components/BtnPesquisaCatalogoProduto';
import HeaderEcommerce from '../../../../../components/Headers/HeaderEcommerce';

function CatalogoGrid(){
    return(
        <>
        <HeaderEcommerce />
         <ProdutosCatalogo 
            fotoProduto="https://via.placeholder.com/150" 
            nomeProduto="nome produto" 
            valorProduto="R$ 100,00"/>
        </>
    );
}

export default CatalogoGrid;

{/* <Link to='/CatalogoItem'>para cada item, que esteja em vendas</Link> */}
