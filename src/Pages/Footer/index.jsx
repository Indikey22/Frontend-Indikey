import './styles.css';
import logo from '../../assets/img/logo.svg'
import iconeLinguagem from '../../assets/img/iconeLinguas.svg'
import tiktok from '../../assets/img/tiktok.svg'
import instagram from '../../assets/img/instagram.svg'
import figma from '../../assets/img/figmaIcon.svg'
import github from '../../assets/img/github.svg'
import masterCard from '../../assets/img/masterCard.svg'
import Visa from '../../assets/img/Visa.svg'
import PayPal from '../../assets/img/PayPal.svg'
import Pix from '../../assets/img/Pix.svg'
import Elo from '../../assets/img/Elo.svg'

function Footer() {
    return (
        <footer>
            <div id="footer-top">
                <div id="div-esquerda-rodape">
                    <img src={logo} alt="logo indikey"  className="logoTopo" />
                    <p>&copy;2022 Science Tech. Todos direitos reservados.</p>
                </div>
                <div id="div-direita-rodape">
                    <div id="btn-linguagem">
                    <img src={iconeLinguagem} alt="icone de um planeta"  className="logoTopo" />

                        <select id="opcoes">
                            <option value="">Português</option>
                            <option value="">English</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="footer-bottom">
                <div className="divisoes">
                    <h6>Navegue</h6>
                    <ul id="Navegue">
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Termos de uso</li>
                        <li>Política de privacidade</li>                        
                    </ul>
                </div>
                <div className="divisoes">
                    <h6>Sobre o Indikey</h6>
                    <ul id="acessibilidade">
                        <li>Feito para você</li>
                        <li>Sustentabilidade</li>
                    </ul>
                </div>
                <div className="divisoes" id="sociais">
                    <div>
                        <h6>Redes Sociais</h6>
                        <div id="icons">
                        <img src={tiktok} alt="logo indikey"  className="logoTopo" />
                        <img src={instagram} alt="logo indikey"  className="logoTopo" />
                        <img src={figma} alt="logo indikey"  className="logoTopo" />
                        <img src={github} alt="logo indikey"  className="logoTopo" />     
                    </div>                   
                    <div className="formaPagamento">
                        <h6>Forma de pagamento</h6>
                        <div className="iconesPagamento">
                            <img src={masterCard} alt="logo indikey"  className="logoTopo" />
                            <img src={Visa} alt="logo indikey"  className="logoTopo" />
                            <img src={PayPal} alt="logo indikey"  className="logoTopo" />
                            <img src={Pix} alt="logo indikey"  className="logoTopo" />
                            <img src={Elo} alt="logo indikey"  className="logoTopo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;