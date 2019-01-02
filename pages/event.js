import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row, Affix, Button } from 'antd';
import EventInfo from '../components/events/EventInfo';
import TicketsDetails from '../components/events/TicketsDetails';
import { addTicket, removeTicket, getTotal } from '../store/cart/actions';
import { fetchEventRequest } from '../store/event/actions';
import { getEvent, getFetchingStatus } from '../store/event/reducer';
import { getVenue } from '../store/venues/reducer';
import { getTicketsByEventId } from '../store/tickets/reducer';
import { createCartRequest } from '../store/cart/actions';
// import { Router } from '../routes';

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
    const ticketsFromCart = this.props.cart.tickets;
    const ticketsIds = Object.keys(ticketsFromCart);
    const tickets = ticketsIds.map(id => ({
      quantity: ticketsFromCart[id].quantity,
      product: id
    }));

    /**
     * HERE WE NEED A USER ID THAT MEANS A USER REDUCER IS MANDATORY
     * - Create a User Reducer with a random mongo ID as ID
     * 
     * - When the ID is setted up and the Car Request is triggered 
     * then we need send ID as payload to POST /cart.
     * 
     * - Storage the User ID in local context (cookies, localstorage) 
     * in order to reuse if the user is not signed up.
     * 
     * - If the Cart expire then ID will be removed from local storage context
     * 
     * - If the user add new tickets to the cart new ID needs to be generated 
     * and repeat same steps above mentioned
     * 
     * - Go to Checkout. and make Order Store logic.
     * 
     */
    this.props.createCartRequest(tickets);
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
