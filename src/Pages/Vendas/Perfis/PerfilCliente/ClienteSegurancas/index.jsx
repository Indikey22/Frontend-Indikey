import './styles.css';
import HeaderEcommerce from '../../../../../components/Headers/HeaderEcommerce';
import MenuCliente from '../../../../../components/Navs/MenuCliente/index';

function ClienteSenhas() {
    return (
        <>
            <HeaderEcommerce />

            <div className='ClienteSeguranca'>
                <MenuCliente />

                <main className='FormsSeguranca'>

                    <forms className='FormsClienteS'>
                        <label>E-mail</label> <br />
                        <input type='email' required='required' placeholder=' antonio@gmail.com' />
                        <br /> <br />

                        <label>Senha atual</label> <br />
                        <input type='password' required='required' placeholder=' **********' />
                        <br /> <br />

                        <button className='SalvarSenha'>Alterar Senha</button>
                    </forms>

                </main>

            </div>
        </>
    );
}

export default ClienteSenhas;