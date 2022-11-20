import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/HomePersona/index';
import Header from './Pages/Header/HeaderHome/index';
import Sobrenos from './Pages/Sobrenos/SobreNosTopo';
import Footer from '../src/Pages/Footer/index'; 

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Sobrenos' element ={<Sobrenos />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
