import React from 'react'
import { NavLink } from 'react-router-dom'

import { AuthUserContext } from '../utils/Session'
import SignOutLink from './SignOutLink'
import * as ROUTES from '../constants/routes'
import * as ROLES from '../constants/roles'

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
)

const NavigationAuth = ({ authUser }) => {
  return (
    <ul>
      <li><NavLink exact activeClassName="active" to={ROUTES.HOME}>Home</NavLink></li>
      <li><NavLink activeClassName="active" to={ROUTES.SIGN_IN}>Sign In</NavLink></li>
      <li><NavLink activeClassName="active" to={ROUTES.SIGN_UP}>Register</NavLink></li>
      <li><NavLink activeClassName="active" to={ROUTES.ACCOUNT}>User Account</NavLink></li>
      {authUser.roles.includes(ROLES.ADMIN) && (
        <li>
          <NavLink to={ROUTES.SETTINGS}>Settings</NavLink>
        </li>
      )}
      <li><NavLink activeClassName="active" to={ROUTES.LIST}>Customer & Pet List</NavLink></li>
      <li><NavLink activeClassName="active" to={ROUTES.CALENDAR}>Calendar & Event List</NavLink></li>
      <li><NavLink activeClassName="active" to={ROUTES.ADD_WIZARD}>Add a new Pet Wizard</NavLink></li>
      <li><NavLink activeClassName="active" to={ROUTES.ADD_EVENT}>Add a new Event</NavLink></li>
      <li><SignOutLink /></li>
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
