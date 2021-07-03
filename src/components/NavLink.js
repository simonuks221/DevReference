import {useHistory, useLocation} from "react-router-dom";

const NavLink = ({children, to, className}) => {
    const history = useHistory();
    return (
        <button className = {`navLinkButton ${className}`} onClick = {e => { history.push(to)}}>
            {children}
        </button>
    )
}

export default NavLink
