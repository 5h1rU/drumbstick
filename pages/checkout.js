import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row, Affix, Button, Steps, Icon } from 'antd';
import { createUserRequest } from '../store/user/actions';
import PersonalDataForm from '../components/purchasingFlow/PersonalDataForm.js';
import TicketsDetails from '../components/events/TicketsDetails';
import CreditPaymentForm from '../components/purchasingFlow/CreditPaymentForm.js';

const { Step } = Steps;

const personalDataForm = (createUser, currentStep) => {
  return <PersonalDataForm sendDataForm={createUser} step={currentStep} />;
};

const steps = [
  {
    title: 'Información Personal',
    content: personalDataForm,
    description: 'Email y Celular',
    icon: 'user'
  },
  {
    title: 'Tipo de Pago',
    content: <CreditPaymentForm />,
    description: 'Debito o Crédito?',
    icon: 'bank'
  },
  {
    title: 'Información de Pago',
    content: 'Second-content',
    description: 'Los datos de tu tarjeta',
    icon: 'credit-card'
  },
  {
    title: 'Tickets',
    content: 'Last-content',
    description: 'Estás listo!',
    icon: 'shake'
  }
];

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <Row>
        <Col span={15} offset={1} className="hero-section">
          <Steps current={current}>
            {steps.map(item => (
              <Step
                key={item.title}
                title={item.title}
                description={item.description}
                icon={<Icon type={item.icon} theme="outlined" />}
              />
            ))}
          </Steps>
          <div className="steps-content">
            {steps[current].content(this.props.createUserRequest, current)}
          </div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                // onClick={() => message.success('Processing complete!')}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )}
          </div>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createUserRequest }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
