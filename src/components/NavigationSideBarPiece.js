import NavDropdown from 'react-bootstrap/NavDropdown'
import NavLink from './NavLink' //My own link

import { ReferenceContext } from '../App'
import { useContext } from 'react'

const NavigationSideBarPiece = ({section}) => {
    const context = useContext(ReferenceContext)
    
    const ButtonPressed = () => {
        context.changeCurrentSection(section.id)
    }
    return (
        <NavDropdown.Item onClick = {ButtonPressed}>{section.sectionTitle}</NavDropdown.Item>
    )
}

export default NavigationSideBarPiece
