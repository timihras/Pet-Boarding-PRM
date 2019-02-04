import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

import HomePage from './HomePage'
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'
import AddNewPetFormPage from './AddNewPetFormPage'
import ItemListPage from './ItemListPage'
import NotFoundPage from './NotFoundPage'
import CustomerProfilePage from './CustomerProfilePage'
import PetProfilePage from './PetProfilePage'
import Navigation from '../components/Navigation'
import UserAccountPage from './UserAccountPage'
import PasswordForgetPage from './PasswordForgetPage'
import SettingsPage from './SettingsPage'

const AppRoutes = ({ authUser }) => (
  <Router>
    <>
      <Navigation authUser={authUser} />
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={UserAccountPage} />
        <Route path={ROUTES.SETTINGS} component={SettingsPage} />
        <Route path={ROUTES.LIST} component={ItemListPage} />
        <Route path={ROUTES.CUSTOMER_ITEM} component={CustomerProfilePage} />
        <Route path={ROUTES.PET_ITEM} component={PetProfilePage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.ADD_WIZARD} component={AddNewPetFormPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </Router>
)

export default AppRoutes
