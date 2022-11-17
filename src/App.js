import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/HomePersona';
import Header from './Pages/Header/index';
import Footer from './Pages/Footer/index';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/Home' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
