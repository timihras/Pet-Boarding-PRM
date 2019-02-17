import React, { useContext } from 'react';
import styled from 'styled-components';

import { WizardCtx } from './index';

import { Heading1 } from '../../components/styles/headings';
import { Flex, FakeLink, MoreLink } from '../../components/styles/page';
import { Input } from '../../components/styles/form';

const Layout = styled.div`
  input {
    margin-bottom: ${props => props.theme.sizeXS};
  }
  .mt-1 {
    margin-top: ${props => props.theme.sizeL};
  }
`;

const FlexThird = styled(Flex)`
  input {
    flex: 1 0 50%;
  }
  input:first-child {
    flex: 1 0 30%;
    margin-right: ${props => props.theme.sizeS};
  }
`;

const WizardPetOwner = ({ state }) => {
  const dispatch = useContext(WizardCtx);
  return (
    <Layout>
      <Heading1>Owner</Heading1>
      <Input
        placeholder="First Name"
        name="firstName"
        value={state.owner.firstName}
        onChange={e =>
          dispatch({
            type: 'edit',
            payload: {
              owner: { ...state.owner, [e.target.name]: e.target.value }
            }
          })
        }
      />
      <Input
        placeholder="Last Name"
        name="lastName"
        value={state.owner.lastName}
        onChange={e =>
          dispatch({
            type: 'edit',
            payload: {
              owner: { ...state.owner, [e.target.name]: e.target.value }
            }
          })
        }
      />
      <Input
        placeholder="Address"
        name="address"
        value={state.owner.address}
        onChange={e =>
          dispatch({
            type: 'edit',
            payload: {
              owner: { ...state.owner, [e.target.name]: e.target.value }
            }
          })
        }
      />
      <FlexThird>
        <Input
          placeholder="Post Code"
          name="postCode"
          value={state.owner.postCode}
          onChange={e =>
            dispatch({
              type: 'edit',
              payload: {
                owner: { ...state.owner, [e.target.name]: e.target.value }
              }
            })
          }
        />
        <Input
          placeholder="City"
          name="city"
          value={state.owner.city}
          onChange={e =>
            dispatch({
              type: 'edit',
              payload: {
                owner: { ...state.owner, [e.target.name]: e.target.value }
              }
            })
          }
        />
      </FlexThird>
      <div className="mt-1">
        <Input
          placeholder="Phone Number"
          name="phoneNumber"
          value={state.owner.phoneNumber}
          onChange={e =>
            dispatch({
              type: 'edit',
              payload: {
                owner: { ...state.owner, [e.target.name]: e.target.value }
              }
            })
          }
        />
        <Input
          placeholder="Email"
          name="email"
          value={state.owner.email}
          type="email"
          required
          onChange={e =>
            dispatch({
              type: 'edit',
              payload: {
                owner: { ...state.owner, [e.target.name]: e.target.value }
              }
            })
          }
        />
      </div>
      <MoreLink>
        <FakeLink>or connect to existing user →</FakeLink>
      </MoreLink>
    </Layout>
  );
};

export default WizardPetOwner;
