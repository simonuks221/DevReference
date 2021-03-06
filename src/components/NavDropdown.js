import React from "react"
import { useState } from "react"

const NavDropdown = ({children, title, className}) => {
    const [show, changeShow] = useState('0')

    const buttonPressed = () => {
        if(show === '0') changeShow('1')
        else changeShow('0')
        
    }

    window.onclick = function(event) {
        if (!event.target.matches('.navDropdownLinkButton')) {
          var dropdowns = document.getElementsByClassName("nav-dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            changeShow('0')
          }
        }
      }
      

    return (
        <div className = 'nav-dropdown'>
            <button className = {`navDropdownLinkButton navLinkButton ${className}`} onClick = {buttonPressed}>{title}</button>
            <div className = 'nav-dropdown-content bg-light rounded border' style = {{'opacity': `${show}`}}>
                {children.map(child => {
                    return React.cloneElement(child, {buttonPressed});
                })}
            </div>
            
        </div>
    )
}

export default NavDropdown
