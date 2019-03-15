import React from 'react';
import Cleave from 'cleave.js/react';
import { Form, Input, InputNumber, Button, Tooltip, Icon, Switch } from 'antd';

const FormItem = Form.Item;

const ShowIconCard = ({ image }) => {
  if (!image || image === 'unknown') {
    return null;
  }
  return (
    <img
      className="zoom"
      style={{ width: '32px' }}
      src={`/static/cards/${image}.png`}
    />
  );
};

class CreditCardData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      phoneRawValue: ''
    };

    this.onPhoneChange = this.onPhoneChange.bind(this);
  }

  onPhoneChange(event) {
    this.setState({ phoneRawValue: event.target.rawValue });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="horizontal">
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
                placeholder="1234 1234 1234 1234"
                options={{
                  creditCard: true,
                  onCreditCardTypeChanged: this.onCreditCardTypeChanged
                }}
                onFocus={this.onCreditCardFocus}
                onChange={this.onCreditCardChange}
              />
              <span className="ant-input-suffix">
                {this.state.card}
                <ShowIconCard image={this.state.creditCardRawValue} />
              </span>
            </span>
          )}
        </FormItem>
        <FormItem label={<span>CVC</span>}>
          {getFieldDecorator('cvc', {
            rules: [{ required: true, message: 'Please use a valid cvc' }]
          })(
            <Input
              size="large"
              placeholder="123"
              min={100}
              max={9999}
              suffix={
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              }
              // onChange={onChange}
            />
          )}
        </FormItem>
        <FormItem label="Expiración">
          {getFieldDecorator('expiration', {
            rules: [{ required: true, message: 'Please use a valid date' }]
          })(
            <Cleave
              className="ant-input ant-input-lg"
              placeholder="MM/AA"
              options={{
                date: true,
                datePattern: ['m', 'y']
              }}
              onFocus={this.onCreditCardFocus}
              onChange={this.onCreditCardChange}
            />
          )}
        </FormItem>
        <FormItem label="Cuotas">
          {getFieldDecorator('installments', {
            rules: [{ required: true, message: 'Please use a valid date' }]
          })(
            <InputNumber
              size="large"
              placeholder="1"
              min={1}
              max={48}
              // onChange={onChange}
            />
          )}
        </FormItem>
        <FormItem label="Registrarse">
          {getFieldDecorator('switch', { valuePropName: 'checked' })(
            <Switch
              size="large"
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
            />
          )}
        </FormItem>
      </Form>
    );
  }
}

const CreditPaymentForm = Form.create()(CreditCardData);

export default CreditPaymentForm;
