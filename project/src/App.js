import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Header from './components/header/header';
import Training from "./components/training/training";
import Categories from "./components/categories/categories";


function App() {
  return (
    <Router>
      <div className='list_wrap'>
        <Header/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="/categories" element={<Categories/>}/>
      </Routes>
    </Router>
  )
}


export default App;
