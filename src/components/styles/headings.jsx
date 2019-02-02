import styled from 'styled-components'

const Heading1 = styled.h1`
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.theme.fontSizeL};
  text-transform: uppercase;
  font-weight: 700;

  span {
    font-size: ${props => props.theme.fontSizeGeneral};
    font-weight: 400;
    margin-left: 10px;
  }
`;

export { Heading1 }
