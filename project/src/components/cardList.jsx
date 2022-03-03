import Card from "./card";
import { useState, useEffect } from 'react';


function CardList({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    function onNext() {
        setCurrentIndex(currentIndex + 1)
    }

    function onBack() {
        setCurrentIndex(currentIndex - 1)
    }




    //когда доходим до конца показываем кнопку onBack

    if (currentIndex === data.length) {
        return <button onClick={onBack}>{'<-'}</button>
    } else {

        return (
            <div className="card_list">
                {currentIndex > 0 && <button onClick={onBack}>{'<-'}</button>}
                <Card {...data[currentIndex]} />
                <div> {currentIndex + 1} / {data.length} </div>
                <button onClick={onNext}>{'->'}</button>

            </div>
        );
    }
}



export default CardList;