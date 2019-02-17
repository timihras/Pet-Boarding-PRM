import React, { useState, useContext } from 'react';
import { withFirebase } from '../../../utils/Firebase';

import { AuthUserContext } from '../../../utils/Session';

const AddNewCustomerPage = props => {
  const initialFormValues = {
    firstName: '',
    lastName: '',
    email: ''
  };

  const [values, setValues] = useState(initialFormValues);
  const authUser = useContext(AuthUserContext);
  const { firebase } = props;

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    firebase.customers().add({
      ...values,
      createdBy: authUser.uid,
      createdOn: new Date()
    });

    // alert(JSON.stringify(values));

    setValues(initialFormValues);
  };

  return (
    <div>
      <h1>Add New Customer</h1>
      <form onSubmit={onSubmit}>
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          value={values.firstName}
          onChange={onChange}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          value={values.lastName}
          onChange={onChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={onChange}
        />
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
};

export default withFirebase(AddNewCustomerPage);
