import './styles.css';
import Header from '../../../components/Headers/HeaderHome/index';
import Donare from '../Donare/index';
import Import from '../Import/index';
import DiaHelp from '../DiaHelp/index';
import Footer from '../../../components/Footer/index'; 
import imgIndicacao from '../../../assets/img/imgIndicacao.png';


function IndicacoesTopo(){
    return(
        <>
        <Header />
         <main id="pgIndicacao">
            {/* oi */}
            
        <article id="indicacaoTopo">
            <div className='imgIndicacao'>
                <img src={imgIndicacao} alt='Modelo' />
            </div>
            <section id="indicacaoEsquerda">
                <h1>Projetos que <span className='titulo_amarelo'>Indicamos</span></h1>
                
                <p>Alguns projetos que, assim como nós tem a mesma visão de ajudar o próximo, seja ele quem for.</p>
            </section>
        </article>
        </main>
        <Donare />
        <Import />
        <DiaHelp />
        <Footer />

        </>
    );
}

export default IndicacoesTopo;