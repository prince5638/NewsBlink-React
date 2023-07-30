import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize = 10;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact  path='/' element={<News key='general' color='secondary' pageSize={this.pageSize} country={"in"} category="general"/>} />
            <Route exact  path='/business' element={<News key='business' color='primary' pageSize={this.pageSize} country={"in"} category="business"/>} />
            <Route exact  path='/entertainment' element={<News key='entertainment' color='success' pageSize={this.pageSize} country={"in"} category="entertainment"/>} />
            <Route exact  path='/health' element={<News key='health' color='danger' pageSize={this.pageSize} country={"in"} category="health"/>} />
            <Route exact  path='/science' element={<News key='science' color='info' pageSize={this.pageSize} country={"in"} category="science"/>} />
            <Route exact  path='/sports' element={<News key='sports' color='warning' pageSize={this.pageSize} country={"in"} category="sports"/>} />
            <Route exact  path='/technology' element={<News key='technology' color='danger' pageSize={this.pageSize} country={"in"} category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

