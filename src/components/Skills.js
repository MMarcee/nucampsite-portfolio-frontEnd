import React from 'react';
import { Row, Col } from 'reactstrap';

function Skills(props) {

    return(
        <div className="skills-main">
            <Row>
                <Col>
                    <div className="card-skills  ">
                        <h3 className="ml-3 my-10">HTML5</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar1"></div>
                        </div>
                        <h3 className="ml-3 my-3">CSS3</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar2"></div>
                        </div>
                        <h3 className="ml-3 my-3">JavaScript</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar3"></div>
                        </div>
                        <h3 className="ml-3 my-3">react</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar4"></div>
                        </div>
                        <h3 className="ml-3 my-3">React Native</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar4"></div>
                        </div>
                        <h3 className="ml-3 my-3">NodeJs</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar6"></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Skills;