import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDetail from './Components/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route path="/header">
              <Header />
           </Route>
           <Route path="/country/:countryId">
              <CountryDetail />
           </Route>
           <Route exact path="/">
              <Header />
           </Route>
           <Route path="*">
              <NoMatch />
           </Route>
         </Switch>
      </Router>   
    </div>
  );
}

export default App;
