import { Link } from 'react-router-dom';
import './styles.css'
import logo from '../../../assets/img/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Fade from 'react-reveal/Fade';

function Header() {
  return (
    <>
      <div className="MenuTopo">
        <Link to='/'>
          <Fade top>
            <img src={logo} alt="logo indikey" className="logoTopo" />
          </Fade>
        </Link>
        <Navbar id="topo" expand="lg">
          <Container id="containerTopo">
            <Navbar.Toggle id="mobile-menu" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="listaTopo" id="basic-navbar-nav">
              <Nav id="listaTopo" className="me-auto">
                <Nav.Link className="text-body" href="/ComoFunciona">Como Funciona</Nav.Link>
                <NavDropdown className="sobreNos" title="Sobre Nós" id="basic-nav-dropdown">
                  <NavDropdown.Item className="text-body" href="/Sobrenos">Time</NavDropdown.Item>
                  <NavDropdown.Item className="text-body" href="#action/3.2">indicações</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="text-body" href="/Ecommerce">E-Comerce</Nav.Link>
              </Nav>
              <div className="BotoesTopo">
               <Link to='/Cadastro' ><button className="btnCadastrarTopo" id='cadastroHome' href="/Cadastro">Cadastrar</button></Link>
               <Link to='/Login' ><button className="btnLoginTopo" id='loginHome' href="/Login">Login</button></Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;