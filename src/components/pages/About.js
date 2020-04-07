import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    
      <div className="About">
        <div class="fadebox1">
        <h3> About</h3>
        <p>This is a team engineering project build as part of weeks 11/12 at Makers academy :</p>
        <ul>
          <li><a href="https://github.com/tobydawson1/mnemonic">mnemonic repo</a></li>
        </ul>
        <Link className="about" to='/'>Back to the game</Link>
      </div>
    </div>
  )
}
export default About;