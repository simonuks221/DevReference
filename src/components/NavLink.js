import {useHistory, useLocation} from "react-router-dom";

const NavLink = ({children, to}) => {
    const history = useHistory();
    return (
        <a href = '#' onClick = {e => { history.push(to)}} className = {useLocation().pathname === to? 'text-primary': 'text-secondary'}>
            {children}
        </a>
    )
}

export default NavLink
