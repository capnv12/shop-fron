import React from 'react'
import {NavLink, Link, withRouter} from 'react-router-dom'
import styled from 'styled-components'
import uuid from 'uuid'


// const isActive = (history, path) => {
//     if (history.location.pathname === path) {
//         return { color: "#ff9900" };
//     } else {
//         return { color: "#ffffff" };
//     }
// };

const activeClassName = uuid();
const StyledNavLink = styled(NavLink).attrs({activeClassName})`
  &.${activeClassName} {
    color: red;
  }
`
const Menu = () => {
    return(
        <div>
        <ul className="nav nav-tabs bg=primary">
            <li className="nav-item">
                <StyledNavLink className="nav-link" activeClassName="active" to="/">Home</StyledNavLink >
            </li>
            <li className="nav-item">
                <NavLink  className="nav-link" activeClassName="active" to="/signin">Signin</NavLink >
            </li>
            <li className="nav-item">
                <NavLink  className="nav-link" activeClassName="active" to="/signup">Signup</NavLink >
            </li>
        </ul>
    </div>
    )
}

export default Menu