//import * as ReactBootStrap from 'react-bootstrap';
import './App.css';
import Main from './components/main';
import Header from './components/header';
//import WordList from './components/wordList';
import { BrowserRouter as Router,
 } from 'react-router-dom';

function App() {
  return (
    <Router>
  <div className='list_wrap'>
     <Header/>
      <Main/>

      
    </div>
    </Router>
  )
}


export default App;
