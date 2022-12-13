import './styles.css';

function DashboardCalendario(){
    return(
        <div className="dashboardCalendario">
            <div className="wrapper">
                <header>
                    <p className="current-date">Dezembro 2022</p>
                    <div className="icons-calendar">
                        <span className="material-symbols-rounded"></span>
                        <span className="material-symbols-rounded"></span>
                    </div>
                </header>
                <div className="calendar">
                    <ul className='weeks'>
                        <li>Dom</li>
                        <li>Seg</li>
                        <li>Ter</li>
                        <li>Qua</li>
                        <li>Qui</li>
                        <li>Sex</li>
                        <li>Sáb</li>
                    </ul>
                    <ul className='days'>
                        <li className='inactive'>28</li>
                        <li className='inactive'>29</li>
                        <li className='inactive'>30</li>
                        <li className='inactive'>31</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li className='active'>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                        <li>20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                        <li>26</li>
                        <li>27</li>
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
                        <li className='inactive'>1</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DashboardCalendario;