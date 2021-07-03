import React from "react"
import { useState } from "react"

const NavDropdown = ({children, title}) => {
    const [show, changeShow] = useState('none')

    const buttonPressed = () => {
        if(show === 'none') changeShow('block')
        else changeShow('none')
        
    }

    return (
        <div className = 'nav-dropdown'>
            <button className = 'navLinkButton' onClick = {buttonPressed}>{title}</button>
            <div className = 'nav-dropdown-content bg-light rounded border' style = {{'display': `${show}`}}>
                {children.map(child => {
                    return React.cloneElement(child, {buttonPressed});
                })}
            </div>
            
        </div>
    )
}

export default NavDropdown
