import './styles.css';
import HeaderEcommerce from "../../../components/Headers/HeaderEcommerce/index";

function Contratos(){
    return(
        <>
        <HeaderEcommerce />
        <main className='contratos'>
            <div>
                <img src="" alt="" />
                <h2>Antonio Superbi</h2>
                <h5>Organizador de Eventos</h5>
            </div>
        <div className='informativo'>
            <h3>Entrar em contato</h3>
            <div className="descricaoautonomo">
                oi
            </div>
            <form action="">
                <label htmlFor="">Nome</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Mensagem</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Enviar</button>
            </form>
        </div>
        </main>
        </>
    );
}

export default Contratos;