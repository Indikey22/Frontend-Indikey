import { Link } from 'react-router-dom';
import Home from '../Home/HomePersona';

function Header(){
    return(
        <>
        <header>
            <Link to='/'>Entrar</Link>
            Header
        </header>
        <Home />
        </>
    );
}

export default Header;