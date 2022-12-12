import './styles.css';
import { Link } from 'react-router-dom';
import Header from '../../../../../components/Headers/HeaderEcommerce/index';
import Carousel from 'react-bootstrap/Carousel';
import Catalogo from '../../VendasCatalogo/CatalogoHome/index';
import Footer from '../../../../../components/Footer/index';
import Confeiteira from '../../../../../assets/img/slideconfeiteira.svg';

function VendasTopo() {
    return (
        <>
         <Header />
            <div id="conteudoSobreTopo" className='vendasHome'>
                <section id="sobreTopoDireita" className="TopoVendas">
                    <h1>Contrate o profissonal perfeito para você</h1>
                    <p>Aqui você tem os melhores prestadores de serviço com a melhor qualidade.</p>
                </section>
                <article className="CarroselSobreTopo" id="carroselVendas">
                    <div id="SliderTopo">
                        <Link to='/Freelancer'>
                            <Carousel id="carroselTopoSobre">
                                <Carousel.Item className="itemCarrosel" interval={1000}>
                                    <img
                                        className="d-block w-60"
                                        src={Confeiteira}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="itemCarrosel" interval={1000}>
                                    <img
                                        className="d-block w-60"
                                        src={Confeiteira}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="itemCarrosel" interval={1000}>
                                    <img
                                        className="d-block w-60"
                                        src={Confeiteira}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="itemCarrosel" interval={1000}>
                                    <img
                                        className="d-block w-60"
                                        src={Confeiteira}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="itemCarrosel" interval={1000}>
                                    <img
                                        className="d-block w-60"
                                        src={Confeiteira}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Link>
                    </div>
                </article>
            </div>
            <Catalogo />
            <Footer />
        </>
    );
}

export default VendasTopo;