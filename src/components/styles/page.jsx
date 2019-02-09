import styled from 'styled-components'

const Page = styled.div`
  padding: ${props => props.theme.sizeS};
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: ${props => props.theme.sizeS};
`;

export { Page, Card, Flex }