import './styles.css';
import MenuVendedor from '../../../../../components/Navs/MenuVendedor/index';
import Icon from '../../../../../assets/img/perfilvendedor.svg'

function VendedorIndicacoes(){
    return(
        <>
        <MenuVendedor />
       
        <main className='VendedorIndicacoes'>

            <h2 className='TituloIndicacoes'>
                Conheça as principais conexões de Antônio
            </h2>

            <div className='IndicacoesAntonio'>

                <div className='CampoIndicacao'>
                    <div className='DadosIndicacao'>
                        <img src={Icon} alt='Icon do Usúario' className='IconUser' />
                        <div className='InfoIndicacao'>
                            <h4>Antônio Superbi</h4>
                            <h5>Fotografo</h5>
                        </div>
                        <button className='BotaoSaiba'>Saiba Mais</button>
                    </div>
                </div>

                <div className='CampoIndicacao'>
                    <div className='DadosIndicacao'>
                        <img src={Icon} alt='Icon do Usúario' className='IconUser' />
                        <div className='InfoIndicacao'>
                            <h4>Antônio Superbi</h4>
                            <h5>Garçom</h5>
                        </div>
                        <button className='BotaoSaiba'>Saiba Mais</button>
                    </div>
                </div>

                <div className='CampoIndicacao'>
                    <div className='DadosIndicacao'>
                        <img src={Icon} alt='Icon do Usúario' className='IconUser' />
                        <div className='InfoIndicacao'>
                            <h4>Antônio Superbi</h4>
                            <h5>DJ</h5>
                        </div>
                        <button className='BotaoSaiba'>Saiba Mais</button>
                    </div>
                </div>

            </div>
        </main>
        </>
    );
}

export default VendedorIndicacoes;