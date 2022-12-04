import './styles.css';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/logo.svg'
import Carrinho from '../../../assets/img/carrinho.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import FotodePerfil from '../../../assets/img/perfilusuario.svg';

function HeaderEcommerce(){
    return(
        <>
      <header className="MenuTopo">
        <Link to='/'>
          <Fade top>
            <img src={Logo} alt="logo indikey" className="logoTopo" />
          </Fade>
        </Link>
        <Navbar id="topo" expand="lg">
          <Container id="containerTopo">
            <Navbar.Toggle id="mobile-menu" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="listaTopo" id="basic-navbar-nav">
              <Nav id="listaTopo" className="me-auto">
                <Nav.Link className="text-body" href="/">Home</Nav.Link>
                <div className="underline"></div>
                <NavDropdown className="sobreNos" title="Serviços" id="basic-nav-dropdown">
                  <NavDropdown.Item className="text-body" href="/Sobrenos">Frelancers</NavDropdown.Item>
                  <div className="underline"></div>
                  <NavDropdown.Item className="text-body" href="#action/3.2">Catalogo</NavDropdown.Item>
                  <div className="underline"></div>
                </NavDropdown>
                <Nav.Link className="text-body" href="/Ecommerce">Carrinho 3D</Nav.Link>
                <div className="underline"></div>
              </Nav>
              <div className="BotoesTopo">
               <Link to='/modal' ><img src={Carrinho} alt="carrinho" /></Link>
               <Link to='/ClienteInfoPessoal' ><img src={FotodePerfil} alt="Foto de Perfil do Usuário" /></Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
    );
}

export default HeaderEcommerce;