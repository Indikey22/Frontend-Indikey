import './styles.css';
import HeaderEcommerce from "../../../components/Headers/HeaderEcommerce/index";
import FotodePerfil from '../../../assets/img/perfilusuario.svg';

function Contratos(){
    return(
        <>
        <HeaderEcommerce />
        <main className='contratos'>
            <section id="autonomoTopo">
                <div className="infoPerfil">
                    <img src={FotodePerfil} alt="foto do perfil do autônomo" id="imgPerfil"/>
                    <div>
                        <h2>Antonio Superbi</h2>
                        <h5>Organizador de Eventos</h5>
                    </div>
                </div>
            </section>
            <div className='informativo'>
                <h2>Entrar em contato</h2>
                <section id='informacoesAutonomo'>
                    <div className="descricaoautonomo">
                        <textarea name="dados" id="dadosAutonomo" cols="40" rows="14"></textarea>
                    </div>
                    <form action="" id='formAutonomo'>
                        <label htmlFor="">Nome</label>
                        <input type="text" />
                        <label htmlFor="">Email</label>
                        <input type="text" />
                        <label htmlFor="">Mensagem</label>
                        <input id='msgAutonomo' ></input>
                        <button id="btnEnviarAutonomo">Enviar</button>
                    </form>
                </section>
            </div>
        </main>
        </>
    );
}

export default Contratos;