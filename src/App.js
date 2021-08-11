import React from 'react';
import './App.css';
import Blog from './containers/Blog';
import Hero from './components/Hero/hero';
import Header from './components/Header/header.js';
import {BrowzeRouter as Router, Route} from 'react-router-dom'
import Post from './containers/Post';

// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <Hero/>
//       <Header/>
//       <Route path='/blog' component={Blog}/>
//       <Route path='/post/:postID' exact component={Post}/>
//     </div>
//     </Router>
//   );
// }

function App() {
  return (
    <div className="App">
      <Hero/>
      <Header/>
      <Post/>
    </div>
  );
}
export default App;
