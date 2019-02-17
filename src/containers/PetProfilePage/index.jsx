import React from 'react';

import { withAuthorization } from '../../utils/Session';

const PetProfilePage = () => {
  return (
    <div>
      <h1>Pet</h1>
    </div>
  );
};

// export default PetProfilePage;

const condition = authUser => !!authUser;

export default withAuthorization(condition)(PetProfilePage);
