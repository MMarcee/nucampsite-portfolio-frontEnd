import React from 'react';

const ProjectsContent = props => {
    return(
        <div className="cards text-center shadow">
            <div className="overflow">
                <img src={props.img} alt="Bootstrap" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary"></p>
                <a href="https://github.com" className="btn btn-outline-success">Github</a>
            </div> 
        </div>
               
    );
}

export default ProjectsContent;