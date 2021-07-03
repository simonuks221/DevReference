    import Navbar from 'react-bootstrap/Navbar'
    import Nav from 'react-bootstrap/Nav'
    import NavDropdown from 'react-bootstrap/NavDropdown'
    import NavLink from './NavLink' //My own link
    import {useLocation} from "react-router-dom";

    import {useContext} from 'react'
    import {ReferenceContext} from '../App.js'
    import NavigationBarDropDown from './NavigationBarDropDown'

    import {ReactComponent as BrandLogo} from '../BrandText.svg'


    const NavigationBar = () => {
        const context = useContext(ReferenceContext);

        const BrandLogoClicked = (e) => {
            const colors = ['red', 'green', 'blue', 'cyan', 'orange', 'pink']
            const randomColor = () => colors[Math.floor(Math.random() * colors.length)]
            document.documentElement.style.cssText = `--triangle1Color: ${randomColor()};
             --triangle2Color: ${randomColor()};`
        }

        return (
            <Navbar bg="light" expand="lg" className = 'mb-2'>
                <NavLink to = '/' className = 'p-2'><BrandLogo className = 'brand' onClick = {e => BrandLogoClicked(e)}/></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <NavLink className = {useLocation().pathname === '/'? 'text-primary': 'text-secondary'} to = '/'>Home</NavLink>
                    <NavLink className = {useLocation().pathname === '/about'? 'text-primary': 'text-secondary'} to = '/about'>About</NavLink>
                    <NavDropdown title="References" id="basic-nav-dropdown">
                        {context.references.map(ref => <NavigationBarDropDown reference = {ref} key = {ref.id}/>)}
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    export default NavigationBar
