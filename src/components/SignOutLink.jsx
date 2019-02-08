import React from 'react';

import { withFirebase } from '../utils/Firebase';

const SignOutLink = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutLink);