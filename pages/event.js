import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row, Affix, Button } from 'antd';
// import PaymentTabs from './PaymentTabs';
import EventInfo from '../components/events/EventInfo';
import TicketsDetails from '../components/events/TicketsDetails';
import { addTicket, removeTicket, getTotal } from '../store/cart/actions';
import { fetchEventRequest } from '../store/event/actions';
import { getEvent, getFetchingStatus } from '../store/event/reducer';
import { getVenue } from '../store/venues/reducer';
import { getTicketsByEventId } from '../store/tickets/reducer';
import { createCartRequest } from '../store/cart/actions';
import { Router } from '../routes';
import {
  getCart,
  getTotalPrice,
  getQuantityByTicket
} from '../store/cart/reducer';

class EventsDetails extends React.Component {
  static async getInitialProps({ ctx }) {
    return ctx.query;
  }
  componentDidMount() {
    if (!this.props.event._id || this.props.event._id !== this.props.id) {
      this.props.fetchEventRequest(this.props.id);
    }
  }

  goTocheckout() {
    // Show loading spinner when send POST to '/cart' and then replace <TicketDetails> with <PaymentTabs>
    // { productId, quantity, userId = undefined }
    const ticketsFromCart = this.props.cart.tickets;
    const ticketsIds = Object.keys(ticketsFromCart);
    const tickets = ticketsIds.map(id => ({
      quantity: ticketsFromCart[id].quantity,
      productId: id
    }));

    this.props.createCartRequest(tickets[0]);
    // Router.pushRoute(
    //   '/event/el-petronio-alvarez/5b7c1fa40471bd12b9411151/checkout'
    // );
  }

  render() {
    return (
      <Row>
        <Col span={15} offset={1} className="hero-section">
          <EventInfo event={this.props.event} venue={this.props.venue} />
        </Col>
        <Col span={6} offset={1} className="hero-section tickets-price">
          <Affix>
            <TicketsDetails
              ticketsInfo={this.props.tickets}
              loading={this.props.loading}
              total={this.props.total}
              quantity={ticketId =>
                this.props.cart.tickets[ticketId]
                  ? this.props.cart.tickets[ticketId].quantity
                  : '0'
              }
              handler={ticket => quantity =>
                quantity === '0'
                  ? this.props.removeTicket(ticket)
                  : this.props.addTicket(ticket, quantity)}
            />
            <Button
              type="primary"
              size="large"
              block
              onClick={() => this.goTocheckout()}
            >
              Agregar
            </Button>
          </Affix>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  loading: getFetchingStatus(state.event),
  event: getEvent(state.event.event),
  venue: getVenue(state.venues, state.event.event),
  tickets: getTicketsByEventId(state.tickets, state.event.event),
  quantity: getQuantityByTicket(state.tickets),
  cart: getCart(state.cart),
  total: getTotalPrice(state.cart, state.tickets)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchEventRequest, createCartRequest, addTicket, removeTicket, getTotal },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsDetails);
