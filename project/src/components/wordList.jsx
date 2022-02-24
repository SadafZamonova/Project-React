import data from './data'
import './wordList.css'
import Word from './word'

const WordList = () => {
return (
    <table className ='table'>
        <thead >
            <tr>
            <td>слово</td>
            <td>транскрипция</td>
            <td>перевод</td>
            <td>кнопки</td>
            </tr>
        </thead>
        <tbody >
        {data.map((item) => (<Word key = {item.id} {...item} />
        ))}
        </tbody>
    </table>
)
}





export default WordList;