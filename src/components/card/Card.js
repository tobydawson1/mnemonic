import React from 'react'
import PropTypes from 'prop-types'

// This is imported into the Board and sets up each of the cards
//to have theyre own container div which allows for the css flip to happen
// this is done also by using the Handle click
// This is also where the cards are set with a front card all matched with the back of the card
export default function Card({ 
  handleClick,
  id,
  flipped,
  solved,
  type,
  height, 
  width,
  disabled
}){
  return (<div 
  className={`flip-container ${flipped ? 'flipped' : ''} `}
  style={{
    width, 
    height,
  }}
  onClick = {()=> disabled ? null : handleClick(id)}
  > 
    <div className='flipper'>
      <img alt=""
      style={{
        height, width
      }}
      className={flipped ? 'front': 'back'}
      src={flipped || solved ? `/card_set/${type}.jpg` : `/card_set/back.jpg`}
      />
     </div>  
  </div>
  )
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,

}