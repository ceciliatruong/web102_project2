import { useState } from 'react'
import './App.css'
import companions from './companions';
import Flashcard from './components/Flashcard';
function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [count, setCount] = useState(companions.length);
    const generateRandomNumber = () => {
      const newNumber = Math.floor(Math.random() * companions.length);
      setRandomNumber(newNumber);
    }
  return (
    <div className="App">
      <h1>cc's baldur's gate 3 companions quiz!</h1>
      <h3>guess the companion based on their descriptions & use the button to change it!</h3>
      <h4>Number of cards: {count}</h4>
      <Flashcard index={randomNumber}  />
      <button className="next-card-button" onClick={generateRandomNumber}>Next Card</button>
    </div>
  );
}

export default App
