import React from 'react';

import { PasswordForgetForm } from './PasswordForgetPage';
import PasswordChangeForm from '../components/PasswordChangeForm';

const UserAccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

export default UserAccountPage;