import React from 'react'
import { Input } from '../../components/styles/form';
import styled from 'styled-components'

const SearchInput = styled(Input)`
  margin-top: ${props => props.theme.sizeXL};
`

export default function SearchBar() {
  return (
    <div>
      <SearchInput placeholder="Search by name, email, telephone, ..." />
    </div>
  )
}
