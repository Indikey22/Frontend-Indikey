import './styles.css';

function Servicos() {
    return (
        <>
            <main className='HomeLojas'>
                <div className='CampoLojas'>
                    <h1 className='TituloLojas'>Compre <span className='Azul'>produtos</span> nas <span className='Amarelo'>melhores</span> lojas</h1>
                </div>
                <div className='ConteudoLojas'>
                    <section className='Slide'>
                        <div className='Slides'>
                            <div className='InfoSlides'>
                                <h3 className='Floricultura'>Floricultura</h3>
                                <br /><br />
                                <h4>Maria Flores</h4>
                            </div>
                            <div className='ImageSlides'>
                            </div>
                        </div>
                    </section>

                    <section className='Texto'>
                        <h1 className='TituloNumero'><span className='Azul'>+5120 </span><i class="fa-solid fa-store"></i> Empresas</h1>
                        <div className='TextoLoja'>
                            <span>
                                Na plataforma indikey, já existem mais de 5 mil empresas cadastradas, que
                                começaram sua jornada conosco, e não se arrependeram
                            </span>
                        </div>
                    </section>
                </div>
            </main>
            <main className='HomeServico'>
                <div className='CampoServicos'>
                    <h1 className='TituloServicos'><span className='Azul'>Contrate</span> os <span className='Amarelo'>melhores</span> serviços</h1>
                </div>

                <div className='ConteudoServicos'>
                    <section className='Texto2'>
                        <h1 className='TituloNumero2'><span className='Azul'>+230 </span><i className="fa-solid fa-screwdriver-wrench"></i> Serviços</h1>
                        <div className='TextoServico'>
                            <span>
                                Prestadores de serviços autônomoes também tem seu lugar no indikey, atualmente contamos com mais de 200 trabalhadores, e você pode ser o próximo
                            </span>
                        </div>
                    </section>

                    <section className='Slide'>
                        <div className='Slides'>
                            <div className='InfoSlides'>
                                <h3 className='Fotografo'>Serviços</h3>
                                <br /> <br />
                                <h4>Fotógrafo</h4>
                            </div>
                            <div className='ImageSlides'>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Servicos;