import './styles.css';
import Celular from '../../../assets/img/celular.png'
import Elipse from '../../../assets/img/Ellipse6.png'
import google from '../../../assets/img/play.svg'
import apple from '../../../assets/img/apple.svg'

function Mobile() {
    return (
        <>
            <div>
                <div className='app'>
                    <img className='circulo' src={Elipse} alt="" />
                    <img className='celular' src={Celular} alt="" />
                </div>
                <div className="mobile">
                    <h1 className='titulo-aplicativo'> <span className="azul"> Faça </span> o <span className="amarelo"> download </span> do nosso <span className="azul"> aplicativo </span> </h1>
                    <p className='textinho'> O Indikey também é mobile. Faça o download agora e agarre as oportunidades.</p>
                    <div className='botao'>
                        <imput type='button' className='google' >
                            <img src={google} alt='img-google' />
                            <span>Google Play</span>
                        </imput>
                        <imput type='buton' className='apple' >
                            <img src={apple} alt='img-apple' />
                            <span>Apple Store</span>
                        </imput>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mobile;