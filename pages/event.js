import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row, Affix } from 'antd';
// import PaymentTabs from './PaymentTabs';
import EventInfo from '../components/events/EventInfo';
import TicketsDetails from '../components/events/TicketsDetails';
import { fetchEventRequest } from '../store/event/actions';
import { getEvent } from '../store/event/reducer';
import { getVenue } from '../store/venues/reducer';

class EventsDetails extends React.Component {
  static async getInitialProps({ ctx }) {
    return ctx.query;
  }
  componentDidMount() {
    if (!this.props.event._id || this.props.event._id !== this.props.id) {
      this.props.fetchEventRequest(this.props.id);
    }
  }

  render() {
    return (
      <Row>
        <Col span={15} offset={1} className="hero-section">
          <EventInfo event={this.props.event} venue={this.props.venue} />
        </Col>
        <Col span={6} offset={1} className="hero-section tickets-price">
          <Affix>
            <TicketsDetails />
          </Affix>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  // loading: getFetchingStatus(state.event),
  event: getEvent(state.event),
  venue: getVenue(state.venues, state.event)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchEventRequest }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsDetails);
