import { useEffect, useState } from "react";
import './card.css'
function Card({ english, russian, id, transcription }) {
    const [isFront, setIsFront] = useState(true);
    function onClick() {
        setIsFront(!isFront);
    }

    useEffect(() => {
        setIsFront(true);
    }, [id]);
    return (
        <div className="card" onClick={onClick}>
            <p>{isFront ? english : russian} </p>
            <p> {transcription} </p>

        </div>
    );
}

export default Card;