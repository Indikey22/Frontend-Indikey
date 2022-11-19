import './styles.css';
import SetaEsquerda from '../../../assets/img/arrowleft.svg'
import SetaDireita from '../../../assets/img/arrowright.svg'
import Comentario from '../../../assets/img/comentario.svg'

function Comentarios() {
    var intervalo = 0;

    var maxSlider = document.querySelectorAll('card').length - 1;
    acao();
    function acao() {
        let img = document.querySelectorAll('.card img')

        setInterval(function () {
            img[intervalo].getElementsByClassName.display = 'none';
            intervalo++;
            if (intervalo > maxSlider) {

                intervalo = 0;
            }
            img[intervalo].getElementsByClassName.display = 'block';
        }, 3000)
    }
    return (
        <article className='comentarios'>
            <div className='botoes'>
                <button className='arrow-left'><img src={SetaEsquerda} alt="seta esquerda" /></button>
                <button className='arrow-right'><img src={SetaDireita} alt="seta direita" /></button>
            </div>
            <div className='slides'>
                <div className='box'>
                    <img src={Comentario} alt=" foto de perfil" />
                </div>
                <div className='box'>
                    <img src={Comentario} alt=" foto de perfil" />
                </div>
                <div className='box'>
                    <img src={Comentario} alt=" foto de perfil" />
                </div>
            </div>
        </article>
    );
}

export default Comentarios;


