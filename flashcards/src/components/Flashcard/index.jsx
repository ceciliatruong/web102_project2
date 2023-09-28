import companions from "../../companions";
import "./Flashcard.css";
import Card from '../Card';
import { useState } from "react";
import {CSSTransition} from 'react-transition-group';
// how to 
function Flashcard(props) {
    const [isFront, setIsFront] = useState(true);
    const flipCard = () => {
        setIsFront((front) => !front);
    }
     return(
        <div className="flashcard-container">
            <CSSTransition
                in={isFront}
                timeout={300}
                classNames='flip'
            >
                <Card onClick={flipCard} index={props.index}/>
            </CSSTransition>
        </div>
    );
}
export default Flashcard