import {useHistory, useLocation} from "react-router-dom";

const NavLink = ({children, to}) => {
    const history = useHistory();
    return (
        <a onClick = {e => { history.push(to)}} className = {useLocation().pathname === to? 'text-primary cursorPointer nav-link': 'text-secondary cursorPointer nav-link'}>
            {children}
        </a>
    )
}

export default NavLink
