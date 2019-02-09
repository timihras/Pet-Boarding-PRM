import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { withAuthorization } from '../../utils/Session'

import * as ROUTES from '../../constants/routes'

import Search from './Search';
import Statistics from './Statistics';
import CalendarSummary from '../CalendarPage/CalendarSummary'
import { FlexResponsive } from '../../components/styles/page'

const MoreLink = styled.div`
  text-align: center;
  margin: ${props => props.theme.sizeL} auto 0;
`;

class HomePage extends Component {
  render() {
    return (
      <>
        <Search />
        <FlexResponsive>
          <CalendarSummary />
          <MoreLink><Link to={ROUTES.CALENDAR}>View all →</Link></MoreLink>
          <Statistics />
        </FlexResponsive>
      </>
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(HomePage)