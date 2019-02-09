import React from 'react';

import { withAuthorization } from '../../utils/Session';

const CustomerProfilePage = props => {
  const {
    match: { params }
  } = props;
  return (
    <div>
      <h1>Customer {params.id}</h1>
    </div>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(CustomerProfilePage);
