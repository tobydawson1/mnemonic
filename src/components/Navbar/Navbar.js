import React from "react";


const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="restart" onClick={() => props.newGame()}>
            new game!
          </button>
        </li>
        <li className="nav-item">
              <div className="wins">wins: {props.wins} </div>         
              <div className="losses">losses: {props.losses} </div>
        </li>
        <li className="nav-item">
            <div className="score">current score: {props.score}/5</div>

            <div className="wrongGuesses">incorrect guesses: {props.wrongGuesses}/5</div>
        </li>
      </ul>
    </div>
  </nav>
);



export default Navbar;