import './styles.css';
import SetaEsquerda from '../../../assets/img/arrowleft.svg'
import SetaDireita from '../../../assets/img/arrowright.svg'
import comentario1 from '../../../assets/img/comentario1.svg'

function Comentarios() {
    return (
        <article className='comentarios'>
            <div className='botoesSlide'>
                <button className='arrow-left'><img src={SetaEsquerda} alt="seta esquerda" /></button>
                <button className='arrow-right'><img src={SetaDireita} alt="seta direita" /></button>
            </div>
            <div className='slides'>
                <div className='box'>
                    <img src={comentario1} alt=" foto de perfil" />
                </div>
                <div className='box'>
                    <img src={comentario1} alt=" foto de perfil" />
                </div>
                <div className='box'>
                    <img src={comentario1} alt=" foto de perfil" />
                </div>
            </div>
        </article>
    );
}

export default Comentarios;


