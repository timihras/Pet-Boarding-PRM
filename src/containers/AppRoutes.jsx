import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import { Page } from '../components/styles/page';
import DrawerMenu from '../components/DrawerMenu';

import HomePage from './HomePage';
import SignInPage from './SigninPage';
import SignUpPage from './SignupPage';
import AddNewWizardPage from './AddNewWizardPage';
import ListsPage from './ListsPage';
import NotFoundPage from './NotFoundPage';
import CustomerProfilePage from './CustomerProfilePage';
import PetProfilePage from './PetProfilePage';
import UserAccountPage from './UserAccountPage';
import PasswordForgetPage from './PasswordForgetPage';
import SettingsPage from './SettingsPage';
import CalendarPage from './CalendarPage';
import AddNewEventPage from './CalendarPage/AddNewEventPage';
import AddNewCustomerPage from './CustomerProfilePage/AddNewCustomerPage';
import AddNewPetPage from './PetProfilePage/AddNewPetPage';

const AppRoutes = ({ authUser }) => (
  <Router>
    <Page>
      <DrawerMenu authUser={authUser} />
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />

        <Route path={ROUTES.SETTINGS} component={SettingsPage} />
        <Route path={ROUTES.ACCOUNT} component={UserAccountPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />

        <Route path={ROUTES.LIST} component={ListsPage} />
        <Route path={ROUTES.CUSTOMER_ITEM} component={CustomerProfilePage} />
        <Route path={ROUTES.ADD_CUSTOMER} component={AddNewCustomerPage} />
        <Route path={ROUTES.PET_ITEM} component={PetProfilePage} />
        <Route path={ROUTES.ADD_PET} component={AddNewPetPage} />

        <Route path={ROUTES.PET_ITEM} component={PetProfilePage} />
        <Route path={ROUTES.ADD_WIZARD} component={AddNewWizardPage} />

        <Route path={ROUTES.CALENDAR} component={CalendarPage} />
        <Route path={ROUTES.ADD_EVENT} component={AddNewEventPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </Page>
  </Router>
);

export default AppRoutes;
