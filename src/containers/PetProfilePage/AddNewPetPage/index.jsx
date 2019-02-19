import React from 'react';
import { withAuthorization } from '../../../utils/Session';

const AddNewPetPage = () => {
  return (
    <div>
      <h1>Add New Pet</h1>
      <p>Page in construction...</p>
    </div>
  );
};

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AddNewPetPage);
