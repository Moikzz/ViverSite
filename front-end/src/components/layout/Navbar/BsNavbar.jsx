import { NavDropdown, Navbar, Nav, Form } from "react-bootstrap";
import { NavDropdownMenu } from "react-bootstrap-submenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

import Logo from "../../../assets/images/general/logo.jpeg";

import "../Layout.css";
import "react-bootstrap-submenu/dist/index.css";


const handleOpen = () => {
  console.log("mouse entrando!");
};
const handleClose = () => {
  console.log("mouse saindo!");
};

const BsNavbar = () => (
  <>
    <Navbar className="nav-area" expand="lg" variant="dark">
      <Navbar.Brand href="/"><img className="logo-img" src={Logo} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <div className="nav-link">
            <NavLink className='nav-link-text' to='/'>HOME</NavLink>
          </div>
          <NavDropdownMenu onMouseEnter={handleOpen} onMouseLeave={handleClose} title="INSTITUCIONAL" id="collasible-nav-dropdown">
            <NavDropdown.Item href="ourhistory">Nossa História</NavDropdown.Item>
            <NavDropdown.Item href="presentation">Apresentação</NavDropdown.Item>
            <NavDropdown.Item href="values">Valores</NavDropdown.Item>
            <NavDropdown.Item href="mission">Missão</NavDropdown.Item>
          </NavDropdownMenu>
          <NavDropdownMenu onMouseEnter={handleOpen} onMouseLeave={handleClose} title="TRANSPARÊNCIA" id="collasible-nav-dropdown">
            <NavDropdown.Item href="transparency">Painel de Transparência</NavDropdown.Item>
            <NavDropdown.Item href="workplan">Plano de Trabalho</NavDropdown.Item>
            <NavDropdown.Item href="statute">Estatuto Social</NavDropdown.Item>
            <NavDropdown.Item href="partners">Parcerias</NavDropdown.Item>
          </NavDropdownMenu>
          <NavDropdownMenu onMouseEnter={handleOpen} onMouseLeave={handleClose} title="PUBLICAÇÕES" id="collasible-nav-dropdown">
            <NavDropdown.Item href="raa">Relatório de Atividade Anual</NavDropdown.Item>
            <NavDropdown.Item href="campaings">Campanhas</NavDropdown.Item>
            <NavDropdown.Item href="projects">Projetos</NavDropdown.Item>
            <NavDropdown.Item href="news">Notícias</NavDropdown.Item>
          </NavDropdownMenu>
          <NavDropdownMenu onMouseEnter={handleOpen} onMouseLeave={handleClose} title="INTEGRIDADE" id="collasible-nav-dropdown">
            <NavDropdown.Item href="finances">Informações Financeiras</NavDropdown.Item>
            <NavDropdown.Item href="suggestion">Crítica/Sugestão</NavDropdown.Item>
            <NavDropdown.Item href="certificates">Certificados</NavDropdown.Item>
            <NavDropdown.Item href="complaint">Denúncia</NavDropdown.Item>
          </NavDropdownMenu>
            <div className="nav-link">
              <NavLink  className='nav-link-text'  to='/volunteer'>VOLUNTÁRIO?</NavLink>
            </div>
            <div className="nav-link">
              <NavLink  className='nav-link-text'  to='/contact'>CONTATO</NavLink>
            </div>
        </Nav>
        <Form className="d-flex search-form">
          <Form.Control 
            type="search" 
            placeholder="Pesquisar" 
            className="me-2 form-control" 
            aria-label="Search" 
            />
          <button 
            type="submit" 
            className="search-button" >
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default BsNavbar;
