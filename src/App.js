import React, { useState, useEffect} from 'react'

import Board from './components/board'

import initializDeck from './deck'

export default function App() {
  const [cards, setCards]=useState([])
  const [flipped, setFlipped] = useState([])

  useEffect(() => {
    setCards(initializDeck())
  }, [])

  const handleClick = (id) => setFlipped([...flipped, id])
  

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