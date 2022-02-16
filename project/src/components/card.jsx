

function Card ({english, russian, id, transcription}) {
    let isFront = true;
    return (
        <div className="card">
            <p>{isFront ? english : russian } </p>
            <p> {transcription} </p>

        </div>
    );
}

export default Card;