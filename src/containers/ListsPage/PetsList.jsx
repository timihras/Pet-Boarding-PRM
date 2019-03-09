import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../../utils/Firebase';
import { withAuthorization } from '../../utils/Session';

const PetsList = props => {
  const { firebase } = props;
  const [state, setState] = useState({ loading: true, pets: [] });

  useEffect(() => {
    return firebase.pets().onSnapshot(snapshot => {
      const pets = [];
      snapshot.forEach(doc => pets.push({ ...doc.data(), uid: doc.id }));
      setState({ loading: false, pets });
    });
  }, []);

  const { loading, pets } = state;

  return (
    <div>
      {loading && <div>Loading...</div>}

      {!loading && pets && pets.length === 0 && <p>No pets found..</p>}

      {pets &&
        pets.map(pet => (
          <div key={pet.uid}>
            {pet.firstName} {pet.lastName}
          </div>
        ))}
    </div>
  );
};

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(PetsList);
