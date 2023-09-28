import './Card.css';
import companions from '../../companions';
function Card(props) {
    const i = props.index
    return(
        <div className='card' onClick={props.onClick}>
            <div className='card-back'>
                <h3>Companion: {companions[i].companion}</h3>
                <img src={companions[i].img}/>
            </div>
            <div className='card-front'>
                <p>This companion's background is {companions[i].background}. <br />Their race is {companions[i].race} and their class is {companions[i].class}.</p>
            </div>
        </div>
    );
}
export default Card;