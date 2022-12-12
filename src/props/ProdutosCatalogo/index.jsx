import './styles.css'

function ProdutosCatalogo(props){
    return(
        <div className="conteudoProduto">
            <div className="atributosProduto">
                <img src={props.fotoProduto} alt="props para foto de produtos" />
                <h2 className="tituloProdutoCatalogo">{props.nomeProduto}</h2>
                <p>{props.valorProduto}</p>
            </div> 
        </div>
    )
}
export default ProdutosCatalogo