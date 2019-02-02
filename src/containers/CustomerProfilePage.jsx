import React from 'react'

const CustomerProfilePage = (props) => {
  const { params } = props.match;
  return (
    <div>
      Customer {params.id}
    </div>
  )
}

export default CustomerProfilePage;

