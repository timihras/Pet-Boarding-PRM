import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

import HomePage from './HomePage'
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'
import AddNewPetForm from './AddNewPetFormPage'
import ItemListPage from './ItemListPage'
import NotFoundPage from './NotFoundPage'
import CustomerProfilePage from './CustomerProfilePage';
import PetProfilePage from './PetProfilePage';
import Navigation from '../components/Navigation';

const AppRoutes = ({ authUser }) => (
  <Router>
    <>
      <Navigation authUser={authUser} />
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.LIST} component={ItemListPage} />
        <Route path={ROUTES.CUSTOMER_ITEM} component={CustomerProfilePage} />
        <Route path={ROUTES.PET_ITEM} component={PetProfilePage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.ADD_WIZARD} component={AddNewPetForm} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </Router>
)

export default AppRoutes
