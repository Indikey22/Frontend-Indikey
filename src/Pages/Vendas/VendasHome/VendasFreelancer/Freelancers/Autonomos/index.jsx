import './styles.css';
import Freelas from "../../../../../../components/Freelas/index";

function Autonomos(){
    return(
        <div className='prestadores'>
        <div className="pesquisar">
            <label htmlFor="pesquisar-input" className='pesquisar-icone'></label>
            <input type="text" className='pesquisar-input' id='pesquisar-input' placeholder='Pesquisar' />
        </div>
        <Freelas />
        <Freelas />
        <Freelas />
        <Freelas />
        <Freelas />
        </div>
    )
}

export default Autonomos;