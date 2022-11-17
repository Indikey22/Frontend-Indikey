import './styles.css';
import Proposito from '../HomeProposito/index';
import Servicos from '../HomeServicos/index';
import Planos from '../HomePlanos/index';
import Mobile from '../HomeMobile/index';

function Persona(){
    return(
        <>
        Personas
        <Proposito />
        <Servicos />
        <Planos />
        <Mobile />
        </>
    );
}

export default Persona;