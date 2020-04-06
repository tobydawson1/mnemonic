import React, { useState, useEffect} from 'react'
import'./styles/App.scss';
import Board from './components/board/Board'
import Navbar from './components/Navbar';
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

  useEffect(() => {
    preloadImages()
  }, cards)

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  })

  useEffect(() => {
    checkScore();
  }, [score]); // Only re-run the effect if count changes

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

  const noMatch = () => {
    updateGuesses(wrongGuesses, checkGuesses);
    setTimeout(resetCards, 1000);
  }

  function updateScore(score, callback) {
    var newScore = score + 1;
    setScore(score + 1);
    callback(newScore);
  }

  function updateGuesses(wrongGuesses, callback) {
    var newGuesses = wrongGuesses + 1;
    setWrongGuesses(wrongGuesses + 1);
    callback(newGuesses);
  }

  const checkScore = (score) => {
    if (score>6) {
      youWin();
      setWins(wins + 1);
      setTimeout(newGame, 4000);
    }
  }

  const checkGuesses = (wrongGuesses) => {
    if (wrongGuesses>6) {
      youLost();
      setLosses(losses + 1);
      setTimeout(newGame, 1000);
    }
  }

  const newGame = () => { 
    setSolved([]);
    setCards(initializeDeck());
    showCards()
    setTimeout(resetCards, 3000)
    setWrongGuesses(0);
    setScore(0);
  }

  const showCards = () => {
    setFlipped([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
  }

  const preloadImages = () => {
    cards.map(card => {
      const src = `/img/${card.type}.jpg`
      new Image().src = src
    })
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }
  
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
      <Navbar 
        wins={wins}
        losses={losses}
        score={score}
        wrongGuesses={wrongGuesses}
        newGame={newGame}
      /></div>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
        />
    </div>
  )
}