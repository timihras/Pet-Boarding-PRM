import styled from 'styled-components'

const Heading1 = styled.h1`
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.theme.fontSizeL};
  text-transform: uppercase;
  font-weight: 700;

  span {
    color: ${props => props.theme.disabledTextColor};
    font-size: ${props => props.theme.fontSizeGeneral};
    font-weight: 400;
    margin-left: 10px;
  }
`;

const Heading2 = styled.h2`

`;

const Heading3 = styled.h3`
  
`;

export { Heading1, Heading2, Heading3 }
