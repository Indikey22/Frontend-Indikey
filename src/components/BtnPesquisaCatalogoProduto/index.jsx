import Lupa from '../../assets/img/lupa.svg'

function BtnPesquisaCatalogoProduto(){
    return(
        <div className="BtnPesquisa-TituloCatalogoProduto">
            <h2 className="tituloProdutosCatalogo">Catalogo</h2>
            <div className="pesquisarCatalogoProduto">
                <img src={Lupa} alt="Pesquisar" />
                <input type="text" className='pesquisarCatalogoProduto-input' id='pesquisarCatalogoProduto-input' placeholder='Pesquisar' maxLength="200" />
            </div>
        </div>
       
    )
}
export default BtnPesquisaCatalogoProduto