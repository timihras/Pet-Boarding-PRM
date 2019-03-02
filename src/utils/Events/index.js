import React from 'react';
import { Icon } from '@blueprintjs/core';

const icon = 'calendar';
const iconSize = Icon.SIZE_STANDARD;

export const getMetaData = type => {
  switch (type) {
    case 'Arrival':
      return <Icon icon={icon} iconSize={iconSize} />;
    case 'Departure':
      return <Icon icon={icon} iconSize={iconSize} />;
    case 'Meeting':
      return <Icon icon={icon} iconSize={iconSize} />;

    default:
      return <Icon icon={icon} iconSize={iconSize} />;
  }
};

export const getUpcomingFive = events => {
  return events
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .slice(0, 5);
};
