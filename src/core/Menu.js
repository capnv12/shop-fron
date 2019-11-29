import React, {Fragment} from 'react'
import {NavLink, Link, withRouter} from 'react-router-dom'
import styled from 'styled-components'
import uuid from 'uuid'
import {signout, isAuthenticated} from '../auth/index'


// const isActive = (history, path) => {
//     if (history.location.pathname === path) {
//         return { color: "#ff9900" };
//     } else {
//         return { color: "#ffffff" };
//     }
// };
// const history = createBrowserHistory()
const activeClassName = uuid();
const StyledNavLink = styled(NavLink).attrs({activeClassName})`
  &.${activeClassName} {
    color: red;
  }
`
const Menu = ({history}) => {
    return(
        <div>
        <ul className="nav nav-tabs ">
            <li className="nav-item">
                <StyledNavLink exact className="nav-link" activeClassName="active" to="/">Home</StyledNavLink >
            </li>
            <li className="nav-item">
                <StyledNavLink exact className="nav-link" activeClassName="active" to="/user/dashboard">Dashboard</StyledNavLink >
            </li>
            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <StyledNavLink  className="nav-link" activeClassName="active" to="/signin">Signin</StyledNavLink >
                    </li>
                    <li className="nav-item">
                        <StyledNavLink  className="nav-link" activeClassName="active" to="/signup">Signup</StyledNavLink >
                    </li>
                </Fragment>
            )}
            {isAuthenticated() && (
                 <li className="nav-item">
                    <span
                     className="nav-link"
                     style={{ cursor: "pointer", color: "#007bff" }}
                     onClick={() =>
                         signout(() => {
                             history.push("/");
                         })
                        }
                    >
                     Signout
                 </span>
             </li>
            )}
        </ul>
    </div>
    )
}

export default withRouter(Menu)