import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class NewsCar extends Component {
    render() {
        return(
            <div>
                <Carousel>
                <Carousel.Item>
                    <img alt="900x500" src="https://i.imgur.com/kmtny1O.jpg" />
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
            </div>
        )
    }
}

export default NewsCar;