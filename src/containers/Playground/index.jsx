import React from 'react';

import { withAuthorization } from '../../utils/Session';

import { Page, Card } from '../../components/styles/page';
import { Input } from '../../components/styles/form';
import {
  PrimaryButton,
  SecondaryButton
} from '../../components/styles/buttons';
import { Heading1 } from '../../components/styles/headings';
import Menu from '../../components/icons/menu-icon';

const HomePage = () => (
  <Page>
    <Menu />
    <Heading1>
      This is a Home Page<span>10</span>
    </Heading1>
    <SecondaryButton>← prev</SecondaryButton>
    <PrimaryButton>next →</PrimaryButton>
    <div>
      <Input placeholder="Iskanje" />
    </div>
    <Card>Test</Card>
  </Page>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
