import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';



const Cards = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://i.imgur.com/pzaPD79.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>New hot ICO</CardTitle>
            <CardSubtitle>With all new killer DApps!</CardSubtitle>
            <CardText>This ICO is going to blow you mind!</CardText>
            <Button>Button</Button>
          </CardBody>
      </Card>
    </div>
  );
};



export default Cards;












