import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react'

import { withAuthorization } from '../utils/Session'

import { Page, Card } from '../components/styles/page'
import { Input } from '../components/styles/form'
import { PrimaryButton, SecondaryButton } from '../components/styles/buttons'
import { Heading1 } from '../components/styles/headings'
import Menu from '../components/icons/menu-icon'

class HomePage extends Component {
  render() {
    return (
      <Page>
        <Menu />
        <Heading1>This is a Home Page<span>10</span></Heading1>
        <SecondaryButton>← prev</SecondaryButton>
        <PrimaryButton>next →</PrimaryButton>
        <div><Input placeholder="Iskanje"></Input></div>
        <Card>Test</Card>
        <MaterialIcon icon="grain" />
        <MaterialIcon icon="blur_on" />
        <MaterialIcon icon="graphic_eq" />
        <MaterialIcon icon="dashboard" />
        <MaterialIcon icon="close" />
      </Page>
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(HomePage)