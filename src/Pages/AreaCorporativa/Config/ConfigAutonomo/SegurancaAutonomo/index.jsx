import './styles.css';
import ConfigNavAutonomo from '../../../../../components/Navs/MenuConfigRedeSocial/ConfigNavAutonomo';
import MenuCorporativo from '../../../../../components/Navs/MenuCorporativo/MenuCorporativoAutonomos/index';

function SegurancaAutonomo(){
    return(
        <div className='layoutAutonomos'>
        <MenuCorporativo />
        <div className="segurancaAutonomo">
        <ConfigNavAutonomo />
        </div>
        </div>
    )
}

export default SegurancaAutonomo;