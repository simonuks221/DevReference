import NavDropdown from 'react-bootstrap/NavDropdown'
import { ReferenceContext } from '../App'
import { useContext } from 'react'

const NavigationSideBarPiece = ({section}) => {
    const context = useContext(ReferenceContext)
    
    const ButtonPressed = () => {
        context.changeCurrentSection(section.id)
    }
    return (
        <div className = 'pb-2'>
            <NavDropdown.Item onClick = {ButtonPressed} className = {context.currentSectionId === section.id? 'text-primary': 'text-secondary'}>{section.sectionTitle}</NavDropdown.Item>
        </div>
    )
}

export default NavigationSideBarPiece
