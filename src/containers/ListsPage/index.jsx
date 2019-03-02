import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { withAuthorization } from '../../utils/Session';
import CustomersList from './CustomersList';
import PetsList from './PetsList';

const ListsPage = () => (
  <div>
    <h1>Customer List</h1>
    <CustomersList />
    <p>
      <Link to={ROUTES.ADD_CUSTOMER}>Add customer &rarr;</Link>
    </p>
    <h1>Pet List</h1>
    <PetsList />
    <p>
      <Link to={ROUTES.ADD_PET}>Add Pet &rarr;</Link>
    </p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ListsPage);
