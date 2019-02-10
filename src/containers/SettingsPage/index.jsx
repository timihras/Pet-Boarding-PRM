import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../../utils/Firebase';
import { withAuthorization } from '../../utils/Session';

import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const SettingsPage = () => (
  <div>
    <h1>Settings</h1>
    <p>Settings pageeee</p>

    <Switch>
      <Route exact path={ROUTES.USER_DETAILS} component={UserItem} />
      <Route exact path={ROUTES.SETTINGS} component={UserList} />
    </Switch>
  </div>
);

class UserListBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const { firebase } = this.props;

    this.unsubscribe = firebase.users().onSnapshot(snapshot => {
      const users = [];

      snapshot.forEach(doc => users.push({ ...doc.data(), uid: doc.id }));

      this.setState({
        users,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h2>Users</h2>
        {loading && <div>Loading...</div>}
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <span>
                <strong>ID: </strong> {user.id}
              </span>
              <span>
                <strong>E-Mail: </strong> {user.email}
              </span>
              <span>
                <strong>Username: </strong> {user.username}
              </span>
              <span>
                <Link
                  to={{
                    pathname: `${ROUTES.USER}/${user.uid}`,
                    state: { user }
                  }}
                >
                  Details
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class UserItemBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: null,
      ...props.location.state
    };
  }

  componentDidMount() {
    if (this.state.user) {
      return;
    }

    this.setState({
      loading: true
    });

    this.unsubscribe = this.props.firebase
      .user(this.props.match.params.id)
      .onSnapshot(snapshot => {
        this.setState({
          user: snapshot.data(),
          loading: false
        });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.doPasswordReset(this.state.user.email);
  };

  render() {
    const { user, loading } = this.state;

    return (
      <div>
        <h2>User ({this.props.match.params.id})</h2>
        {loading && <div>Loading ...</div>}

        {user && (
          <div>
            <span>
              <strong>ID:</strong> {user.uid}
            </span>
            <span>
              <strong>E-Mail:</strong> {user.email}
            </span>
            <span>
              <strong>Username:</strong> {user.username}
            </span>
            <span>
              <button type="button" onClick={this.onSendPasswordResetEmail}>
                Send Password Reset
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);

const UserList = withFirebase(UserListBase);
const UserItem = withFirebase(UserItemBase);

export default compose(withAuthorization(condition))(SettingsPage);
