import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class NewsCar extends Component {
    render() {
        return(
            <div>
                <Carousel>
                <Carousel.Item>
                    <img maxWidth='100%' height='auto' alt="900x500" src="https://i.imgur.com/2RHNh0N.jpg" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img maxWidth='100%' height='auto' alt="900x500" src="https://i.imgur.com/LS5uqsd.jpg" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img maxWidth='100%' height={100} alt="900x500" src="https://i.imgur.com/MbnyY0f.jpg" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default NewsCar;