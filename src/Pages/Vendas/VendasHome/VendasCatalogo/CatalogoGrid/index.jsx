import './styles.css';
import { Link } from 'react-router-dom';
import ProdutosCatalogo from '../../../../../props/ProdutosCatalogo';
import BtnPesquisaCatalogoProduto from '../../../../../components/BtnPesquisaCatalogoProduto';

function CatalogoGrid(){
    return(
        <>
        <BtnPesquisaCatalogoProduto />


         
         <Link to='/CatalogoItem'>para cada item, que esteja em vendas</Link>
         <div className="containerProdutos">

         </div>
         <ProdutosCatalogo 
            fotoProduto="https://via.placeholder.com/150" 
            nomeProduto="nome produto" 
            valorProduto="R$ 100,00"/>
        </>
    );
}

export default CatalogoGrid;