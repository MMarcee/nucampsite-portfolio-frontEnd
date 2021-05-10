import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';


function JumbotronComponent() {
    
    return(
        <Jumbotron className="jumbotron-fluid p-0">
            <img className="profile-img" src="/tech3.jpg" alt="Technology" />
        </Jumbotron>
    );
}

export default JumbotronComponent;