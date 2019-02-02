import React from 'react'

const CustomerProfilePageContainer = (props) => {
  const { params } = props.match;
  return (
    <div>
      Customer {params.id}
    </div>
  )
}

export default CustomerProfilePageContainer;

