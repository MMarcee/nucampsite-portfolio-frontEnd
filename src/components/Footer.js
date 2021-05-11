import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { animateScroll as scroll } from 'react-scroll';

function Footer() {

    return(
        <Container fluid={true} className="main-footer">
            <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                <Row className="">
                    <Col className="footer-content">
                        <p className="copyright" style={{ color: 'white' }}>&copy;{new Date().getFullYear()} Marcelle Marboua <img src='/chevron-up.svg' alt="Portfolio" 
                            onClick={() => scroll.scrollToTop()}/></p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <a href="https://www.youtube.com/watch?v=ngcRor6TQRw"
                            className="inspiration">Design inspiration</a>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Footer;

        
