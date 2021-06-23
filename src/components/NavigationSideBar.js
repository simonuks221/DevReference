import Nav from 'react-bootstrap/Nav'
import { useContext } from 'react'
import { ReferenceContext} from '../App'
import NavigationSideBarPiece from './NavigationSideBarPiece'

const NavigationSideBar = () => {
    const context = useContext(ReferenceContext)
    return (
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            >
                <div className="sidebar-sticky"></div>
                {context.references.find(ref => ref.id === context.currentReferenceId).referenceSections.map(section => <NavigationSideBarPiece section = {section} key = {section.id}/>)}
            </Nav>
    )
}

export default NavigationSideBar
