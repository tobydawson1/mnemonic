import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    
      <div className="About">
        <div class="fadebox1">
        <h3> About</h3>
        <p>This is a team engineering project build as part of weeks 11/12 at Makers academy.</p>
        <p> We were all grouped up and put into our chosen categories we wanted to work in ours was games. So what did we build? </p> 
        <br></br>
        <p>mnemonic is a card game in which all of the cards are laid face down on a surface and two cards are flipped face-up. The object of the game is to turn over all the matching cards, creating a pair. If they're not matching they will flip face down. If they do match they will stay face up and 1 point will be added to the score for matched pairs out of 7.</p>
        <ul>
          <li><a href="https://github.com/tobydawson1/mnemonic">mnemonic repo</a></li>
        </ul>
        <Link className="about" to='/'>Back to the game</Link>
      </div>
    </div>
  )
}
export default About;