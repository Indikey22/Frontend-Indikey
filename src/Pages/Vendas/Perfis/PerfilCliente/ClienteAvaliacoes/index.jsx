import './styles.css';
import HeaderEcommerce from '../../../../../components/Headers/HeaderEcommerce';
import MenuCliente from '../../../../../components/Navs/MenuCliente';
import Estrelas from '../../../../../assets/img/estrelasava.svg'

function ClienteAvaliacoes(){
    return(
        <>
         <HeaderEcommerce />
            <div className='ClienteAvaliacoes'>
                <MenuCliente />
                <main className='FormsAvaliacoes'>
                    <h2>Avalie aqui</h2>
                    <forms className='PaginaAvaliacoesC'>
                        <labe>Nome completo</labe> <br />
                        <input type='text' required='requised' />
                        <br /> <br />

                        <label>Mensagem</label> <br />
                        <input className='TextoAvaliacao' type='text' required='required' />
                        <br /> <br />

                        <img src={Estrelas} alt='Estrelas' />
                        <br /> <br />

                        <button className='EnviarAvaliacoes'>Enviar</button>
                    </forms>
                </main>
            </div>
        </>
    );
}

export default ClienteAvaliacoes;