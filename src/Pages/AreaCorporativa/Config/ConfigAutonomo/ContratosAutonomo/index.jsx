import './styles.css';
import ConfigNavAutonomo from '../../../../../components/Navs/MenuConfigRedeSocial/ConfigNavAutonomo';
import MenuCorporativo from '../../../../../components/Navs/MenuCorporativo/MenuCorporativoAutonomos/index';

function ContratosAutonomo() {
    return (
        <div className='layoutAutonomos'>
            <MenuCorporativo />
            <div className="contratosAutonomo">
                <ConfigNavAutonomo />
                <div className='ProdutosAut'>

                </div>
            </div>
        </div>
    )
}

export default ContratosAutonomo;