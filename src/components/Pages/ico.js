import React, { Component } from 'react';
import ScrollingInfo from '../scrollinginfo';
import { Container, Row, Col, Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';



class ICO extends Component {
	render () {
		return (
        <Container fluid>
		    <Row>

				<Col sm="3">
				<Card>
          <CardImg top width="100%" src="https://i.imgur.com/DAxHUXk.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Latest teaser released</CardTitle>
              <CardSubtitle>With all new killer DApps!</CardSubtitle>
              <CardText>This ICO is going to blow you mind!</CardText>
              <Button>Read more</Button>
            </CardBody>
        </Card>
				</Col>

				<Col sm="3">
				<Card>
          <CardImg top width="100%" src="https://i.imgur.com/3V8gBWt.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>All new Beach Life ICO</CardTitle>
              <CardSubtitle>With all new killer DApps!</CardSubtitle>
              <CardText>This ICO is going to blow you mind!</CardText>
              <Button>Read more</Button>
            </CardBody>
        </Card>
				</Col>

				<Col sm="4">
				  <ScrollingInfo />
				</Col>
			</Row>
			<Col sm="3">
				<Card>
          <CardImg top width="100%" src="https://i.imgur.com/xQJaA6R.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>The Third Moonlanding</CardTitle>
              <CardSubtitle>With all new killer DApps!</CardSubtitle>
              <CardText>This ICO is going to blow you mind!</CardText>
              <Button>Read more</Button>
            </CardBody>
        </Card>
				</Col>

			<Row>
        
			</Row>
		</Container>
		)
	}
}

export default ICO;