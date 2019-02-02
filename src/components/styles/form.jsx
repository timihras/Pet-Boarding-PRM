import styled from 'styled-components'

const Input = styled.input`
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: ${props => props.theme.sizeM};
  outline: none;

  &::placeholder {
    color: ${props => props.theme.disabledTextColor};
    font-family: ${props => props.theme.generalFont};
    font-size: ${props => props.theme.fontSizeGeneral};
  }
`;

export { Input };