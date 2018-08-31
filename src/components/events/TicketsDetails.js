import React from 'react';
import { List, Button, Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  // console.log(`selected ${value}`);
}

const ticketsNumber = (
  <Select size="large" defaultValue="2" onChange={handleChange}>
    <Option value="0">0</Option>
    <Option value="1">1</Option>
    <Option value="2">2</Option>
    <Option value="3">3</Option>
    <Option value="4">4</Option>
  </Select>
);

const Details = () => (
  <List itemLayout="horizontal">
    <List.Item actions={[ticketsNumber]}>
      <List.Item.Meta title="Palco" description="$345.200 (IVA incluido)" />
    </List.Item>
    <List.Item actions={[ticketsNumber]}>
      <List.Item.Meta title="Vip" description="$240.000 (IVA incluido)" />
    </List.Item>
    <List.Item actions={[ticketsNumber]}>
      <List.Item.Meta title="Gradiería" description="$120.000 (IVA incluido)" />
    </List.Item>
  </List>
);

const Total = () => (
  <List>
    <List.Item actions={[<h1 key="1">$123.400</h1>]}>
      <List.Item.Meta title="Total" description="IVA incluido" />
    </List.Item>
  </List>
);

const TicketsDetails = () => (
  <React.Fragment>
    <Details />
    <Total />
    <Button type="primary" size="large" block>
      Pagar
    </Button>
  </React.Fragment>
);

export default TicketsDetails;
