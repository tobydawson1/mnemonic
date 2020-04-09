import React, { useState, useEffect } from 'react'
import './styles/App.scss';
import Board from './components/board/Board'
import Gamebar from './components/Gamebar';
import initializeDeck from './helperFunctions/deck'
import youWin from './helperFunctions/win';
import youLost from './helperFunctions/lost';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [score, setScore] = useState(0);
  const [wins, setWins] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [losses, setLosses] = useState(0);
  let gameTimer;


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
      setFlipped([flipped[0], id])
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
    if (score > 6 ) {
      youWin();
      setWins(wins + 1);
      setTimeout(newGame, 4000);
    }
  }

  const checkGuesses = (wrongGuesses ,timeleft ) => {
    if( timeleft <= 0 )
    { youLost();
      setLosses(losses + 1);
      setTimeout(newGame, 3000);
    } 
    else if (wrongGuesses > 2 ) {
      youLost();
      setLosses(losses + 1);
      setTimeout(newGame, 3000);
    }
    setTimeout(newGame, 3000);
  }

  const newGame = () => {
    clearTimeout(gameTimer); 
    startTimer(10)
    setSolved([]);
    setCards(initializeDeck());
    showCards()
    setWrongGuesses(0);
    setScore(0);
  }

  const showCards = () => {
    if (wins<4) {
      setFlipped([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
      setTimeout(resetCards, 3000)
    } else if (wins<8) {
      setFlipped([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
      setTimeout(resetCards, 1500)
    } else {
    }
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

  const startTimer = (nbOfSeconds) => {
    window.startDate = Date.now()
    let timerfunction = () => {
      var timeEllapsed = Date.now() - window.startDate;
      if(timeEllapsed > nbOfSeconds * 1000){
        document.getElementById("countdown").innerHTML = "Finished";
      } else {
        var timeleft = nbOfSeconds - timeEllapsed / 1000;
        document.getElementById("countdown").innerHTML = Math.round(timeleft) + " seconds remaining";
        gameTimer = setTimeout(timerfunction, 25);
        console.log(window.startDate)}
    }
    gameTimer = setTimeout(timerfunction, 25);
  }


  return (

    <Router>
      <Route exact path="/" render={props => (
        <React.Fragment>
          <div className="App">
            <div class="fadebox">
              <h1>mnemonic</h1>
              <h2>can you remember where the cards are?</h2>
              <div id="animationhere"></div>
              <div id="countdown"></div>
              <Gamebar
                wins={wins}
                losses={losses}
                score={score}
                wrongGuesses={wrongGuesses}
                newGame={newGame}
              />
            </div>
            
            <Board
              dimension={dimension}
              cards={cards}
              flipped={flipped}
              handleClick={handleClick}
              disabled={disabled}
              solved={solved}
            />
          </div>
        </React.Fragment>
      )} />
      <Route exact path="/about" component={About} />
    </Router>
  );
}
