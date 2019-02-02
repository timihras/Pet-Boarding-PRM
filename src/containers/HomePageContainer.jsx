import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react';
import { Page, Card } from '../components/styles/page'
import { Input } from '../components/styles/form'
import { PrimaryButton, SecondaryButton } from '../components/styles/buttons'
import { Heading1 } from '../components/styles/headings'

import Menu from '../components/icons/menu-icon'

class HomePageContainer extends Component {
  render() {
    return (
      <Page>
        <Menu />
        <Heading1>This is a Home Page<span>10</span></Heading1>
        <SecondaryButton>← prev</SecondaryButton>
        <PrimaryButton>next →</PrimaryButton>
        <div><Input placeholder="Iskanje"></Input></div>
        <Card>Test</Card>
        <MaterialIcon icon="dashboard" />
      </Page>
    )
  }
}

export default HomePageContainer;