import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React from "react";

const TruckCard = ({ id, name, address, description, coverImg }) => {
  return (
    <Link to={`/menu/${id}`}>
      <Card
        style={{
          margin: "10px",
          flex: "1 200px",
          width: "250px",
          height: "300px",
        }}
      >
        <div class="image">
          <img src={coverImg} style={{ height: "180px", objectFit: "cover" }} />
        </div>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{address}</span>
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        {/* <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content> */}
      </Card>
    </Link>
  );
};

export default TruckCard;
