import './App.css';
import FooterComponent from './components/FooterComponent';
import FreeEstimateComponent from './components/FreeEstimateComponent';
import SectionTitle from './components/SectionTitle';
import TitleComponent from './components/TitleComponent';
import AboutContainer from './components/containers/AboutContainer';
import ContactContainer from './components/containers/ContactContainer';
import NavContainer from './components/containers/NavContainer';
import ProjectsContainer from './components/containers/ProjectsContainer';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='sticky-title'>Robert J Lutz Home Improvements</h1>
        <header className="App-header">
          <TitleComponent/>
          <NavContainer/>
          <FreeEstimateComponent />
        </header>
        <AboutContainer/>
        <div id="projects"></div>
        <SectionTitle sectionName="Project Gallery" />
        <ProjectsContainer />
        <div id='contact'></div>
        <SectionTitle sectionName="Contact Us" />
        <ContactContainer />
        <footer className='App-footer'>
          <FooterComponent />
        </footer>
      </div>
    );
  }
}