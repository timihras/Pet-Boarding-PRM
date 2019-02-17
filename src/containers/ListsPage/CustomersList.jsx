import React, { useState, useEffect } from 'react';
import { withFirebase } from '../../utils/Firebase';

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

export default withFirebase(CustomerListBase);
