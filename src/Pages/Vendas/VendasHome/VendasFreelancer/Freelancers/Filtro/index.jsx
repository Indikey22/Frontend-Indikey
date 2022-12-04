import './styles.css';

function Filtro(){
    return(
        <div className="filtro">
        <h4>Categoria de Eventos</h4>
        <div className="opcoes">
        <label>
        <input type="checkbox" value="option1" />
        Garçom
      </label>
        <label>
        <input type="checkbox" value="option2"  />
        Estilista
      </label>
        <label>
        <input type="checkbox" value="option3" />
        Fotográfo
      </label>
        <label>
        <input type="checkbox" value="option4" />
        Dj
      </label>
        <label>
        <input type="checkbox" value="option5" />
        Organizador de Eventos
      </label>
        </div>
        <div className='btn-filtrar'>
        <button >Filtrar</button>
        </div>
    </div>
    );
}

export default Filtro;