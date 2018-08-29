import React from 'react';
import { Layout, Input, Menu, Icon, Row, Col, Badge } from 'antd';
// import './App.less';
import cymbals from './img/logoCymbals@3x.png';
import EventsHome from './EventsHome';
import EventsDetails from './EventsDetails';

const { Header, Footer, Content } = Layout;

export default class App extends React.Component {
  state = {
    name: 'Drumbstick',
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header">
          <Row>
            <Col span={2}>
              <img className="logo" src={cymbals} alt="cymbals" />
            </Col>
            <Col span={14}>
              <Input
                className="header-search"
                placeholder="Buscar Evento..."
                prefix={<Icon type="search" />}
              />
            </Col>
            <Col span={6} offset={2} className="header-menu">
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <Menu.Item key="mail">
                  <Icon type="shopping-cart" style={{ fontSize: 24 }} />
                  <Badge count={9} offset={[10, -9]}>
                    Cart
                  </Badge>
                </Menu.Item>
                <Menu.Item key="app">
                  <Icon type="user" style={{ fontSize: 24 }} />
                  Iniciar sesion
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <Content>
          {/* <EventsHome /> */}
          <EventsDetails />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Cymbals Tickets System ©2018
        </Footer>
      </Layout>
    );
  }
}
