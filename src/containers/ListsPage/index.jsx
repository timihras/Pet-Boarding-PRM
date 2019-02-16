import React from 'react';

import { withAuthorization } from '../../utils/Session';

const ListsPage = () => (
  <div>
    <h1>Customer & Pet List</h1>
    <p>In construction...</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ListsPage);
