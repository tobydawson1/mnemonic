import React, { useState, useEffect} from 'react'

import Board from './components/board/Board'

import initializDeck from './deck'

export default function App() {
  const [cards, setCards]=useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)

  useEffect(() => {
    resizeBoard()
    setCards(initializDeck())
  }, [])

  const handleClick = (id) => setFlipped([...flipped, id])
  
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
      <h1>mnemonic  mnemonic</h1>
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}/>
    </div>
  )
}