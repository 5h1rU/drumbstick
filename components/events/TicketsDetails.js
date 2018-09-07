import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, Button, Select } from 'antd';
import Router from 'next/router';
import { addTicket, removeTicket } from '../../store/order/actions';
import { getTotal, getOrder } from '../../store/order/reducer';

const { Option } = Select;

const event = () => {
  const href = '/event/payment';
  const as = href;
  Router.push(href, as, { shallow: true });
};

const TicketsQuantity = ({ handler, quantity }) => {
  return (
    <Select size="large" defaultValue={quantity()} onChange={handler}>
      <Option value="0">0</Option>
      <Option value="1">1</Option>
      <Option value="2">2</Option>
      <Option value="3">3</Option>
      <Option value="4">4</Option>
    </Select>
  );
};

const Total = ({ total }) => {
  return (
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
      <Button type="primary" size="large" block onClick={event}>
        Pagar
      </Button>
    </React.Fragment>
  );
};

const TicketsDetails = ({
  ticketsInfo,
  loading,
  addTicket,
  removeTicket,
  total,
  order
}) => {
  return (
    <React.Fragment>
      <List
        locale="dael dale dalde"
        itemLayout="horizontal"
        dataSource={ticketsInfo}
        loading={loading}
        renderItem={ticket => (
          <List.Item
            actions={[
              <TicketsQuantity
                quantity={() =>
                  order.tickets[ticket._id]
                    ? order.tickets[ticket._id].quantity
                    : '0'
                }
                key={ticket._id}
                handler={value =>
                  value === '0'
                    ? removeTicket(ticket._id)
                    : addTicket({ ...ticket, quantity: value })
                }
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

const mapStateToProps = state => ({
  total: getTotal(state.order, state.tickets),
  order: getOrder(state.order)
});

//  this will go to the parent component
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTicket, removeTicket }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsDetails);
