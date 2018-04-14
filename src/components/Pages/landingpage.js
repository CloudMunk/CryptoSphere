import React, { Component } from 'react';
import NewsCar from '../../containers/newscar';
import { Container, Row, Col, Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody } from 'reactstrap';


class Landingpage extends Component {
	render () {
		return (
         <div>
             <Container>
                <Row>
                    <NewsCar />
                </Row>
             </Container>
                <Row>
                    <div id="index-banner" className="parallax-container">
                        <div className="section no-pad-bot">
                        <div className="container">
                            
                            <h1 className="header center teal-text text-lighten-2">Crypto Sphere</h1>

                            <div className="row center">
                            <h5 className="header col s12 light">A brand new All-in-one crypto platform</h5>
                            </div>
                            <div className="row center">
                            <a href="/" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                            </div>
                
                            

                        </div>
                        </div>
                        <div className="parallax"><img src="https://i.imgur.com/cCIUCu0.jpg" alt="Unsplashed background img 1" /></div>

                    </div>
                </Row>
                <Row>
                    <div className="container">
                        <div className="section">

                    
                        <div className="row">
                            <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                                <h5 className="center">Education</h5>

                                <p className="light">We strive to provide users with knowledge on the following topics: 
                                    Getting Started in Cryptocurrencies, Blockchain Technology, Coin Evaluation & Analysis, ICO Evaluations,
                                    and Understanding the Marketplace - to name a few.</p>
                            </div>
                            </div>

                            <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                                <h5 className="center">Community</h5>

                                <p className="light">Our community membership consists of three different tiers. 
                                    Each individual tier provides members with exclusive content, only available 
                                    at their specific package. All members will have access to their own personalized
                                    account trading profiles.</p>
                            </div>
                            </div>

                            <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                                <h5 className="center">Marketplace</h5>

                                <p className="light">Our Cryptocurrency Exchange is tailored to provides our members with a unique ability
                                        to buy, sell and trade many of the largest, most popular cryptocurrencies. Our platform
                                        has been successfully deployed on variety of cryptocurrency exchanges. It supports
                                        most devices and multiple languages, offering a unique user experience.</p>
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>
            </Row>
                    <div className="parallax-container valign-wrapper">
                        <div className="section no-pad-bot">
                        <div className="container">
                            <div className="row center">
                            <h5 className="header col s12 light">A modern new way of organizing everything Crypto</h5>
                            </div>
                        </div>
                        </div>
                        <div className="parallax"><img src="https://i.imgur.com/pzaPD79.jpg" alt="Unsplashed background img 2" /></div>
                    </div>
                    <div className="container">
                        <div className="section">

                        <div className="row">
                            <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>Contact Us</h4>
                            <p className="left-align light">Have a question or would you like to leave a review about your experience with
                                                            our platform, You can contact us online at the following locations:
                                                            ‧ Website: www.cryptosphere.eu
                                                            ‧ Email: support@cryptosphere.eu
                                                            ‧ Twitter: @cryptospherepro
                                                            ‧ Facebook: @cryptosphere
                            </p>
                            </div>
                        </div>

                        </div>
                    </div>


                    <div className="parallax-container valign-wrapper">
                        <div className="section no-pad-bot">
                        <div className="container">
                            <div className="row center">
                            <h5 className="header col s12 light">A complete take on everything in the CryptoSphere.</h5>
                            </div>
                        </div>
                        </div>
                        <div className="parallax"><img src="https://i.imgur.com/pzaPD79.jpg" alt="Unsplashed background img 3" /></div>
                    </div>

                    <footer className="page-footer teal">
                        <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                            <h5 className="white-text">Company Bio</h5>
                            <p className="grey-text text-lighten-4">
                            We are a team of highly diversified backgrounds, and spread all over the world. Between the team 8 languages are
                            known and spoken. So you can truly say that we are a diversified bunch, who have connections all over the world.
                            This is you go to place for sensible news. No FUD and no FOMO.
                            </p>


                            </div>
                            <div className="col l3 s12">
                            <h5 className="white-text">Settings</h5>
                            <ul>
                                <li><a className="white-text" href="#!">Link 1</a></li>
                                <li><a className="white-text" href="#!">Link 2</a></li>
                                <li><a className="white-text" href="#!">Link 3</a></li>
                                <li><a className="white-text" href="#!">Link 4</a></li>
                            </ul>
                            </div>
                            <div className="col l3 s12">
                            <h5 className="white-text">Connect</h5>
                            <ul>
                                <li><a className="white-text" href="#!">Link 1</a></li>
                                <li><a className="white-text" href="#!">Link 2</a></li>
                                <li><a className="white-text" href="#!">Link 3</a></li>
                                <li><a className="white-text" href="#!">Link 4</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="footer-copyright">
                        <div className="container">
                        Made by <a className="brown-text text-lighten-3" href="http://iamanestis.com">CloudOne</a>
                        </div>
                        </div>
                    </footer>
        </div>
		)
	}
}

export default Landingpage;