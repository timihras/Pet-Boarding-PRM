import React from 'react';

import { FirebaseContext } from '../utils/Firebase';

const LoginPageContainer = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return <div>I've access to Firebase and render something.</div>;
    }}
  </FirebaseContext.Consumer>
);

export default LoginPageContainer;