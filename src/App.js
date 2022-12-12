import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/HomePersona/index';
import Sobrenos from './Pages/Sobrenos/SobreNosTopo';
import ComoFunciona from './Pages/ComoFunciona/ComoFuncionaTopo';
import Ecommerce from './Pages/Vendas/VendasHome/VendasFreelancer/FreelancerHome/index';
import Freelancer from './Pages/Vendas/VendasHome/VendasFreelancer/Freelancers/Freelancer/index';
import CatalogoGrid from './Pages/Vendas/VendasHome/VendasCatalogo/CatalogoGrid/index';
import CatalogoItem from './Pages/Vendas/VendasHome/VendasCatalogo/CatalogoItem/index'
import Pedidos from './Pages/Vendas/Compra/Pedidos/index';
import Identificacoes from './Pages/Vendas/Compra/Identificacoes/index';
import Pagamentos from './Pages/Vendas/Compra/Pagamentos/index';
import Contratos from './Pages/Vendas/Contratos/index';
import Login from './Pages/Login/index';
import ClienteInfoPessoal from './Pages/Vendas/Perfis/PerfilCliente/ClienteInformaçõesPessoais/index';
import ClienteCartoes from './Pages/Vendas/Perfis/PerfilCliente/ClienteCartoes/index';
import ClienteSegurancas from './Pages/Vendas/Perfis/PerfilCliente/ClienteSegurancas/index';
import ClienteSuporte from './Pages/Vendas/Perfis/PerfilCliente/ClienteSuporte/index';
import ClienteAvaliacoes from './Pages/Vendas/Perfis/PerfilCliente/ClienteAvaliacoes/index';
import VendedorAvaliacoes from './Pages/Vendas/Perfis/PerfilVendedor/VendedorAvaliacoes/index';
import VendedorIndicacoes from './Pages/Vendas/Perfis/PerfilVendedor/VendedorIndicacoes/index';
import VendedorProdutos from './Pages/Vendas/Perfis/PerfilVendedor/VendedorProdutos/index';
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
import Dashboard from './Pages/RedeSocial/Dashboard/index';
import Tarefas from './Pages/RedeSocial/Tarefas/index';
import Indikey from './Pages/RedeSocial/Indikey/index';
import SuporteVendedor from './Pages/RedeSocial/Suporte/index';
import InfoPessoalAutonomo from './Pages/RedeSocial/Config/ConfigAutonomo/InfoPessoalAutonomo/index';
import ContratosAutonomo from './Pages/RedeSocial/Config/ConfigAutonomo/ContratosAutonomo/index';
import SegurancaAutonomo from './Pages/RedeSocial/Config/ConfigAutonomo/SegurancaAutonomo/index';
import InfoPessoalEmpresa from './Pages/RedeSocial/Config/ConfigEmpresa/InfoPessoalEmpresa/index';
import ProdutosEmpresa from './Pages/RedeSocial/Config/ConfigEmpresa/ProdutosEmpresa/index';
import SegurancaEmpresa from './Pages/RedeSocial/Config/ConfigEmpresa/SegurancaEmpresa/index';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sobrenos' element ={<Sobrenos />} />
          <Route path='/ComoFunciona' element ={<ComoFunciona />} />
          <Route path='/Ecommerce' element ={<Ecommerce />} />
          <Route path='/Freelancer' element ={<Freelancer />} />
          <Route path='/CatalogoGrid' element ={<CatalogoGrid />} />
          <Route path='/CatalogoItem' element ={<CatalogoItem />} />
          <Route path='/Pedidos' element ={<Pedidos />} />
          <Route path='/Identificacoes' element={<Identificacoes />} />
          <Route path='/Pagamentos' element={<Pagamentos />} />
          <Route path='/Contratos' element={<Contratos />} />
          <Route path='/Cadastro' element ={<Cadastro />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/ClienteInfoPessoal' element={<ClienteInfoPessoal />} />
          <Route path='/ClienteCartoes' element={<ClienteCartoes />} />
          <Route path='/ClienteSegurancas' element={<ClienteSegurancas />} />
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
          <Route path='/Dashboard' element={<Dashboard />}/>
          <Route path='/Tarefas' element={<Tarefas />}/>
          <Route path='/Indikey' element={<Indikey />}/>
          <Route path='/SuporteVendedor' element={<SuporteVendedor />}/>
          <Route path='/InfoPessoalAutonomo' element={<InfoPessoalAutonomo />}/>
          <Route path='/ContratosAutonomo' element={<ContratosAutonomo />}/>
          <Route path='/SegurancaAutonomo' element={<SegurancaAutonomo />}/>
          <Route path='/InfoPessoalEmpresa' element={<InfoPessoalEmpresa />}/>
          <Route path='/ProdutosEmpresa' element={<ProdutosEmpresa />}/>
          <Route path='/SegurancaEmpresa' element={<SegurancaEmpresa />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
