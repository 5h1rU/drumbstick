import React from 'react';
import { Col, Row, Affix } from 'antd';
import PaymentTabs from './PaymentTabs';

const EventsDetails = () => (
  <Row>
    <Col span={15} offset={1} className="hero-section" />
    <Col span={6} offset={1} className="hero-section tickets-price">
      <Affix>
        {/* <TicketsDetails /> */}
        {/* <PaymentForm /> */}
        <PaymentTabs />
      </Affix>
    </Col>
  </Row>
);

export default EventsDetails;
