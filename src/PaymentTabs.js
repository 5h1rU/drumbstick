import React from 'react';
import { Tabs, Icon, Col } from 'antd';
import PaymentForm from './PaymentForm';

const { TabPane } = Tabs;

const PaymentTabs = () => (
  <Tabs defaultActiveKey="2" size="small" animated={true} tabBarGutter={24}>
    <TabPane tab="Tarjeta de Crédito" key="1">
      <PaymentForm />
    </TabPane>
    <TabPane tab="Tarjeta Débito" key="2">
      <PaymentForm />
    </TabPane>
    <TabPane tab="Efectivo" key="3">
      <PaymentForm />
    </TabPane>
  </Tabs>
);

export default PaymentTabs;
