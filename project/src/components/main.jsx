import WordList from "./wordList";
import data from './data' 
import CardList from "./cardList";




const Main = () => {
    return ( 
        <>
<h2>Список слов</h2>
<CardList  data = {data}/>
<WordList  data = {data}/>

</>   
);
}
    
export default Main; 