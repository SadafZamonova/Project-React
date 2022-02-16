import Card from "./card";
import {useState} from 'react';


function CardList(data) {

    return (
        <div className="card_list">
            <button>{'<-'}</button>
            <Card {...data[0]}/>
            <button>{'->'}</button>

        </div>
    );
}



export default CardList;