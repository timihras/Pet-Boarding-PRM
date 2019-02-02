import React, { Component } from 'react'
import { Page, Card } from '../components/styles/page'
import { Input } from '../components/styles/form'
import { PrimaryButton } from '../components/styles/buttons'
import { Heading1 } from '../components/styles/headings'

class HomePageContainer extends Component {
  render() {
    return (
      <Page>
        <Heading1>This is a Home Page<span>10</span></Heading1>
        <PrimaryButton>Test Gumba</PrimaryButton>
        <div><Input></Input></div>
        <Card>Test</Card>
      </Page>
    )
  }
}

export default HomePageContainer;