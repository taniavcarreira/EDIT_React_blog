import React from 'react';
import './App.css';
import Blog from './containers/Blog';
import Hero from './components/Hero/hero';
import Header from './components/Header/header.js'
// import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Blogpost from './containers/Blogpost';

// function App() {
//   return (
//     <BrowserRouter>
//     <div className="App">
//       <Hero/>
//       <Header/>
//       <Route path='/blog' exactcomponent={Blog}/>
//       <Route path='/blogpost' component={Blogpost}/>
//     </div>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <div className="App">
      <Hero/>
      <Header/>
      <Blogpost />
    </div>
  );
}
export default App;
