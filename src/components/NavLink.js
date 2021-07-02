import {useHistory, useLocation} from "react-router-dom";

const NavLink = ({children, to}) => {
    const history = useHistory();
    return (
        <button onClick = {e => { history.push(to)}} className = {`navLinkButton ${useLocation().pathname === to? 'text-primary': 'text-secondary'}`}>
            {children}
        </button>
    )
}

export default NavLink
