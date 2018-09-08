import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const TicketsQuantity = ({ handler, quantity }) => {
  return (
    <Select
      size="large"
      key={quantity}
      defaultValue={quantity}
      onChange={value => handler(value)}
    >
      <Option value="0">0</Option>
      <Option value="1">1</Option>
      <Option value="2">2</Option>
      <Option value="3">3</Option>
      <Option value="4">4</Option>
    </Select>
  );
};

export default TicketsQuantity;
