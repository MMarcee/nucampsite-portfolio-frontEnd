import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function AccordionContent(props) {

    return(
       <Container fluid={false}>
            <Row className="justify-content-center">
                <Col md={12}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
}


export default AccordionContent;