import styled from 'styled-components';

const Page = styled.div`
  padding: ${props => props.theme.sizeS};
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FlexResponsive = styled(Flex)`
  flex-direction: column;

  @media only screen and (min-width: ${props => props.theme.tablet}) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: ${props => props.theme.sizeS};
  margin-bottom: ${props => props.theme.sizeXS};
`;

export { Page, Card, Flex, FlexResponsive };
