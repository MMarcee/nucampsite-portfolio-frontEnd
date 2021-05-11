import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import Media from 'react-bootstrap/Media';
import Quotes from '../components/Quotes';

function ProfileCardInfo(props) {
    return(
        <Container className="placement">
            <IconContext.Provider value = {{ size: "1.5em", color: "#b0d2cb"}}>
                <Row>
                    <Col>
                        <div className="Aboutinfo">
                            <div className="pf-card bg-white">
                                <div className="card-title my-5">
                                    <Media>
                                        <img src="/MEM.jpg" width="250" height="250"class="img-fluid rounded-top mx-5 d-none d-lg-block" alt="Marcelle M."/>
                                        <div className="media-body ">
                                            <h2 className="display-4 ml-5">Marcelle Marboua</h2>
                                            <p className="text-muted ml-5">Full Stack Web Developer</p>
                                            <div></div>
                                            <Container className="card-table-container">
                                                <Quotes />
                                            </Container> 
                                        </div>
                                </Media>
                                <div className="card-footer"style={{ backgroundColor: "gray" }} >
                                     <a href="https://github.com/MMarcee/nucamp-portfolio-backEnd"><FaGithub  /></a>
                                    {' '}
                                    <a href="https://www.linkedin.com/"><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </IconContext.Provider>
    </Container>
)};

export default ProfileCardInfo;
