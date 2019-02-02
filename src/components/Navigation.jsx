import React from 'react'
import { NavLink } from 'react-router-dom'

import * as ROUTES from '../constants/routes'

const Navigation = () => {
  return (
    <div>
      <ul>
        <li><NavLink exact activeClassName="active" to={ROUTES.HOME}>Home</NavLink></li>
        <li><NavLink activeClassName="active" to={ROUTES.SIGN_IN}>Sign In</NavLink></li>
        <li><NavLink activeClassName="active" to={ROUTES.SIGN_UP}>Register</NavLink></li>
        <li><NavLink activeClassName="active" to={ROUTES.LIST}>Customer & Pet List</NavLink></li>
        <li><NavLink activeClassName="active" to={ROUTES.CALENDAR}>Calendar & Event List</NavLink></li>
        <li><NavLink activeClassName="active" to={ROUTES.ADD_WIZARD}>Add a new Pet Wizard</NavLink></li>
        <li><NavLink activeClassName="active" to={ROUTES.ADD_EVENT}>Add a new Event</NavLink></li>
      </ul>
    </div>
  )
}

export default Navigation;