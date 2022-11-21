import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/HomePersona/index';
import Sobrenos from './Pages/Sobrenos/SobreNosTopo';
import ComoFunciona from './Pages/ComoFunciona/ComoFuncionaTopo';
import Ecommerce from './Pages/Vendas/VendasTopo';
import Login from './Pages/Login/index';
import Cadastro from './Pages/Cadastro';
import CadastroLogin from './Pages/Cadastro/CadastroLogin';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sobrenos' element ={<Sobrenos />} />
          <Route path='/ComoFunciona' element ={<ComoFunciona />} />
          <Route path='/Ecommerce' element ={<Ecommerce />} />
          <Route path='/Cadastro' element ={<Cadastro />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/CadastroLogin' element={<CadastroLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
