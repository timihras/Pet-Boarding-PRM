import React from 'react';
import { Link } from 'react-router-dom';
import { withAuthorization } from '../../utils/Session';

import * as ROUTES from '../../constants/routes';

import Search from './Search';
import Statistics from './Statistics';
import CalendarSummary from '../CalendarPage/CalendarSummary';
import { FlexResponsive, MoreLink } from '../../components/styles/page';

const HomePage = () => (
  <>
    <Search />
    <FlexResponsive>
      <div>
        <CalendarSummary />
        <MoreLink>
          <Link to={ROUTES.CALENDAR}>View all →</Link>
        </MoreLink>
      </div>
      <Statistics />
    </FlexResponsive>
  </>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
