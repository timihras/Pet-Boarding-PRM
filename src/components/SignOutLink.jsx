import React from 'react';
import { Icon24 } from './styles/icons';

import { withFirebase } from '../utils/Firebase';
import { Heading3 } from './styles/headings';

const SignOutLink = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    <Icon24 iconName="SignOut" color="#7DA7DB" />
    <Heading3>Sign Out</Heading3>
  </button>
);

export default withFirebase(SignOutLink);
