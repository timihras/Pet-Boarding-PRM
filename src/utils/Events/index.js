import React from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const getMetaData = type => {
  switch (type) {
    case 'Arrival':
      // return <Icon icon="add-row-bottom" iconSize={iconSize} color="#6DBC70" />;
      return <Icon iconName="CompassNW" className="ms-IconExample" />;
    case 'Departure':
      // return (
      //   <Icon icon="remove-row-bottom" iconSize={iconSize} color="#7DA7DB" />
      // );
      return <Icon iconName="CompassNW" className="ms-IconExample" />;
    case 'Meeting':
      // return <Icon icon="send-to-graph" iconSize={iconSize} color="#DDA342" />;
      return <Icon iconName="CompassNW" className="ms-IconExample" />;

    default:
      // return <Icon icon={icon} iconSize={iconSize} color="#E1688A" />;
      return <Icon iconName="CompassNW" className="ms-IconExample" />;
  }
};

export const getUpcomingFive = events => {
  return events
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .slice(0, 5);
};
