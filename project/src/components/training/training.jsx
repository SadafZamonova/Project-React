import data from '../data'
import CardList from "../cardList";
import './training.css'




const Training = () => {
  return (

    <div className="card_wrap">
      <CardList data={data} />
    </div>

  );
}

export default Training; 