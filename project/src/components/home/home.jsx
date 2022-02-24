import WordList from "../wordList";
import data from '../data' 
import './home.css'




const Home = () => {
    return ( 
    
  <div className="card_wrap">
<h2 >Список слов</h2>
<WordList  data = {data}/>
</div>
);
}
    
export default Home; 