import React from 'react'
import MaterialIcon from 'material-icons-react'

import { withFirebase } from '../utils/Firebase'
import { Heading3 } from './styles/headings'

const SignOutLink = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    <MaterialIcon icon="exit_to_app" size={24} color='#7DA7DB' />
    <Heading3>Sign Out</Heading3>
  </button>
)

export default withFirebase(SignOutLink)