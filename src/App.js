import React from 'react';
import { Layout } from 'antd';
import EventsDetails from './layouts/EventsDetails';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';

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
          {/* <EventsHome /> */}
          <EventsDetails />
        </Content>
        <MainFooter />
      </Layout>
    );
  }
}
