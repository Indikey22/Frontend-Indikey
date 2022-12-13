import './styles.css';
import ImportImg from '../../../assets/img/Import.svg';


function Import(){
    return(
        <>
         <main id="ImportContainer">
            {/* oi */}
            <div id="tituloImport">
                <h1>Import</h1>
                <h3>Uma plataforma que se importa</h3>
            </div>
            <article id="ImportConteudo">   

                <section id="ImportDireita">        
                    <p>O import é uma organaização que busca ajudar os imigrantes que chegam no Brasil. Por meio de validações de documentos, pisicólogos ou por parcerias com ongs com o mesmo objetivo.</p>
                </section>

                <section className='LogoImport'>
                    <img src={ImportImg} alt="" />
                </section>

            </article>
        </main>
        </>
    );
}

export default Import;