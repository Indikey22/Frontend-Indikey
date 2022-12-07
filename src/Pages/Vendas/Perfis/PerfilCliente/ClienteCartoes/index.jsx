import './styles.css';
import HeaderEcommerce from '../../../../../components/Headers/HeaderEcommerce';
import MenuCliente from '../../../../../components/Navs/MenuCliente';

function ClienteCartoes() {
    return (
        <>
            <HeaderEcommerce />

            <div className='ClientesCartoes'>
                <MenuCliente />

                <main className='CartoesForms'>

                    <section className='FormularioEsquerda'>
                        <form action=''>
                            <label>Número do cartão </label> <br />
                            <input type='number' required='required' />

                            <br /> <br />

                            <label>Nome impresso </label> <br />
                            <input type='number' required='required' />

                            <br /> <br />

                            <label>Limite de parcelas </label> <br />
                            <input type='number' required='required' />
                        </form>
                    </section>

                    <section className='FormularioDireita'>

                        <form action=''>
                            <label>Validade </label> <br />
                            <input type='number' required='required' placeholder='MM/AAAA' />

                            <br /> <br />

                            <label>CVV </label> <br />
                            <input type='text' required='required' />
                        </form>
                    </section>
                </main>

            </div>
        </>
    );
}

export default ClienteCartoes;