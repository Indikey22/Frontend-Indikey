import './styles.css';
import MenuVendedor from '../../../../../components/Navs/MenuVendedor/index';

function VendedorProdutos(){
    return(
        <>
        <MenuVendedor />
       
        <main className='VendedorProduto'>
            <h1 className='TituloPagProduto'>Conheça outros produtos de Antônio</h1>
            <div className='SlideItensProduto'>
                <div className='VendasProdutos'>
                    
                    <div className='ImagemVenda'>

                    </div>
                    <h4>Balões de Festa</h4>
                    <h5>100,00</h5>
                    <button className='AdicionarCarrinho'>Adicionar ao carrinho</button>
                </div>

                <div className='VendasProdutos'>
                    <div className='ImagemVenda'>

                    </div>
                    <h4>Balões de Festa</h4>
                    <h5>100,00</h5>
                    <button className='AdicionarCarrinho'>Adicionar ao carrinho</button>
                </div>

                <div className='VendasProdutos'>
                    <div className='ImagemVenda'>

                    </div>
                    <h4>Balões de Festa</h4>
                    <h5>100,00</h5>
                    <button className='AdicionarCarrinho'>Adicionar ao carrinho</button>
                </div>

            </div>
        </main>

        </>
    );
}

export default VendedorProdutos;