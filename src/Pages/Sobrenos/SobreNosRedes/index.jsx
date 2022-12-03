import mulher_rede from '../../../assets/img/mulherRedes.png';
import BtnAzulSocial from '../../../../src/components/BtnAzulSocial/index';
import BtnBrancoSocial from '../../../../src/components/BtnBrancoSocial';
import tiktok from '../../../assets/img/tiktok.svg';
import face from '../../../assets/img/Facebook.svg';
import linkedin from '../../../assets/img/Linkedin.svg';
import instagram from '../../../assets/img/instagram.svg';
import './styles.css';

function RedesSociais() {
    return (
        <section className='redes-sociais'>
            <div className='img-redes-sociais'>
                <img src={mulher_rede} alt="Mulher" />
            </div>
            <div className='redes-sociais-links'>
                <h1>Não <span className="indiAzul">perca</span> nossas <span className="keyAmarelo">novidades</span></h1>
                <p className='txt-redes-sociais-sub'>Fique atento nas redes sociais da nome para saber nossas novidades</p>
                <div className='redes-sociais-bank'>
                    <a href="https://www.instagram.com/leandro_221/" target="_blank" rel="noopener noreferrer">
                        <BtnAzulSocial icone={instagram} titulo={"Instagram"} txt1={"Todas as novidades"} txt2={"Siga nosso instagram"} />
                    </a> 
                    <a href="https://www.linkedin.com/in/leandrocavalcantidev" target="_blank" rel="noopener noreferrer">
                        <BtnBrancoSocial icone={face} titulo={"Facebook"} txt1={"Confie nas nossas novidades"} txt2={"Siga no facebook"} />
                    </a>
                </div>
                <div className='redes-sociais-bank'>
                    <a href="https://www.linkedin.com/in/leandrocavalcantidev" target="_blank" rel="noopener noreferrer">
                        <BtnBrancoSocial icone={linkedin} titulo={"Linkedin"} txt1={"Conexões que te inspiram"} txt2={"Siga no linkedin"} />
                    </a>
                    <a href="https://github.com/leandrocvt/fintech-lcbank" target="_blank" rel="noopener noreferrer">
                        <BtnAzulSocial icone={tiktok} titulo={"tiktok"} txt1={"Novidades a todo momento"} txt2={"Veja o projeto no github"} />
                    </a>     
                </div>
            </div>
        </section>
    )
}

export default RedesSociais;