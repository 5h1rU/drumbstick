import React from 'react';
import {
  Layout,
  Input,
  Menu,
  Icon,
  Row,
  Col,
  Badge,
  Card,
  List,
  Avatar
} from 'antd';
// import './App.less';
import cymbals from './img/logoCymbals@3x.png';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

const date = () => (
  <div className="card-date">
    <div>AGO</div>
    <Avatar>29</Avatar>
  </div>
);

const EventsCard = ({ image }) => {
  const details = (
    <List>
      <List.Item>
        <List.Item.Meta
          avatar={
            <div className="card-date">
              <div>AGO</div>
              <Avatar>29</Avatar>
            </div>
          }
          title="FREE Erosion Control using Concrete Mattresses"
          description="342 W Oates Rd, Garland, TX"
        />
      </List.Item>
    </List>
  );

  return (
    <Card
      hoverable
      cover={<img alt="example" src={image} />}
      style={{ marginTop: '16px' }}
    >
      {details}
      {/* <Meta title="estadio olimpico pascual guerrero" description={details} /> */}
    </Card>
  );
};

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
          <Row>
            <Col span={22} offset={1} className="hero-section">
              <Row gutter={16}>
                <Col span={6}>
                  <EventsCard image="https://placeimg.com/640/480/architecture" />
                </Col>
                <Col span={6}>
                  <EventsCard image="https://placeimg.com/640/480/animals" />
                </Col>
                <Col span={6}>
                  <EventsCard image="https://placeimg.com/640/480/tech" />
                </Col>
                <Col span={6}>
                  <EventsCard image="https://placeimg.com/640/480/nature" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Cymbals Tickets System ©2018
        </Footer>
      </Layout>
    );
  }
}
