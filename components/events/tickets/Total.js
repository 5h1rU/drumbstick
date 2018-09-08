import React from 'react';
import { List } from 'antd';

const Total = ({ total }) => (
  <React.Fragment>
    <List>
      <List.Item
        actions={[
          <h1 key="1">
            $ {total}
            .000
          </h1>
        ]}
      >
        <List.Item.Meta title="Total" description="IVA incluido" />
      </List.Item>
    </List>
  </React.Fragment>
);

export default Total;
