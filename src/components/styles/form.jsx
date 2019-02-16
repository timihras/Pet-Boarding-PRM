import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: ${props => props.theme.sizeXM} ${props => props.theme.sizeM};
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${props => props.theme.disabledTextColor};
    font-family: ${props => props.theme.generalFont};
    font-size: ${props => props.theme.fontSizeGeneral};
  }
`;

export const TextArea = styled.textarea`
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  font-family: ${props => props.theme.generalFont};
  padding: ${props => props.theme.sizeXM} ${props => props.theme.sizeM};
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${props => props.theme.disabledTextColor};
    font-family: ${props => props.theme.generalFont};
    font-size: ${props => props.theme.fontSizeGeneral};
  }
`;

export const Form = styled.form``;
