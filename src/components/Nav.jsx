import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/list">Customer & Pet List</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/calendar">Calendar & Event List</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/add-pet-wizard">Add a new Pet</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/add-event">Add a new Event</NavLink>
        </li>
      </ul>
    </div>
  )
}
