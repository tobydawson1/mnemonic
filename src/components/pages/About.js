import React from 'react'
import {Link} from 'react-router-dom';

function About (){
  return (
    <div> 
    <h2> About</h2>
    <p> This is the Memory card app made by :</p>
    <ul>
    <li>Toby</li>
    <li>Myrtle</li>
    <li>Jack</li>
    <li>Barri</li>
    </ul>
    <Link className="about" to='/'>Back to the game</Link>
    </div>
  )

}
export default  About;