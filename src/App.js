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
  Calendar
} from 'antd';
import './App.css';
import event from './img/event.jpg';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

const EventsCard = ({ image }) => {
  const details = (
    <List>
      <List.Item>
        <List.Item.Meta title="Cómo realizar la Transición a la Norma ISO 45001: 2018" />
      </List.Item>
    </List>
  );

  return (
    <Card
      hoverable
      cover={<img alt="example" src={image} />}
      style={{ marginTop: '16px' }}
    >
      <Meta title="estadio olimpico pascual guerrero" description={details} />
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
            <Col span={15} offset={1}>
              <Input
                className="header-search"
                placeholder="Search for events..."
                prefix={<Icon type="search" />}
              />
            </Col>
            <Col span={8} className="header-menu">
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
                <Menu.Item key="saved">
                  <Icon type="heart-o" style={{ fontSize: 24 }} />
                  Saved
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
              <Row>
                <Col>
                  <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                  >
                    <Menu.Item key="mail">Concerts</Menu.Item>
                    <Menu.Item key="saved">Festivals</Menu.Item>
                    <Menu.Item key="app">Conferences</Menu.Item>
                  </Menu>
                </Col>
              </Row>

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
