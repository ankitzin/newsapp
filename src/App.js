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
  render() {
    return (
      <>
      <Router>
      <NavBar />
        <Routes>
              <Route exact path="/business" element={ <News key="business" pageSize={5} country='us' category='business'></News>} />
              <Route exact path="/" element={ <News key="general" pageSize={5} country='us' category='general'></News>} />
              <Route exact path="/entertainment" element={ <News key="entertainment" pageSize={5} country='us' category='entertainment'></News>} />
              <Route exact path="/general" element={ <News key="general" pageSize={5} country='us' category='general'></News>} />
              <Route exact path="/health" element={ <News key="health" pageSize={5} country='us' category='health'></News>} />
              <Route exact path="/science" element={ <News key="science" pageSize={5} country='us' category='science'></News>} />
              <Route exact path="/technology" element={ <News key="technology" pageSize={5} country='us' category='technology'></News>} />
              <Route exact path="/sports" element={ <News key="sports" pageSize={5} country='us' category='sports'></News>} />
        </Routes>
      </Router>
       
      </>
    )
  }
}
