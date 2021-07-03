import NavLink from './NavLink' //My own link
import {useHistory, useLocation} from "react-router-dom";
import { ReferenceContext } from '../App'
import { useContext } from 'react'

const NavigationBarDropDown = ({reference, buttonPressed}) => {
    const context = useContext(ReferenceContext)
    const history = useHistory();

    const ButtonPressed = () => {
        history.push('/reference')
        context.changeCurrentReference(reference.id)
        context.changeCurrentSection(0)
        buttonPressed() //Parent button pressed
    }
    return (
        <div className = 'dropdown-item cursorPointer' onClick = {ButtonPressed}><NavLink className = {useLocation().pathname === '/reference'? reference.id === context.currentReferenceId? 'text-primary': 'text-secondary': 'text-secondary'} to = '/reference' >{reference.referenceTitle}</NavLink> </div>
    )
}

export default NavigationBarDropDown
