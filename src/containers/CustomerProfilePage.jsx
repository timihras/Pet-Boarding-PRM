import React from 'react'

import { withAuthorization } from '../utils/Session'

const CustomerProfilePage = (props) => {
  const { params } = props.match;
  return (
    <div>
      Customer {params.id}
    </div>
  )
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(CustomerProfilePage);

