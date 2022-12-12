import './styles.css';
import { Link } from 'react-router-dom';
import Suporte from '../../../assets/img/suporte.svg'
import Sair from '../../../assets/img/sair.svg'
import Avaliacoes from '../../../assets/img/avaliacoescliente.svg'
import Pessoais from '../../../assets/img/pessoais.svg'
import Cartoes from '../../../assets/img/cartoes.svg'
import Seguranca from '../../../assets/img/seguranca.svg'

function MenuCliente() {
    return (
        <div className='LateralCliente'>
            <nav className='MenuCliente'>
                <ul className='NavegacaoCliente'>
                    <li><Link to='/ClienteInfoPessoal'> <img src={Pessoais} alt='Informações Pessoais' /> Informações Pessoais</Link></li>
                    <li><Link to='/ClienteCartoes'> <img src={Cartoes} alt='Cartões de Pagamento' /> Cartões</Link></li>
                    <li><Link to='/ClienteSegurancas'> <img src={Seguranca} alt='Segurança' /> Segurança</Link></li>
                    <li><Link to='/ClienteSuporte'> <img src={Suporte} alt='Suporte' /> Suporte</Link></li>
                    <li> <Link to='/ClienteAvaliacoes'> <img src={Avaliacoes} alt='Avaliações' /> Avaliações</Link> </li>
                </ul>
                <button className='SairCliente'> <Link to='/'> <img src={Sair} alt='Sair' /> Sair</Link> </button>
            </nav>
        </div>
    );
}

export default MenuCliente;