import React, { Component } from 'react';
import { PageHeader, Button } from 'react-bootstrap';
import NewsCar from '../../containers/newscar';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

class News extends Component {
    render() {
        return(
            <div>
                <Container>
                       <Row>
                         <NewsCar />
                        </Row>
                        <Row>
                            <Col sm="4">
                                <PageHeader>
                                    Bitcoin hits New All Time Highs! <small>Today, Bitcoin hit yet another mega high</small>
                                </PageHeader>
                            </Col>
                            <Col sm="4">
                               <Card>
                                <CardImg top width="100%" src="https://i.imgur.com/pzaPD79.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>New hot ICO</CardTitle>
                                        <CardSubtitle>With all new killer DApps!</CardSubtitle>
                                        <CardText>This ICO is going to blow you mind!</CardText>
                                        <Button center>Button</Button>
                                    </CardBody>
                              </Card>
                            </Col>
                        </Row>
                </Container>
            </div>
        )
    }
}

export default News;