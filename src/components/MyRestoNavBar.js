import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyRestoNavBar = () => {
    return(
        <Navbar expand="lg">
            <Container className="justify-content-between">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Menu</Nav.Link>
                        <Nav.Link href="#link">Equipe</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#home">MyResto</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default MyRestoNavBar;