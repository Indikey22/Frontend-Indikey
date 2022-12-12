import './styles.css';
import ConfigNavAutonomo from '../../../../../components/Navs/MenuConfigRedeSocial/ConfigNavAutonomo';
import MenuCorporativo from '../../../../../components/Navs/MenuCorporativo/MenuCorporativoAutonomos/index';

function InfoPessoalAutonomo(){
    return(
        <div className='layoutAutonomos'>
        <MenuCorporativo />
        <div className="infoPessoalAutonomo">
        <ConfigNavAutonomo />
        </div>
        </div>
    )
}

export default InfoPessoalAutonomo;