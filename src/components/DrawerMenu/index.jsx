import React from 'react'
import Menu from '../icons/menu-icon'
import Navigation from '../Navigation'
import styled from 'styled-components'

const Drawer = styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    text-align:center;

  &.closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  @media screen and (max-height: 450px) {
    padding-top: 15px;
  }
`

const MenuButton = styled.button`
`

const CloseButton = styled.button`
`

class DrawerMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  toggleMenu = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { isOpen } = this.state;
    const { authUser } = this.props;

    return (
      <div>
        <Drawer style={isOpen ? { "width": "100%" } : { "width": "0" }}>
          <CloseButton className="closebtn" onClick={this.toggleMenu}>&times;</CloseButton>
          <Navigation authUser={authUser} toggleMenu={this.toggleMenu} />
        </Drawer>
        <MenuButton onClick={this.toggleMenu}><Menu /></MenuButton>
      </div>
    )
  }
}

export default DrawerMenu