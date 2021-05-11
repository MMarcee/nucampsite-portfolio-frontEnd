import React from 'react';
import JumbotronComponent from '../components/JumbotronComponent';
import ProfileCard from '../components/ProfileCard';
import AccordionContent from '../components/AccordionContent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Skills from '../components/Skills';
import Cards from '../components/Cards';
import Footer from '../components/Footer'
import ContactMe from '../components/ContactMe';

function HomePage(props) {
    const styleObj = {
        fontSize: 14,
        color: "#000000",
    }

    return(
        <>
        <JumbotronComponent />
            <ProfileCard />
               <AccordionContent>
                 <Container className="accord-bg"style={{backgroundColor: "white"}} >
                    <Row className="border-bottom mt-4">
                        <Col>
                            <Accordion>
                                <Accordion.Toggle id="abt" as={Button} style={styleObj} variant="link" eventKey="2">About Me</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                            <p className="abtcontent d-none d-md-block">
                                                Although information technology constitutes my educational background; as an entrepreneur who's worked and provided services 
                                                in various industries - at various capacities, I had not used much of the skills. Thus, they became dormant. However, the best
                                                decision I have made during this COVID-19 pandemic, was taking the Full Stack Web Development bootcamp at Nucamp.  I joined
                                                the program thinking it was going to be a walk in the park because I did "full stack web development" back in the day. I 
                                                was in for a rude awakening.  From bootstrap to react, to react native, to nodejs - although connected, each was a different beast.  
                                                But I enjoyed every minute of each challenge. 
                                            </p>
                                    </Accordion.Collapse>    
                            </Accordion>
                        </Col>
                    </Row>
                    <Row className="border-bottom">
                        <Col>
                            <Accordion>
                                <Accordion.Toggle id="sk" as={Button} style={{ color: 'black' }} variant="link" eventKey="1">Skills</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Skills />
                                    </Accordion.Collapse>    
                            </Accordion>
                        </Col>
                    </Row>
                    <Row className="border-bottom">
                        <Col>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Toggle  id="pj" as={Button} style={{ color: 'black' }} variant="link" eventKey="0">Projects</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                    <div class="card-body">
                                        <Cards />
                                    </div>
                                </Accordion.Collapse>    
                            </Accordion>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>
                            <Accordion>
                                <Accordion.Toggle  id="ct" as={Button} style={{ color: 'black' }} variant="link" eventKey="3">Contact Me</Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                    <div class="">
                                        <ContactMe />
                                    </div>
                                </Accordion.Collapse>    
                            </Accordion>
                        </Col>
                    </Row>
                 </Container>
                 <Footer />
             </AccordionContent>
            
        </>
    );
}

export default HomePage;


