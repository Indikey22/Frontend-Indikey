import './styles.css';
import ConfigNavAutonomo from '../../../../../components/Navs/MenuConfigRedeSocial/ConfigNavAutonomo';
import MenuRedeSocial from '../../../../../components/Navs/MenuRedeSocial/index'

function ContratosAutonomo(){
    return(
        <div className='layoutAutonomos'>
        <MenuRedeSocial />
        <div className="contratosAutonomo">
        <ConfigNavAutonomo />
        </div>
        </div>
    )
}

export default ContratosAutonomo;