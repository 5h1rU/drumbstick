import React from 'react';
import { List, Card, Avatar } from 'antd';

const EventsCard = ({ image, name, place }) => {
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
          title={name}
          description={place.name}
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
      {/* <Meta title={ */}
      {/* <React.Fragment> */}
      {/* <div className="card-date">
              <div>AGO</div>
              <Avatar>29</Avatar>
          </div> */}
      {/* <time>Sat, Sep 29 9:00am</time>
          <h4>{name}</h4> */}
      {/* <small>Sabado 20 de julio</small> */}
      {/* <h3>{place.name}</h3> */}
      {/* </React.Fragment>}  description={place.name} /> */}
    </Card>
  );
};

export default EventsCard;
