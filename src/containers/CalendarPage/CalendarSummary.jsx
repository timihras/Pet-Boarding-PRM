import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import { Heading1, Heading4 } from '../../components/styles/headings';
import { getMetaData, getUpcomingFive } from '../../utils/Events/index';

import { EVENTS } from '../../constants/data';
import { Card, Flex } from '../../components/styles/page';

const EventDesc = styled.div`
  font-size: ${props => props.theme.fontSizeXS};
`;

const EventIcon = styled.div`
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: ${props => props.theme.sizeXS};
`;

const CalendarSummary = () => (
  <div>
    <Heading1>
      Today<span>10</span>
    </Heading1>
    <div>
      {getUpcomingFive(EVENTS).map(
        ({ id, start, end, type, pet: { name, breed } }) => (
          <Card key={id}>
            <Flex>
              <EventIcon>{getMetaData(type)}</EventIcon>
              <div>
                <Heading4>
                  {name}
                  <span>, {breed}</span>
                </Heading4>
                <EventDesc>
                  {type} at {moment(start).format('LT')} -{' '}
                  {moment(end).format('LT')}
                </EventDesc>
              </div>
            </Flex>
          </Card>
        )
      )}
    </div>
  </div>
);

export default CalendarSummary;
