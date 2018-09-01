import React from 'react';
import { Col, Row, Affix } from 'antd';
// import PaymentTabs from './PaymentTabs';
import EventInfo from '../components/events/EventInfo';
import TicketsDetails from '../components/events/TicketsDetails';
import { withRouter } from 'next/router';

const EventsDetails = ({ children }) => (
  <Row>
    <Col span={15} offset={1} className="hero-section">
      <EventInfo />
    </Col>
    <Col span={6} offset={1} className="hero-section tickets-price">
      <Affix>
        <TicketsDetails />
      </Affix>
    </Col>
  </Row>
);

export default withRouter(EventsDetails);
