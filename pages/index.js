import '../asserts/styles.less';
import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'next/router';
import EventsDetails from './event';
import EventsHome from './EventsHome';
// import TicketsDetails from '../components/events/TicketsDetails';
// import PaymentForm from '../components/purchasingFlow/PaymentForm';

const { Content } = Layout;

const Main = () => (
  <Content>
    <EventsHome />
    {/* <EventsDetails /> */}
    {/* <TicketsDetails path="/" />
            <PaymentForm path="payment" />
          </EventsDetails> */}
  </Content>
);

export default Main;
