import styled from 'styled-components'

const Page = styled.div`
  color: ${props => props.theme.mainTextColor};
`;

const Card = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: ${props => props.theme.sizeM};
`;

export { Page, Card }