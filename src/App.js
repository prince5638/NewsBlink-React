import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=>  {
  
  const [progress, setProgress] = useState(0);

  const apiKey = process.env.REACT_APP_NEWS_API;

  const pageSize = 9;

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />
          <Routes>
            <Route exact path='/' element={<News apiKey={apiKey} setProgress={setProgress}  key='general_' color='secondary' pageSize={pageSize} country="in" category="general" />} />
            <Route exact path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key='business_' color='primary' pageSize={pageSize} country="in" category="business" />} />
            <Route exact path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key='entertainment_' color='success' pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path='/health' element={<News apiKey={apiKey} setProgress={setProgress} key='health_' color='danger' pageSize={pageSize} country="in" category="health" />} />
            <Route exact path='/science' element={<News apiKey={apiKey} setProgress={setProgress} key='science_' color='info' pageSize={pageSize} country="in" category="science" />} />
            <Route exact path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} key='sports_' color='warning' pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} key='technology_' color='danger' pageSize={pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
}

export default App;