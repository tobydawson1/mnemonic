import React, { useState } from 'react';
import Card from './components/card/Card';
import './styles/App.scss';

export default function App() {
  const [flipped, setFlipped] = useState([])

  const handleClick = (id) => setFlipped([...flipped, id])

  return (
    <div className="App">
      <h1>mnemonic</h1>

      <Card
        id={1}
        width={200}
        height={200}
        back={'card_set/back.svg'}
        front={'card_set/yellow.svg'}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
    </div>
  )
}