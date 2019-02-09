import styled from 'styled-components'

export const Heading1 = styled.h1`
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.theme.fontSizeL};
  font-weight: 700;
  margin-top: ${props => props.theme.sizeXL};
  margin-bottom: ${props => props.theme.sizeM};
  text-transform: uppercase;

  &::after {
    background: ${props => props.theme.mainTextColor};
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

export const Heading2 = styled.h2`
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.theme.fontSizeXM};
  font-weight: 400;
`;

export const Heading3 = styled.h3`
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.theme.fontSizeM};
  font-weight: 400;
`;

export const Heading4 = styled.h3`
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.theme.fontSizeGeneral};
  font-weight: 700;
  margin: 0;
  padding: 0;

  span {
    font-weight: 400;
  }
`;


