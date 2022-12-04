import './styles.css'
import HeaderEcommerce from '../../../../../../components/Headers/HeaderEcommerce';
import Filtro from '../Filtro/index';
import Autonomos from '../Autonomos/index';

function Freelancers(){
    return(
        <>
        <HeaderEcommerce />
        <main className='freelancers'>
        <Filtro />
        <Autonomos />
        </main>
        </>
    );
}

export default Freelancers;