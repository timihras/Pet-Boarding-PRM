import React, { Component } from 'react'
import { withAuthorization } from '../../utils/Session'

import { Page } from '../../components/styles/page'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class HomePage extends Component {
  render() {
    return (
      <Page>
        <SearchBar />
        <SearchResults />
      </Page>
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(HomePage)