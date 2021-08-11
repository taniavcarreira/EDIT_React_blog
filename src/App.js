import React from 'react';
import './App.css';
import Blog from './containers/Blog';
import Hero from './components/Hero/hero';
import Header from './components/Header/header.js';
import Post from './containers/Post';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Header/>
    <Switch>
      <Route exact path='/blog' component={Blog}/>
      <Route exact path='/post/:postIdUrl' component={Post}/>
    </Switch>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Hero/>
//       <Header/>
//       <Post/>
//     </div>
//   );
// }
export default App;
