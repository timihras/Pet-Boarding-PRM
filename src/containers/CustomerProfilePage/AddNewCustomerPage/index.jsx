import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { compose } from 'recompose';
import { withFirebase } from '../../../utils/Firebase';

import { Heading1 } from '../../../components/styles/headings';
import { Flex, FakeLink, FlexThird } from '../../../components/styles/page';
import { Input } from '../../../components/styles/form';
import { PrimaryButton } from '../../../components/styles/buttons';

import { AuthUserContext, withAuthorization } from '../../../utils/Session';

const Layout = styled.form`
  margin-bottom: ${props => props.theme.sizeL};

  input {
    margin-bottom: ${props => props.theme.sizeXS};
  }
  .mt-1 {
    margin-top: ${p => p.theme.sizeL};
    justify-content: space-around;
    align-items: center;
  }
`;

const AddNewCustomerPage = props => {
  const initialFormValues = {
    firstName: '',
    lastName: '',
    address: '',
    postCode: '',
    city: '',
    phoneNumber: '',
    email: ''
  };

  const [values, setValues] = useState(initialFormValues);
  const authUser = useContext(AuthUserContext);
  const { firebase, history } = props;

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClearForm = () => {
    setValues(initialFormValues);
  };

  const onCreateUser = e => {
    e.preventDefault();

    firebase.customers().add({
      ...values,
      _createdBy: authUser.uid,
      _createdOn: new Date()
    });

    // alert(JSON.stringify(values));

    setValues(initialFormValues);
    history.goBack();
  };

  return (
    <Layout onSubmit={onCreateUser}>
      <Heading1>Add new Customer</Heading1>
      <Input
        placeholder="First Name"
        name="firstName"
        type="text"
        value={values.firstName}
        onChange={onChange}
        autoFocus
      />
      <Input
        placeholder="Last Name"
        name="lastName"
        type="text"
        value={values.lastName}
        onChange={onChange}
      />
      <Input
        placeholder="Address"
        name="address"
        type="text"
        value={values.address}
        onChange={onChange}
      />
      <FlexThird>
        <Input
          placeholder="Post Code"
          name="postCode"
          type="text"
          value={values.postCode}
          onChange={onChange}
        />
        <Input
          placeholder="City"
          name="city"
          type="text"
          value={values.city}
          onChange={onChange}
        />
      </FlexThird>
      <div className="mt-1">
        <Input
          placeholder="Phone Number"
          name="phoneNumber"
          type="text"
          value={values.phoneNumber}
          onChange={onChange}
        />
        <Input
          placeholder="Email"
          name="email"
          type="email"
          value={values.email}
          required
          onChange={onChange}
        />
      </div>
      <Flex className="mt-1">
        <FakeLink onClick={onClearForm}>Clear form</FakeLink>
        <PrimaryButton type="submit">Submit &rarr;</PrimaryButton>
      </Flex>
    </Layout>
  );
};

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(AddNewCustomerPage);
