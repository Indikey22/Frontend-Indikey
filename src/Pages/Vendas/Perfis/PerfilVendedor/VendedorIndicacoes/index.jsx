import './styles.css';
import MenuVendedor from '../../../../../components/Navs/MenuVendedor/index';
import HeaderEcommerce from '../../../../../components/Headers/HeaderEcommerce/index';
import Ind1 from '../../../../../assets/img/iconind1.svg'
import Ind2 from '../../../../../assets/img/iconind2.svg'
import Ind3 from '../../../../../assets/img/iconind3.svg'
import Ind4 from '../../../../../assets/img/iconind4.svg'
import Ind5 from '../../../../../assets/img/iconind5.svg'



function VendedorIndicacoes() {
    return (
        <>
            <HeaderEcommerce />
            <MenuVendedor />
            <main className='VendedorIndicacoes'>

            <h4 className='titInd'>
                Conheça as principais conexões de Antônio
            </h4>
<br />
            <div className='IndicacoesAntonio'>

                <div className='CampoIndicacao'>
                    <div className='DadosIndicacao'>
                        <img src={Ind1} alt='Icon do Usúario' className='IconUser' />
                        <div className='InfoIndicacao'>
                            <h4>Roberto Luiz</h4>
                            <h5>Fotógrafo</h5>
                        </div>
                        <button className='BotaoSaiba'>Saiba Mais</button>
                    </div>
                </div>

                <div className='CampoIndicacao'>
                    <div className='DadosIndicacao'>
                        <img src={Ind2} alt='Icon do Usúario' className='IconUser' />
                        <div className='InfoIndicacao'>
                            <h4>Jorge Ferreira</h4>
                            <h5>Decoração</h5>
                        </div>
                        <button className='BotaoSaiba'>Saiba Mais</button>
                    </div>
                </div>

                <div className='CampoIndicacao'>
                    <div className='DadosIndicacao'>
                        <img src={Ind3} alt='Icon do Usúario' className='IconUser' />
                        <div className='InfoIndicacao'>
                            <h4>Maria Angêlica</h4>
                            <h5>Confeiteira</h5>
                        </div>
                        <button className='BotaoSaiba'>Saiba Mais</button>
                    </div>
                </div>

                <div className='CampoIndicacao'>
                    <div className='DadosIndicacao'>
                        <img src={Ind4} alt='Icon do Usúario' className='IconUser' />
                        <div className='InfoIndicacao'>
                            <h4>Lourenço Almeida</h4>
                            <h5>Segurança</h5>
                        </div>
                        <button className='BotaoSaiba'>Saiba Mais</button>
                    </div>
                </div>

                <div className='CampoIndicacao'>
                    <div className='DadosIndicacao'>
                        <img src={Ind5} alt='Icon do Usúario' className='IconUser' />
                        <div className='InfoIndicacao'>
                            <h4>Olivia Fátima</h4>
                            <h5>Animadora de Festas</h5>
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