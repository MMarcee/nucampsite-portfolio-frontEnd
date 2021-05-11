import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoPlayer from 'react-video-js-player';
import FrontEnd from '../assets/videos/FrontEnd.mp4';
import BackEnd from '../assets/videos/BackEnd.mp4';

const videoFE = FrontEnd;
const videoBE = BackEnd;

class Cards extends Component {

    render() {
        return(
            <Container>
                <Row>
                    <div className = "col-md-6">
                       <video className="embed-responsive embed-responsive-16by9" controls>
                           <source className="embed-responsive-item" src={FrontEnd} type="video/mp4" />
                       </video>
                       <div className="card-body text-dark">
                            <h4 className="card-title"></h4>
                            <p className="card-text text-secondary"></p>
                            <a href="https://github.com/MMarcee/nucampsite-portfolio-frontEnd" className="btn btn-outline-success">Front End</a>
                        </div> 
                    </div>
                    
                    <div className = "col-md-6">
                        <video className="embed-responsive embed-responsive-16by9" controls>
                           <source className="embed-responsive-item" src={BackEnd} type="video/mp4" />
                        </video>
                        <div className="card-body text-dark">
                            <h4 className="card-title"></h4>
                            <p className="card-text text-secondary"></p>
                            <a href="https://github.com/MMarcee/nucamp-portfolio-backEnd"
                                className="btn btn-outline-success">Full Stack</a>
                        </div> 
                    </div>
                </Row>
                    
            </Container>
        );
    }
}

export default Cards;
