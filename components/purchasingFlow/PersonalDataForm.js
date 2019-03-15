import React from 'react';
import Cleave from 'cleave.js/react';
import { Form, Input, Button } from 'antd';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.co';

const FormItem = Form.Item;

class PersonalData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      creditCardRawValue: ''
    };

    this.onCreditCardTypeChanged = this.onCreditCardTypeChanged.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
    });
  };

  onCreditCardTypeChanged(type) {
    this.setState({ creditCardRawValue: type });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} layout="vertical">
        <FormItem label="Correo Electronico" hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                required: true,
                message: 'Please input your email!'
              }
            ]
          })(
            <Input size="large" placeholder="tuemail@mail.com" id="success" />
          )}
        </FormItem>
        <FormItem label="Número Celular" hasFeedback>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your cellphone!' }]
          })(
            <Cleave
              className="ant-input ant-input-lg"
              placeholder="316 4552112"
              options={{ phone: true, phoneRegionCode: 'CO' }}
              onChange={this.onPhoneChange}
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            onClick={() => this.props.sendDataForm()}
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

const PersonalDataForm = Form.create()(PersonalData);

export default PersonalDataForm;
