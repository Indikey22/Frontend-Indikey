import './styles.css';
import DiaHelpImg from '../../../assets/img/DiaHelp.svg';


function DiaHelp(){
    return(
        <>
         <main id="DiaHelpContainer">
            {/* oi */}
            <div id="tituloDiaHelp">
                <h1>DiaHelp</h1>
                <h3>Sua limpeza mais valorizada e segura</h3>
            </div>
            <article id="DiaHelpConteudo">
            
                <section className='LogoDiaHelp'>
                    <img src={DiaHelpImg} alt="" />
                </section>
            
                <section id="DiaHelpDireita">        
                    <p>DiaHelp é uma plataforma que visa ajudar trabalhadors da área da limpeza. Ajudando essas pessoas a terem seus direitos garantidos e trazendo visibilidade e respeito para elas.</p>
                </section>
            </article>
        </main>
        </>
    );
}

export default DiaHelp;