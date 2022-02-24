import WordList from "./wordList";
import data from './data' 
import CardList from "./cardList";
import './main.css'




const Main = () => {
    return ( 
  <div className="card_wrap">
<h2 >Список слов</h2>
<CardList  data = {data}/>
<WordList  data = {data}/>
</div>
  
);
}
    
export default Main; 