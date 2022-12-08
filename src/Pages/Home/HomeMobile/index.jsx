import './styles.css';
import Celular from '../../../assets/img/celular.svg'
import Google from '../../../assets/img/play.svg'
import Apple from '../../../assets/img/apple.svg'

function Mobile() {
    return (
        <aside className='mobile'>
            <div className="app">
                <img src={Celular} alt="app mobile" />
            </div>
            <div className="textoMobile">
                <h1><span className='azul'>Faça</span> o <span className='amarelo'>dowload</span> do nosso <span className='azul'>aplicativo</span></h1>
                <h5>O indikey também é mobile. Faça o download agora, e agarre as oportunidades</h5>
                <div className='download'>
                    <button className='google'><img src={ Google } alt="goolge"/>Google Play</button>
                    <button className='ios'><img src={ Apple } alt="ios"/>Aplle Store</button>
                </div>
            </div>
        </aside>
    );
}

export default Mobile;