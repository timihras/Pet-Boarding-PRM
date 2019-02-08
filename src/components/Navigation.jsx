import React from 'react'
import { NavLink } from 'react-router-dom'

import { AuthUserContext } from '../utils/Session'
import SignOutLink from './SignOutLink'
import * as ROUTES from '../constants/routes'
import * as ROLES from '../constants/roles'

const Navigation = ({ toggleMenu }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser ? <NavigationAuth authUser={authUser} toggleMenu={toggleMenu} /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
)

const NavigationAuth = ({ authUser, toggleMenu }) => {
  return (
    <ul>
      <h1>QUICK ACTIONS</h1>
      <div onClick={toggleMenu}>
        <li><NavLink activeClassName="active" to={ROUTES.LIST}>Customer & Pet List</NavLink></li>
        <li><NavLink activeClassName="active" to={ROUTES.CALENDAR}>Calendar & Event List</NavLink></li>
        <li><NavLink activeClassName="active" to={ROUTES.ADD_WIZARD}>Add a new Pet Wizard</NavLink></li>
        <li><NavLink activeClassName="active" to={ROUTES.ADD_EVENT}>Add a new Event</NavLink></li>
      </div>
      <h1>MAIN MENU</h1>
      <div onClick={toggleMenu}>
        <li><NavLink exact activeClassName="active" to={ROUTES.HOME}>Home</NavLink></li>
        <li><NavLink activeClassName="active" to={ROUTES.SIGN_UP}>Register</NavLink></li>
        <li><NavLink activeClassName="active" to={ROUTES.ACCOUNT}>User Settings</NavLink></li>
        {authUser.roles.includes(ROLES.ADMIN) && (
          <li>
            <NavLink to={ROUTES.SETTINGS}>App Settings</NavLink>
          </li>
        )}
        <li><SignOutLink /></li>
      </div>
    </ul>
  )
}

const NavigationNonAuth = () => {
  return (
    <ul>
      <li><NavLink activeClassName="active" to={ROUTES.SIGN_IN}>Sign In</NavLink></li>
    </ul>
  )
}

export default Navigation;
