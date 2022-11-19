import './styles.css'
import slideImg1 from '../../../assets/img/slideSobreImg1.svg'
import slideImg2 from '../../../assets/img/slideSobreImg2.svg'
import slideImg3 from '../../../assets/img/slideSobreImg3.svg'
import slideImg4 from '../../../assets/img/slideSobreImg4.svg'
import slideImg5 from '../../../assets/img/slideSobreImg5.svg'
import slideImg6 from '../../../assets/img/slideSobreImg6.svg'
import slideImg7 from '../../../assets/img/slideSobreImg7.svg'
import slideImg8 from '../../../assets/img/slideSobreImg8.svg'

import Carousel from 'react-bootstrap/Carousel';

import SobreNosMeio from '../SobreNosMeio/index'


function SobreNosTopo(){
    return(
        <>
            <div id="conteudoSobreTopo">
                 <section id="sobreTopoDireita">
                    <h1>Conheça nossa equipe</h1>
                    <p>Conheça os membros que fizeram esse Projeto acontecer</p>
                </section>
                <article className="CarroselSobreTopo">   
                    <div id="SliderTopo">
                        <Carousel id="carroselTopoSobre">
                            <Carousel.Item class="itemCarrosel" interval={1000}>
                                <img
                                className="d-block w-60"
                                src={slideImg1}
                                alt="First slide"
                                />                            
                            </Carousel.Item>
                            <Carousel.Item class="itemCarrosel" interval={1000}>
                                <img
                                className="d-block w-60"
                                src={slideImg2}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item class="itemCarrosel" interval={1000}>
                                <img
                                className="d-block w-60"
                                src={slideImg3}
                                alt="Third slide"
                                />                            
                            </Carousel.Item>
                            <Carousel.Item class="itemCarrosel" interval={1000}>
                                <img
                                className="d-block w-60"
                                src={slideImg4}
                                alt="Third slide"
                                />                            
                            </Carousel.Item>
                            <Carousel.Item class="itemCarrosel" interval={1000}>
                                <img
                                className="d-block w-60"
                                src={slideImg5}
                                alt="Third slide"
                                />                            
                            </Carousel.Item>
                            <Carousel.Item class="itemCarrosel" interval={1000}>
                                <img
                                className="d-block w-60"
                                src={slideImg6}
                                alt="Third slide"
                                />                            
                            </Carousel.Item>
                            <Carousel.Item class="itemCarrosel" interval={1000}>
                                <img
                                className="d-block w-60"
                                src={slideImg7}
                                alt="Third slide"
                                />                            
                            </Carousel.Item>
                            <Carousel.Item class="itemCarrosel" interval={1000}>
                                <img
                                className="d-block w-60"
                                src={slideImg8}
                                alt="Third slide"
                                />                            
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </article>
            </div>
            <SobreNosMeio />
        </>
    )
}
export default SobreNosTopo;