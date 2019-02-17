import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignupPage';
import { withFirebase } from '../../utils/Firebase';
import * as ROUTES from '../../constants/routes';
import { PasswordForgetLink } from '../PasswordForgetPage';

import Logo from '../../components/icons/logo';
import { Form, Input } from '../../components/styles/form';
import { Heading2 } from '../../components/styles/headings';
import { PrimaryButton } from '../../components/styles/buttons';

const Layout = styled.div`
  text-align: center;

  svg {
    margin-top: ${props => props.theme.sizeXL};
  }

  form {
    margin-bottom: ${props => props.theme.sizeXL};
    margin-top: ${props => props.theme.sizeXL};
  }
`;

const SignInPage = () => (
  <Layout>
    <Logo />
    <SignInForm />
    <SignUpLink />
  </Layout>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class SignInFormBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;
    const { firebase, history } = this.props;

    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <Input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <PasswordForgetLink />
        <Heading2>Login</Heading2>
        <PrimaryButton disabled={isInvalid} type="submit">
          &rarr;
        </PrimaryButton>

        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
