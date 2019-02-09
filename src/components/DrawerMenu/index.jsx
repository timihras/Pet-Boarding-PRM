import React, { useState } from 'react'
import styled from 'styled-components'
import MaterialIcon from 'material-icons-react'

import Menu from '../icons/menu-icon'
import Navigation from '../Navigation'

const Drawer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 447px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: all 0.5s ease-in-out;
  padding: ${props => props.theme.sizeS};

  div {
    max-width: 40rem;
    /* margin-left: auto; */
    margin-right: auto;
  }

  .closebtn {
    background: none;
    border: none;
    margin: ${props => props.theme.sizeM} 0 0 0;
    padding: 0;
    outline: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${props => props.theme.mainTextColor};
  }
`

const MenuButton = styled.button`
  background: 0;
  border: 0;
  outline: none;
  margin-top: ${props => props.theme.sizeM};
  cursor: pointer;
`

const DrawerMenu = (props) => {

  const [isOpen, toggleMenu] = useState(false)
  const { authUser } = props

  return (
    <>
      <Drawer style={isOpen ? { "opacity": 1, "transform": "translateX(0)" } : { "opacity": 0, "padding": 0, "transform": "translateX(-100%)" }}>
        <div>
          <button className="closebtn" onClick={() => toggleMenu(!isOpen)}><MaterialIcon icon="close" /></button>
          <Navigation authUser={authUser} toggleMenu={() => toggleMenu(!isOpen)} />
        </div>
      </Drawer>
      <MenuButton onClick={() => toggleMenu(!isOpen)}><Menu /></MenuButton>
    </>
  )
}

export default DrawerMenu