import './styles.css';
import DonareImg from '../../../assets/img/Donare.svg';


function Donare(){
    return(
        <>
         <main id="DonareContainer">
            {/* oi */}
            <div id="tituloDonare">
                <h1>Donare</h1>
                <h3>Comida boa no prato de quem precisa</h3>
            </div>
            <article id="DonareConteudo">
            
                <section className='LogoDonare'>
                    <img src={DonareImg} alt="" />
                </section>
            
                <section id="DonareDireita">        
                    <p>Uma organização com o propósito de democratizar o acesso a alimentação no Brasil. O donare foi criado por 6 estudantes com gama de ajudar o próximo, unidos contra um único mal, a fome.</p>
                </section>
            </article>
        </main>
        </>
    );
}

export default Donare;