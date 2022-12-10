import './styles.css'
import FotoUsuario from '../../assets/img/perfilusuario.svg'
import { Link } from 'react-router-dom';

function ConexoesVendas(){
    return(
        <main className="conexoesVendas">
            <div className="leftconexoes">
                <img src={FotoUsuario} alt="" />
                <div className="txtConexoes">
                <div>Agostinho Carrara</div>
                <div>Fotografo</div>
                </div>
            </div>
            <div className="btn-conexoes">
                <Link to='/VendedorAvaliacoes'><button>Saiba mais</button></Link>
            </div>
        </main>
    )
}

export default ConexoesVendas;