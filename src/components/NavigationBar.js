import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" className = 'mb-2'>
            <Navbar.Brand href="#home">Web dev reference</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link ><Link to = '/'>Home</Link></Nav.Link>
                <Nav.Link ><Link to = '/about'>About</Link></Nav.Link>
                <NavDropdown title="Reference" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to = '/react-reference'>React</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
