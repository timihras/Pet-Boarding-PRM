import React from 'react';
import styled from 'styled-components';
import { Input } from '../../components/styles/form';

const SearchInput = styled(Input)`
  margin-top: ${props => props.theme.sizeXL};
`;

export default function SearchBar() {
  return (
    <div>
      <SearchInput placeholder="Search by name, email, telephone, ..." />
    </div>
  );
}
