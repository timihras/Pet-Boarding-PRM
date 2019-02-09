import styled from 'styled-components'

const Heading1 = styled.h1`
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.theme.fontSizeL};
  text-transform: uppercase;
  font-weight: 700;

  &::after {
    background: ${props => props.theme.darkBgColor};
    content: '';
    display: block;
    width: 20px;
    height: 4px;
    border-radius: 2px;
    margin-top: ${props => props.theme.sizeXS}
  }

  span {
    color: ${props => props.theme.disabledTextColor};
    font-size: ${props => props.theme.fontSizeGeneral};
    font-weight: 400;
    margin-left: 10px;
  }
`;

const Heading2 = styled.h2`
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.theme.fontSizeXM};
  font-weight: 400;
`;

const Heading3 = styled.h3`
font-family: ${props => props.theme.headingFont};
font-size: ${props => props.theme.fontSizeM};
font-weight: 400;
`;

export { Heading1, Heading2, Heading3 }
