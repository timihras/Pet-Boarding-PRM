import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../../utils/Firebase';
import { withAuthorization } from '../../utils/Session';

const CustomerListBase = props => {
  const { firebase } = props;
  const [state, setState] = useState({ loading: true, customers: [] });

  useEffect(() => {
    return firebase.customers().onSnapshot(snapshot => {
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

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(CustomerListBase);
