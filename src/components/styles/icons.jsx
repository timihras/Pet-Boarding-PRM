import styled from 'styled-components';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const Icon18 = styled(Icon)`
  color: ${props => props.color || props.theme.mainTextColor};
  font-size: 18px;
  height: 18px;
  width: 18px;
`;

export const Icon24 = styled(Icon)`
  color: ${props => props.color || props.theme.mainTextColor};
  font-size: 24px;
  height: 24px;
  width: 24px;
`;

export const Icon38 = styled(Icon)`
  color: ${props => props.color || props.theme.mainTextColor};
  font-size: 38px;
  height: 38px;
  width: 38px;
`;
