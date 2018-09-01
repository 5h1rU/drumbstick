import React from 'react';
import { Row, Col } from 'antd';
import EventsCard from '../components/events/EventsCard';
import Link from 'next/link';

const EventsHome = () => (
  <Row>
    <Col span={22} offset={1} className="hero-section">
      <Row gutter={16}>
        <Col span={6}>
          <Link href="/event">
            <a>
              <EventsCard image="https://placeimg.com/640/480/architecture" />
            </a>
          </Link>
        </Col>
        <Col span={6}>
          <EventsCard image="https://placeimg.com/640/480/animals" />
        </Col>
        <Col span={6}>
          <EventsCard image="https://placeimg.com/640/480/tech" />
        </Col>
        <Col span={6}>
          <EventsCard image="https://placeimg.com/640/480/nature" />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default EventsHome;
