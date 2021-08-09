import React from 'react';
import './App.css';
import Blog from './containers/Blog';
import Hero from './components/Hero/hero';
import Header from './components/Header/header.js'
//  import Blogpost from './containers/Blogpost';

// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <Hero/>
//       <Header/>
//       <Route path='/blog' component={Blog}/>
//       <Route path='/blogpost' exact component={Blogpost}/>
//     </div>
//     </Router>
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
