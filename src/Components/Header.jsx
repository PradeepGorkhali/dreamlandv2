import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import logo from "../Components/images/new.png";
import "./About.css";

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
      <Container className="main__container">
        <Navbar.Brand href="/">
          <img className="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">HOME</Nav.Link>

            <NavDropdown title="ABOUT US" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/about" className="drop-menu">
                ABOUT US
              </NavDropdown.Item>
              <NavDropdown.Item href="/about" className="drop-menu" id="meet">
                OUR TEAM
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="STUDY ABROAD" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/abroad" className="australia-menu">
                {" "}
                Study in Australia
              </NavDropdown.Item>
              <NavDropdown.Item href="/abroad" className="uk-menu">
                Study in the UK
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="us-menu">
                Study in the US
              </NavDropdown.Item>
              <NavDropdown.Item href="/abroad" className="canada-menu">
                Study in Canada
              </NavDropdown.Item>
              <NavDropdown.Item href="/abroad" className="newzealand-menu">
                Study in Newzealand
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TEST PREPARATION" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/test" className="drop-menu">
                IELTS
              </NavDropdown.Item>
              <NavDropdown.Item href="/test" className="drop-menu">
                PTE
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/service">SERVICES</Nav.Link>
            <Nav.Link href="/blog">BLOG</Nav.Link>
            <Nav.Link href="/contact">CONTACT </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
