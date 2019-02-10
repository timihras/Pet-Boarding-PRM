import React from 'react';

import { withAuthorization } from '../../utils/Session';

import { PasswordForgetForm } from '../PasswordForgetPage';
import PasswordChangeForm from './PasswordChangeForm';

const UserAccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(UserAccountPage);
