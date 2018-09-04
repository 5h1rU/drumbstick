import '../asserts/styles.less';
import React from 'react';
import { Layout } from 'antd';
import EventsHome from './EventsHome';

const { Content } = Layout;

const Main = () => (
  <Content>
    <EventsHome />
  </Content>
);

export default Main;
