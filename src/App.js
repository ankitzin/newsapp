import './App.css';

import {
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  country = 'in'
  pageSize = 9
  render() {
    return (
      <>
      <Router>
      <NavBar />
        <Routes>
              <Route exact path="/business" element={ <News key="business" pageSize={this.pageSize} country={this.country} category='business'></News>} />
              <Route exact path="/" element={ <News key="general" pageSize={this.pageSize} country={this.country} category='general'></News>} />
              <Route exact path="/entertainment" element={ <News key="entertainment" pageSize={this.pageSize} country={this.country} category='entertainment'></News>} />
              <Route exact path="/general" element={ <News key="general" pageSize={this.pageSize} country={this.country} category='general'></News>} />
              <Route exact path="/health" element={ <News key="health" pageSize={this.pageSize} country={this.country} category='health'></News>} />
              <Route exact path="/science" element={ <News key="science" pageSize={this.pageSize} country={this.country} category='science'></News>} />
              <Route exact path="/technology" element={ <News key="technology" pageSize={this.pageSize} country={this.country} category='technology'></News>} />
              <Route exact path="/sports" element={ <News key="sports" pageSize={this.pageSize} country={this.country} category='sports'></News>} />
        </Routes>
      </Router>
       
      </>
    )
  }
}
