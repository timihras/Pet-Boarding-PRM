import styled from 'styled-components'

const Button = styled.button`
  border-radius: 5px;
  border: 2px solid ${props => props.theme.darkBgColor};
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.theme.fontSizeGeneral};
  font-weight: 700;
  letter-spacing: 1px;
  padding: ${props => props.theme.sizeXS} ${props => props.theme.sizeM};
`;

const PrimaryButton = styled(Button)`
  background: ${props => props.theme.darkBgColor};
  color: white;
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${props => props.theme.darkBgColor};
`;

export { PrimaryButton, SecondaryButton };