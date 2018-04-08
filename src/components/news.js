import React, { Component } from 'react';
import { Carousel, PageHeader, Jumbotron, Button } from 'react-bootstrap';

class News extends Component {
    render() {
        return(
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6B899Euj3CpjhNh9xe68Tg47yQYnj0An1VDSVJ7muIFyQ0bsgTw" />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="https://www.btc-echo.de/wp-content/uploads/2018/01/verge_cryptocurrency.jpg" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6B899Euj3CpjhNh9xe68Tg47yQYnj0An1VDSVJ7muIFyQ0bsgTw" />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>

                    <PageHeader>
                        Bitcoin hits New All Time Highs! <small>Today, Bitcoin hit yet another mega high</small>
                    </PageHeader>

                    <Jumbotron>
                        <img width={201} height={251} alt="900x500" src="data:image/jpeg;base64,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" />
                        <h1>Fill in a Headliner here</h1>
                        <p>
                            And more content about the story over this paragraph.
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button bsStyle="primary">Keep reading</Button>
                        </p>
                    </Jumbotron>;
            </div>
        )
    }
}

export default News;