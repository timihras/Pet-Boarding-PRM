import React, { useState, useEffect } from 'react';

import { withFirebase } from '../../utils/Firebase';

const UserProfile = props => {
  const {
    match: {
      params: { id }
    },
    location,
    history,
    firebase
  } = props;

  const [state, setState] = useState({
    loading: true,
    user: null,
    ...location.state
  });
  const { loading, user } = state;

  const onSendPasswordResetEmail = () => {
    firebase.doPasswordReset(user.email);
  };

  useEffect(() => {
    if (user) {
      setState({ ...state, loading: false });
      return undefined;
    }

    return firebase.user(id).onSnapshot(snapshot => {
      setState({
        user: snapshot.data(),
        loading: false
      });
    });
  }, []);

  return (
    <div>
      <h2>User</h2>
      {loading && <div>Loading ...</div>}

      {user && (
        <div>
          <button type="button" onClick={history.goBack}>
            Go back
          </button>
          <div>
            <strong>ID:</strong> {user.uid}
          </div>
          <div>
            <strong>E-Mail:</strong> {user.email}
          </div>
          <div>
            <strong>Username:</strong> {user.username}
          </div>
          <div>
            <button type="button" onClick={onSendPasswordResetEmail}>
              Send Password Reset Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// class UserProfilex extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: false,
//       user: null,
//       ...props.location.state
//     };
//   }

//   componentDidMount() {
//     if (this.state.user) {
//       return;
//     }

//     this.setState({
//       loading: true
//     });

//     this.unsubscribe = this.props.firebase
//       .user(this.props.match.params.id)
//       .onSnapshot(snapshot => {
//         this.setState({
//           user: snapshot.data(),
//           loading: false
//         });
//       });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   onSendPasswordResetEmail = () => {
//     this.props.firebase.doPasswordReset(this.state.user.email);
//   };

//   render() {
//     const { user, loading } = this.state;

//     return (
//       <div>
//         <h2>User ({this.props.match.params.id})</h2>
//         {loading && <div>Loading ...</div>}

//         {user && (
//           <div>
//             <span>
//               <strong>ID:</strong> {user.uid}
//             </span>
//             <span>
//               <strong>E-Mail:</strong> {user.email}
//             </span>
//             <span>
//               <strong>Username:</strong> {user.username}
//             </span>
//             <span>
//               <button type="button" onClick={this.onSendPasswordResetEmail}>
//                 Send Password Reset
//               </button>
//             </span>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default withFirebase(UserProfile);
