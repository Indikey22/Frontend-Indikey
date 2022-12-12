import './styles.css';
import Foto from '../../assets/img/perfilvendedor.svg';
import { Link } from 'react-router-dom';
import Avaliacoes from '../../assets/img/avaliacoes.svg';

function Freelas(foto,nome,descricao,avaliacao,botao){
    return(
        <div className="boxs">
            <div className="box-topo">
                <Link to='/VendedorAvaliacoes'><img src={Foto} alt="fffff" /></Link>
                <h5>Antonio Superbi</h5>
            </div>
                <div className='box-meio'>
                <p>Fotográfo com 15 anos de experiência no mercado. Disponível para casamentos, aniversário, ensaios fotográficos em estúdio, áerea, esportiva, arquitetônica, de natureza, entre outros.</p>
                <div className='avaliacao'><img src={Avaliacoes} alt="avaliacao" /><span>4.9</span></div>
            </div>
                <div className='box-fim'>
                <Link to='/Contratos'><button>Contratar</button></Link>
            </div>
        </div>
    );
}

export default Freelas;