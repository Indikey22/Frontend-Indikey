import './styles.css';
import ConfigNavAutonomo from '../../../../../components/Navs/MenuConfigRedeSocial/ConfigNavAutonomo';
import MenuCorporativo from '../../../../../components/Navs/MenuCorporativo/MenuCorporativoAutonomos/index';

function InfoPessoalAutonomo() {
    return (
        <div className='layoutAutonomos'>
            <MenuCorporativo />
            <div className="infoPessoalAutonomo">
                <ConfigNavAutonomo />
                <div className='InfAutonomo'>
                <section className='FormularioEsquerda'>
            <form action=''>
                <label>Nome da Empresa </label> <br />
                <input type='text' required='required' />

                <br /> <br />

                <label>CNPJ </label> <br />
                <input type='number' required='required' />

                <br /> <br />

                <label>Telefone </label> <br />
                <input type='number' required='required' />

                <br /> <br />

                <label>Categoria</label> <br />
               <select className='OpcaoCat'>
                <option value='Categoria'>Selecione</option>
                <option value='Categoria'>Fotógrafo</option>
                <option value='Categoria'>Músico</option>
                <option value='Categoria'>Decorador</option>
                </select>
            </form>
        </section>

        <section className='FormularioDireita'>

            <form action=''>
                <label>CEP </label> <br />
                <input type='number' required='required' />

                <br /> <br />

                <div className='EnderecoPessoal'>
                    <label>Cidade ㅤ </label>
                    <label> ㅤ UF ㅤ </label>
                </div>
                <div className='EnderecoPessoal'>
                    <input type='text' required='required' />
                    <input className='UFPessoal' type='text' required='required' />
                </div>

                <br /> <br />

                <label>Lougradouro </label> <br />
                <input type='text' required='required' />
            </form>
        </section>
                </div>
            </div>
        </div>
    )
}

export default InfoPessoalAutonomo;