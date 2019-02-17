import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../../utils/Firebase';

import * as ROUTES from '../../constants/routes';

const UserList = props => {
  const initialState = { loading: true, users: [] };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const { firebase } = props;
    return firebase.users().onSnapshot(snapshot => {
      const users = [];
      snapshot.forEach(doc => users.push({ ...doc.data(), uid: doc.id }));
      setState({
        loading: false,
        users
      });
    });
  }, []);

  const { users, loading } = state;

  return (
    <div>
      <h2>Users</h2>
      {loading && <div>Loading...</div>}
      <ul>
        {users.map(user => (
          <li key={user.uid}>
            <div>
              <strong>ID: </strong> {user.uid}
            </div>
            <div>
              <strong>E-Mail: </strong> {user.email}
            </div>
            <div>
              <strong>Username: </strong> {user.username}
            </div>
            <div>
              <Link
                to={{
                  pathname: `${ROUTES.USER}/${user.uid}`,
                  state: { user }
                }}
              >
                Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withFirebase(UserList);
