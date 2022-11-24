import './styles.css';
import { Link } from 'react-router-dom';

function CatalogoGrid(){
    return(
        <>
         CatalogoGrid
         <Link to='/CatalogoItem'>para cada item, que esteja em vendas</Link>
        </>
    );
}

export default CatalogoGrid;