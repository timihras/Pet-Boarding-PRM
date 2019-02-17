import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization } from '../../utils/Session';

import UserList from './UserList';
import UserProfile from './UserProfile';

import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const SettingsPage = () => (
  <div>
    <h1>Settings</h1>
    <p>Settings pageeee</p>

    <Switch>
      <Route exact path={ROUTES.USER_DETAILS} component={UserProfile} />
      <Route exact path={ROUTES.SETTINGS} component={UserList} />
    </Switch>
  </div>
);

const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);

export default compose(withAuthorization(condition))(SettingsPage);
