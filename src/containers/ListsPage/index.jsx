import React from 'react';

import { withAuthorization } from '../../utils/Session';
import { withFirebase } from '../../utils/Firebase';

const ListsPage = () => (
  <div>
    <h1>Customer & Pet List</h1>
    <p>In construction...</p>

    <CustomerList />
  </div>
);

const CustomerListBase = () => {
  return <div />;
};

const CustomerList = withFirebase(CustomerListBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ListsPage);
