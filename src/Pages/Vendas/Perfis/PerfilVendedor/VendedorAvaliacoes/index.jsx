import './styles.css';
import MenuVendedor from '../../../../../components/Navs/MenuVendedor/index';
import HeaderEcommerce from '../../../../../components/Headers/HeaderEcommerce/index';
import Estrelas from '../../../../../assets/img/estrelasava.svg'
import Execelente from '../../../../../assets/img/excelente.svg'
import Bom from '../../../../../assets/img/bom.svg'
import Regular from '../../../../../assets/img/regular.svg'
import Ruim from '../../../../../assets/img/ruim.svg'
import Perfil1 from '../../../../../assets/img/perfil1.svg'
import Perfil2 from '../../../../../assets/img/perfil2.svg'
import Perfil4 from '../../../../../assets/img/perfil4.svg'


function VendedorAvaliacoes() {
    return (
        <>
            <HeaderEcommerce />
            <MenuVendedor />
            <main className='VendedorAvaliacao'>
            <section className='CampoAvaliacao'>

                <div className='ComentarioAvaliacao'>
                    <div className='PerfilUser'>
                        <img src={Perfil1} alt='Foto de perfil' className='IconUser' />

                        <div className='AvaliacaoUser'>
                            <h3>Carlos Ferraz</h3>
                            <img src={Estrelas} alt='Estrelas' className='EstrelasAvaliacao' /> <span>4,9</span>
                        </div>
                    </div>

                    <br />
                    <span>Antonio é um profissional incrível! Super atencioso e capacitado durante seus serviços, me poupou muita dor de cabeça para organizar o evento de minha empresa.</span>
                </div>

                <div className='ComentarioAvaliacao'>
                    <div className='PerfilUser'>
                        <img src={Perfil2} alt='Foto de perfil' className='IconUser' />

                        <div className='AvaliacaoUser'>
                            <h3>Mariana Lima</h3>
                            <img src={Estrelas} alt='Estrelas' className='EstrelasAvaliacao' /> <span>4,9</span>
                        </div>
                    </div>
                    <br />
                    <span>Quero agradecer o profissionalismo na condução dos trabalhos. O Serviço foi de qualidade e super cortez. A pontualidade e a eficiência também merecem ser registrados. Com certeza voltarei a contratar seus serviços.
                    </span>
                </div>

            </section>

            <section className='DadosAvaliacao'>
                <h4 className='TitAvaliacaoD'>Avaliação dos clientes</h4>
                <div className='InfoAvaliacao'>
                    <img src={Estrelas} alt='Estrelas' className='EstrelasAvaliacao' /> <span>4,6</span>
                </div>
                <span>Classificação geral de 100 avaliações de clientes</span>
                <br /> <br />

                <div className='Avaliacao'>
                    <span>Excelente</span>
                    <img src={Execelente} alt='Avaliacao Excelente' className='PorcentagemAvaliacao' />
                    <span>50</span>
                </div>

                <div className='Avaliacao'>
                    <span>Bom</span>
                    <img src={Bom} alt='Avaliacao Bom' className='PorcentagemAvaliacao' />
                    <span>30</span>
                </div>

                <div className='Avaliacao'>
                    <span>Regular</span>
                    <img src={Regular} alt='Avaliacao Regular' className='PorcentagemAvaliacao' />
                    <span>15</span>
                </div>

                <div className='Avaliacao'>
                    <span>Ruim</span>
                    <img src={Ruim} alt='Avaliacao Ruim' className='PorcentagemAvaliacao' />
                    <span>05</span>
                </div>
                <br /> <br />
                
                <div className='InformacoesLoja'>
                <span>590 vendas realizadas</span>
                {/* <br /> */}
                <span>38 Produtos na plataforma</span>
                </div>
            </section>
        </main>

           
        </>
    );
}

export default VendedorAvaliacoes;