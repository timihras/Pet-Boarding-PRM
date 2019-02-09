import React from 'react';
import MaterialIcon from 'material-icons-react';

export const getMetaData = type => {
  switch (type) {
    case 'Arrival':
      return <MaterialIcon size={19} icon="meeting_room" color="#6DBC70" />;
    case 'Departure':
      return <MaterialIcon size={19} icon="no_meeting_room" color="#7DA7DB" />;
    case 'Meeting':
      return <MaterialIcon size={19} icon="question_answer" color="#DDA342" />;

    default:
      return <MaterialIcon size={19} icon="event_note" color="#E1688A" />;
  }
};

export const getUpcomingFive = events => {
  return events
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .slice(0, 5);
};
