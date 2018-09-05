import React from 'react';

const MainDetails = ({ event, place }) => {
  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.date}</p>
      <p>{place}</p>
    </div>
  );
};

export default MainDetails;
