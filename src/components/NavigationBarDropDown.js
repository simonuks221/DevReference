import NavLink from './NavLink' //My own link
import {useHistory} from "react-router-dom";
import { ReferenceContext } from '../App'
import { useContext } from 'react'

const NavigationBarDropDown = ({reference}) => {
    const context = useContext(ReferenceContext)
    const history = useHistory();
    const ButtonPressed = () => {
        history.push('/reference')
        context.changeCurrentReference(reference.id)
        context.changeCurrentSection(0)
    }
    return (
        <div className = 'dropdown-item cursorPointer' onClick = {ButtonPressed}><NavLink to = '/reference' >{reference.referenceTitle}</NavLink> </div>
    )
}

export default NavigationBarDropDown
