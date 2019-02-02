import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

import HomePageContainer from './HomePageContainer'
import SignInPageContainer from './SignInPageContainer'
import SignUpPageContainer from './SignUpPageContainer'
import AddNewPetFormContainer from './AddNewPetFormContainer'
import ItemListPageContainer from './ItemListPageContainer'
import NotFoundPageContainer from './NotFoundPageContainer'
import CustomerProfilePageContainer from './CustomerProfilePageContainer';
import PetProfilePageContainer from './PetProfilePageContainer';
import Navigation from '../components/Navigation';

const AppRoutes = () => (
  <Router>
    <>
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePageContainer} />
        <Route path={ROUTES.LIST} component={ItemListPageContainer} />
        <Route path={ROUTES.CUSTOMER_ITEM} component={CustomerProfilePageContainer} />
        <Route path={ROUTES.PET_ITEM} component={PetProfilePageContainer} />
        <Route path={ROUTES.SIGN_IN} component={SignInPageContainer} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPageContainer} />
        <Route path={ROUTES.ADD_WIZARD} component={AddNewPetFormContainer} />
        <Route component={NotFoundPageContainer} />
      </Switch>
    </>
  </Router>
)

export default AppRoutes
