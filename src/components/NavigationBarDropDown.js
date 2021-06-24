import NavDropdown from 'react-bootstrap/NavDropdown'
import NavLink from './NavLink' //My own link

import { ReferenceContext } from '../App'
import { useContext } from 'react'

const NavigationBarDropDown = ({reference}) => {
    const context = useContext(ReferenceContext)
    const ButtonPressed = () => {
        context.changeCurrentReference(reference.id)
        context.changeCurrentSection(0)
    }
    return (
        <NavDropdown.Item onClick = {ButtonPressed}><NavLink  to = '/reference'>{reference.referenceTitle}</NavLink></NavDropdown.Item>
    )
}

export default NavigationBarDropDown
