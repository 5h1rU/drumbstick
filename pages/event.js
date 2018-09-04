import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row, Affix } from 'antd';
// import PaymentTabs from './PaymentTabs';
import EventInfo from '../components/events/EventInfo';
import TicketsDetails from '../components/events/TicketsDetails';
import { fetchEventRequest } from '../store/events/actions';
import { getEvent, getFetchingStatus } from '../store/events/reducer';

class EventsDetails extends React.Component {
  static async getInitialProps({ ctx }) {
    console.log({ ctx });
    return ctx.query;
  }
  componentDidMount() {
    if (!this.props.event.id && this.props.event.id !== this.props.id) {
      this.props.fetchEventRequest(this.props.id);
    }
  }

  render() {
    return (
      <Row>
        <Col span={15} offset={1} className="hero-section">
          <EventInfo event={this.props.event} />
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
  event: getEvent(state.events)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchEventRequest }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsDetails);

// export default EventsDetails;
