import React from 'react';
// import { withFirebase } from '../../utils/Firebase';

const CalendarPage = () => {
  return (
    <div>
      <h1>Calendar Page</h1>
      <p>In construction...</p>
      {/* <UserDetails /> */}
    </div>
  );
};

// const UserDetailsBase = props => {
//   // const { firebase } = props;

//   // const [user, setUser] = useState({
//   //   isLoading: true,
//   //   data: null
//   // });

//   // useEffect(() => {
//   //   const unsubscribe = firebase.auth.onAuthStateChanged(authState => {
//   //     setUser({ isLoading: false, user: authState });
//   //     console.log(user);
//   //   });
//   //   return unsubscribe;
//   // }, [user]);

//   // return <p>Test {user.data && user.data.email}</p>;
// };

// const UserDetails = withFirebase(UserDetailsBase);

export default CalendarPage;
