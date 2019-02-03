import React from 'react'

import { withAuthorization } from '../utils/Session'

const ItemListPage = () => (
  <div>
    Customer & Pet List
  </div>
);

const condition = authUser => !!authUser

export default withAuthorization(condition)(ItemListPage)