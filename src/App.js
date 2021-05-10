import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Marcelle Marboua',
            headerLinks: [
                { title: 'HomePage', path: '/homepage' },
                { title: 'AboutMe', path: '/aboutme' },
                { title: 'Skills', path: '/skills'},
                { title: 'Projects', path: '/projects' },
                
            ],

            jumbo: {
                image: './src/assets/tech3.jpg',
            },
            
            home: {
                title: 'Marcelle M. Portfolio',
                subTitle: "",
                text: "",
            },
         }
    }
             
     render() {
         return (
             <Router> 
                <Container className="p-0" fluid={true} style={{ backgroundImage: "url(/bgimg.png)" }}> 
                    <Navbar className="stickyNav" fixed="top" bg="dark" expand="lg">
                        <Navbar.Brand className="nav-brand-style" href="/"><img src='/brandLogo.png' alt="Portfolio" 
                            onClick={() => scroll.scrollToTop()}/></Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto p-20">
                                <Link className="nav-link" activeName ="active-link" to='/' smooth={true} duration={1000}>Home</Link>
                                <Link className="nav-link" activeName ="active-link" to="abt" smooth={true} duration={1000}>About Me</Link>
                                <Link className="nav-link" activeName ="active-link" to="sk" smooth={true} duration={1000}>Skills</Link>
                                <Link className="nav-link" activeName ="active-link" to="pj" smooth={true} duration={1000}>Projects</Link>
                                <Link className="nav-link" activeName ="active-link" to="ct" smooth={true} duration={1000}>Contact Me</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path='/aboutme' render={() => <AboutMe title={this.state.aboutme.title} subTitle={this.state.aboutme.subTitle} email={this.state.aboutme.email} github={this.state.aboutme.github} phone={this.state.aboutme.phone} image={this.state.aboutme.image} />} /> 
                    <Route path='/skills' render={() => <Skills title={this.state.skills.title} />} /> 
                    <Route path='/projects' render={() => <Projects title={this.state.projects.title} />} /> 
                </Container>
            </Router>
         );
     }
 }

export default App;
