import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from '../routes';
import { Row, Col, List, Icon } from 'antd';
import { fetchEventsRequest } from '../store/events/actions';
import EventsCard from '../components/events/EventsCard';
import { getEvents, getFetchingStatus } from '../store/events/reducer';
import { getVenues } from '../store/venues/reducer';
import { getCart } from '../store/cart/reducer';
/*
    order: {
      [ticketId]: { quantity, total, unitPrice, event, locality },
      payment: {...}
      total: ([ticketId].total + [ticketId].total...)
    }
*/
class EventsHome extends React.Component {
  componentDidMount() {
    this.props.fetchEventsRequest();
  }

  formatEventName(event) {
    if (!event.name) {
      return;
    }
    return event.name
      .toLowerCase()
      .split(' ')
      .join('-');
  }

  render() {
    return (
      <Row>
        <Col span={22} offset={1} className="hero-section">
          <List
            locale={<Icon type="loading" theme="outlined" />}
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 }}
            dataSource={this.props.events}
            loading={this.props.loading}
            renderItem={event => (
              <List.Item>
                <Link
                  route="event"
                  params={{ name: this.formatEventName(event), id: event._id }}
                >
                  <a>
                    <EventsCard
                      image="../static/petronio.jpg"
                      name={event.name}
                      place={this.props.venues[event.venue]}
                    />
                  </a>
                </Link>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  loading: getFetchingStatus(state.events),
  events: getEvents(state.events),
  venues: getVenues(state.venues),
  cart: getCart(state.cart)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchEventsRequest }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsHome);
