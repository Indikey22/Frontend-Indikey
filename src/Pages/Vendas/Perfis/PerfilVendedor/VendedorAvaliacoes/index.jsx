import './styles.css';
import MenuVendedor from '../../../../../components/Navs/MenuVendedor/index';
import Perfil from '../../../../../assets/img/perfilvendedor.svg'
import Estrelas from '../../../../../assets/img/estrelas.svg'
import Excelente from '../../../../../assets/img/excelente.svg'
import Bom from '../../../../../assets/img/bom.svg'
import Regular from '../../../../../assets/img/regular.svg'
import Ruim from '../../../../../assets/img/ruim.svg'


function VendedorAvaliacoes() {
    return (
        <>
            <MenuVendedor />

            <div className='VendedorAvaliacoes'>

                <section className='ComentariosAvaliacoes'>
                    <div className='ComentarioUser'>
                        <div className='InfoVendedor'>
                            <img src={Perfil} alt='Foto de Perfil' className='IconPerfil' />
                            <div className='UserAvaliacao'>
                                <h3>Antônio Superbi</h3>
                                <img src={Estrelas} alt='Estrelas de Avaliações' />
                            </div>
                        </div>
                        <div className='ComentarioAva'>
                            <span>
                                Antonio é um profissional incrível! Super atencioso e capacitado durante seus serviços, me poupou muita dor de cabeça para organizar o evento de minha empresa.
                            </span>
                        </div>
                    </div>

                    <div className='ComentarioUser'>
                        <div className='InfoVendedor'>
                            <img src={Perfil} alt='Foto de Perfil' className='IconPerfil' />
                            <div className='UserAvaliacao'>
                                <h3>Antônio Superbi</h3>
                                <img src={Estrelas} alt='Estrelas de Avaliações' />
                            </div>
                        </div>
                        <div className='ComentarioAva'>
                            <span>
                            Quero agradecer o profissionalismo na condução dos trabalhos, o serviço foi de qualidade e super cortez, a pontualidade e a eficiência também merecem ser registrados. Com certeza voltarei a contratar seus serviços.
                            </span>
                        </div>
                    </div>

                    <div className='ComentarioUser'>
                        <div className='InfoVendedor'>
                            <img src={Perfil} alt='Foto de Perfil' className='IconPerfil' />
                            <div className='UserAvaliacao'>
                                <h3>Antônio Superbi</h3>
                                <img src={Estrelas} alt='Estrelas de Avaliações' />
                            </div>
                        </div>
                        <div className='ComentarioAva'>
                            <span>
                            Um profissional incrível, dinâmico e moderna, que entrega o prometido, desde o primeiro momento senti total confiança e segurança no Antonio, que me auxiliou não só no que eu pedi, mas me oferecendo um além, indico!
                            </span>
                        </div>
                    </div>

                </section>

                <section className='DadosAvaliacoes'>
                <h4>Avaliação dos clientes</h4>
                <div className='InfoAvaliacao'>
                    <img src={Estrelas} alt='Estrelas' className='EstrelasAvaliacao' /> <span>4,6</span>
                </div>
                <span>Classificação geral de 100 avaliações de clientes</span>
                <br /> <br />

                <div className='Avaliacao'>
                    <span>Excelente</span>
                    <img src={Excelente} alt='Avaliacao Excelente' className='PorcentagemAvaliacao' />
                    <span>50</span>
                </div>
        <br />
                <div className='Avaliacao'>
                    <span>Bom</span>
                    <img src={Bom} alt='Avaliacao Bom' className='PorcentagemAvaliacao' />
                    <span>30</span>
                </div>
                <br />
                <div className='Avaliacao'>
                    <span>Regular</span>
                    <img src={Regular} alt='Avaliacao Regular' className='PorcentagemAvaliacao' />
                    <span>15</span>
                </div>
                <br />
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

            </div>
        </>
    );
}

export default VendedorAvaliacoes;