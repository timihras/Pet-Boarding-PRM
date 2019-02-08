import React from 'react'

import { AuthUserContext, withAuthorization } from '../../utils/Session'

import { PasswordForgetForm } from '../PasswordForgetPage'
import PasswordChangeForm from './PasswordChangeForm'

const UserAccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account Page</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser

export default withAuthorization(condition)(UserAccountPage)