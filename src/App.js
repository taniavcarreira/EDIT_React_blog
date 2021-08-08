import './App.css';
import Header from './components/Header/header.js'
import Blogpost from './containers/Blogpost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Blogpost />
      </header>
    </div>
  );
}

export default App;
