import React from 'react';
import { List, Card, Avatar } from 'antd';

const EventsCard = ({ image, name }) => {
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
    </Card>
  );
};

export default EventsCard;
