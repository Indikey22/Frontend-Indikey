import './styles.css';
import MenuVendedor from '../../../../../components/Navs/MenuVendedor/index';
import HeaderEcommerce from '../../../../../components/Headers/HeaderEcommerce/index';
import CaixaSom from '../../../../../assets/img/caixasom.svg'
import Projetor from '../../../../../assets/img/projetor.svg'
import Mic from '../../../../../assets/img/microfone.svg'


function VendedorProdutos() {
    return (
        <>
            <HeaderEcommerce />
            <MenuVendedor />
            <main className='VendedorProduto'>
            <h2 className='TituloPagProduto'>Conheça outros produtos de Antônio</h2>
            <div className='SlideItensProduto'>
                <div className='VendasProdutos'>
                    
                    <div className='ImagemVenda'>
                        <img src={CaixaSom} alt='Caixa de som' />
                    </div>
                    <h4>Caixa de Som</h4>
                    <h5>300,00</h5>
                    <button className='AdicionarCarrinho'>Adicionar ao carrinho</button>
                </div>

                <div className='VendasProdutos'>
                    <div className='ImagemVenda'>
                    <img src={Projetor} alt='Projetor' />
                    </div>
                    <h4>Projetor</h4>
                    <h5>270,00</h5>
                    <button className='AdicionarCarrinho'>Adicionar ao carrinho</button>
                </div>

                <div className='VendasProdutos'>
                    <div className='ImagemVenda'>
                    <img src={Mic} alt='Microfone' />
                    </div>
                    <h4>Microfone</h4>
                    <h5>130,00</h5>
                    <button className='AdicionarCarrinho'>Adicionar ao carrinho</button>
                </div>

            </div>
        </main>
        </>
    );
}

export default VendedorProdutos;