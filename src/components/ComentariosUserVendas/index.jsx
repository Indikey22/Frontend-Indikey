import './styles.css';
import FotoUsuario from '../../assets/img/perfilusuario.svg'
import Avaliacoes from '../../assets/img/avaliacoes.svg'

function ComentariosUser() {
    return (
        <div className="comentariosUsers">
            <div className="topoComentarios">
                <img src={FotoUsuario} alt="" />
                <div className="perfil">
                    <h3>Frederico de Souza</h3>
                    <div className='avalia'><img src={Avaliacoes} alt="avaliacao" /><span>4.9</span></div>
                </div>
            </div>
            <div className='descricao'>Antonio é um profissional incrível! Super atencioso e capacitado durante seus serviços, me poupou muita dor de cabeça para organizar o evento de minha empresa.</div>
        </div>
    );
}

export default ComentariosUser;