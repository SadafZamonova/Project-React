import {useState} from 'react'


function Word({ english, russian, id, transcription })  {
 const [isEditShow, changeEditShow] = useState(false)
 const [word, setWord] = useState ({english, russian, id, transcription})

 function onClick() {
    changeEditShow(true);   
 }

 function onClickCancel(){
    setWord({ russian, english, transcription})
    changeEditShow(false)
 }

 function onSave (){
    changeEditShow(false)
 }

 function onChangeEnglish(evt) {
     setWord( {
         english: evt.target.value,
         russian: word.russian,
         transcription: word.transcription,
     });
 }

 function onChangeRussian (evt) {
    setWord({
        english: word.english,
        russian: evt.target.value,
        transcription: word.transcription,
    });
}

function onChangeTranscription(evt) {
    setWord( {
        english: word.english,
        russian: word.russian,
        transcription:  evt.target.value,
    });
}
 if (!isEditShow) {
    return (
        <tr>
            <td>{word.english}</td>
            <td>{word.transcription}</td>
            <td>{word.russian}</td>
            <td>
                <button onClick={onClick}>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    ) ;
 } else {
     return(
         <tr>
             <td> <input value={word.english} onChange={onChangeEnglish}/></td>
             <td><input value={word.transcription} onChange={onChangeTranscription} /></td>
             <td> <input value={word.russian} onChange={onChangeRussian}/></td>
             <td>
                 <button onClick={onSave}>Save</button>
                 <button onClick={ onClickCancel}>Cancel</button>
             </td>

         </tr>

     );
 }

}


export default Word; 