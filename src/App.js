import './App.css';

import {
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  country = 'in'
  pageSize = 9
  
  state = {
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <Router>
      <NavBar />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(this.state.progress)}
      />
        <Routes>
              <Route exact path="/business" element={ <News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country={this.country} category='business'></News>} />
              <Route exact path="/" element={ <News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country={this.country} category='general'></News>} />
              <Route exact path="/entertainment" element={ <News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country={this.country} category='entertainment'></News>} />
              <Route exact path="/general" element={ <News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country={this.country} category='general'></News>} />
              <Route exact path="/health" element={ <News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country={this.country} category='health'></News>} />
              <Route exact path="/science" element={ <News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country={this.country} category='science'></News>} />
              <Route exact path="/technology" element={ <News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country={this.country} category='technology'></News>} />
              <Route exact path="/sports" element={ <News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country={this.country} category='sports'></News>} />
        </Routes>
      </Router>
       
      </>
    )
  }
}
