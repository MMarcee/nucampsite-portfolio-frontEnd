import React, { Component } from 'react';
import { IconContext } from "react-icons";
import formStyles from '../assets/css/formStyles.css';

class ContactMe extends Component {
    state = {
            fullName: '',
            email: '',
            subject: '',
            message: '',
        };
      
        onSubmit = (e) => {
            e.preventDefault();
            console.log(this.state);
        };
    
        render() {
            return (
                <IconContext.Provider 
                    value = {{ size: "1.5em", color: "ivory"}}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        formStyles
                    }}>
                        <form className="contact-form">
                            <input className="input"
                                placeholder="Name"
                                value={this.state.fullName}
                                onChange={(e) => this.setState({fullName: e.target.value})}
                            />
                            <br />
                            <input className="input"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => this.setState({email: e.target.value})}
                            />
                            <br />
                            <input className="input"
                                placeholder="Subject"
                                value={this.state.subject}
                                onChange={(e) => this.setState({subject: e.target.value})}
                            />  
                            <br />    
                            <textarea className="input"
                                placeholder="Message"
                                cols="30"
                                rows="6"
                                value={this.state.message}
                                onChange={(e) => this.setState({message: e.target.value})}
                            />
                            <br />
                            <input
                                className="input"
                                icon='FaEnvelope'
                                type="submit" 
                                value="Send Message" 
                                onClick={(e) => this.onSubmit(e)} 
                            />
                        </form>
                    </div>
                </IconContext.Provider>
            );
          }
        }

export default ContactMe;
