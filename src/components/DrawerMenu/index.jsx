import React from 'react'
import styled from 'styled-components'
import MaterialIcon from 'material-icons-react'

import Menu from '../icons/menu-icon'
import Navigation from '../Navigation'

const Drawer = styled.div`
    height: 100%;
    width: 100%;
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
    margin-left: auto;
    margin-right: auto;
  }

  .closebtn {
    background: none;
    border: none;
    margin: ${props => props.theme.sizeM} 0 0 0;
    padding: 0;
    outline: none;
  }

  @media screen and (max-height: 450px) {
    padding-top: 15px;
  }

`

const MenuButton = styled.button`
  background: 0;
  border: 0;
  outline: none;
  margin-top: ${props => props.theme.sizeM};
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
      <>
        <Drawer style={isOpen ? { "opacity": 1 } : { "opacity": 0, "padding": 0 }}>
          <div>
            <button className="closebtn" onClick={this.toggleMenu}><MaterialIcon icon="close" /></button>
            <Navigation authUser={authUser} toggleMenu={this.toggleMenu} />
          </div>
        </Drawer>
        <MenuButton onClick={this.toggleMenu}><Menu /></MenuButton>
      </>
    )
  }
}

export default DrawerMenu