import './styles.css';
import { Link } from 'react-router-dom';

function MenuRedeSocial(){
    return(
        <>
        <Link to='/Dashboard'>Dashboard</Link>
        <Link to='/Tarefas'>Tarefas</Link>
        <Link to='/Indikey'>Indikey</Link>
        <Link to='/RedeSocialSuporte'>Suporte</Link>
        <Link to='/'>Configurações</Link>
        <Link to='/'>Sair</Link>
        </>
    );
}

export default MenuRedeSocial; 