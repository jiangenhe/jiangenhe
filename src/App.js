import React from 'react';
import './App.css';
import Header from './components/Header'
import { Switch,Route, BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './routers/Home'
import Publications from './routers/Publications'
import Teaching from './routers/Teaching'
import CV from './routers/CV'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Header home={true} />
            <Home />
          </Route>
          <Route path="/Publications">
            <Header/>
            <Publications />
          </Route>
          <Route path="/Teaching">
            <Header/>
            <Teaching/>
          </Route>
          <Route path="/CV">
            <Header/>
            <CV/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
