import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { withAuthorization } from '../../utils/Session';
import { withFirebase } from '../../utils/Firebase';

const ListsPage = () => (
  <div>
    <h1>Customer List</h1>
    <CustomerList />
    <p>
      <Link to={ROUTES.ADD_CUSTOMER}>Add customer &rarr;</Link>
    </p>
    <h1>Pet List</h1>
    <p>In construction...</p>
  </div>
);

const CustomerListBase = props => {
  const { firebase } = props;
  const [state, setState] = useState({ loading: true, customers: [] });

  useEffect(() => {
    firebase.customers().onSnapshot(snapshot => {
      const customers = [];
      snapshot.forEach(doc => customers.push({ ...doc.data(), uid: doc.id }));
      setState({ loading: false, customers });
    });
  }, []);

  const { loading, customers } = state;

  return (
    <div>
      {loading && <div>Loading...</div>}
      {customers &&
        customers.map(customer => (
          <div key={customer.uid}>
            {customer.firstName} {customer.lastName}
          </div>
        ))}
    </div>
  );
};

const CustomerList = withFirebase(CustomerListBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ListsPage);
