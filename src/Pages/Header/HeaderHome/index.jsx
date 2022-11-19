import { Link } from 'react-router-dom';
import Home from '../../Home/HomePersona/index';
import './styles.css';

function Header(){
    return(
        <>
        <header>
            <div className='logo'>
                <img src="" alt="logo" />
            </div>
            <nav>
            <Link to='/'><li>Como funciona</li></Link>
            <Link to='/'><li>Sobre nós</li></Link>
            <Link to='/'><li>E-Comerce</li></Link>
            </nav>
            <div className="botoes">
            <Link to='/'><button>Entrar</button></Link>
            <Link to='/'><button>Cadastrar</button></Link>
            </div>
        </header>
        <Home />
        </>
    );
}

export default Header;