import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavLink from './NavLink' //My own link

import {useContext} from 'react'
import {ReferenceContext} from '../App.js'
import NavigationBarDropDown from './NavigationBarDropDown'


const NavigationBar = () => {
    const context = useContext(ReferenceContext);

    return (
        <Navbar bg="light" expand="lg" className = 'mb-2'>
            <NavLink to = '/' ><a className = 'brand cursorPointer navbar-brand'>Web dev reference</a></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavLink to = '/'>Home</NavLink>
                <NavLink to = '/about'>About</NavLink>
                <NavDropdown title="References" id="basic-nav-dropdown">
                    {context.references.map(ref => <NavigationBarDropDown reference = {ref} key = {ref.id}/>)}
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
