import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import FrontEnd from '../assets/videos/FrontEnd.mp4';
import BackEnd from '../assets/videos/BackEnd.mp4';

const videoFE = FrontEnd;
const videoBE = BackEnd;

class Cards extends Component {

    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="">
                    <div className="videoFE col-md-4">
                        <VideoPlayer 
                            src={videoFE} 
                            width="720" 
                            height="420"
                        />
                    </div>
                    <div className="videoBE col-md-4">
                        <VideoPlayer 
                            src={videoBE} 
                            width="720" 
                            height="420"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;
