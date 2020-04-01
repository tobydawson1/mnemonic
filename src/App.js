import React, { useState } from 'react';
import Card from './components/card/Card';
import './styles/App.scss';

export default function App() {
  const [flipped, setFlipped] = useState([])

  const handleClick = (id) => setFlipped([...flipped, id])

  return (
    <div className="App">
      <h1>mnemonic</h1>

    </div>
  )
}