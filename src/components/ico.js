import React, { Component } from 'react';
import Cards from './cards/cards';
import ScrollingInfo from './scrollinginfo';
import { Container, Row, Col } from 'reactstrap';



class ICO extends Component {
	render () {
		return (
        <Container fluid>
		    <Row>
				<Col sm="3">
				  <Cards />
				</Col>
				<Col sm="3">
				  <Cards />
				</Col>
				<Col sm="4">
				  <ScrollingInfo />
				</Col>
			</Row>
		</Container>
		)
	}
}

export default ICO;