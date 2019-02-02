import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/list">Customer & Pet List</NavLink>
        </li>
        <li>
          <NavLink to="/calendar">Calendar & Event List</NavLink>
        </li>
        <li>
          <NavLink to="/add-pet-wizard">Add a new Pet</NavLink>
        </li>
        <li>
          <NavLink to="/add-event">Add a new Event</NavLink>
        </li>
      </ul>
    </div>
  )
}
