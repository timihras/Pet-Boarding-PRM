import styled from 'styled-components'

const Input = styled.input`
  border: none;
  width: 100%;
  box-shadow: ${props => props.theme.boxShadow};
`;

export { Input };