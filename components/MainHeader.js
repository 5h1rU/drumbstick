import React from 'react';
import { Layout, AutoComplete, Menu, Icon, Row, Col, Badge, Input } from 'antd';
import Link from 'next/link';
const { Header } = Layout;
import { connect } from 'react-redux';
import { getEvents } from '../store/events/reducer';

const showEvents = events =>
  events.map(event => {
    return event.name;
  });

// TODO: take a look to this.*
const MainHeader = ({ events }) => (
  <Header className="header">
    <Row>
      <Col span={2}>
        <Link href="/">
          <a>
            <img
              className="logo"
              src="/static/logoCymbals@3x.png"
              alt="cymbals"
            />
          </a>
        </Link>
      </Col>
      <Col span={13}>
        <AutoComplete dataSource={showEvents(events)} style={{ width: '100%' }}>
          <Input
            size="large"
            className="header-search"
            placeholder="Buscar Evento..."
            prefix={<Icon type="search" />}
          />
        </AutoComplete>
      </Col>
      <Col span={7} offset={2} className="header-menu">
        <Menu
          // onClick={this.handleClick}
          // selectedKeys={[this.state.current]}
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
);

const mapStateToProps = state => ({
  events: getEvents(state.events)
});

export default connect(
  mapStateToProps,
  null
)(MainHeader);

// export default MainHeader;
