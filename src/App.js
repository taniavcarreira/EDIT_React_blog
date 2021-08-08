import './App.css';
import Header from './components/Header/header.js'
import Hero from './components/Hero/hero';
import Blogpost from './containers/Blogpost';
import {BrowzerRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <BrowzerRouter>
    <div className="App">
      <Hero/>
      <Header/>
      <Route path='/' component={Blogpost}/>
    </div>
    </BrowzerRouter>
  );
}

export default App;
