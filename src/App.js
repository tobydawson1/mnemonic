import React, { useState, useEffect} from 'react'
import'./styles/App.scss';
import Board from './components/board/Board'
import Gamebar from './components/Gamebar';
import initializeDeck from './helperFunctions/deck'
import youWin from './helperFunctions/win';
import youLost from './helperFunctions/lost';

export default function App() {
  const [cards, setCards]=useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [score, setScore] = useState(0);
  const [wins, setWins] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [losses, setLosses] = useState(0);

  useEffect(() => {
    resizeBoard()
  }, [])
  //
  useEffect(() => {
    preloadImages()
  }, cards)
  
  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  })
  // checks the score and used later in the update scores method
  useEffect(() => {
    checkScore();
  }, [score]); // Only re-run the effect if count changes

  // If statement is the game logic checks if cards are the same
  // and keeps them flipped up 
  // if cards dont match 
  // if solved updates the score 
  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    }
    else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0],id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
        updateScore(score, checkScore);
      } else {
        noMatch();
      }
    }
  }
  // flips cards back if cards don't match 
  const noMatch = () => {
    updateGuesses(wrongGuesses, checkGuesses);
    setTimeout(resetCards, 1000);
  }
  // Updates the right guesses (score out of 7 )
  function updateScore(score, callback) {
    var newScore = score + 1;
    setScore(score + 1);
    callback(newScore);
  }
  
  // Updates the wrong guesses 
  function updateGuesses(wrongGuesses, callback) {
    var newGuesses = wrongGuesses + 1;
    setWrongGuesses(wrongGuesses + 1);
    callback(newGuesses);
  }
  // Checks to see if you matched all the cards using the scord
  // runs the You win Animation 
  // Adds wins to the board 
  // Resets the game
  // Addes win inside the Gamebar
  const checkScore = (score) => {
    if (score>6) {
      youWin();
      setWins(wins + 1);
      setTimeout(newGame, 4000);
    }
  }
  // Takes in the wrong guesses  checks the amount vs the if statement
  // if its greated runs the you Lost which displays the you lost Animation
  // addes losses to the Gameboard
  // Which then resets the game 
  // Adds loses inside the Gamebar
  const checkGuesses = (wrongGuesses) => {
    if (wrongGuesses>6) {
      youLost();
      setLosses(losses + 1);
      setTimeout(newGame, 1000);
    }
  }
  // This sets the new game and every back to reset , Guesses scores etc
  // Also resets score inside the game bar 
  const newGame = () => { 
    setSolved([]);
    setCards(initializeDeck());
    showCards()
    setTimeout(resetCards, 3000)
    setWrongGuesses(0);
    setScore(0);
  }
  // The array contains all the cards 
  const showCards = () => {
    setFlipped([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
  }
  //Loads all the card Images 
  const preloadImages = () => {
    cards.map(card => {
      const src = `/img/${card.type}.jpg`
      new Image().src = src
    })
  }
  //flips back the cards if they're not the same Card Id
  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const sameCardClicked = (id) => flipped.includes(id)
 // Checks the cards id is equal to the other Card Id
  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }
  
  // Created the boards width and height
  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ),
    )
  }

  return (
    <div className="App">
      <div class="fadebox">
      <h1>mnemonic</h1>
      <h2>can you remember where the cards are?</h2>
      {/* if you want to see the animation uncomment this button */}
      {/* <button onClick={youWin}> simulate a win</button>  */}
      <div id="animationhere"></div>
      
      <Gamebar 
        wins={wins}
        losses={losses}
        score={score}
        wrongGuesses={wrongGuesses}
        newGame={newGame}
        //Imported from Gamebar.js inside components folder
      />
      </div>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
        //Imported from Board.js inside components folder
        // Cards is also imported into boards so this contains both card and board
        />
    </div>
    //
  )
}