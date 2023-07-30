import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress: 0
  };

  apiKey = process.env.REACT_APP_NEWS_API;

  pageSize = 9;

  setProgress = (progress) =>
  {
    this.setState({progress: progress});
  }; 

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route exact path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key='general_' color='secondary' pageSize={this.pageSize} country={"in"} category="general" />} />
            <Route exact path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='business_' color='primary' pageSize={this.pageSize} country={"in"} category="business" />} />
            <Route exact path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='entertainment_' color='success' pageSize={this.pageSize} country={"in"} category="entertainment" />} />
            <Route exact path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='health_' color='danger' pageSize={this.pageSize} country={"in"} category="health" />} />
            <Route exact path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='science_' color='info' pageSize={this.pageSize} country={"in"} category="science" />} />
            <Route exact path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='sports_' color='warning' pageSize={this.pageSize} country={"in"} category="sports" />} />
            <Route exact path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='technology_' color='danger' pageSize={this.pageSize} country={"in"} category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

