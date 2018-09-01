import '../asserts/styles.less';
import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'next/router';
import EventsDetails from './event';
import EventsHome from './EventsHome';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';
// import TicketsDetails from '../components/events/TicketsDetails';
// import PaymentForm from '../components/purchasingFlow/PaymentForm';

const { Content } = Layout;

export default class App extends React.Component {
  state = {
    name: 'Drumbstick',
    collapsed: false
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <MainHeader />
        <Content>
          <EventsHome />
          {/* <EventsDetails /> */}
          {/* <TicketsDetails path="/" />
            <PaymentForm path="payment" />
          </EventsDetails> */}
        </Content>
        <MainFooter />
      </Layout>
    );
  }
}
