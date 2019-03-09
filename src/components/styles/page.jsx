import styled from 'styled-components';

export const Page = styled.div`
  padding: ${props => props.theme.sizeS};
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexResponsive = styled(Flex)`
  flex-direction: column;

  @media only screen and (min-width: ${props => props.theme.tablet}) {
    flex-direction: row;
  }
`;

export const FlexThird = styled(Flex)`
  input {
    flex: 1 0 50%;
  }
  input:first-child {
    flex: 1 0 30%;
    margin-right: ${props => props.theme.sizeS};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-column-gap: ${props => props.theme.sizeXS};
`;

export const Card = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: ${props => props.theme.sizeS};
  margin-bottom: ${props => props.theme.sizeXS};
`;

export const MoreLink = styled.div`
  text-align: center;
  margin: ${props => props.theme.sizeL} auto 0;
`;

export const FakeLink = styled.div`
  color: ${props => props.theme.accentPrimaryColor};
  text-decoration: none;
  cursor: pointer;
`;

export const GridBreed = styled(Grid)`
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: ${props => props.theme.sizeL};
  margin: ${props => props.theme.sizeL} ${props => props.theme.sizeXS} 0;
  div {
    align-self: center;
  }
  span:first-child {
    svg {
      padding: 5px;
    }
  }
`;

export const GridDob = styled(Grid)`
  grid-template-columns: 2fr 3fr 2fr;
  grid-gap: ${props => props.theme.sizeM};
`;
