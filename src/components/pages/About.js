import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    
      <div className="About">
        <div class="fadebox1">
        <h3> About</h3>
        <p> This is the Memory card app made by :</p>
        <ul>
          <li><a href="https://github.com/tobydawson1">Toby</a></li>
          <li><a href="https://github.com/Mrtly">Myrtle</a></li>
          <li><a href="https://github.com/Ovy95">Jack</a></li>
          <li><a href="https://github.com/Barrif13">Barri</a></li>
        </ul>
        <Link className="about" to='/'>Back to the game</Link>
      </div>
    </div>
  )
}
export default About;