import './styles.css';
import HeaderEcommerce from '../../../../../components/Headers/HeaderEcommerce';
import MenuCliente from '../../../../../components/Navs/MenuCliente/index';

function ClienteSuporte() {
    return (
        <>
            <HeaderEcommerce />

            <div className='ClienteSuporte'>
                <MenuCliente />

                <div className='SuporteCliente'>

                    <h2>Precisa de ajuda?</h2>

                    <div className='PaginaSuporte'>
                        <section className='DuvidasFrequentes'>

                            <h3>Dúvidas Frequentes</h3>



                        </section>

                        <section className='FaleConosco'>
                            <h3>Fale Conosco</h3>
                            <br />
                            <div className='FormsSuporte'>
                                <forms>
                                    <label>Nome completo</label> <br />
                                    <input type='text' required='requised' />
                                    <br /> <br />

                                    <label>Descrição</label> <br />
                                    <input className='DescricaoSuporte' type='text' required='requised' />
                                    <br /> <br />

                                    <button className='EnviarSuporte'>Enviar</button>
                                </forms>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClienteSuporte;