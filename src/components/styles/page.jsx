import styled from 'styled-components'

const Page = styled.div`
  color: ${props => props.theme.mainTextColor};
`;

const Card = styled.div`
  border-radius: 5px;
  box-shadow: ${props => props.theme.boxShadow};
  margin: 1rem;
  padding: 1rem;
`;

export { Page, Card }