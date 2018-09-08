import React from 'react';
import { List } from 'antd';
import Total from './tickets/Total';
import TicketsQuantity from './tickets/Quantity';

const TicketsDetails = ({ ticketsInfo, loading, quantity, total, handler }) => {
  return (
    <React.Fragment>
      <List
        itemLayout="horizontal"
        dataSource={ticketsInfo}
        loading={loading}
        renderItem={ticket => (
          <List.Item
            actions={[
              <TicketsQuantity
                quantity={quantity(ticket._id)}
                key={ticket._id}
                handler={handler(ticket._id)}
              />
            ]}
          >
            <List.Item.Meta
              title={ticket.name}
              description={`$ ${ticket.price}.000 (IVA incluido)`}
            />
          </List.Item>
        )}
      />
      <Total total={total} />
    </React.Fragment>
  );
};

export default TicketsDetails;
