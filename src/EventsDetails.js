import React from 'react';
import { Col, Row, List, Select, Button, Card, Divider, Affix } from 'antd';
import DescriptionList from 'ant-design-pro/lib/DescriptionList';
import Description from 'ant-design-pro/lib/DescriptionList/Description';
import map from './img/map.png';
import PaymentForm from './PaymentForm';

const { Option } = Select;

const description = (
  <div>
    <h1>FREE Erosion Control using Concrete Mattresses</h1>
    <DescriptionList size="large" col="1">
      <Description term="">Julio 09 de 2018 - 7:00pm</Description>
      <Description term="">Estadio Olimpico Pascual Guerrero</Description>
    </DescriptionList>
  </div>
);

const ticketsNumber = (
  <Select size="large" defaultValue="2" onChange={handleChange}>
    <Option value="0">0</Option>
    <Option value="1">1</Option>
    <Option value="2">2</Option>
    <Option value="3">3</Option>
    <Option value="4">4</Option>
  </Select>
);

const Details = () => (
  <List itemLayout="horizontal">
    <List.Item actions={[ticketsNumber]}>
      <List.Item.Meta title="Palco" description="$345.200 (IVA incluido)" />
    </List.Item>
    <List.Item actions={[ticketsNumber]}>
      <List.Item.Meta title="Vip" description="$240.000 (IVA incluido)" />
    </List.Item>
    <List.Item actions={[ticketsNumber]}>
      <List.Item.Meta title="Gradiería" description="$120.000 (IVA incluido)" />
    </List.Item>
  </List>
);

const Total = () => (
  <List>
    <List.Item actions={[<h1 key="1">$123.400</h1>]}>
      <List.Item.Meta title="Total" description="IVA incluido" />
    </List.Item>
  </List>
);

function handleChange(value) {
  console.log(`selected ${value}`);
}

const TicketsDetails = () => (
  <React.Fragment>
    <Details />
    <Total />
    <Button type="primary" size="large" block>
      Pagar
    </Button>
  </React.Fragment>
);

const EventsDetails = () => (
  <Row>
    <Col span={15} offset={1} className="hero-section">
      <Card
        cover={
          <img src="https://howtobecome-matthiashombauer.netdna-ssl.com/wp-content/uploads/2016/05/Destroyer_Blog_3-1-1000x567.jpg" />
        }
      >
        {description}
        <Divider orientation="left">Descripción</Divider>
        <p>
          La adicción al trabajo, la depresión post-jubilación, el rebusque, las
          ventas de empanadas, las hojas de vida, las entrevistas de trabajo y
          hasta la poesía, se juntan y se revuelven en EL PUESTO, una comedia
          íntima, sentida e hilarante a partir del drama de Benjamín Molina, un
          hombre de 66 años que no se quiere jubilar.
        </p>

        <p>
          Si usted está vacante, a partir del 17 de agosto lleve su hoja de vida
          al Teatro Patria, ríase de tiempo completo y engánchese a EL PUESTO,
          con César Mora y Edwin Maya.
        </p>

        <p>
          El Singularity University Summit es un programa de dos días que se
          celebra en los cinco continentes, el cual tendrá lugar por primera vez
          en Colombia en noviembre de 2018. Este programa genera conversaciones
          y crea comunidad a nivel mundial en torno al aprovechamiento de las
          tecnologías exponenciales en la transformación de las industrias, la
          educación, las políticas públicas y la calidad de vida de las
          personas.
        </p>
        <Divider orientation="left">Ubicación</Divider>
        <div>
          <h2>Estadio Pascual Guerrero, Cali, Valle del Cauca</h2>
          <img style={{ width: '100%' }} src={map} />
        </div>
      </Card>
    </Col>
    <Col span={6} offset={1} className="hero-section tickets-price">
      <Affix>
        {/* <TicketsDetails /> */}
        <PaymentForm />
      </Affix>
    </Col>
  </Row>
);

export default EventsDetails;
