import React from 'react';
import Cleave from 'cleave.js/react';
import { Form, Input, Button, Select, Col, Row } from 'antd';
// import visa from './img/cards/visa.png';
// import amex from './img/cards/amex.png';
// import discover from './img/cards/discover.png';
// import mastercard from './img/cards/mastercard.png';

const FormItem = Form.Item;
const { Option } = Select;

class NormalForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
    });
  };

  onCreditCardTypeChanged(type) {
    this.card = type;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="Nombre en la tarjeta">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(<Input size="large" placeholder="Fulanito de tal" />)}
        </FormItem>
        <FormItem label="Número de tarjeta">
          {getFieldDecorator('card', {
            rules: [
              { required: true, message: 'Please input valid card number!' }
            ]
          })(
            <span className="ant-input-affix-wrapper ant-input-affix-wrapper-lg">
              <Cleave
                className="ant-input ant-input-lg"
                placeholder="Número de tarjeta"
                options={{
                  creditCard: true,
                  onCreditCardTypeChanged: this.onCreditCardTypeChanged
                }}
                onFocus={this.onCreditCardFocus}
                onChange={this.onCreditCardChange}
              />
              <span className="ant-input-suffix">
                {/* <img src={this.card} /> */}
              </span>
            </span>
          )}
        </FormItem>
        <FormItem label="Fecha de expiración">
          {getFieldDecorator('expiration', {
            rules: [{ required: true, message: 'Please use a valid date' }]
          })(
            <Row>
              <Col span={12}>
                <Select size="large" placeholder="MM">
                  <Option value="1">01</Option>
                  <Option value="2">02</Option>
                  <Option value="3">03</Option>
                  <Option value="4">04</Option>
                </Select>
              </Col>
              <Col span={12}>
                <Select size="large" placeholder="AAAA">
                  <Option value="0">2018</Option>
                  <Option value="1">2019</Option>
                  <Option value="2">2020</Option>
                  <Option value="3">2021</Option>
                  <Option value="4">2022</Option>
                </Select>
              </Col>
            </Row>
          )}
        </FormItem>
        <FormItem label="Número de cuotas">
          <Col span={12}>
            <Select size="large">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </Col>
        </FormItem>
        <FormItem>
          <Button
            block
            size="large"
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Pagar
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const PaymentForm = Form.create()(NormalForm);

export default PaymentForm;
