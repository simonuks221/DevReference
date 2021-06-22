import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavLink from './NavLink' //My own link


const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" className = 'mb-2'>
            <Navbar.Brand href="#home">Web dev reference</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link ><NavLink to = '/'>Home</NavLink></Nav.Link>
                <Nav.Link ><NavLink to = '/about'>About</NavLink></Nav.Link>
                <NavDropdown title="Reference" id="basic-nav-dropdown">
                    <NavDropdown.Item><NavLink to = '/react-reference'>React</NavLink></NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
