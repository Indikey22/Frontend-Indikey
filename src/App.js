import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/HomePersona/index';
import Sobrenos from './Pages/Sobrenos/SobreNosTopo';
import ComoFunciona from './Pages/ComoFunciona/ComoFuncionaTopo';

//importações Vendas
import Ecommerce from './Pages/Vendas/VendasHome/VendasFreelancer/FreelancerHome/index';
import Freelancers from './Pages/Vendas/VendasHome/VendasFreelancer/Freelancers/index';

//importações catalogo
import CatalogoGrid from './Pages/Vendas/VendasHome/VendasCatalogo/CatalogoGrid/index';
import CatalogoItem from './Pages/Vendas/VendasHome/VendasCatalogo/CatalogoItem/index'

//importações compras
import Pedidos from './Pages/Vendas/Compra/Pedidos/index';
import Identificacoes from './Pages/Vendas/Compra/Identificacoes/index';
import Pagamentos from './Pages/Vendas/Compra/Pagamentos/index';

//importações login
import Login from './Pages/Login/index';

//importacoes perfis
import ClienteInfoPessoal from './Pages/Vendas/Perfis/PerfilCliente/ClienteInformaçõesPessoais/index';
import ClienteCartoes from './Pages/Vendas/Perfis/PerfilCliente/ClienteCartoes/index';
import ClienteSenhas from './Pages/Vendas/Perfis/PerfilCliente/ClienteSenhas/index';
import ClienteSuporte from './Pages/Vendas/Perfis/PerfilCliente/ClienteSuporte/index';
import ClienteAvaliacoes from './Pages/Vendas/Perfis/PerfilCliente/ClienteAvaliacoes/index';

import VendedorAvaliacoes from './Pages/Vendas/Perfis/PerfilVendedor/VendedorAvaliacoes/index';
import VendedorIndicacoes from './Pages/Vendas/Perfis/PerfilVendedor/VendedorIndicacoes/index';
import VendedorProdutos from './Pages/Vendas/Perfis/PerfilVendedor/VendedorProdutos/index';

// importações cadastro
import Cadastro from './Pages/Cadastro/CadastroHome';
import CadastroLoginCliente from './Pages/Cadastro/CadastroCliente/CadastroLoginCliente/index';
import CadastroPessoalCliente from './Pages/Cadastro/CadastroCliente/CadastroPessoalCliente/index';
import CadastroEnderecoCliente from './Pages/Cadastro/CadastroCliente/CadastroEnderecoCliente/index';
import CadastroRevisaoCliente from './Pages/Cadastro/CadastroCliente/CadastroRevisaoCliente/index';

import CadastroLoginEmpresa from './Pages/Cadastro/CadastroEmpresa/CadastroLoginEmpresa/index';
import CadastroPessoalEmpresa from './Pages/Cadastro/CadastroEmpresa/CadastroPessoalEmpresa/index';
import CadastroEnderecoEmpresa from './Pages/Cadastro/CadastroEmpresa/CadastroEnderecoEmpresa/index';
import CadastroRevisaoEmpresa from './Pages/Cadastro/CadastroEmpresa/CadastroRevisaoEmpresa/index';

import CadastroLoginServico from './Pages/Cadastro/CadastroServico/CadastroLoginServico/index';
import CadastroPessoalServico from './Pages/Cadastro/CadastroServico/CadastroPessoalServico/index';
import CadastroEnderecoServico from './Pages/Cadastro/CadastroServico/CadastroEnderecoServico/index';
import CadastroRevisaoServico from './Pages/Cadastro/CadastroServico/CadastroRevisaoServico/index';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sobrenos' element ={<Sobrenos />} />
          <Route path='/ComoFunciona' element ={<ComoFunciona />} />
          <Route path='/Ecommerce' element ={<Ecommerce />} />
          <Route path='/Freelancers' element ={<Freelancers />} />
          <Route path='/CatalogoGrid' element ={<CatalogoGrid />} />
          <Route path='/CatalogoItem' element ={<CatalogoItem />} />
          <Route path='/Pedidos' element ={<Pedidos />} />
          <Route path='/Identificacoes' element={<Identificacoes />} />
          <Route path='/Pagamentos' element={<Pagamentos />} />
          <Route path='/Cadastro' element ={<Cadastro />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/ClienteInfoPessoal' element={<ClienteInfoPessoal />} />
          <Route path='/ClienteCartoes' element={<ClienteCartoes />} />
          <Route path='/ClienteSenhas' element={<ClienteSenhas />} />
          <Route path='/ClienteSuporte' element={<ClienteSuporte />} />
          <Route path='/ClienteAvaliacoes' element={<ClienteAvaliacoes />} />
          <Route path='/VendedorAvaliacoes' element={<VendedorAvaliacoes />} />
          <Route path='/VendedorIndicacoes' element={<VendedorIndicacoes />} />
          <Route path='/VendedorProdutos' element={<VendedorProdutos />} />
          <Route path='/CadastroLoginCliente' element={<CadastroLoginCliente />} />
          <Route path='/CadastroPessoalCliente' element={<CadastroPessoalCliente />} />
          <Route path='/CadastroEnderecoCliente' element={<CadastroEnderecoCliente />} />
          <Route path='/CadastroRevisaoCliente' element={<CadastroRevisaoCliente />} />
          <Route path='/CadastroLoginEmpresa' element={<CadastroLoginEmpresa />} />
          <Route path='/CadastroPessoalEmpresa' element={<CadastroPessoalEmpresa />} />
          <Route path='/CadastroEnderecoEmpresa' element={<CadastroEnderecoEmpresa />} />
          <Route path='/CadastroRevisaoEmpresa' element={<CadastroRevisaoEmpresa />} />
          <Route path='/CadastroLoginServico' element={<CadastroLoginServico />} />
          <Route path='/CadastroPessoalServico'element={<CadastroPessoalServico />} />
          <Route path='/CadastroEnderecoServico' element={<CadastroEnderecoServico />} />
          <Route path='/CadastroRevisaoServico' element={<CadastroRevisaoServico />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
