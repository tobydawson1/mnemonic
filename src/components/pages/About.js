import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    
      <div className="About">
        <div class="fadebox1">
        <h3> About</h3>
        <p>After 10 weeks of intensive learning at Makers Academy, every cohort is challenged to flex their coding skills and create something they could never of imagined making a mere 3 months before. Four coders, 2 weeks and endless possibilities, have fun and enjoy our game :)</p>
        <br></br>
        <p> We were all grouped up and put into our chosen categories we wanted to work, in ours was games. So what did we build? </p> 
        <br></br>
        <p>mnemonic is a card game in which all of the cards are laid face down on a surface and two cards are flipped face-up. The object of the game is to turn over all the matching cards, creating a pair. If they're not matching they will flip face down. If they do match they will stay face up and 1 point will be added to the score for matched pairs out of 7.</p>
        <br></br>
        <p>mnemonic also has a progressive feature, which makes the game harder. Once the game starts the cards on the page show for 3 seconds as you progress and get the win tally up, the amount time the cards are shown before hand is descreases. Making the game not as easy. When the reset buttons is push, each of the timings will go back to the defualt settings</p>
        <br></br>
        <br></br>
        <p>Please checkout the repo <p/><p></p>below for more details</p>
        <ul>
          <li><a href="https://github.com/tobydawson1/mnemonic">mnemonic repo</a></li>
        </ul>
        <Link className="about" to='/'>Back to the game</Link>
      </div>
    </div>
  )
}
export default About;