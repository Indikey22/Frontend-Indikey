import './styles.css';
import HeaderEcommerce from '../../../../../components/Headers/HeaderEcommerce';
import MenuCliente from '../../../../../components/Navs/MenuCliente/index';

function ClienteInfoPessoal(){
    return(
        <>
       <HeaderEcommerce />

<div className='InfoPessoal'>

    <MenuCliente />

    <main className='FormularioPessoal'>

        <section className='FormularioEsquerda'>
            <form action=''>
                <label>Nome </label> <br />
                <input type='text' required='required' />

                <br /> <br />

                <label>CPF </label> <br />
                <input type='number' required='required' />

                <br /> <br />

                <label>Telefone </label> <br />
                <input type='number' required='required' />
            </form>
        </section>

        <section className='FormularioDireita'>

            <form action=''>
                <label>CEP </label> <br />
                <input type='number' required='required' />

                <br /> <br />

                <div className='EnderecoPessoal'>
                    <label>Cidade ㅤ </label>
                    <label> ㅤ UF ㅤ </label>
                </div>
                <div className='EnderecoPessoal'>
                    <input type='text' required='required' />
                    <input className='UFPessoal' type='text' required='required' />
                </div>

                <br /> <br />

                <label>Lougradouro </label> <br />
                <input type='text' required='required' />
            </form>
        </section>
    </main>
</div>
        </>
    );
}

export default ClienteInfoPessoal;