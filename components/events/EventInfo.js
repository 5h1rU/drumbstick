import React from 'react';
import { Card, Divider } from 'antd';
import MainDetails from './MainDetails';

const EventInfo = ({ event, venue }) => (
  <Card
    cover={
      <img src="https://img3.stockfresh.com/files/p/photocreo/m/45/1525923_stock-photo-people-on-music-concert.jpg" />
    }
  >
    <MainDetails event={event} place={venue.name} />
    <Divider orientation="left">Descripción</Divider>
    <section dangerouslySetInnerHTML={{ __html: event.description }} />
    <Divider orientation="left">Ubicación</Divider>
    <div>
      <h2>{venue.name}</h2>
      <img style={{ width: '100%' }} src="../../static/map.png" />
    </div>
  </Card>
);

export default EventInfo;
